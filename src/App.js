import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Progress,extendTheme, ChakraProvider } from '@chakra-ui/react';
//redux
import { current } from "redux/auth/auth-operations"; 
import { getLoadingUserStatus,getToken } from "redux/auth/auth-selectors";

import Navbar from "./components/Navbar/Navbar";
import UserRoutes from "./UserRoutes";


const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
};


const theme = extendTheme({ colors });

export default function App() {
  
  const dispatch = useDispatch();
  const isLoadingUser = useSelector(getLoadingUserStatus);
  const token = useSelector(getToken)


  useEffect(() => {
    if(!token) {
      return;
    }
    dispatch(current());
  }, [dispatch, token])

  return (
      <div>
        {isLoadingUser ? <Progress colorScheme='green' height='32px' value={20} /> : (
          <>
          <ChakraProvider theme={theme}>
            <Navbar />
            <UserRoutes />
          </ChakraProvider>
          </>
        )}
      </div>
  );
};
