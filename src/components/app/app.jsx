import React from "react";
import { useEffect, useState } from "react";
import getPersonFromStorage from "../../services/get-dafa-from-storage";
import updatePersonFromStorage from "../../services/update-data-from-storage";
import Bar from "../bar/bar";
import PersonCard from "../person-card/person-card";
import PersonList from "../person-list/person.list";
import "./App.css";
import { defaultPersons } from "./mok-persons";
import { Modal, Button } from "@material-ui/core";
import persons from "../../store/person";
import { observer } from "mobx-react-lite";

const writeDefaultDataInStorage = () => {
  let persons = defaultPersons;

  persons = persons.map((item, index) => {
    return {
      ...item,
      birthday: item.birthday.toISOString().substring(0, 10),
      id: ++index,
    };
  });
  localStorage.setItem("persons", JSON.stringify(persons));
};

function Person() {
  this.fio = "";
  this.position = "";
  this.birthday = "";
  this.male = false;
  this.fired = false;
  this.id = persons.personsList[persons.personsList.length - 1].id + 1;
}

const App = observer(() => {
  useEffect(() => {
    writeDefaultDataInStorage();
  }, []);

  const [data, setData] = useState({
    hasChanged: false,
    hasActiveItem: false,
    showModal: false,
  });

  const selectItem = (id) => {
    persons.fillActivePerson(id);
    setData({
      ...data,
      hasActiveItem: true,
    });
  };

  const manipulationFromBar = (eventName) => {
    switch (eventName) {
      case "updateData":
        data.hasChanged ? setData({ ...data, showModal: true }) : updateData();
        break;
      case "saveData":
        save();
        break;
      case "removeItem":
        remove();
        break;
      case "addItem":
        add();
        break;
    }
  };

  const updateData = () => {
    console.log("UPDATE", persons.personsList);
    updatePersonFromStorage().then((data) => {
      console.log("dataqwe", data);
      persons.fillPersons(data);
      persons.activePerson && persons.fillActivePerson(persons.activePerson.id);
      setData({
        ...data,
        showModal: false,
        hasActiveItem: !!persons.activePerson,
      });
    });
  };

  const save = () => {
    localStorage.setItem("persons", JSON.stringify(persons.personsList));
    setData({ ...data, hasChanged: false });
  };

  const remove = () => {
    persons.removePerson();
    setData({ ...data, hasActiveItem: false, hasChanged: true });
  };

  const add = () => {
    persons.addPerson(new Person());
    setData({ ...data, hasActiveItem: true, hasChanged: true });
  };

  const checkChange = (event) => {
    persons.updatePerson(event);
    setData({
      ...data,
      hasChanged:
        JSON.stringify(persons.activePerson) !== JSON.stringify(event),
    });
  };

  const modalBody = (
    <div className="modal">
      <h2 id="simple-modal-title">
        При обновление все несохраненные изменения будут потеряны!
      </h2>
      <div className="modal-button">
        <Button variant="contained" color="primary" onClick={updateData}>
          Продолжить
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setData({ ...data, showModal: false })}
        >
          Отмена
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      {data.showModal && <Modal open>{modalBody}</Modal>}
      <div className="mainBlock">
        <PersonList getData={getPersonFromStorage} selectItem={selectItem} />
        {persons.activePerson && (
          <PersonCard person={persons.activePerson} checkChange={checkChange} />
        )}
      </div>
      <Bar
        hasChanged={data.hasChanged}
        hasActiveItem={data.hasActiveItem}
        updateData={manipulationFromBar}
      />
    </div>
  );
});

export default App;
