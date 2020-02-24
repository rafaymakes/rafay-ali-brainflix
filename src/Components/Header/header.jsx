import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './header.scss';
import Logo from '../../Assets/Logo/Logo-brainflix.jsx';
import userIcon from './../../Assets/Images/Mohan-muruge.jpg';

class Header extends React.Component {
    render() {
        const { match } = this.props;

        return (
            <header className='header'>
                <Link className='header__logolink' to='/'>
                    <Logo className='header__logo' />
                </Link>
                <form className='header__form'>
                    <input className='header__input' type='text' placeholder='Search' />
                    <div className='header__box'>
                        <Link className='header__searchlink' to='/Upload'>
                            <button className='header__search'>UPLOAD</button>
                        </Link>
                        <img className='header__usericon' alt='your profile picture' src={userIcon} />
                    </div>
                </form>
            </header>
        );
    }
}

export default Header;