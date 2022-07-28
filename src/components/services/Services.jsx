import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
      <article className="services">
        </article>

        <article className="services extra">
          <div className="services__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className='service__list-icon' />
              <p>Mobile App </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Web App</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Desktop Application</p>
            </li>            
          </ul>
        </article>
        {/*End of Web DEV*/}
        <article className="services">
        </article>
      </div>
    </section>
  )
}

export default Services