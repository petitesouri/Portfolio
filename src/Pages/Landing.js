import React from 'react';
import VerticalSlider from '../Components/Slider';
import { useSelector } from "react-redux"
// télécharger une arrow

import FigmaLogo from '../assets/Figma.png';
import GHLogo from '../assets/GITHUB.png';
import JSLogo from '../assets/javascript-logo-transparent-logo-javascript-images-3.png'
import ReactLogo from '../assets/REACT.png'
import ReduxLogo from '../assets/Redux.png'
import SassLogo from '../assets/SASS.png'
import WordpressLogo from '../assets/WORDPRESS.png'

const Landing = ({ datas }) => { 
  const selectedImage = useSelector(state => state.dataReducer.image);
  const text = (
    datas.map((item, index) => {
      if (selectedImage === index) { 
        return (             
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>                
      )}
    })
  )

  return (
    <main className='main-theme'>
      <div className='section-left'>
        <section className="section-text">
          { text }
        </section>
        <section>
          <p>Découvrez mes projets </p> 
        </section>
        <section className='section-skills'>
          <div className='section-skills__logos'>
            <img src={FigmaLogo} alt="Figma" />
            <img src={GHLogo} alt="Github" />
            <img src={JSLogo} alt="Javascript" />
            <img src={ReactLogo} alt="React" />
            <img src={ReduxLogo} alt="Redux" />
            <img src={SassLogo} alt="Sass" />
            <img src={WordpressLogo} alt="Wordpress" /> 
          </div>
        </section>
      </div>
      <section className="section-slider">
        <VerticalSlider id='showScroll' datas={datas}/>
      </section>
      <section className='dots'>
          {datas.map((item, index) => (            
              <div key={item.id} className={selectedImage === index ? 'dots_dot selected' : 'dots_dot'}>
              </div>           
          ))}
      </section>
    </main>
  );
}

export default Landing;