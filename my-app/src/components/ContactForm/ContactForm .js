import React, { useState } from "react";
import {
  ContactsForm,
  ContactsMark,
  ContactsInput,
  ContactsButton,
  ContactsSpan,
} from "./ContactForm.styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from "../../redux/phoneBook/phoneBookSlice";
import BeatLoader from "react-spinners/BeatLoader";

export default function ContactForm() {
  const [stateContacts, setStateContacts] = useState({ name: "", number: "" });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setStateContacts((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const { data } = useFetchContactsQuery();
  const [addContact, { isLoading }] = useAddContactMutation();

  const onCheckNameValue = (contactName) => {
    if (
      data.some(
        (contact) => contact.name.toLowerCase() === contactName.toLowerCase()
      )
    ) {
      toast(`${stateContacts.name} is already in contacts`);
      return;
    }
    addContact(stateContacts);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    onCheckNameValue(e.target.name.value);
    setStateContacts({ name: "", number: "" });
  };
  const { name, number } = stateContacts;
  return (
    <>
      <ContactsForm onSubmit={onSubmitForm}>
        <ContactsMark>
          <ContactsSpan>Name</ContactsSpan>
          <ContactsInput
            type="text"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={handleChange}
          />
        </ContactsMark>
        <ContactsMark>
          <ContactsSpan> Number </ContactsSpan>
          <ContactsInput
            type="tel"
            name="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={handleChange}
          />
        </ContactsMark>
        <ContactsButton type="submit" disabled={isLoading}>
          {isLoading ? <BeatLoader size={9} /> : "add contact"}
        </ContactsButton>
      </ContactsForm>
    </>
  );
}
