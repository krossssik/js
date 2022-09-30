import { makeAutoObservable } from "mobx";

class Persons {
  personsList;
  activePerson;

  constructor() {
    makeAutoObservable(this);
  }

  fillPersons(persons) {
    this.personsList = persons;
  }

  fillActivePerson(id) {
    const activeItemArray = this.personsList.filter((item) => item.id === id);
    this.activePerson = activeItemArray[0];
  }

  updatePerson(person) {
    this.personsList = this.personsList.map((item) =>
      item.id === person.id ? person : item
    );
  }

  removePerson() {
    this.personsList = this.personsList.filter((item) => {
      return item.id !== this.activePerson.id;
    });
    this.activePerson = null;
  }

  addPerson(person) {
    this.personsList.push(person);
    this.activePerson = person;
  }
}

export default new Persons();
