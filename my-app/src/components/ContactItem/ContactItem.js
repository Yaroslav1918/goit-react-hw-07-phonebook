import { useDeleteContactMutation } from "../../redux/phoneBook/phoneBookSlice";
import {
  ContactButton,
  ListItem,
  Span,
} from "../ContactsList/ContactList.styled";
import BeatLoader from "react-spinners/BeatLoader";

const ContactItem = ({ name, number, id }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <ListItem key={id}>
      <Span> {name}</Span>
      <Span> {number}</Span>
      <ContactButton disabled={isDeleting} onClick={() => deleteContact(id)}>
        {isDeleting ? <BeatLoader size={9} /> : "Delete"}
      </ContactButton>
    </ListItem>
  );
};

export default ContactItem;
