import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './index.css';
import Home from './Components/Home/Home.js';
import Upload from './Components/Upload/Upload.jsx';
import axios from 'axios';

class App extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path='/' component={Home}></Route>
                    <Route path='/upload' component={Upload}></Route>
                    <Route path='/video/:videoid' component={Home}></Route>
                </Switch>
            </Router>
        )
    }
}

export default App;