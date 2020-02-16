import React from 'react';
import './App.scss';
import Header from './Components/Header/header.jsx';
import Video from './Components/Video/video.jsx';
import Comments from './Components/Comments/comments.jsx';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Video/>
      <Comments/>
    </div>
  )
}

export default App;
