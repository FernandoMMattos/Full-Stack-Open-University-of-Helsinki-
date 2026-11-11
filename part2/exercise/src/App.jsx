import { useState, useEffect } from "react";
import axios from "axios";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then((res) => setPersons(res.data));
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.some((person) => person.name === newName)) {
      return alert(`${newName} is already added to phonebook`);
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(personObject));
    setNewName("");
    setNewNumber("");
  };

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <div>
      <h2>Phonebook</h2>
      <Filter setFilter={setFilter} />

      <h3>Add new contact</h3>
      <PersonForm
        setNewName={setNewName}
        setNewNumber={setNewNumber}
        newName={newName}
        newNumber={newNumber}
        addPerson={addPerson}
      />

      <h3>Numbers</h3>
      <Persons personsToShow={personsToShow} />
    </div>
  );
};

export default App;
