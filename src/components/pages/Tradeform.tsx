import React, { Component } from "react";
import {
  Typography,
  AppBar,
  Tabs,
  Tab,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Button,
} from "@material-ui/core";

export class Tradeform extends Component {
  state = {
    action: "buy",
    orderType: "market-order",
    orderSize: 100,
    price: 0,
  };

  changeAction = (event: any, value: string) => {
    console.log(event);
    console.log(value);
    this.setState({
      action: value,
    });
  };

  onFormChange = (event: any) => {
    // console.log(event);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <Typography variant="h5" style={{ marginBottom: "0.8rem" }}>
          Stock Name
        </Typography>
        <AppBar position="static">
          <Tabs
            centered
            variant="fullWidth"
            indicatorColor="primary"
            value={this.state.action}
            onChange={this.changeAction}
            style={{ background: "#3d5170", color: "#fff" }}
          >
            <Tab label="BUY" value="buy" />
            <Tab label="SELL" value="sell" />
          </Tabs>
        </AppBar>
        <form style={{ marginTop: "1.5rem" }}>
          <FormControl
            variant="outlined"
            style={{
              width: "48%",
              minWidth: 120,
              marginRight: "4%",
              marginBottom: "0.8rem",
            }}
          >
            <InputLabel id="order-type-label" shrink>
              Order Type
            </InputLabel>
            <Select
              labelId="order-type-label"
              id="order-type"
              name="orderType"
              value={this.state.orderType}
              onChange={this.onFormChange}
              label="Order Type"
            >
              <MenuItem value="market-order">Market Order</MenuItem>
              <MenuItem value="limit-order">Limit Order</MenuItem>
              <MenuItem value="trailing-stop-order">
                Trailing Stop Order
              </MenuItem>
              <MenuItem value="stop-order">Stop Order</MenuItem>
              <MenuItem value="stop-limit-order">Stop Limit Order</MenuItem>
            </Select>
          </FormControl>
          <FormControl
            style={{ width: "48%", minWidth: 120, marginBottom: "0.8rem" }}
          >
            {/* <InputLabel htmlFor="order-size" shrink>Order Size</InputLabel> */}
            <TextField
              id="order-size"
              label="Order Size"
              variant="outlined"
              name="orderSize"
              value={this.state.orderSize}
              onChange={this.onFormChange}
            />
          </FormControl>
          <FormControl
            style={{ width: "48%", minWidth: 120, marginRight: "4%" }}
          >
            {/* <InputLabel htmlFor="order-price" shrink>Price</InputLabel> */}
            <TextField
              id="order-price"
              label="Price"
              variant="outlined"
              name="price"
              value={this.state.price}
              onChange={this.onFormChange}
            />
          </FormControl>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            style={{ width: "48%", minWidth: 120, color: "#fff" }}
          >
            PLACE ORDER
          </Button>
        </form>
      </div>
    );
  }
}

export default Tradeform;
