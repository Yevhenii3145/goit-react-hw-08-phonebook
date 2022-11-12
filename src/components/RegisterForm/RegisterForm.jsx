import { useMemo } from "react";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { Button } from '@chakra-ui/react';

import useForm from '../../shared/hooks/useForm';
import TextField from "../../shared/components/TextField/TextField";
import initialState from "./initialState";
import fields from "./fields";

const RegisterForm = ({onSubmit}) => {
    const {state, handleChange, handleSubmit} = useForm({initialState, onSubmit});

    const nameId = useMemo(()=> nanoid(), []);
    const emailId = useMemo(()=> nanoid(), []);
    const passwordId = useMemo(()=> nanoid(), []);

    const {name, email, password} = state;

    return (
        <form onSubmit={handleSubmit}>
            <TextField id={nameId} value={name} handleChange={handleChange} {...fields.name} />
            <TextField id={emailId} value={email} handleChange={handleChange} {...fields.email} />
            <TextField id={passwordId} value={password} handleChange={handleChange} {...fields.password} />
            <Button colorScheme='teal' variant='outline' size='lg' type="submit" >Register</Button>
        </form>
    );
};

export default RegisterForm;

RegisterForm.defaultProps = {
    onSubmit: () => {}
};

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};
