import { useState } from 'react';
import { Container, Text, useStyles } from './styles'
import { Button, Card, CardBody, UncontrolledCollapse } from 'reactstrap'
import ReactJson from 'react-json-view';
import data from '../../utils/resultOne.json'
import { KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import { useInputValue } from '../../hooks/useInputValue';
import exportToJson from '../../utils/exportUtils'



export const ProblemTwoView = () => {
    const [hour, setHour] = useState<Date | null>(new Date())
    const [timeZone, setTimeZone] = useState<String>('');
    const [dataInfo, setDataInfo] = useState(null);
    const [loading, setLoading] = useState(false);
    const classes = useStyles();
    const date = useInputValue(hour);

    const handleTime = async (e: any) => {
        e.preventDefault()
        const time = date.value.getHours() + ':' + date.value.getMinutes() + ':' + date.value.getSeconds();


        const payload = { time, timeZone };

        fetch('http://localhost:4000/time', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(res => res.json())
            .then((response) => handleResponse(response))


    }

    const handleChange = (e: any) => {
        setTimeZone(e.target.value);
    };

    const handleResponse = (res: any) => {

        let response = res

        exportToJson(response);
        setDataInfo(response);
        window.setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 300);
    };

    const renderResponse = (dataInfo: any) => (
        <>
            <ReactJson style={{ textAlign: 'left' }} theme="brewer" src={dataInfo} />
        </>
    );

    return (
        <div>
            <Container className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-5 w-75 text-center m-auto">
                        <Button className="mx-auto button" color="danger" id="toggler" style={{ marginBottom: '1rem' }}>
                            Problema 2
                        </Button>
                        <UncontrolledCollapse className="m-auto card-container" toggler="#toggler">
                            <Card className="my-3 card">
                                <CardBody className="card-body">
                                    <Text>
                                        Desarrollo de un servicio REST, que pueda ser consumido por un WebApp.
                                        Este servicio REST debe permitir, mediante un comando POST, obtener la hora en formato UTC de 2 parámetros enviados al servicio: hora y timetimeZone (por ejemplo: dato1=18:31:45, dato2=-3), deberán devolver la hora calculada, en un archivo json con el siguiente formato:
                                    </Text>
                                    <ReactJson style={{ textAlign: 'left' }} theme="monokai" src={data} />
                                    <Text> El servicio puede publicarlo donde estime conveniente. Si bien el servicio no es necesario adjuntarlo, si se requiere se entregue el fuente tanto del servicio publicado como del cliente que consume tal servicio, para efectos de visualizar el trabajo realizado. Da lo mismo en que lenguaje se desarrolle el servicio, se sugiere utilizar Java como sistema. Encualquier caso, deberá indicar el lenguaje utilizado.</Text>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-5 w-75 text-center m-auto">
                        <Button className="mx-auto button" color="danger" id="togglerDos" style={{ marginBottom: '1rem' }}>
                            Solucion:
                        </Button>
                        <UncontrolledCollapse className="m-auto" toggler="#togglerDos">
                            <Card className="my-3 card">
                                <CardBody className="card-body">
                                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                        <KeyboardTimePicker
                                            label="Hora:"
                                            className={classes.datePicker}
                                            {...date} />
                                    </MuiPickersUtilsProvider>
                                </CardBody>
                                <CardBody className="card-body">
                                    <FormControl required className={classes.formControl}>
                                        <InputLabel htmlFor="timeZone-native-required">Zona Horario</InputLabel>
                                        <Select
                                            value={timeZone}
                                            onChange={handleChange}
                                            inputProps={{
                                                id: 'timeZone-native-required',
                                            }}
                                        >
                                            <MenuItem aria-label="None" value="" />
                                            <MenuItem value={-12}>UTC-12</MenuItem>
                                            <MenuItem value={-11}>UTC-11</MenuItem>
                                            <MenuItem value={-10}>UTC-10</MenuItem>
                                            <MenuItem value={-9}>UTC-9</MenuItem>
                                            <MenuItem value={-8}>UTC-8</MenuItem>
                                            <MenuItem value={-7}>UTC-7</MenuItem>
                                            <MenuItem value={-6}>UTC-6</MenuItem>
                                            <MenuItem value={-5}>UTC-5</MenuItem>
                                            <MenuItem value={-4}>UTC-4</MenuItem>
                                            <MenuItem value={-3}>UTC-3</MenuItem>
                                            <MenuItem value={-2}>UTC-2</MenuItem>
                                            <MenuItem value={-1}>UTC-1</MenuItem>
                                            <MenuItem value={1}>UTC+1</MenuItem>
                                            <MenuItem value={2}>UTC+2</MenuItem>
                                            <MenuItem value={3}>UTC+3</MenuItem>
                                            <MenuItem value={4}>UTC+4</MenuItem>
                                            <MenuItem value={5}>UTC+5</MenuItem>
                                            <MenuItem value={6}>UTC+6</MenuItem>
                                            <MenuItem value={7}>UTC+7</MenuItem>
                                            <MenuItem value={8}>UTC+8</MenuItem>
                                            <MenuItem value={9}>UTC+9</MenuItem>
                                            <MenuItem value={10}>UTC+10</MenuItem>
                                            <MenuItem value={11}>UTC+11</MenuItem>
                                            <MenuItem value={12}>UTC+12</MenuItem>
                                        </Select>
                                    </FormControl>
                                </CardBody>
                                <CardBody className="card-body">
                                    <Button className="mx-auto button" color="danger" onClick={handleTime} id="forApi" style={{ marginBottom: '1rem' }}>
                                        CONSUMIR API
                                </Button>
                                </CardBody>

                                {dataInfo && renderResponse(dataInfo)}
                            </Card>
                        </UncontrolledCollapse>
                    </div>
                </div>
            </Container>
        </div>
    )
}
