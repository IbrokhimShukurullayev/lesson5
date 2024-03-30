import React from 'react'
import Card from '../../components/card/Card'
import Home from '../../components/home/Home'
import './blog.scss'

function Blog() {
  return (
    <main>
      <Home/>
      <div className="container row__card">
        <h2 className="row__title">
            All posts
        </h2>
        <Card/>
        <br />
       <Card/>
      </div>
    </main>
  )
}

export default Blog