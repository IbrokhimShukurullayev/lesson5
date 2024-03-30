import React from 'react'
import "./form.scss"

function Form() {
  return (
    <section id="form">
        <div className="container">
            <form action="">
                <div className="form">
                    <input type="text"  placeholder='First Name'/>
                    <input type="text"  placeholder='Last Name'/>
                    <input type="text"  placeholder='Email Id'/>
                    <input type="text"  placeholder='Mobile No'/>
                </div>
                <div className="form__textarea">
                    <textarea className='textarea' name="" id="" cols="30" rows="10" placeholder='Why do you thing you are good fit for Ether?'></textarea>
                </div>
                <button className='about__button footer__button'>Submit </button>
            </form>
        </div>
    </section>
  )
}

export default Form