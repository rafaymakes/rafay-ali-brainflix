import React from 'react';
import './../suggestions.scss';

const SuggestionCard = (props) => {
    return (

        <>
            {props.sideVideoDataProp.sideVideoProp.map(item => (

                <div className='suggestions__card'>
                    <img className='suggestions__thumbnail' alt='thumbnail of queued video' src={item.image} />
                    <div className='suggestions__titleauthor'>
                        <p className='suggestions__vidtitle'>{item.title}</p>
                        <p className='suggestions__vidauthor'>{item.channel}</p>
                    </div>
                </div>
            ))}
        </>


    );
}

export default SuggestionCard;