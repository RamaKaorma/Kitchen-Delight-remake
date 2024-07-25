import React from 'react';
import './Navbar.scss';
import { images } from '../../constants';
// import { HiMenuAlt4, HiX } from 'react-icons/hi';
// import { motion } from 'framer-motion';

const Navbar = () => {
  // Toggle navbar sidebar on and off for phone
  // const [toggle, setToggle] = useState(false);


  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <h6>KT</h6>
      </div>
      <div className='app__navbar-links'>
        {["header", "recipe"].map((item) => (
          <li className='app__flex p-text' key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </div>
    </nav>
  )
}

export default Navbar;
