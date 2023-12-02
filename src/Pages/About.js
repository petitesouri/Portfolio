import Selfie from "../assets/Selfie.jpg"
import Facebook from "../assets/social Networks/facebook.png"
import LinkedIn from "../assets/social Networks/linkedin.png"
import Instagram from "../assets/social Networks/instagram.png"
import Heart from "../assets/heart.png"
import Experiences from "../Components/Experiences"
import Header from '../Components/Header'
import Educations from "../Components/Education"

const About = () => {
    return (
        <>
        <Header 
            path="about"
            title="<- RETOUR" 
            text="dipie89@hotmail.fr"
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
                        ou vous avez tout simplement une surcharge de travail ?
                    </p>
                    <p>
                        Parlons en!
                    </p>
                    <figure className="section-hero__social-icons">
                        <img src={Facebook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={LinkedIn} alt="LinkedIn" />                        
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
            {/* <section className="section-education">
                <Educations/>
            </section>    */}
        </main>
        </>
    )
}

export default About;