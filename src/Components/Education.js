import OpenClassrooms from '../assets/educations-logos/_open classroom logo.webp'
import Academy from '../assets/educations-logos/Education nationale.png'
import University from '../assets/educations-logos/IUT.jpg'
import Army from '../assets/educations-logos/logo armee de terre.jpg'

const Educations = () => {    
  return (
    <>
    <blockquote className="section-presentation__blockquote">
        On vit dans une époque formidable. On peut tout apprendre, tout le temps.
        Et si je vous disais que j'ai des bouquins pour apprendre le chinois et l'italien, cela vous étonne?
    </blockquote>
    <article className="section-education__article-img">
        <img src={ Academy } alt={Academy}/>
        <img src={ Army } alt={Army}/>
        <img src={ University } alt={University}/>
        <img src={ OpenClassrooms } alt={OpenClassrooms}/>           
    </article>
    <article className="section-education__article-text">
        <p>1994</p>
        <p>1996</p>
        <p>2016</p>
        <p>2023</p>
    </article>
    </>
  );
}

export default Educations;