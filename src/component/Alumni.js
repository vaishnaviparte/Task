import './Alumni.css'
import { useEffect,useState} from 'react';
import React from 'react'
import Images from './Images/clg.jpg'

const Alumni = () => {
    const [alumni, setAlumni] = useState(0);
    const [universities, setUniversities] = useState(0);
    const [institutes, setInstitutes] = useState(0);
    const [campuses, setCampuses] = useState(0);
    
    useEffect(() => {
      const incrementNumber = (setNumber, target, duration) => {
        let start = 0;
        const increment = target / duration;
        const interval = setInterval(() => {
          start += increment;
          if (start >= target) {
            setNumber(target);
            clearInterval(interval);
          } else {
            setNumber(Math.floor(start));
          }
        }, 1);
      };
    
      incrementNumber(setAlumni, 100000, 1000); 
      incrementNumber(setUniversities, 4, 1000); 
      incrementNumber(setInstitutes, 65, 1000); 
      incrementNumber(setCampuses, 12, 1000); 
    }, []);
    
    return (
      <div className="app">
        <div className="legacy-section">
          <div className="text-container">
            <h2 className='animated-heading'>The MIT Legacy</h2>
            <p>
              We are more than an organization, we are a legacy. Although only 4 decades old, we derive from the spiritual and cultural legacy of education in India with its history spanning over 5000 years. Thus we are the successors of the Guru – Shishya Parampara as well as the Gurukul tradition and this reflects in the way we blend the traditional with the modern.
            </p>
          </div>
          <div className="image-container">
            <img src={Images} alt="MIT Legacy" className="legacy-image" />
          </div>
        </div>
    
        <div className="numbers-section">
          <div className="number">
            <h2>{alumni.toLocaleString()}+</h2>
            <p>Alumni</p>
          </div>
          <div className="number">
            <h2>{universities}</h2>
            <p>Universities</p>
          </div>
          <div className="number">
            <h2>{institutes}+</h2>
            <p>Institutes</p>
          </div>
          <div className="number">
            <h2>{campuses}+</h2>
            <p>Campuses</p>
          </div>
        </div>
      </div>
    )
}

export default Alumni
