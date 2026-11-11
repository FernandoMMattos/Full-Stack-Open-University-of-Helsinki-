import { useState, useEffect } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import PhonebookService from "./services/phonebook.js";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const personsToShow = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  useEffect(() => {
    PhonebookService.getAll().then((initialPhonebook) =>
      setPersons(initialPhonebook),
    );
  }, []);

  const addPerson = (event) => {
    event.preventDefault();

    const existingPerson = persons.find((person) => person.name === newName);

    if (existingPerson) {
      if (
        !window.confirm(
          `${newName} is already added to phonebook, replace old number with a new one?`,
        )
      )
        return;

      const updatedPerson = { ...existingPerson, number: newNumber };

      PhonebookService.updatePerson(existingPerson.id, updatedPerson).then(
        (returnedPerson) => {
          setPersons(
            persons.map((person) =>
              person.id === existingPerson.id ? returnedPerson : person,
            ),
          );
          setNewName("");
          setNewNumber("");
        },
      );
      return;
    }

    const personObject = {
      name: newName,
      number: newNumber,
    };

    PhonebookService.addPerson(personObject).then((returnedPhonebook) => {
      setPersons(persons.concat(returnedPhonebook));
      setNewName("");
      setNewNumber("");
    });
  };

  const deletePerson = (person) => {
    if (!window.confirm(`Delete ${person.name}?`)) return;

    PhonebookService.deletePerson(person.id).then(() => {
      setPersons(persons.filter((p) => p.id !== person.id));
    });
  };

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
      <Persons personsToShow={personsToShow} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
