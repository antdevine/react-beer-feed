import React from 'react';
import {Link} from 'react-router-dom'

function NavBar() {
    return (
            <div className='navbar'>
            
                <div className='navbar__list'>
                    <ul>
                    <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/Beers">Beers</Link>
                        </li>
                        <li>
                            <Link to="/About">About</Link>
                        </li>

                    </ul>
                </div>
            </div>
    )
}

export default NavBar
