import React from "react";
import {
  ContactList,
  ListItem,
  Span,
  ContactButton,
} from "./ContactList.styled";
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from "../../redux/phoneBook/phoneBookSlice";

import ContactItem from "../ContactItem";

const ContactsList = ({ contacts }) => {
  const { data, isFetching } = useFetchContactsQuery();

  return (
    <ContactList>
      {contacts &&
        contacts.map(({ id, number, name }) => (
          <ContactItem key={id} id={id} number={number} name={name} />
        ))}
    </ContactList>
  );
};

export default ContactsList;
