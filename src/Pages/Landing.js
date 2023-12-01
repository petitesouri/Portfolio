import React from 'react';
import VerticalSlider from '../Components/Slider';
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux"
import { setSelectedImage } from '../redux/actions/datas.action';
import ArrowSand from '../assets/arrow-sand.png'
import Header from '../Components/Header'

const Landing = ({ datasProject, datasSkills }) => { 
  
  const dispatch = useDispatch()
  const sliderRef = useRef()
  const selectedImage = useSelector(state => state.dataReducer.index);

  const text = (
    datasProject.map((item, index) => { 
      if (selectedImage === index) { 
        return (             
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>                
      )} else {
        return null
      }
    })
  )

  const handleClickDots = (index) => {
    dispatch(setSelectedImage(index));
  }

  return (
    <div className='landing-page'>
    <Header
      path="landing" 
      title="Virginie RUDOWSKI" 
      text="A propos"
    />
    <main className='main-theme'>
      <div className='section-left'>
        <section className="section-text">
          { text }
        </section>
        <section className="section-text-link">
          <p>Découvrez mes projets </p>
          <img src={ArrowSand} alt="arrow-sand" />
        </section>
        <section className='section-skills'>
          <div className='section-skills__logos'>
            { datasSkills.map((item, index) => (
              <img key={index} src={item.src} alt={item.title} />
            )) }
          </div>
          
        </section>
      </div>
      <section className="section-slider">
        <VerticalSlider id='showScroll' sliderRef={sliderRef} datasProject={datasProject}/>
      </section>
      <section className='dots'>
          {datasProject.map((item, index) => (            
              <div 
                key={item.id} 
                className={selectedImage === index ? 'dots_dot selected' : 'dots_dot'}
                onClick={() => handleClickDots(index)}>
              </div>           
          ))}
      </section>
    </main>
    </div>
  );
}

export default Landing;