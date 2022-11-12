//redux
import { useDispatch, useSelector } from "react-redux";
import  {EmailIcon} from '@chakra-ui/icons';
import { Box,Button,Text } from '@chakra-ui/react';

import { logout } from "redux/auth/auth-operations";
import { getUser } from "redux/auth/auth-selectors";



export default function UserMenu() {
    const dispatch = useDispatch();
    const user = useSelector(getUser);
    
    const onLogout = () => {
        dispatch(logout());
    }

  return (
    <Box 
    display='flex'
    alignItems='center'
    mw='10%'
    mb={2}
    py={12}>
      {user && <EmailIcon w={7} h={7} color='green.500' />}
      {user && <Text fontSize='40px' color='tomato' as='b' ml='20px'>{user.email}</Text>}
      <Button colorScheme='red' ml='40px' mr='40px' onClick={onLogout}>Logout</Button>
    </Box>
  );
};
