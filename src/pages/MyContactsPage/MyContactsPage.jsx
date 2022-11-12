import {Navigate} from "react-router-dom";
import useAuth from 'shared/hooks/useAuth';
import { Container } from '../../components/Container/Container.styled';
import { TitlePage } from '../../components/Title/Title';
import Contacts from 'components/Contacts/Contacts';


const MyContactsPage = () => {
  const isLogin = useAuth();

  if(!isLogin) {
    return <Navigate to="/login" />
  }

  return (
    <Container>
      <TitlePage text={'Phonebook'}></TitlePage>
      <Contacts />
    </Container>
  );
};

export default MyContactsPage;