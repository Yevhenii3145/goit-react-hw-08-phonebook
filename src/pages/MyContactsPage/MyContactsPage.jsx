import React from 'react';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import Form from '../../components/Form/Form';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { Container } from '../../components/Container/Container.styled';
import { TitlePage } from '../../components/Title/Title';
import { Heading } from '../../components/Heading/Heading';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter/filter-selectors';
import {getState, getFilteredContacts,} from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operation';

const MyContactsPage = () =>{
  const contacts = useSelector(getFilteredContacts);
  const { loading, error } = useSelector(getState);
  const filter = useSelector(getFilter);
  const filterId = nanoid();
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  
  return (
    <Container>
      <TitlePage text={'Phonebook'}></TitlePage>
      <Form />
      {/* <Form onSubmit={addOneContact} /> */}
      <Heading text={'Contacts'}></Heading>
      <Filter filterId={filterId} filter={filter} />
      {!loading && contacts.length > 0 && (
        
        <ContactList items={contacts} />
      )}
      {loading && <p>...loading</p>}
      {error && <p>oops, something went wrong</p>}
    </Container>
  );
}

export default MyContactsPage;