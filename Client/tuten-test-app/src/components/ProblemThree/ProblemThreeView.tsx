import { Container, Text, useStyles } from './styles'
import { Button, Card, CardBody, UncontrolledCollapse } from 'reactstrap'
import { Typography } from '@material-ui/core';
import { Login } from '../Login/Login';



export const ProblemThreeView = () => {

    const classes = useStyles();

    return (
        <div>
            <Container className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-5 w-75 text-center m-auto">
                        <Button className="mx-auto button" color="danger" id="toggler" style={{ marginBottom: '1rem' }}>
                            Problema 3
                        </Button>
                        <UncontrolledCollapse className="m-auto card-container" toggler="#toggler">
                            <Card className="my-3 card">
                                <CardBody className="card-body">
                                    <Text className={classes.root}>
                                        <Typography className={classes.textStyle} variant="body1" gutterBottom>
                                            <Typography variant="h6" gutterBottom>
                                                Parte I:
                                            </Typography>
                                            Desarrollar un site implemente un acceso login, haciendo uso de la información contenida en la
                                            especificación de la API (via Swagger) ubicada en: https://dev.tuten.cl/TutenREST/#!/user/login

                                            Datos a utilizar:

                                            <Typography variant="body2" gutterBottom>
                                                URL: https://dev.tuten.cl/TutenREST/rest/user/testapis%40tuten.cl
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                app: APP_BCK
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                user: testapis@tuten.cl
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                pass: 1234
                                            </Typography>


                                            La especificación de la API indicará de que tipo es el parámetro para se utilizado en la invocación
                                            del servicio.
                                            Nota Importante: Cuando se prueba desde ciertas herramientas (Postman por ejemplo), a veces
                                            requiere agregar un parámetro adicional de header para que la llamada se ejecute OK, esto, para
                                            todas las APIs que se llamen
                                            Accept: application/json
                                            <Typography variant="h6" gutterBottom>
                                                Parte II:
                                            </Typography>
                                            Con el token obtenido de la parte I, se debe obtener un listado de datos a mostrar en un
                                            datagrid u otro elemento que estime conveniente, referentes al user contacto@tuten.cl.
                                            <Typography variant="body2" gutterBottom>
                                                La especificación de la API se encuentra ubicada en: https://dev.tuten.cl/TutenREST/#!/user/bookings
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                Datos a utilizar:
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                API: URL: https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                adminemail: testapis@tuten.cl
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                email: contacto@tuten.cl
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                current: true
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                app: APP_BCK
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                token: (usar el token obtenido en la parte I)
                                            </Typography>

                                            Los campos que se necesitan mostrar en la grilla son los siguientes:
                                            <Typography variant="body2" gutterBottom>
                                                a) bookingId (Con el Título "BookingId")
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                b) firstName y LastName (Con el Título "Cliente")
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                c) bookingTime (Con el Título "Fecha de Creación")
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                d) streetAddress (Con el Título "Dirección")
                                            </Typography>
                                            <Typography variant="body2" gutterBottom>
                                                e) bookingPrice (Con el Título "Precio")
                                            </Typography>
                                            Esta grilla DEBE poder mostrar todos los registros obtenidos. Además de lo anterior, debe existir
                                            alguna opción de filtrado, por el campo bookingId y bookingPrice, y que permita mostrar
                                            dinamicamente solo las opciones que corresponden al filtro seleccionado (like y/o {'>'}=, {'<'}=)."
                                        </Typography>
                                    </Text>
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
                                    <Login />
                                </CardBody>
                                {/* {dataInfo && renderResponse(dataInfo)} */}
                            </Card>
                        </UncontrolledCollapse>
                    </div>
                </div>
            </Container>
        </div >
    )
}