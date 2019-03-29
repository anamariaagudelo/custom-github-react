import React from 'react';
import Aux from '../../hoc/Aux';
import './SearchGithubUser.css'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


const SearchGithubUser =()=>{
        return (
            <Aux>
                <Container>
                    <Form>
                    <input type="text" name="SearGitHub" placeholder="Search User Name" />
                    <button>Search</button>
                    </Form>
                    
                       
        
                    <br></br>
                    <div>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Description</th>
                                    <th>Url Git</th>
                                    <th>Default branchs</th>
                                    <th>Language</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                </tr>
                            </tbody>
                        </Table>

                    </div>
                </Container>
            </Aux>
        )
    }


export default SearchGithubUser;