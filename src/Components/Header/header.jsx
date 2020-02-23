import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import './header.scss';
import Logo from '../../Assets/Logo/Logo-brainflix.jsx';
import userIcon from './../../Assets/Images/Mohan-muruge.jpg';

class Header extends React.Component {
    render(
        //     (
        //     <Router>
        //     <Route path='/' component={App} />
        // </Router>
        // )
    ) {
        const { match } = this.props

        return (
            <header className='header'>
                <Logo className='header__logo' />
                <form className='header__form'>
                    <input className='header__input' type='text' placeholder='Search' />
                    <div className='header__box'>
                        <button className='header__search' onClick={this.goToUpload}>UPLOAD</button>
                        <img className='header__usericon' alt='your profile picture' src={userIcon} />
                    </div>
                </form>
            </header>
        );
    }
}

export default Header;