import React from 'react'
import './feature.css'
import { motion }from 'framer-motion'
const Feature = ({ title, text }) => {
  return (
    <motion.div
         initial={{
         
          opacity:-1
        }}
        transition={{
          duration:1.9
        }}
        whileInView={{
         
          opacity:1 
        }}
      className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div></div>
    
        <h1>{ title}</h1>
      </div>
      <div className="gpt3__features-container_feature-text">
        <p>{text}</p>
      </div>

    </motion.div>

  )
}
export default Feature
