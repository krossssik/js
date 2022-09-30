import React, { useEffect } from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import withData from "../helpers/get-data";
import persons from "../../store/person";

const PersonList = ({ data, selectItem }) => {
  let activeId = null;
  const checkPerson = (id) => {
    selectItem(id);
  };

  useEffect(() => {
    persons.fillPersons(data);
  }, []);

  if (persons.personsList) {
    data = persons.personsList;
    activeId = persons.activePerson ? persons.activePerson.id : null;
  }

  const items = data.map((item) => {
    return (
      <ListItem
        button
        onClick={() => checkPerson(item.id)}
        key={item.id}
        style={activeId === item.id ? { backgroundColor: "#d0ebc3" } : null}
      >
        <ListItemText primary={item.fio} />
      </ListItem>
    );
  });

  return (
    <div>
      <h2>Список сотрудников:</h2>
      <List>{items}</List>
    </div>
  );
};

export default withData(PersonList);
