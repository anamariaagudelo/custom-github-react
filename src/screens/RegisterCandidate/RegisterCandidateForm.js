import React from 'react';
import Aux from '../../hoc/Aux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const RegisterCandidateForm =(
{
        name,
        lastName,
        identification,
        birtDate,
        email,
        userGithub,
})=>{
        return (
            <Aux>
                <Container>
                <Card>
                <Card.Header className="Center">REGISTER CANDIDATE INFORMATION</Card.Header>
                <div >
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Name" />
                        </Form.Group>
                        <Form.Group controlId="lastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Last Name" />
                        </Form.Group>
                        <Form.Group controlId="id">
                            <Form.Label>Identification</Form.Label>
                            <Form.Control type="text" placeholder="Id" />
                        </Form.Group>
                        <Form.Group controlId="birtDate">
                            <Form.Label>Birt Date</Form.Label>
                            <Form.Control type="text" placeholder="dd/mm/yyyy" />
                        </Form.Group>
                        <Form.Group controlId="email">
                            <Form.Label>E-mail</Form.Label>
                            <Form.Control type="email" placeholder="E-mail" />
                        </Form.Group>
                        <Form.Group controlId="userGitHub">
                            <Form.Label>User Github</Form.Label>
                            <Form.Control type="text" placeholder="User Github" />
                        </Form.Group>
                        <Button  >REGISTER</Button>
                    </Form>
                </div>
                </Card>
                </Container>
                
            </Aux>
        )
    }


export default RegisterCandidateForm;