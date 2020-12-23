import { useState } from "react";

import shortid from "shortid";
import s from "./PhoneBock.module.css";

export default function Form({ contactList, onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const InputValues = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };
  const addContact = (e) => {
    const lengthInputNemeChech = name.length;
    const lengthInputNumberChech = number.length;
    e.preventDefault();
    if (lengthInputNemeChech < 2 || lengthInputNemeChech > 10) {
      alert('Введіть ім"я більше 1-го символа і не більше 10');
      return;
    }
    if (lengthInputNumberChech < 7 || lengthInputNumberChech > 10) {
      alert("Введіть номер більше 7-ми цифр і не більше 10");
      return;
    }

    const checkName = contactList(name);
    if (checkName) {
      alert('Це ім"я вже існує');

      return;
    }

    onSubmit({
      id: shortid.generate(),
      name,
      number,
    });
    resetInputValues();
  };

  const resetInputValues = () => {
    setName("");
    setNumber("");
  };

  const idName = shortid.generate();
  const idNumber = shortid.generate();
  return (
    <form className={s.form} onSubmit={addContact}>
      <label htmlFor={idName} className={s.labelName}>
        Им'я
      </label>
      <input
        id={idName}
        type="text"
        name="name"
        value={name}
        onChange={InputValues}
        autoComplete="off"
      ></input>
      <label htmlFor={idNumber} className={s.labelNumber}>
        Номер
      </label>
      <input
        id={idNumber}
        placeholder="(0xx) xxx-xx-xx"
        type="tel"
        pattern="^[ 0-9]+$"
        name="number"
        value={number}
        onChange={InputValues}
        autoComplete="off"
      ></input>
      <button className={s.btnForm} type="submite">
        Додати контакт
      </button>
    </form>
  );
}
