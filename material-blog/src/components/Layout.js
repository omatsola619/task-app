import React from "react";
import {
  Drawer,
  Typography,
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar
} from "@material-ui/core";
import { AddCircleOutlined, SubjectOutlined } from "@material-ui/icons";
import { useHistory, useLocation } from "react-router";
import { format } from 'date-fns'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
  return {
    page: {
      padding: theme.spacing(3),
    },
    draw: {
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    root: {
      display: "flex",
      marginTop: "10px",
    },
    title: {
      marginBottom: "20px",
      padding: theme.spacing(2),
    },
    active: {
      background: "#f4f4f4",
    },
    appbar: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
    toolbar: theme.mixins.toolbar,
    date : {
      flexGrow : 1
    },
    avatar : {
      marginLeft : theme.spacing(2)
    }
  };
});

function Layout({ children }) {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const menuItems = [
    {
      text: "My Tasks",
      icon: <SubjectOutlined color="primary" />,
      path: "/",
    },
    {
      text: "Create Task",
      icon: <AddCircleOutlined color="primary" />,
      path: "/create",
    },
  ];

  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>Task Overview</Typography>
          <Typography>Omash</Typography>
          <Avatar src='/oma.jpg' className={classes.avatar} />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.draw}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="body1" align="center" className={classes.title}>
            My Tasks
          </Typography>
        </div>

        <List>
          {menuItems.map((item) => (
            <ListItem
              key={item.text}
              button
              onClick={() => history.push(item.path)}
              className={location.pathname == item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} color="primary" />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  );
}

export default Layout;
