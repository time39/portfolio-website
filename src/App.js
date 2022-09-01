import './App.css';
import React from "react";
import {Route, Routes} from 'react-router-dom'
import Home from './components/Home'
import About from "./components/About";
import {createMuiTheme} from "@material-ui/core";

function App() {
    let theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    primary: {
                        light: '#00e5ff',
                        main: '#2916F5',
                        dark: '#00004f',

                    },
                },
                typography: {
                    h1: {
                        fontFamily: '"Coolvetica',
                        textTransform: 'uppercase',
                        // fontSize:'calc(2rem + 4vw)'
                    },
                    button: {
                        textTransform: ''
                    }
                }
            }),
        [],
    );
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
  );
}

export default App;
