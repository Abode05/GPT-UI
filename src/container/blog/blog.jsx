import React from 'react'
import './blog.css'
import { Article } from '../../Component'
import { blog2, blog3, blog4 } from './import'
import{motion}from 'framer-motion'
const blog = () => {
  return (
    <div className='gpt3__blog section__padding'>
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
        className='gpt__blog-header gradient__text '>
        <h1>A lot is happening,<br/>
          We are blogging about it.</h1>
      </motion.div>
      <div className='gpt3__blog-container'>
        <motion.div
             initial={{
            x: -200,
          opacity:0
        }}
        transition={{
          duration:1.3
        }}
        whileInView={{
         x:0,
          opacity:1 
        }}
          className='gpt3__blog-container_groupA'>
          <Article imgurl={blog2} date={"Sep 26, 2021"} text={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}/>

        </motion.div>

        <motion.div
             initial={{
         x:200,
          opacity:0
        }}
        transition={{
          duration:1.4
        }}
        whileInView={{
         x:0,
          opacity:1 
        }}
          className='gpt3__blog-container_groupB'>
          <Article imgurl={blog3} date={"Sep 26, 2021"} text={"GPT-3 and Open  AI is the future. Let us exlore how it is"}/>
          <Article imgurl={blog3} date={"Sep 26, 2021"} text={"GPT-3 and Open  AI is the future. Let us exlore how it is"} />
          <Article imgurl={blog2} date={"Sep 26, 2021"} text={"GPT-3 and Open  AI is the future. Let us exlore how it is"}/>
          <Article imgurl={blog4} date={"Sep 26, 2021"} text={"GPT-3 and Open  AI is the future. Let us exlore how it is"}/>
        </motion.div>
      </div>
      
    </div>
  )
}

export default blog
