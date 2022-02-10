import ContactList from "../ContactsList";
import ContactForm from "../ContactForm";
import Filter from "../Filter/Filter";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Title from "../Title";

export default function App() {
  return (
    <>
      <Title name={"Phonebook"} />
      <ContactForm />
      <ToastContainer />
      <Title name={"Contacts"} />
      {<Filter />}
      {<ContactList />}
    </>
  );
}
