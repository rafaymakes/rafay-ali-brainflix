import React from 'react';
import { BrowserRouter as Link } from "react-router-dom";
import './header.scss';
import Logo from '../../Assets/Logo/Logo-brainflix.jsx';
import userIcon from './../../Assets/Images/Mohan-muruge.jpg';
import uploadIcon from './../../Assets/Icons/SVG/Icon-upload.svg';

class Header extends React.Component {
    render() {
        return (
            <header className='header'>
                <Link className='header__logolink' to='/'>
                    <Logo className='header__logo' />
                </Link>
                <form className='header__form'>
                    <input className='header__input' type='text' placeholder='Search' />
                    <div className='header__box'>
                        <Link className='header__searchlink' to='/Upload'>
                            <button className='header__search'><img className='header__uploadicon' alt="upload icon" src={uploadIcon} />UPLOAD</button>
                        </Link>
                        <img className='header__usericon' alt='your profile' src={userIcon} />
                    </div>
                </form>
            </header>
        );
    }
}

export default Header;