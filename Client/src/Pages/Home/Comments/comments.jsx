import React from 'react';
import './comments.scss';
import UserIcon from './../../../Assets/Images/Mohan-muruge.jpg';
import CommentCard from '../CommentCard/commentcard.jsx';

const Comments = (props) => {
    return (
        <section className='comments'>
            <div className='comments__inputs'>
                <p className='comments__count'> 3 Comments </p>
                <form onSubmit={props.submitProp} className='comments__form'>
                    <label className='comments__entrylabel' for='comment'>JOIN THE CONVERSATION</label>
                    <input className='comments__entry' name='comment' type='text'></input>
                    <input className='comments__button' type='submit' value='COMMENT' />
                    <img className='comments__usericon' alt='your profile' src={UserIcon} />
                </form>
            </div>
            <div className='comments__outputs'>
                <CommentCard
                    commentsDataProp={props}
                    function={props.submitProp}
                />
            </div>
        </section>
    )
}

export default Comments;