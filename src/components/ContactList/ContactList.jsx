import React from 'react'
import PropTypes from 'prop-types';
import { ContactsList } from './ContactList.styled'
import ContactItem from '../ContactItem/ContactItem'


export default function ContactList({items }) {

  return (
    <ContactsList>
      {items.map(item => (<ContactItem
        key={item.id}
        id={item.id}
        name={item.name}
        number={item.number}
        text={"Delete"}
      />))}
    </ContactsList>
  )
}

ContactList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
}