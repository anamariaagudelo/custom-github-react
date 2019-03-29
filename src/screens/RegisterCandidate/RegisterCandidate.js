import React from 'react';
import Aux from '../../hoc/Aux'
import RegisterCandidateForm from '../RegisterCandidate/RegisterCandidateForm'


class RegisterCandidate extends React.Component {

    render() {
        return (
            <Aux>
                <RegisterCandidateForm></RegisterCandidateForm>
            </Aux>
        )
    }

    handleSubmit = () => {

    }

}

export default RegisterCandidate;