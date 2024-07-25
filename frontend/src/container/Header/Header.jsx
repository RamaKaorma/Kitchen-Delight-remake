import React from 'react';
import './Header.scss';
import { motion } from 'framer-motion'

const Header = () => {
  return (
    
    <div className='app__header app__container app__flex app__primarybg'>
      <motion.div 
        id="link-header" 
        whileInView={{ opacity: [0,1], y: [-200, 0]}}
        transition={{duration: 1}}
      >
        <h2 className='app__header-title'>
          <span className='app__header-title-word title-word-1'>Kitchen </span>
        </h2>
      </motion.div>
      <motion.div 
        id="link-header" 
        whileInView={{ opacity: [0,1], y: [200, 0]}}
        transition={{duration: 1}}
      >
        <h2 className='app__header-title'>
          <span className='app__header-title-word title-word-2'>Delight </span>
        </h2>
      </motion.div>
      <motion.div 
        id="link-header" 
        whileInView={{ opacity: [0,1], y: [-200, 0]}}
        transition={{duration: 1}}
      >
        <h2 className='app__header-title'>
          <span className='app__header-title-word title-word-3'>Recipes</span>
        </h2>
      </motion.div>
    </div>
  )
}

export default Header;
