import React from 'react';
import '../comments.scss';

const CommentCard = () => {
    return (
        <div className = 'comments__card'>
                <div className = 'comments__content'>
                <div className = 'comments__namedate'>
                    <div className = 'comments__profpic'></div>
                    <p className = 'comments__name'>Michael Lyons</p>
                    <p className = 'comments__date'>12/18/2018</p>
                </div>
                <p className = 'comments__text'>
                    They BLEW the ROOF off at their
                    last show, once everyone started
                    figuring out they were going. This is
                    still simply the greatest opening of a
                    concert I have EVER witnessed.
                </p>
            </div>
        </div>
    )
}

export default CommentCard;