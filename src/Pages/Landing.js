import VerticalSlider from "../Components/Slider";
import useFetch from "../Components/useFetch";

const Landing = () => {
    const datas = useFetch();
        // Lenght à envoyer dans REDUX: console.log(datas.lenght)
    // console.log(datas.length)

    return (
        <main>
            <div className="section-bar"></div>
            <section className="section-text">
                <div>section texte</div>
            </section>
            <section className="section-slider">
                <div>section slider</div>
                <VerticalSlider datas={datas}/>
            </section>
        </main>
    )
}

export default Landing;