import React from 'react';
import './video.scss';
import Poster from '../../Assets/Images/video-list-0.jpg'

const Video = () => {
    return (
        <section className = 'video'>
            <div className = 'video__videoplayer'>
                <video class = 'video__videocontent' controls poster={Poster}>
                </video>
            </div>
            <div className = 'video__description'>
                <div className = 'video__top'>
                    <h1 className = 'video__title'>BMX Rampage: 2018 Highlights</h1>
                    <div className = 'video__details'>
                        <p className = 'video__author'>By Red Cow</p>
                        <p className = 'video__postdate'> 12/18/2018</p>
                    </div>
                    <div className = 'video__stats'>
                        <p className = 'video__views'> 1,001,023</p>
                        <p className = 'video__likes'> 110,985</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Video;