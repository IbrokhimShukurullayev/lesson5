import React from 'react'
import { card } from '../../static'
// import card1 from "../../assets/images/card1.png"
import { FaArrowRightLong } from "react-icons/fa6";
import Card from '../card/Card';
import './hero.scss'

function Hero() {
  return (
    <section id="row">
        <div className="container">
          <h2 className="row__title">
            Latest Blog & News
          </h2>
          <div className="row">
            <Card/>
          </div>
        </div>
      </section>
  )
}

export default Hero