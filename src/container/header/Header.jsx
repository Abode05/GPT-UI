import React from 'react'
import './header.css'
import head from '../../assest/Header Illustration.png'
import people from '../../assest/Group 81.png'
import {motion} from 'framer-motion'
const Header = () => {
    return ( 
        <motion.div
             initial={{
         y:100,
          opacity:0
        }}
        transition={{
          duration:1.4
        }}
        whileInView={{
         y:0,
          opacity:1 
        }}
            className='header__container  section__padding" id="home'>
            <div className="header__content">
                <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing.
                Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                Party we years to order allow asked of.</p>
          
            <div className="header-content__input">
                <input type='email' placeholder='your email' />
                <button>Get started</button>
            </div>
            <div className="header__content-people">
                <img src={people} alt='' />
                <p>1,600 people requested access a visit in last 24 hours</p>
                </div>
                
            </div>
            <motion.div
                initial={{
                        x: 100,
                         opacity:0
                }}
                     transition={{
                duration:1.9
                }}
                whileInView={{
                x: 0,
                opacity:1 
                }}
                className="header__image">
                <img src={head} alt=''/>
            </motion.div>
           

        </motion.div>
    )
}

export default Header