const Persons = ({ personsToShow, deletePerson }) => {
  return (
    <>
      {personsToShow.map((person, i) => (
        <div key={i}>
          {person.name} {person.number}
          <button onClick={() => deletePerson(person)}>delete</button>
        </div>
      ))}
    </>
  );
};

export default Persons;
