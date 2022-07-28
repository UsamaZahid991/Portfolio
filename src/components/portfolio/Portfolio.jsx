import React from 'react'
import './portfolio.css'
import pubq from '../../assets/pubq.png'
import khareed from '../../assets/k.jpg'
import mess from '../../assets/mess.png'
import pharmacy from '../../assets/phar.jpg'

const data = [
  {
    id:1,
    image: pubq,
    title:'PUBQ - Ongoing',
    github:'https://github.com/PubQSwe',
    demo:'http://google.com'
  },
  {
    id:2,
    image: khareed,
    title:'Khareed.pk - Ecommerce',
    github:'https://github.com',
    demo:'http://google.com'
  },
  {
    id:3,
    image: mess,
    title:'Mess Management System',
    github:'https://github.com',
    demo:'http://google.com'
  },
  {
    id:4,
    image: pharmacy,
    title:'Pharmacy Management System',
    github:'https://github.com',
    demo:'http://google.com'
  }

]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title}) => {
            return(
              <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
              </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a  className='btn'>GitHub</a>
                <a  className='btn btn-primary'>Live Demo</a>
                </div>
              </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio