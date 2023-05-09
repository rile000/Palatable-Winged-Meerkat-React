import React from 'react'

import { Helmet } from 'react-helmet'

import Component1 from '../components/component1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Palatable Winged Meerkat</title>
        <meta property="og:title" content="Palatable Winged Meerkat" />
      </Helmet>
      <div className="home-container1">
        <span className="home-text">1</span>
        <span className="home-text1">H</span>
        <div className="home-container2"></div>
      </div>
      <div className="home-container3">
        <button className="button home-button">+</button>
      </div>
      <div className="home-rectangle2">
        <svg viewBox="0 0 1024 1024" className="home-icon">
          <path d="M426 854h-212v-342h-128l426-384 426 384h-128v342h-212v-256h-172v256z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="home-icon2">
          <path d="M768 682l86 86v42h-684v-42l86-86v-212q0-100 51-174t141-96v-30q0-26 18-45t46-19 46 19 18 45v30q90 22 141 96t51 174v212zM512 938q-36 0-61-24t-25-60h172q0 34-26 59t-60 25z"></path>
        </svg>
        <svg viewBox="0 0 1024 1024" className="home-icon4">
          <path d="M512 662q62 0 106-44t44-106-44-106-106-44-106 44-44 106 44 106 106 44zM830 554l90 70q14 10 4 28l-86 148q-8 14-26 8l-106-42q-42 30-72 42l-16 112q-4 18-20 18h-172q-16 0-20-18l-16-112q-38-16-72-42l-106 42q-18 6-26-8l-86-148q-10-18 4-28l90-70q-2-14-2-42t2-42l-90-70q-14-10-4-28l86-148q8-14 26-8l106 42q42-30 72-42l16-112q4-18 20-18h172q16 0 20 18l16 112q38 16 72 42l106-42q18-6 26 8l86 148q10 18-4 28l-90 70q2 14 2 42t-2 42z"></path>
        </svg>
      </div>
      <div className="home-container4">
        <button className="button home-button1">Bedroom</button>
        <button className="button home-button2">Living Room</button>
        <button className="button home-button3">Kitchen</button>
        <Component1 className="home-component"></Component1>
      </div>
    </div>
  )
}

export default Home
