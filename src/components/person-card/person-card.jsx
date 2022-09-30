import React, { useState, useEffect } from "react";
import {
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  InputLabel,
  Checkbox,
  Select,
} from "@material-ui/core";
import { positions } from "../app/mok-persons";

import "react-datepicker/dist/react-datepicker.css";

import "./person-card.css";

const PersonCard = ({ person, checkChange }) => {
  const [state, setState] = useState({
    fio: "",
    position: "",
    birthday: "",
    male: true,
    fired: false,
  });

  const positionsList = positions;

  useEffect(() => {
    setState({
      ...person,
    });
  }, [person]);

  useEffect(() => {
    checkChange(state);
  }, [state]);

  const handleChange = (prop) => async (event) => {
    let value = event.target.value;
    if (prop === "male") {
      value = value === "true";
    } else if (prop === "fired") {
      value = event.target.checked;
    }
    await setState({ ...state, [prop]: value });
  };

  return (
    <div className="card">
      <div className="row">
        <div>
          <TextField
            id="outlined-basic"
            onChange={handleChange("fio")}
            label="ФИО"
            value={state.fio}
            variant="outlined"
            style={{ width: "20vw" }}
            required
          />
        </div>
        <div>
          <InputLabel htmlFor="outlined-age-native-simple" required>
            Должность
          </InputLabel>
          <Select
            native
            value={state.position}
            onChange={handleChange("position")}
            label="position"
            inputProps={{
              name: "position",
              id: "outlined-age-native-simple",
            }}
            required
          >
            {positionsList.map((item) => {
              return (
                <option value={item} key={item}>
                  {item}
                </option>
              );
            })}
          </Select>
        </div>
      </div>
      <div className="row">
        <div>
          <TextField
            id="date"
            label="Дата рождения"
            type="date"
            format="MM/dd/yyyy"
            InputLabelProps={{
              shrink: true,
            }}
            value={state.birthday}
            onChange={handleChange("birthday")}
          />
        </div>
        <div>
          <FormLabel component="legend">Пол</FormLabel>
          <RadioGroup
            row
            aria-label="male"
            name="male"
            value={state.male}
            onChange={handleChange("male")}
          >
            <FormControlLabel
              value={true}
              control={<Radio color="primary" />}
              label="муж"
            />
            <FormControlLabel
              value={false}
              control={<Radio color="primary" />}
              label="жен"
            />
          </RadioGroup>
        </div>
      </div>
      <div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.fired}
                onChange={handleChange("fired")}
                name="fired"
              />
            }
            label="Уволен"
          />
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
