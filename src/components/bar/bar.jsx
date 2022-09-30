import React from "react";
import {
  Toolbar,
  AppBar,
  Button,
  createStyles,
  makeStyles,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) =>
  createStyles({
    appBar: {
      top: "auto",
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
  })
);

const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

const Bar = ({ hasChanged, hasActiveItem, updateData }) => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar>
          <ThemeProvider theme={theme}>
            <div className={classes.grow} />
            <Button
              variant="contained"
              color="primary"
              disabled={!hasChanged}
              onClick={() => updateData("saveData")}
            >
              Сохранить
            </Button>
            <Button
              variant="contained"
              onClick={() => updateData("updateData")}
            >
              Обновить
            </Button>
            <Button
              variant="contained"
              color="secondary"
              disabled={!hasActiveItem}
              onClick={() => updateData("removeItem")}
            >
              Удалить
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => updateData("addItem")}
            >
              Добавить
            </Button>
          </ThemeProvider>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Bar;
