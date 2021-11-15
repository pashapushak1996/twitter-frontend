import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from "react-router-dom";

import App from './App';
import theme from "./theme";


ReactDOM.render(
    <Router>
        <ThemeProvider theme={ theme }>
            <App/>
            <CssBaseline/>
        </ThemeProvider>
    </Router>
    ,
    document.getElementById('root')
);

