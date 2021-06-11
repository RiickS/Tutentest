import { Container, Subtitle, Title } from './styles'
import { Button } from 'reactstrap';

export const HomeView = () => {
    return (
        <div>
            <Container className="container-fluid">
                <div className="row">
                    <Title className="col-12 my-5">
                        <p className="text-center m-auto">¡BIENVENIDO A TUTEN TEST!</p>
                    </Title>
                </div>
                <div className="row">
                    <Subtitle className="col-12">
                        <p className="text-center m-auto mb-3 mt-2">Ejercicios:</p>
                    </Subtitle>
                    <div className="col-4 text-center">
                        <a href="/problema1"><Button outline size="lg" color="danger">PROBLEMA 1</Button>{' '}</a>
                    </div>
                    <div className="col-4 text-center">
                        <a href="/problema2"><Button outline size="lg" color="danger">PROBLEMA 2</Button>{' '}</a>
                    </div>
                    <div className="col-4 text-center">
                        <a href="/problema3"><Button outline size="lg" color="danger">PROBLEMA 3</Button>{' '}</a>
                    </div>
                </div>
                <div className="row text-center my-5">
                    <Subtitle className="col-12">
                        <p className="text-center m-auto my-3">Tecnologías usadas:</p>
                    </Subtitle>
                    <div className="col-12">
                        <Button color="danger" size="lg" disabled className="m-2">REACT</Button>{' '}
                        <Button color="danger" size="lg" disabled className="m-2">REACT-ROUTER</Button>{' '}
                        <Button color="danger" size="lg" disabled className="m-2">NEST</Button>{' '}
                    </div>
                    <div className="col-12 my-3">
                        <Button color="danger" size="lg" disabled className="m-2">STYLED-COMPONENTS</Button>{' '}
                        <Button color="danger" size="lg" disabled className="m-2">REACTSTRAP</Button>{' '}
                        <Button color="danger" size="lg" disabled className="m-2">TYPESCRIPT</Button>{' '}
                    </div>
                </div>
            </Container>
        </div>
    )
}