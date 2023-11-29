import React from 'react';
import VerticalSlider from '../Components/Slider';
import { useSelector } from "react-redux"
import ArrowSand from '../assets/arrow-sand.png'

const Landing = ({ datasProject, datasSkills }) => { 
  const selectedImage = useSelector(state => state.dataReducer.image);
  const text = (
    datasProject.map((item, index) => {
      if (selectedImage === index) { 
        return (             
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </div>                
      )}
    })
  )
  const handleClickDots = (event) => {
    console.log(event.target)
  }

  return (
    <main className='main-theme'>
      <div className='section-left'>
        <section className="section-text">
          { text }
        </section>
        <section>
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
        <VerticalSlider id='showScroll' datasProject={datasProject}/>
      </section>
      <section className='dots'>
          {datasProject.map((item, index) => (            
              <div 
                key={item.id} 
                className={selectedImage === index ? 'dots_dot selected' : 'dots_dot'}
                onClick={handleClickDots}>
              </div>           
          ))}
      </section>
    </main>
  );
}

export default Landing;