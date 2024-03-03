import React from 'react'
import './navbar.css'
import{motion} from 'framer-motion'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assest/GPT-3.svg'
import { useState } from 'react'

const Menu = () => (
  <>
    <p><a href='#home'>home</a></p>
    <p><a href='#wgpt3'>what is GPT?</a></p>
    <p><a href='#possibility'>open AI</a></p>
    <p><a href='#features'>case studies</a></p>
    <p><a href='#blog'>library</a></p>
  </>
)

const Navbar = () => {

  const  [togglemenu, settogglemenu] = useState(false);
  return (
    <motion.div
         initial={{
         
          opacity:0
        }}
        transition={{
          duration:1.4
        }}
        whileInView={{
         
          opacity:1 
        }}
      
      className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links-logo'>
          <img  src={logo} alt='logo'/>

        </div>
        <div className='gpt3__navbar-links-container'>
          <Menu />
          </div>
          <div className='gpt3__navbar-sign'>
            <p> sign up</p>
            <button type='button'> sign in</button>
          </div>
          <div className='gpt3__navbar-menu'>
            {togglemenu
              ? <RiCloseLine color="#fff" size={27} onClick={() => settogglemenu(false)} />
              : <RiMenu3Line color="#fff" size={ 27} onClick={()=>settogglemenu(true)} />

            }
            {togglemenu && (
            <div className='gpt3__navbar-menu-container scale-up-center'>

                <div className='gpt3__navbar-menu-container-links'>
                <Menu />
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                <p>Sign in</p>
                <button type="button">Sign up</button>
              </div>
              </div>
            )}
        </div>
        </div>


      </motion.div>
   
  )
}

export default Navbar

 