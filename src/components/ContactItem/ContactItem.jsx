import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { ContactElement, DeletButton } from './ContacItem.styled';
import { removeContact } from 'redux/contacts/contacts-operation';


export default function ContactItem({ name, number, id, text }) {
  const dispatch = useDispatch();

  const removeOneContact = id => {
    const action = removeContact(id);
    dispatch(action);
  };
  
  return (
    <ContactElement>{name}: {number}<DeletButton onClick={() => { removeOneContact(id) }}>{text}
    </DeletButton></ContactElement>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  // number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}