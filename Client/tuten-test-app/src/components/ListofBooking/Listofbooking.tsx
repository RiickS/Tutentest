import { Box, Typography } from '@material-ui/core';
import { useStyles, MyPaperDark } from './styles';

export const ListOfBooking = ({ data }: any) => {
    const classes = useStyles();

    return (
        <Box>
            {data.map((elem: any, index: any) => (
                <MyPaperDark className={classes.paper} key={index}>
                    <Typography variant="body1">
                        <b>BookingId:</b> {elem.bookingId}
                    </Typography>
                    <Typography variant="body1">
                        <b>Cliente:</b> {elem.firstName} {elem.LastName}
                    </Typography>
                    <Typography variant="body1">
                        <b>Fecha de Creación:</b> {elem.bookingTime}
                    </Typography>
                    <Typography variant="body1">
                        <b>Dirección:</b> {elem.streetAddress}
                    </Typography>
                    <Typography variant="body1">
                        <b>Precio:</b> {elem.bookingPrice}
                    </Typography>
                </MyPaperDark>
            ))}
        </Box>
    );
};