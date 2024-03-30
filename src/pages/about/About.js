import React from 'react'
import home1 from '../../assets/images/home1.png'
import './about.scss'
import { position } from '../../static'
import Hero from '../../components/hero/Hero'

function About() {
  return (
    <main className="main">
      <section id='about'>
        <div className="container">
          <div className="about">
            <div className="about__left">
              <h2 className="about__title">
                We hired people who are very passionate about what they do
              </h2>
              <p className="about__text">
                Through True Rich Attended does no end it his mother since real had half every him case in packages enquire we up ecstatic unsatiable saw.
              </p>
              <button className='about__button btn'>
                View Positions
              </button>
            </div>
            <div className="about__right">
              <img src={home1} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="position">
        <div className="container">
            <h2 className="position__title">
              See our open positions 
            </h2>
          <div className="position">
            {
              position?.map(({title , id, text , url})=><div key={id} className="position__card">
              <h2 className="position__card-text">
                {title}
              </h2>
              <p className="position__card-list">
                {text}
              </p>
              <a href="#">
                {url}
              </a>
            </div>)
            }
          </div>
        </div>
      </section>
      <Hero/>
    </main>
  )
}

export default About