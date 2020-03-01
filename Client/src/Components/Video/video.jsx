import React from 'react';
import './video.scss';
import ViewIcon from '../../Assets/Icons/SVG/Icon-views.svg';
import LikeIcon from '../../Assets/Icons/SVG/Icon-likes.svg';
import fullscreen from '../../Assets/Icons/SVG/Icon-fullscreen.svg';
import pause from '../../Assets/Icons/SVG/Icon-pause.svg';
import play from '../../Assets/Icons/SVG/Icon-play.svg';
import scrubber from '../../Assets/Icons/SVG/Icon-scrubber-control.svg';
import volume from '../../Assets/Icons/SVG/Icon-volume.svg';


const Video = (props) => {
    return (
        <section className='video'>
            <div className='video__videoplayer'>
                <div className='video__controls'>
                    {/* <img className='video__pause' src={pause}></img> */}
                    <div className='video__playbox'>
                        <img className='video__play' src={play}></img>
                    </div>
                    <img className='video__scrubber' src={scrubber}></img>
                    <div className='video__fullnVol'>
                        <img className='video__fullscreen' src={fullscreen}></img>
                        <img className='video__volume' src={volume}></img>
                    </div>
                    <video className='video__videocontent' poster={props.mainVideoProp.image} >
                    </video>
                </div>
            </div>
            <div className='video__description'>
                <div className='video__top'>
                    <h1 className='video__title'>{props.mainVideoProp.title}</h1>
                    <div className='video__detailsstats'>
                        <div className='video__details'>
                            <p className='video__author'>by {props.mainVideoProp.channel}</p>
                            <p className='video__postdate'>{props.mainVideoProp.timestamp}</p>
                        </div>
                        <div className='video__stats'>
                            <img className='video__viewsicon' alt='Icon of an eye' src={ViewIcon}></img>
                            <p className='video__views'>{props.mainVideoProp.views}</p>
                            <img className='video__likesicon' alt='Icon of a heart' src={LikeIcon}></img>
                            <p className='video__likes'>{props.mainVideoProp.likes}</p>
                        </div>
                    </div>
                </div>
                <p className='video__text'>
                    {props.mainVideoProp.description}
                </p>
            </div>

        </section>
    );
}

export default Video;