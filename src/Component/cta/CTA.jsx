import React from 'react'
import './cta.css'
import{motion} from 'framer-motion'
const CTA = () => {
  return (
    < motion.div
           initial={{
         
          opacity:0
        }}
        transition={{
          duration:1.4
        }}
        whileInView={{
         
          opacity:1 
        }}
      className='gpt3__cta  '>
      <div className='gpt3__cta-content'> 
        <p>Request Early Access to Get Started</p>
      <h3>Register today & start exploring the endless possiblities.</h3>
      </div>
      <div className='gpt3__cta-button'>
        <button type='button'>get started</button>

      </div>
    </motion.div>
  )
}

export default CTA
