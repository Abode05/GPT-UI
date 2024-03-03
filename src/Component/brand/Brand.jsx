import React from 'react'
import './brand.css'
import { google, slak, atlasian, shopify, dropbox } from './import'
import {motion}from 'framer-motion'

const Brand = () => {
  return (
    <motion.div
         initial={{
         x:100,
          opacity:0
        }}
        transition={{
          duration:1.3
        }}
        whileInView={{
         x:0,
          opacity:1 
        }}
      className='gpt4__brand-section '>
      <div>
        <img src={google} alt='' />
      </div>
      <div>
        <img src={slak}alt='slake' />
      </div>
      <div>
        <img src={atlasian} alt='atlastan'/>
      </div>
      <div>
        <img src={dropbox} alt='' />
      </div>
      <div>
        <img src={shopify} alt='' />
      </div>
    </motion.div>
  )
}
export default Brand
