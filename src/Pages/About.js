import Selfie from "../assets/Selfie.jpg"
import Facebook from "../assets/social Networks/facebook.png"
import LinkedIn from "../assets/social Networks/linkedin.png"
import Instagram from "../assets/social Networks/instagram.png"
import Heart from "../assets/heart.png"
import Experiences from "../Components/Experiences"
import Header from '../Components/Header'

const About = () => {
    return (
        <>
        <Header 
            title="Virginie RUDOWSKI" 
            text="dipie89@hotmail.fr"
        />
        <main className='about-theme'>      
            <section className="section-hero">
                <figure className="section-hero__picture">
                    <img src={Selfie} alt="Portrait" />
                </figure>
                <article className="section-hero__text">
                    <p>Je suis développeuse web dans le Sud-Ouest de la France. 
                        Je suis disponible pour des postes à temps plein et des projets freelance.
                    </p>
                    <figure className="section-hero__social-icons">
                        <img src={Facebook} alt="Facebook" />
                        <img src={Instagram} alt="Instagram" />
                        <img src={LinkedIn} alt="LinkedIn" />                        
                    </figure> 
                </article>                         
            </section>
            <section className="section-presentation">
                <blockquote className="section-presentation__blockquote">Je réalise l'intégration de sites web, designer par des pros, 
                    parfois, il m'arrive de créer mes propres designs.
                </blockquote>
                <article className="section-presentation__article">
                    <h3>AU TRAVAIL</h3>
                    <p>J'adore le travail d'équipe, mais j'adore travailler seule, vive la méthode AGILE! <br />
                        Si la réalisation ressemble à un casse-tête, alors je vais m'amuser. <br />
                        Si le challenge est temporel, je fais preuve d'efficience.
                    </p>
                </article> 
                <article className="section-presentation__article">
                    <h3>DANS LA VIE</h3>
                    <p>Je ne tiens pas en place et je suis pragmatique. Donc, quand une idée me passe <br />
                    par la tête, il faut essayer, quitte à apprendre de nouvelles choses ou à <br />
                    impliquer tous les copains.
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
            <section className="section-parcours">
                <blockquote className="section-presentation__blockquote">
                    Mettre ici une nouvelle phrase d'accroche
                </blockquote>
                < Experiences />                
            </section>    
        </main>
        </>
    )
}

export default About;