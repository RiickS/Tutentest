import { Grid, IconButton, InputAdornment, MenuItem, TextField } from '@material-ui/core';
import { useEffect, useState } from 'react';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useFilter } from '../../hooks/useFilter';
import { useInputValue } from '../../hooks/useInputValue';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { consumeAPI } from '../../utils/request';
import { ListOfBooking } from '../ListofBooking/Listofbooking';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { MySnackError } from '../MySnackError/MySnackError';
import { useStyles } from './styles';
import { Button, CardBody } from 'reactstrap';



export const Login = () => {

    const classes = useStyles();
    const email = useInputValue('testapis@tuten.cl');
    const password = useInputValue('1234');
    const [token, setToken] = useLocalStorage('token', null);
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const app = 'APP_BCK';
    const fecthUrl = 'https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true';
    const url = 'https://dev.tuten.cl:443/TutenREST/rest/user';
    const [fectchData, setFetchData] = useState([]);
    const { query, priceComparation, price, filteredData } = useFilter(fectchData);


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        let response = await consumeAPI(
            `${url}/${unescape(email.value).replace(/@/g, '%40')}`,
            'PUT',
            { password: password.value, app },
            {}
        );

        handleResponse(response);
    };

    const fecthData = async () => {
        let response = await consumeAPI(fecthUrl, 'GET', { adminemail: email.value, token, app }, {});

        if (response.message) {
            window.localStorage.removeItem('token');
            return;
        }

        let data = response.data.map((elem: any) => ({
            bookingId: elem.bookingId,
            firstName: elem.locationId.tutenUser.firstName,
            LastName: elem.locationId.tutenUser.lastName,
            bookingTime: elem.bookingTime,
            streetAddress: elem.locationId.streetAddress,
            bookingPrice: elem.bookingPrice
        }));

        setFetchData(data);
    };

    const logout = () => {
        setToken(null);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleClose = (e: any, reason: any) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const handleResponse = (response: any) => {
        if (response.message) {
            setMessage(response.message);

            return;
        }

        if (!response.data.sessionTokenBck) {

            setMessage('No se ha podido iniciar sesión');
            return;
        }

        setToken(response.data.sessionTokenBck);
    };

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            setToken(window.localStorage.getItem('token'));
        }
    }, []);

    useEffect(
        () => {
            fecthData();
        },
        [token]
    );


    return !token ? (
        <>
            <MySnackError open={open} message={message} handleClose={handleClose} />
            <ValidatorForm className={classes.from} onError={(errors) => console.log(errors)} onSubmit={handleSubmit}>
                <TextValidator
                    className={classes.input}
                    label="Email"
                    onChange={email.onChange}
                    name="email"
                    value={email.value}
                    validators={['required', 'isEmail']}
                    errorMessages={['Debe introducir su email', 'Debe introducir un email']}
                />
                <TextValidator
                    className={classes.input}
                    label="Password"
                    onChange={password.onChange}
                    name="password"
                    value={password.value}
                    validators={['required']}
                    errorMessages={['Debe introducir su email']}
                    type={showPassword ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <Button className="mx-auto button" variant="contained" type="submit" color="danger" id="forApi" style={{ marginBottom: '1rem' }}>
                    INICIAR SESION
                </Button>
            </ValidatorForm>
        </>
    ) : (
        <>
            <Grid className={classes.grid} container spacing={2}>
                <Grid className={classes.itemSpecial} item xs={12} md={6}>
                    <TextField {...query} id="bookingId-filter" label="BookingId" margin="normal" type="number" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className={classes.container}>
                        <TextField
                            className={classes.textField}
                            select
                            margin="normal"
                            {...priceComparation}
                            SelectProps={{
                                MenuProps: {
                                    className: classes.menu
                                }
                            }}
                            label="Filtro"
                        >
                            <MenuItem value={1}>Mayor que</MenuItem>
                            <MenuItem value={2}>Manor que</MenuItem>
                        </TextField>
                        <TextField
                            {...price}
                            className={classes.textField}
                            margin="normal"
                            id="bookingId-filter"
                            label="Precio"
                            type="number"
                        />
                    </div>
                </Grid>
            </Grid>
            <ListOfBooking data={filteredData} />
            <CardBody className="card-body">
                <Button className="mx-auto button" variant="contained" type="submit" onClick={logout} color="danger" id="forApi" style={{ marginBottom: '1rem' }}>
                    CERRAR SESION
                </Button>
            </CardBody>

        </>
    );
};