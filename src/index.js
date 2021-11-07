import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core'
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';
import theme from "./theme";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider theme={ theme }>
                <App/>
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

