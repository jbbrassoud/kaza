import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/index.css';
import Logement from './components/logement/logement';
import Apropos from './components/apropos/apropos';
import Notfound from './components/notfound/notfound';


import Header from './components/header/header'

import Home from './components/app/app'
 
ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/location" element={<Logement />} />
                <Route path="/a-propos" element={<Apropos/>}/>
                <Route path="*" element={<Notfound/>}/>
            </Routes>
            
        </Router>
    </React.StrictMode>,
document.getElementById('root')
);



