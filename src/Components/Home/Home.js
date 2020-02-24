import React, { Component } from 'react'
import './Home.scss';
import Header from './../Header/header.jsx';
import Video from './../Video/video.jsx';
import Comments from './../Comments/comments.jsx';
import Suggestions from './../Suggestions/suggestions.jsx';
import Poster from './../../Assets/Images/video-list-0.jpg';
import TopVideo from './../../Assets/Video/BrainStationSampleVideo.mp4';
import image1 from './../../Assets/Images/video-list-1.jpg';
import image2 from './../../Assets/Images/video-list-2.jpg';
import image3 from './../../Assets/Images/video-list-3.jpg';
import image4 from './../../Assets/Images/video-list-4.jpg';
import image5 from './../../Assets/Images/video-list-5.jpg';
import image6 from './../../Assets/Images/video-list-6.jpg';
import image7 from './../../Assets/Images/video-list-7.jpg';
import image8 from './../../Assets/Images/video-list-8.jpg';
import axios from 'axios';

const keyAffix = '?api_key=94f19a78-ed3b-4723-9773-164ca4dffeee';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoids: [],
      sidevideo: [],
      mainvideo: [],
    }
  }

  componentDidMount() {
    axios.get('https://project-2-api.herokuapp.com/videos' + keyAffix)
      .then(result => {
        result.data.forEach(item => {
          this.setState({ sidevideo: item })
          console.log(this.state.sidevideo)
        })
      })
  }

  // componentDidUpdate() {
  //   axios.get('https://project-2-api.herokuapp.com/videos/' + this.state.sidevideo.id + keyAffix)
  //     .then(result => {

  //     })
  // }

  // this.state = {
  //   mainVideo: {
  //     id: '0',
  //     title: 'BMX Rampage: 2018 Highlights',
  //     description: 'On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title',
  //     channel: 'Red Cow',
  //     image: Poster,
  //     views: '1,001,023',
  //     likes: '110,985',
  //     duration: '0:45',
  //     video: TopVideo,
  //     timestamp: '12/18/2018',
  //     comments: [
  //       {
  //         commenter: 'Michael Lyons',
  //         comment: 'They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed.',
  //         timestamp: '12/18/2018'
  //       },
  //       {
  //         commenter: 'Gary Wong',
  //         comment: 'Every time I see him shred I feel somotivated to get off my cou hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!', timestamp: '12/18/2018'
  //       },
  //       {
  //         commenter: 'Theodore Duncan',
  //         comment: 'How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!', timestamp: '11/15/2018'
  //       }
  //     ]
  //   },

  //   sideVideo: [
  //     {
  //       id: '1',
  //       title: 'Become A Travel Pro In One Easy Lesson...',
  //       channel: 'Scotty Cranmer',
  //       image: image1
  //     },
  //     {
  //       id: '2',
  //       title: 'Les Houches The Hidden Gem Of The...',
  //       channel: 'Scotty Cranmer',
  //       image: image2
  //     },
  //     {
  //       id: '3',
  //       title: 'Travel Health Useful Medical Information...',
  //       channel: 'Scotty Cranmer',
  //       image: image3
  //     },
  //     {
  //       id: '4',
  //       title: 'Cheap Airline Tickets Great Ways To Save',
  //       channel: 'Emily Harper',
  //       image: image4
  //     },
  //     {
  //       id: '5',
  //       title: 'Take A Romantic Break In A Boutique Hotel',
  //       channel: 'Ethan Owen',
  //       image: image5
  //     },
  //     {
  //       id: '6',
  //       title: 'Choose the Perfect Accommodations',
  //       channel: 'Lydia Perez',
  //       image: image6
  //     },
  //     {
  //       id: '7',
  //       title: 'Cruising Destination Ideas',
  //       channel: 'Timothy Austin',
  //       image: image7
  //     },
  //     {
  //       id: '8',
  //       title: 'Train Travel On Track For Safety',
  //       channel: 'Scotty Cranmer',
  //       image: image8
  //     },
  //   ]
  // }

  render() {
    return (
      <div className="Home">
        <Header />
        {/* <Video
          mainVideoProp={this.state.mainVideo}
        />
        <Comments
          commentsProp={this.state.mainVideo.comments}
        /> */}
        <Suggestions
          sideVideoProp={this.state.sidevideo}
        />
      </div>
    )
  }
}

export default Home;
