import React from "react";
import {
  Container,
  Typography,
  Button,
  TextField,
  makeStyles,
  ThemeProvider,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@material-ui/core";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import { useState, useEffect } from "react";
import { useHistory } from "react-router";

const useStyles = makeStyles({
  header: {
    marginBottom: "40px",
  },
  text: {
    marginBottom: "30px",
  },
  categories: {
    marginBottom: "20px",
  },
  catHeader: {
    marginBottom: "10px",
  },
});

function Create() {
  const classes = useStyles();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todo");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if (title == "") {
      setTitleError(true);
    }
    if (details == "") {
      setDetailsError(true);
    }

    if (title && details) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container>
      <Typography variant="h6" color="primary" className={classes.header}>
        Create New Notes
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          label="Title"
          fullWidth
          required
          className={classes.text}
          onChange={(e) => setTitle(e.target.value)}
          error={titleError}
        />
        <TextField
          variant="outlined"
          label="Details"
          fullWidth
          required
          multiline
          rows={4}
          className={classes.text}
          onChange={(e) => setDetails(e.target.value)}
          error={detailsError}
        />
        <FormControl className={classes.categories}>
          <FormLabel className={classes.catHeader}>Category</FormLabel>
          <RadioGroup
            row
            onChange={(e) => setCategory(e.target.value)}
            value={category}
          >
            <FormControlLabel value="todo" control={<Radio />} label="Todo" />
            <FormControlLabel
              value="reminder"
              control={<Radio />}
              label="Reminder"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <br />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default Create;
