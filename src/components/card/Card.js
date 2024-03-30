import React from 'react'
import { card } from '../../static'
import { FaArrowRightLong } from "react-icons/fa6";
import "./card.scss"

function Card() {
  return (
    <div className='row'>{
              card?.map(({title , id , text , url , image})=>
              <div key={id} className="card">
              <img src={image} alt="" />
              <div className="card__body">
                <h2 className="card__title">
                  {title}
                </h2>
                <p className="card__text">
                  {text}
                </p>
                <a className='card__link' href="#">{url}<FaArrowRightLong /></a>
              </div>
            </div>)
            }</div>
  )
}

export default Card