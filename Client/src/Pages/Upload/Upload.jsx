import React, { Component } from 'react';
import Header from '../Header/header.jsx';
import Uploader from './Uploader/Uploader';

class Upload extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Uploader />
            </div>
        )
    }
}

export default Upload;