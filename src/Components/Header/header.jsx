import React from 'react';
import './header.scss';
import Logo from '../../Assets/Logo/Logo-brainflix.jsx'
import userIcon from './../../Assets/Images/Mohan-muruge.jpg'

const Header = () => {
    return (
        <header className = 'header'>
            <Logo className = 'header__logo'/>
            <form className = 'header__form'>
                <input className = 'header__input' type='text' placeholder='Search'/>
                <div className = 'header__box'>
                    <input className = 'header__search' type='submit' value='+ UPLOAD'/>
                    <img className = 'header__usericon' alt = 'your profile picture' src={userIcon}/>
                </div>
            </form>
        </header>
    );
}

export default Header;