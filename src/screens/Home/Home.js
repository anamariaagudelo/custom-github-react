import React from 'react';
import Aux from '../../hoc/Aux';
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'

class Home extends React.Component {
    render() {
        return (
            <Aux>
                <Container>
                <Jumbotron>
                    <div >
                        <h1>RESUMEN</h1>
                        <h2>aplicación Web que personaliza el uso de Github.</h2>
                        <p>A través de este sistema se espera poder conocer la información relevante de cualquier usuario de Github. Se pretende acceder a todas estas funcionalidades a través de una sola página</p>
                    </div>
                </Jumbotron>
                </Container>
            </Aux >
        );
    }
}

export default Home;