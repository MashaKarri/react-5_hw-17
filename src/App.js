import "./App.css";

import { useState } from "react";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { ContactForm } from "./components/ContactForm/ContactForm.js";
import { ContactList } from "./components/ContactList/ContactList.js";
import { Filter } from "./components/Filter/Filter.js";

import { AppWrapper, Title, Subtitle } from "./App.styled.js";

import { FaSquarePhone } from "react-icons/fa6";

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", []);
  const [filter, setFilter] = useState("");

  const deleteContact = (id) => {
    setContacts((previous) => previous.filter((contact) => contact.id !== id));
  };

  return (
    <AppWrapper>
      <Title>
        Phonebook <FaSquarePhone />
      </Title>

      <ContactForm contacts={contacts} setContacts={setContacts} />

      <Subtitle>Contacts</Subtitle>

      <Filter filter={filter} setFilter={setFilter} />

      <ContactList
        contacts={contacts}
        filter={filter}
        onDelete={deleteContact}
      />
    </AppWrapper>
  );
}

export default App;
