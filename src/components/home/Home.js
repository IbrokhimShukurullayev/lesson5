import React from 'react'
import homes1 from "../../assets/images/homes1.png"
import homes2 from "../../assets/images/homes2.png"
import './Home.scss'
import { FaArrowRightLong } from "react-icons/fa6";

function Home() {
  return (
    <section id='home'>
        <div className="container">
            <div className="home">
                <div className="home-right">
                    <div className="home__person">
                        <div>
                            <img src={homes1} alt="" />
                            <p>Andrew Jonson</p>
                        </div>
                        <p>Posted on 27th January 2021</p>
                    </div>
                    <h2 className="home__title">
                        Our internal process and longerm vision
                    </h2>
                    <p className="home__text">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The Maker is a decentralized. We aim to attain the
                    </p>
                    <a className='card__link' href="#">Read More <FaArrowRightLong /></a>
                </div>
                <div className="home__left">
                    <img src={homes2} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home