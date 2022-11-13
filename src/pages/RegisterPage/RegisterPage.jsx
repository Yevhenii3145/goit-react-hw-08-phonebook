import { useDispatch, useSelector } from 'react-redux';
import {Navigate} from "react-router-dom";
import { Box, Heading } from '@chakra-ui/react';
import { signup } from 'redux/auth/auth-operations';
import { isLogin } from 'redux/auth/auth-selectors';
// components
import RegisterForm from '../../components/RegisterForm/RegisterForm';


export default function RegisterPage() {
    const dispatch = useDispatch();
    const isUserLogin = useSelector(isLogin);
    
    const onRegister = (data) => {
        dispatch(signup(data));
    };

    if(isUserLogin) {
      return <Navigate to="/contacts" /> 
    };
   
    return (
      <Box w='1200px' ml='auto' mr='auto' mt="40px"   className="container">
        <Heading as='h2' size='3xl' noOfLines={2} mb='40px' color='green'>Register page</Heading>
        <RegisterForm onSubmit={onRegister}/> 
      </Box>
    );
  };