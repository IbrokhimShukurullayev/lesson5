import React from 'react'
import "./cantact.scss"
import map from '../../assets/images/Map.png'

function Cantact() {
  return (
    <main>
      <section id='cantact'>
        <div className="container">
          <div className="cantact">
            <div className="cantact__left">
              <h2 className="cantact__title">
                Have a question ? Let’s get in touch with us.
              </h2>
              <p className="cantact__text">
                Fill up the Form  and ou team will get back to within 24 hrs  
              </p>
            </div>
            <div className="cantact__right">
              <div>
                <h2>Location</h2>
                <p>DLF Cybercity, Bhubaneswar, 
                  <br />India, &52050</p>
              </div>
              <div>
                <h2>Contact Us</h2>
                <p>020 7993 2905 
                  <br />hi@finsweet.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='forms'>
        <div className="container location">
          <form action="">
            <input type="text"  placeholder='First Name'/>
            <input type="text"  placeholder='Last Name'/>
            <input type="text"  placeholder='Email Id'/>
            <textarea placeholder='Type message' className='textarea' name="" id="" cols="30" rows="7"></textarea>
            <button className='about__button footer__button'>Submit </button>
          </form>
          <div>
            <img src={map} alt="" />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cantact