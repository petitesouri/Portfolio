import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExperiences } from '../redux/actions/datas.action'
import { motion } from 'framer-motion'

const Experiences = () => {    
  const dispatch = useDispatch()
  const containerRef = useRef(null);
  
  useEffect(() => {
    dispatch(getExperiences())
  },[dispatch])

  const experiences = useSelector(state => state.dataReducer.experiences)
  const experiencesBeforeLine = experiences ? experiences.slice(0, 25).filter((_, index) => index % 2 === 1) : [];
  const experiencesAfterLine = experiences ? experiences.slice(0, 25).filter((_, index) => index % 2 === 0) : [];
  
  useEffect(() => {
    const handleScroll = () => {
      const element = containerRef.current;

      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

        if (isVisible) {
          console.log('Element is visible');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <article className="section-career__experience" ref={containerRef}>
      <div className='section-career__experience-container beforeLine'>
        {experiencesBeforeLine.map((experience, index) => (          
          <motion.div
              key={index} 
              className='itemXP'
              initial={{ opacity: 0, x: -50 }} // Style initial avant l'animation
              animate={{ opacity: 1, x: 0 }}   // Style après l'animation
              transition={{ duration: 0.5, delay: index * 0.5 }} // Durée et délai personnalisés
              >
            <p>{experience.periode}</p>
            <p>{experience.poste}</p>
          </motion.div>          
        ))}
      </div>
        <div className="line"></div>
        <div className='section-career__experience-container afterLine'>
        {experiencesAfterLine.map((experience, index) => (          
          <motion.div
              key={index} 
              className='itemXP'
              initial={{ opacity: 0, x: 50 }} // Style initial avant l'animation
              animate={{ opacity: 1, x: 0 }}   // Style après l'animation
              transition={{ duration: 0.5, delay: index * 0.5 }} // Durée et délai personnalisés
              >
            <p>{experience.periode}</p>
            <p>{experience.poste}</p>
          </motion.div>          
        ))}
        </div>
    </article>
  );
}

export default Experiences;