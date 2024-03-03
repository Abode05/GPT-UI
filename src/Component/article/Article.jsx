import React from 'react'
import './article.css'
const Article = ({imgurl,date,text}) => {
  return (
    <div className='gpt3__blog-container_article'>
      <div className='gpt3__blog-container_article-image'>
        <img src={imgurl} alt='agp'/>
      </div>
      <div className='gpt3__blog-container_article-content'>
        <div>
        <p>{date}</p>
        <h3>{ text}</h3>
      </div>
        <p>Read Full Article</p>
        </div>
    </div>
  )
}

export default Article
