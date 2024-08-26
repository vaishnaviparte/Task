import React from 'react'
import './AboutSection.css'
import Images from './Images/about1.jpg'

const AboutSection = () => {
  return (
    <div className='about-container'>
        <div className='about-content'>
            <div className='about-image'>
                <img src={Images}  alt='About Us' className='image'/>
            </div>
            <div className='about-text'>
                <h2 className='animated-heading'>About Us</h2>
                <p>
                Welcome to MIT-Vishwajyoti International School, Mumbai. Nestled at the very foothills of the Ghats 
                touching the city of Mumbai and spread over a pristine 14-acres is the completely eco-friendly and
                zero waste campus of MIT-Vishwajyoti International School. Designed to harmonize with nature and 
                to provide an island of peace within the chaos of Mumbai, the campus endeavors to provide the
                perfect backdrop to nurture talented students and to help them find not only their vocation for 
                life but also themselves.    
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection