import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  makeStyles,
  Avatar
} from "@material-ui/core";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import { blue, red, green } from '@material-ui/core/colors'

const useStyles = makeStyles({
  test : {
    background : (note) => {
      if(note.category == 'reminder'){
        return blue[700]
      }
      if(note.category == "work"){
        return red[500]
      }
      if(note.category == "todo"){
        return green[500]
      }
    }
  }
})

function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note)

  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.test}>
              {note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlineIcon />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color='textSecondary'>{note.details}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default NoteCard;
