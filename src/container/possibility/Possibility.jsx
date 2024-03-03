import React from 'react'
import './possibility.css'
import imagetwo from '../../assest/FeatureImage.png'
import{motion} from 'framer-motion'
const Possibility = () => {
  return (
    <div className='gpt3__features-possipility section__padding'>
      <motion.div
           initial={{
          x:-200,
          opacity:0
        }}
        transition={{
          duration:1.4
        }}
        whileInView={{
         x:0,
          opacity:1 
        }}
        className='gpt3__features-possipility-image'>
        <img src={imagetwo}  alt=''/>
      </motion.div>
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
        className='gpt3__features-possipility-content'>
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>

        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>

        <h4>Request Early Access to Get Started</h4>
      </motion.div>

    </div>
  )
}

export default Possibility
