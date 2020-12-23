import { useState, useEffect } from "react";
// import shortid from 'shortid';
import s from "./components/PhoneBock.module.css";

import Form from "./components/Form";
import ContactList from "./components/ContactList";
import SearchContact from "./components/SearchContact";

export default function Mobile() {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem("contacts")) ?? [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (NewContact) => {
    setContacts([NewContact, ...contacts]);
  };
  const veluesFilter = (e) => {
    const { value } = e.currentTarget;
    setFilter(value);
  };
  const getFilter = () => {
    const filterValues = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filterValues)
    );
  };

  const onCheckName = (newName, numbers) => {
    return contacts.some(
      ({ name }) => name === Object.values(newName).join("")
    );
  };

  const deletedContact = (contactId) => {
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <div className={s.container}>
      <h1 className={s.headingForm}>Телефонна книга</h1>
      <Form onSubmit={addContact} contactList={onCheckName} />
      <h2 className={s.contactList}>Контакти</h2>
      <SearchContact velue={filter} SearchContact={veluesFilter} />
      <ContactList contactList={getFilter()} onDeleted={deletedContact} />
    </div>
  );
}
