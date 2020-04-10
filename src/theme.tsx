import { createMuiTheme } from '@material-ui/core/styles';
import { cyan, green } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#399fdb",
      light: cyan.A200,
      dark: "#3f4d63",
    },
    secondary: {
      main: green.A400,
    },
    text: {
      primary: "#399fdb",
      secondary: "#fff"
    },
    background: {
      paper: "#354154",
    }
  }
});

export default theme;