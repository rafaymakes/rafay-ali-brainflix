import React, { Component } from 'react'
import './Home.scss';
import Header from '../Header/header.jsx';
import Video from './Video/video.jsx';
import Comments from './Comments/comments.jsx';
import Suggestions from './Suggestions/suggestions.jsx';
import axios from 'axios';
import Axios from 'axios';

const keyAffix = '?api_key=94f19a78-ed3b-4723-9773-164ca4dffeee';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mainvideo: [],
      comments: [],
    }
  }

  getMainVideo = id => {
    axios.get(`http://localhost:8080/videos/${id}`)
      .then(res => {
        this.setState({
          mainvideo: res.data,
          comments: res.data.comments,
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.getMainVideo("1af0jruup5gu");
  }

  componentDidUpdate() {

    if (
      this.state.mainvideo.id !== this.props.match.params.videoid &&
      this.props.match.params.videoid
    ) {
      this.getMainVideo(this.props.match.params.videoid);
    }
  }

  sendComment = (id, comment) => {
    Axios.post(
      `https://project-2-api.herokuapp.com/videos/${id}/comments/${keyAffix}`, comment)
      .then(this.getMainVideo(id));
  }

  commenting = event => {
    event.preventDefault();
    let id = this.state.mainvideo.id;
    let comment = {
      name: "Rafay",
      comment: event.target.comment.value
    }
    this.sendComment(id, comment);
    event.target.reset()
  }

  render() {
    console.log(this.props)
    return (
      <div className="Home">
        <Header />
        <Video
          mainVideoProp={this.state.mainvideo}
        />
        <Comments
          commentsProp={this.state.comments}
          submitProp={this.commenting}
        />
        <Suggestions
          match={this.props.match}
          mainVids={this.state.mainvideo}
        />
      </div>
    )
  }
}

export default Home;
