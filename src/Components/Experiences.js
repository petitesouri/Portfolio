import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExperiences } from '../redux/actions/datas.action'
import {  setSectionVisibility } from '../redux/actions/styles.action'
import { motion, useAnimation } from 'framer-motion'

const Experiences = () => {    
  const dispatch = useDispatch()
  const containerRef = useRef(null);
  const lineControls = useAnimation();
  
  useEffect(() => {
    dispatch(getExperiences())
  },[dispatch])

  const experiences = useSelector(state => state.dataReducer.experiences)
  const experiencesBeforeLine = experiences ? experiences.slice(0, 25).filter((_, index) => index % 2 === 1) : [];
  const experiencesAfterLine = experiences ? experiences.slice(0, 25).filter((_, index) => index % 2 === 0) : [];
  
  const isSectionVisible = useSelector((state) => state.stylesReducer.isSectionVisible);

  useEffect(() => {
    const handleScroll = async () => {
      const element = containerRef.current;

      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

        if (isVisible && !isSectionVisible) {
          await lineControls.start({ y: '100%' });
          dispatch(setSectionVisibility(true));
        }
        else if (!isVisible && isSectionVisible) {
          await lineControls.start({ y: '0' });
          dispatch(setSectionVisibility(false));
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lineControls, isSectionVisible]);

  

  return (
    <article className="section-career__experience" ref={containerRef}>
      <div className='section-career__experience-container beforeLine'>
        {experiencesBeforeLine.map((experience, index) => (          
          <motion.div
              key={index}
              className={`itemXP ${isSectionVisible ? 'visible' : ''}`} 
              initial={{ opacity: 0, x: -50 }}
              animate={{ x: isSectionVisible ? 0 : -50, opacity: isSectionVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }}
              >
            <p>{experience.periode}</p>
            <p>{experience.poste}</p>
          </motion.div>          
        ))}
      </div>
      <motion.div
        className={`line ${isSectionVisible ? 'visible' : ''}`}
        animate={{ height: isSectionVisible ? '100%' : 0, opacity: isSectionVisible ? 1 : 0 }}
        initial={{ height: 0, opacity: 0 }}
        transition={{ duration: 4, ease: 'easeInOut' }}
      >
      </motion.div>
      <div className='section-career__experience-container afterLine'>
        {experiencesAfterLine.map((experience, index) => (          
          <motion.div
              key={index} 
              className={`itemXP ${isSectionVisible ? 'visible' : ''}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ x: isSectionVisible ? 0 : 50, opacity: isSectionVisible ? 1 : 0 }}
              transition={{ duration: 0.5, delay: index * 0.5 }} 
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