import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import DraftsIcon from '@material-ui/icons/Drafts';
import ListIcon from '@material-ui/icons/List';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import LogoutIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import ReportIcon from '@material-ui/icons/Report';
import { Link  } from "react-router-dom";
import { firebaseApp } from "../firebase";
import Tooltip from '@material-ui/core/Tooltip';

export const mailFolderListItems=(
  <div>
    <Tooltip title="Add a new article">
    <ListItem component={Link} to='/Dashboard/one' button>
      <ListItemIcon>
        <AddIcon />
      </ListItemIcon>
      <ListItemText primary="Add a New Article"/>
    </ListItem>
    </Tooltip>
    <Tooltip title="Your Articles">
    <ListItem button>
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary="Your Articles" />
    </ListItem>
    </Tooltip>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <ListItemText primary="Send mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <DraftsIcon />
      </ListItemIcon>
      <ListItemText primary="Drafts" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MailIcon />
      </ListItemIcon>
      <ListItemText primary="All mail" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ReportIcon />
      </ListItemIcon>
      <ListItemText primary="Spam" />
    </ListItem>
    <Tooltip title="Signout">
    <ListItem button onClick={()=>{firebaseApp.auth().signOut()}}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Sign Out" />
    </ListItem>
    </Tooltip>
  </div>
);
