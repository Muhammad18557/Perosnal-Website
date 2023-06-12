import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './Header.css'
import Abdullah from './logoimage/Abdullah-logo.png'
function Header() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


  return (
    <nav>
    <div className='header-container'>
        <div>
            <Link to='/' onClick={closeMobileMenu}>
            <img src={Abdullah} alt='Abdullah' className='header-logo' />
            </Link>
        </div>
        <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>
        <div>
            <ul className={click ? 'menu active' : 'menu'}>
                <li className='menu-item'> <Link to='/'  className='menu-links' onClick={closeMobileMenu}>Home</Link> </li>
                <li className='menu-item'> <Link to='/education' className='menu-links' onClick={closeMobileMenu}> Education</Link></li>
                <li className='menu-item'> <Link to='/projects' className='menu-links' onClick={closeMobileMenu}> Projects</Link> </li>
                <li className='menu-item'> <Link to='/work' className='menu-links' onClick={closeMobileMenu}> Experience</Link></li>
                <li className='menu-item'> <Link to='/admin' className='menu-links' onClick={closeMobileMenu}> Admin</Link></li>
                {/* <li className='menu-item'> <Link to='/blogs' className='menu-links' onClick={closeMobileMenu}> blogs</Link></li> */}
            </ul>
        </div>
        
    </div>
    </nav>
  )
}

export default Header
