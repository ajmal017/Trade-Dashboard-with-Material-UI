import React from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles({
  appBarStyle: {
    background: theme.palette.primary.dark
  }
})

export default function Header() {
  const classes = useStyles();

  return (
    <div>
      <Appbar position="static" className={classes.appBarStyle}>
        <Toolbar>
          <Typography variant="h5" color="textSecondary">
            Dashboard
          </Typography>
        </Toolbar>
      </Appbar>
    </div>
  );
}
