import React from 'react';
import './video.scss';
import Poster from '../../Assets/Images/video-list-0.jpg';
import ViewIcon from '../../Assets/Icons/SVG/Icon-views.svg';
import LikeIcon from '../../Assets/Icons/SVG/Icon-likes.svg';

const Video = () => {
    return (
        <section className = 'video'>
            <div className = 'video__videoplayer'>
                <video class = 'video__videocontent' controls poster={Poster}></video>
            </div>
            <div className = 'video__description'>
                <div className = 'video__top'>
                    <h1 className = 'video__title'>BMX Rampage: 2018 Highlights</h1>
                    <div className = 'video__detailsstats'>
                        <div className = 'video__details'>
                            <p className = 'video__author'>By Red Cow</p>
                            <p className = 'video__postdate'> 12/18/2018</p>
                        </div>
                        <div className = 'video__stats'>
                            <img className = 'video__viewsicon' alt= 'Icon of an eye' src={ViewIcon}></img>
                            <p className = 'video__views'> 1,001,023</p>
                            <img className = 'video__likesicon' alt= 'Icon of a heart' src={LikeIcon}></img>
                            <p className = 'video__likes'> 110,985</p>
                        </div>
                    </div>
                </div>
                <p className='video__text'>
                    On a gusty day in Southern Utah, a group of 25
                    daring mountain bikers blew the doors off what is
                    possible on two wheels, unleashing some of the
                    biggest moments the sport has ever seen. While
                    mother nature only allowed for one full run before
                    the conditions made it impossible to ride, that was
                    all that was needed for event veteran Kyle Strait,
                    who won the event for the second time -- eight years
                    after his first Red Cow Rampage title
                </p>
            </div>
        </section>
    );
}

export default Video;