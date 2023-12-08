import Modal from '../Components/Modal'
import { openModal, contactMode } from '../redux/actions/styles.action';
import { useSelector, useDispatch } from "react-redux"

import Selfie from "../assets/Selfie.webp"
// import Facebook from "../assets/social Networks/facebook.webp"
import LinkedIn from "../assets/social Networks/linkedin.webp"
// import Instagram from "../assets/social Networks/instagram.webp"
import GitHub from "../assets/social Networks/github.webp"
import Heart from "../assets/heart.webp"
import Experiences from "../Components/Experiences"
import Header from '../Components/Header'

const About = () => {
    const dispatch = useDispatch()
    const isModalOpen = useSelector(state => state.stylesReducer.isModalOpen)
    
    const handleOpenModal = () => {
        dispatch(openModal(true));
        dispatch(contactMode(true));
    };
    
    return (
        <>
        <Header 
            path="about"
            title="<- RETOUR" 
            text="dipie89@hotmail.fr"
            specificLink="/about#contact"
        />
        <main className='about-theme'>      
            <section className="section-hero">
                <figure className="section-hero__picture">
                    <img src={Selfie} alt="Portrait" />
                </figure>
                <article className="section-hero__text">
                    <p>Je suis intégratrice web dans le Sud-Ouest de la France.
                        Vous avez un projet complètement fou? 
                        Vous vous sentez l'âme d'un artiste numérique,
                        ou vous avez tout simplement besoin d'un coup de main ?
                    </p>
                    <p>
                        Parlons en!
                    </p>
                    <figure className="section-hero__social-icons">
                        {/* <img src={Facebook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" /> */}
                        <a href='https://www.linkedin.com/in/virginie-rudowski-7b154b294/' target="_blank" rel="noopener noreferrer">
                            <img src={LinkedIn} alt="LinkedIn" /> 
                        </a>
                        <a href={`https://github.com/petitesouri`} target="_blank" rel="noopener noreferrer">
                            <img src={GitHub} alt="GitHub" />
                        </a>                                               
                    </figure> 
                </article>                         
            </section>
            <section className="section-presentation">
                <blockquote className="section-presentation__blockquote">
                    J'ai commencé en autodidacte sur WordPress.
                    Avec mon expérience professionnel et la formation chez OpenClassrooms, 
                    je suis prête à relever tous les challenges.                    
                </blockquote>
                <article className="section-presentation__article">
                    <h3>AU TRAVAIL</h3>
                    <p>J'adore le travail d'équipe, mais j'écoute parfois la musique assez fort.
                        Les casse-tête m'amusent. Je peux être hyper-concentrée.
                        Je mange des fraises Tagada et je malaxe ma boule anti-stress.
                    </p>
                </article> 
                <article className="section-presentation__article">
                    <h3>DANS LA VIE</h3>
                    <p>
                        Je ne tiens pas en place, un véritable coup de vent!
                        J'apprend, j'essaye, j'ai des plans plein la tête, et les mains occupées.
                        C'est moi qui conduit mais ça n'est pas moi qui choisi la destination. 
                    </p> 
                </article>               
            </section>
            <section className="section-like">
                <div className="section-like__image-container">
                    <img className="section-like__heart" src={Heart} alt="What i like" />
                </div>
                <div className="section-like__text-container">
                    <p className="section-like__headband">
                        sourire naviguer expérimenter voyager sushi optimiser rugby
                    </p>
                </div>
            </section>  
            <section className="section-career">
                <blockquote className="section-presentation__blockquote">
                    On vit dans une époque formidable. On peut tout apprendre, tout le temps.
                    Et si je vous disais que j'ai des bouquins pour apprendre le chinois et l'italien, cela vous étonne?
                </blockquote>
                < Experiences />                
            </section> 
            <section className="section-contact">
                <p className="contact-button" onClick={handleOpenModal}>Me contacter</p>
                <Modal 
                    isOpen={isModalOpen} 
                    onClose={() => dispatch(openModal(false))}
                />
                <figure className="section-hero__social-icons">
                    {/* <img src={Facebook} alt="Facebook" />
                    <img src={Instagram} alt="Instagram" /> */}
                    <img src={LinkedIn} alt="LinkedIn" /> 
                    <img src={GitHub} alt="GitHub" />                       
                </figure>
            </section>
        </main>
        </>
    )
}

export default About;