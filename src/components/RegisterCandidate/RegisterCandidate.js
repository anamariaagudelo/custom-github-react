import React from 'react';
import Aux from '../../hoc/Aux';
import './RegisterCandidate.css';
import Button from 'react-bootstrap/Button';

class RegisterCandidate extends React.Component {
    state = {
        name: '',
        lastName: '',
        identification: '',
        birtDate: '',
        email: '',
        userGithub: '',
    }

    onRegisterCookie = ()=>{

    }

    render() {
        return (
            <Aux>
                <div  className="RegisterCandidate">Cookies:</div>
                <div className="RegisterCandidate">
                    <h4>REGISTER CANDIDATE INFORMATION</h4>
                    <form>
                        <div>
                            <label>Name</label>
                            <div >
                                <input inputtype="FormCandidate" type="text" name="name" placeholder="Name" />
                            </div>
                        </div>
                        <div >
                            <label>Last Name</label>
                            <div>
                                <input type="text" name="lastName" placeholder="Last Name" />
                            </div>
                        </div>
                        <div >
                            <label>Identification</label>
                            <div>
                                <input type="text" name="identification" placeholder="Id" />
                            </div>
                        </div>
                        <div >
                            <label>BIrt Date</label>
                            <div>
                                <input type="text" name="birtDate" placeholder="dd/mm/yyyy" />
                            </div>
                        </div>
                        <div >
                            <label>Email</label>
                            <div>
                                <input type="email" name="email" placeholder="E-mail" />
                            </div>
                        </div>
                        <div >
                            <label>User Github</label>
                            <div>
                                <input type="text" name="userGithub" placeholder="User Github" />
                            </div>
                        </div>
                        <br/>
                        <Button >REGISTER</Button>
                    </form>
                </div>
            </Aux>
        )
    }

    handleSubmit = () => {
        
    }

}

export default RegisterCandidate;