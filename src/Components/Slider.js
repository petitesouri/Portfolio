import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const VerticalSlider = ({ datas }) => {

    const settings = {
        dots: true,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1.5,
        slidesToScroll: 1,
    }

    return (
        <>
        <div className="vertical-slider-container">
            <Slider {...settings}>
                {datas.map((cover, index) => (
                <div key={index}>
                    <img src={cover.cover} alt={cover.title} />
                </div>
                ))}
            </Slider>
        </div>
        </>
    )
}

export default VerticalSlider;