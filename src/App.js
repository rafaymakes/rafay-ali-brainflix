import React from 'react';
import './App.scss';
import Header from './Components/Header/header.jsx';
import Video from './Components/Video/video.jsx';
import Comments from './Components/Comments/comments.jsx';
import Suggestions from './Components/Suggestions/suggestions.jsx';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Video/>
      <Comments/>
      <Suggestions/>
    </div>
  )
}

export default App;
