import React  from 'react';
import './Header.css';

const Header = props => {
    return(
        <div>
            <header id="header">
                <div className='container'>
                    <div id='logo' class='pull-left'>
                        <h1><a href='#body' class='scrollto'>Real<span>Valor</span></a></h1>
                        {/*<!-- Uncomment below if you prefer to use an image logo -->
                        <!-- <a href="#body"><img src="img/logo.png" alt="" title="" /></a>-->*/}
                    </div>

                    <nav id="nav-menu-container">
                        <ul className="nav-menu">
                            <li className="menu-active"><a href="#body">Home</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#team">Team</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default Header;