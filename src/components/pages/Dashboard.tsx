import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';

import Tradeform from './Tradeform';

export class Dashboard extends Component {
  render() {
    return (
      <div>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <Paper>
              <div>here will be the price change of the selected stock</div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper>
              <div>here will be the order book information of the selected stock</div>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper>
              <div>here will be the stock list</div>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper style={{padding: "1rem"}}>
              {/* <div>here will be buy/sell form</div> */}
              <Tradeform />
            </Paper>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Dashboard
