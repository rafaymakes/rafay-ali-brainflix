import React from 'react';
import '../comments.scss';

const CommentCard = (props) => {

    return (

        <>
            {props.commentsDataProp.commentsProp.map(item => (
                <div className='comments__card'>
                    <div className='comments__content'>
                        <div className='comments__namedate'>
                            <div className='comments__profpic'></div>
                            <p className='comments__name'>{item.name}</p>
                            <p className='comments__date'>{item.timestamp}</p>
                        </div>
                        <p className='comments__text'>{item.comment}</p>
                    </div>
                </div>
            ))}
        </>
    )
}

export default CommentCard;