import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar () {
    return (
        <nav className='container-nav'>
            <h1 className='container-app'>World Population</h1>
            <Link to='/'>
                <li>Home</li>
            </Link>
        </nav>    
    )
}

export default Navbar;