import { createMuiTheme } from '@material-ui/core/styles';
import { cyan, lightGreen } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#399fdb",
      light: cyan.A200,
      dark: "#3f4d63",
    },
    secondary: lightGreen,
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