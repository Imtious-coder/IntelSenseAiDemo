import React from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import style from "./Navbar.module.scss";
import { List, ListItem, ListItemText } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  paper: {
    padding: theme.spacing(1),
  },
}));

export default function AISolutionsMouseOverPopover() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Typography
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
        className={style.NavItems}
        style={{ fontSize: 14 }}
      >
        AI Solutions
      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography variant="h6" className={classes.title} style={{ fontSize: 14 }}>
          IntelsenseAI Services
        </Typography>
        <div className={classes.demo}>
          <List dense>
            <ListItem>
              <ListItemText
                primary="Natural Language Processing"
                // secondary={'Secondary text' }
                style={{ fontSize: 14 }}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Automatic Speech Recognition"
                // secondary={'Secondary text' : null}
                style={{ fontSize: 14 }}
              />
            </ListItem>

            <ListItem>
              <ListItemText
                primary="Computer Vision"
                // secondary={'Secondary text' : null}
                style={{ fontSize: 14 }}
              />
            </ListItem>
          </List>
        </div>
      </Popover>
    </div>
  );
}
