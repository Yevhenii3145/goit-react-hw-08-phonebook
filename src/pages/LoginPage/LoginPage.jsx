import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Box, Heading } from '@chakra-ui/react';
import { login } from "../../redux/auth/auth-operations";
import { isLogin } from "redux/auth/auth-selectors";
 // components
import LoginForm from '../../components/LoginForm/LoginForm';


export default function LoginPage() {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(isLogin);

  const onLogin = (data) => {
      dispatch(login(data));
  };
  if(isUserLogin) {
    return <Navigate to="/contacts" />
  };
    
    return (
      <Box w='1200px' ml='auto' mr='auto' mt="40px"   className="container">
        <Heading as='h2' size='3xl' noOfLines={2} mb='40px' color='blue'>Login page</Heading>
        <LoginForm onSubmit={onLogin} />
      </Box>
    );
  };