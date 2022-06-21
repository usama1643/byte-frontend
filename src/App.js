import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createBrowserHistory } from "history";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from './Routes'

export const history = createBrowserHistory();
history.listen((location, action) => {
  if (["PUSH"].includes(action)) {
    window.scroll({
      behavior: "smooth",
      top: 0
    });
  }
});


const theme = createTheme({
  typography: {
    fontFamily: "Poppins"
  }
});


function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Routing></Routing>
        </Router>
      </ThemeProvider>

    </div>
  );
}

export default App;
