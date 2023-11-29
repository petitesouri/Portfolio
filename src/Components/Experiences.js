import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getExperiences } from '../redux/actions/datas.action'

const Experiences = () => {    
  const dispatch = useDispatch()
  

  useEffect(() => {
    dispatch(getExperiences())
  },[dispatch])

  const experiences = useSelector(state => state.dataReducer.experiences)
  const experiencesBeforeLine = experiences ? experiences.slice(0, 25).filter((_, index) => index % 2 === 1) : [];
  const experiencesAfterLine = experiences ? experiences.slice(0, 25).filter((_, index) => index % 2 === 0) : [];
  

  return (
    <article className="section-parcours__experience" >
        {experiencesBeforeLine.map((experience, index) => (
            <div key={index}>
                <p>{experience.periode}</p>
                <p>{experience.poste}</p>
            </div>
        ))}
        <div className="line"></div>
        {experiencesAfterLine.map((experience, index) => (
            <div key={index}>
                <p>{experience.periode}</p>
                <p>{experience.poste}</p>
            </div>
        ))}
    </article>
  );
}

export default Experiences;