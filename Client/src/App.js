import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './index.css';
import Home from './Pages/Home/Home.js';
import Upload from './Pages/Upload/Upload.jsx';

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