import React from 'react';
import logo from '../assets/images/logo.svg';
import search from '../assets/images/search.svg';
import store from '../assets/images/store.svg';

function Nav() {
    return ( 
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <ul className='list-styled'>
                <li>
                    <img src={logo} alt="Apple" />
                </li>
                <li>
                    <a className='link-styled'>Store</a>
                </li>
                <li>
                    <a className='link-styled' >Mac</a>
                </li>
                <li>
                    <a className='link-styled' >iPad</a>
                </li>
                <li>
                    <a className='link-styled' >iPhone</a>
                </li>
                <li>
                    <a className='link-styled' >Watch</a>
                </li>
                <li>
                    <a className='link-styled' >AirPods</a>
                </li>
                <li>
                    <a className='link-styled' >tv & Home</a>
                </li>
                <li>
                    <a className='link-styled' >Entertainment</a>
                </li>
                <li>
                    <a className='link-styled' >Acessories</a>
                </li>
                <li>
                    <a className='link-styled' >Support</a>
                </li>
                <li>
                    <img src={search} alt="Search" />
                </li>
                <li>
                    <img src={store} alt="store" />
                </li>

            </ul>

        </div>
        
    </nav> 
);
}

export default Nav;<nav>
</nav>