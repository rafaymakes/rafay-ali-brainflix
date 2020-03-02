import React, { Component } from 'react';
import Header from './../../Header/header.jsx';
import Uploader from './Uploader/Uploader';

const keyAffix = '?api_key=94f19a78-ed3b-4723-9773-164ca4dffeee';
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