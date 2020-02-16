import React from 'react';
import './comments.scss';
import userIcon from './../../Assets/Images/Mohan-muruge.jpg'

const Comments = () => {
    return (
        <section className = 'comments'>
            <div className = 'comments__inputs'>
                <p className='comments__count'> 3 Comments </p>
                <form className='comments__form'>
                    <label className = 'comments__entrylabel' for= 'comment'>JOIN THE CONVERSATION</label>
                    <input className = 'comments__entry' name = 'comment' type ='text'></input>
                    <input className = 'comments__button' type='submit' value='COMMENT'/>
                    <img className = 'comments__usericon' alt='your profile picture' src={userIcon}/>
                </form>
            </div>
            <div className='comments__outputs'>
            </div>
        </section>
    )
}

export default Comments;