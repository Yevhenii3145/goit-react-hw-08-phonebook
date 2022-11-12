import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import { Progress } from '@chakra-ui/react';

import Form from '../../components/Form/Form';
import ContactList from '../../components/ContactList/ContactList';
import Filter from '../../components/Filter/Filter';
import { Heading } from '../../components/Heading/Heading';
import { getFilter } from 'redux/filter/filter-selectors';
import {getState, getFilteredContacts,} from 'redux/contacts/contacts-selectors';
import { fetchContacts } from 'redux/contacts/contacts-operation';


const Contacts = () => {
    const contacts = useSelector(getFilteredContacts);
    const { loading, error } = useSelector(getState);
    const filter = useSelector(getFilter);
    const filterId = nanoid();
    const dispatch = useDispatch();
  
    
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
    
    return (
    <>
    <Form />
    <Heading text={'Contacts'}></Heading>
    <Filter filterId={filterId} filter={filter} />
    {!loading && contacts.length > 0 && (  
    <ContactList items={contacts} />
    )}
    {loading && <Progress size='xs' isIndeterminate />}
    {error && <p style={{color:"red", fontSize:"40px", fontWeight: "bold"}}>oops, something went wrong</p>}
    </>
    );
};

export default Contacts;