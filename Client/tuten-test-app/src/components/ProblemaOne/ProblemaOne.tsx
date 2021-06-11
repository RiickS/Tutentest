
import { Container, Text, useStyles } from './styles'
import { Button, Card, CardBody, UncontrolledCollapse } from 'reactstrap'
import { Typography } from '@material-ui/core'



export const ProblemaOne = () => {

    const classes = useStyles()
    return (
        <div>
            <Container className="container-fluid">
                <div className="row">
                    <div className="col-12 mt-5 w-75 text-center m-auto">
                        <Button className="mx-auto button" color="danger" id="toggler" style={{ marginBottom: '1rem' }}>
                            Problema 1
                        </Button>
                        <UncontrolledCollapse className="m-auto card-container" toggler="#toggler">
                            <Card className="my-3 card">
                                <CardBody className="card-body">
                                    <Text>
                                        Describe (lo más detalladamente posible) cómo crearías un stack Postgres/Java8/React. Se espera una descripción de protocolos y componentes.
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
                                    <Typography className={classes.Parragraph} variant="body2" gutterBottom>
                                        Para el frontend con React, en primer lugar usaria componentes funcionales, debido a las ventajas que traen,como por ejemplo los hook; que permiten a mis componentes funcionales hacer casi todo lo que puede hacer un componente como clase, hooks personalizados, ademas que por lo general, tienen mejor fluidez visual, se logra entender mas claro que los component de clases. Ademas Webpack compila más rápidamente los componentes funcionales. Exportaria dichos componentes de manera nombrada para mantener al máximo la coherencia en el código. El estilado de componentes lo haría mediante el uso de la biblioteca Style Components (CSS-in-JS). Definiria las rutas dentro de la app usaría React Router. En última instancia las peticiones las llevaría a cabo usando la librería Axios junto con el uso de async await, y usaria fetch para aquellos casos donde sea necesario especificar mas facilmente los headers en algunos metodos (como POST) para evadir inconvenientes de CORS.
                                    </Typography>
                                    <Typography className={classes.Parragraph} variant="body2" gutterBottom>
                                        Para el desarrollo del backend se usaria el framework Java: Spring de Java, craria la estructura base con Java Spring Boot. Usaría el ORM: Hibernet para la capa de persistencia de datos y la gestionaria con Spring Data JPA Repository. Defeniria los modelos con Hibernet, para que asi puedan ser creadas las tablas en la base de datos. Una vez creados los modelos, sobre las tablas definiria las operaciones de base de datos una vez creado los respectivos repositorios. En última instancia se crean los end points usando Spring Rest.
                                    </Typography>
                                </CardBody>
                            </Card>
                        </UncontrolledCollapse>
                    </div>
                </div>
            </Container>
        </div>
    )
}
