
import Hero from './../../components/Hero/Hero'
import './About.css'

export default function About() {


  return (
    <>
      <Hero Title={'About'} x={false} img={"Hero2"} />
       
        <div className='PopUp'>
          <h3>سيتم برمجة هذه الصفحة قريبا </h3>

      </div> 
    </>
  )
}


/*
import React, { useEffect, useState } from 'react'
import Hero from '../../Components/Hero/Hero'
import './About.css'

import { Link } from 'react-router-dom'


export default function About() {

  const [open , setopen] = useState(false)

function HandelOpening ()  
 {
    setopen(!open)
   }
  return (
    <>
      <Hero Title={'About'} x={false}/>
     <button className='Btn' onClick={() => HandelOpening()}>{!open ? 'open' : 'close'}</button> 
       <div className={open ? 'Active' : 'desActive'}>
        <div className='PopUp'>
          <h3>Do You Wont TO Say Hello</h3>
          <div>
            <button><Link to={'/'}>Yes</Link></button>
            <button  onClick={() => setopen(false)}>No</button>
          </div>
        </div>
      </div> 
    </>
  )
}

*/
