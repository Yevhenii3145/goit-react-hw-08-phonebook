import {NavLink} from "react-router-dom";
import { Box, Heading  } from '@chakra-ui/react';

const NotFoundPage = () => {
    return (
        <Box w='1200px' ml='auto' mr='auto' >
            <Heading as='h2' size='lg' color='red' mt='40px' mb='20px'>Page not found !</Heading>
            <NavLink style={{color: "teal", textDecorationLine: "underline" }} to="/">To home page</NavLink>
        </Box>
    );
};

export default NotFoundPage;