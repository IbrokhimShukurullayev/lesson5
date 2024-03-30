import React from 'react'
import CareersHome from '../../components/careersHome/CareersHome'
import Form from '../../components/form/Form'

function Careers() {
  return (
    <main >
      <CareersHome/>
      <div className="container">
        <h2 className="row__title">
            All posts
        </h2>
      </div>
      <Form/>
    </main>
  )
}

export default Careers