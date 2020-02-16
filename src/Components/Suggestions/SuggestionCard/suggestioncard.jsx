import React from 'react';
import './../suggestions.scss';
import thumbnail from './../../../Assets/Images/video-list-1.jpg';

const SuggestionCard = () => {
    return (
        <div className = 'suggestions__card'>
            <img className = 'suggestions__thumbnail' alt = 'thumbnail of queued video' src={thumbnail}></img>
            <div className = 'suggestions__titleauthor'>
                <p className = 'suggestions__vidtitle'>Become A Travel Pro In One Easy Lesson</p>
                <p className = 'suggestions__vidauthor'>Scotty Cranmer</p>
            </div>
        </div>
    );
}

export default SuggestionCard;