import React, { Component } from 'react';
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export class Header extends Component {
  render() {
    return (
      <div>
        <Appbar position="static">
          <Toolbar>
            <Typography variant="h6">
              Dashboard
            </Typography>
          </Toolbar>
        </Appbar>
      </div>
    );
  }
}

export default Header

