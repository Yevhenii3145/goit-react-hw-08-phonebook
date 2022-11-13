import { Box, Heading,Text   } from '@chakra-ui/react';

const MainPage = () => {
    return (
        <Box w='1200px' ml='auto' mr='auto' >
        <Heading 
        as='h1'
        size='lg'
        color='red'
        mt='40px'
        
         >"Hello, World!"</Heading>
        <Heading 
        as='h2' 
        size='lg' 
        color='gold' 
        mt='60px' 
        mb='20px'
        
        >The Zen of Python, by Tim Peters</Heading>

    <Text as='b' fontSize='30px'>
      Beautiful is better than ugly.<br/>
      Explicit is better than implicit.<br/>
      Simple is better than complex.<br/>
      Complex is better than complicated.<br/>
      Flat is better than nested.<br/>
      Sparse is better than dense.<br/>
      Readability counts.<br/>
      Special cases aren<Text as='mark' color='green'>'t special enough to break the rules.<br/>
      Although practicality beats purity.<br/>
      Errors should never pass silently.<br/>
      Unless explicitly silenced.<br/>
      In the face of ambiguity, refuse the temptation to guess.<br/>
      There should be one-- and preferably only one --obvious way to do it.<br/>
      Although that way may not be obvious at first unless you'</Text>re Dutch.<br/>
      Now is better than never.<br/>
      
      Although never is often better than *right* now.<br/>
      If the implementation is hard to explain, it<Text as='mark' color='green'>'s a bad idea.<br/>
      If the implementation is easy to explain, it may be a good idea.<br/>
      Namespaces are one honking great idea -- let's  do more </Text> of those!<br/>
      </Text>
    </Box>
  
    );
  };
  
  export default MainPage;