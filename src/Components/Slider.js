import { useDispatch } from "react-redux"; 

const VerticalSlider = ({ datas }) => {
  const dispatch = useDispatch();
  const scrollIncrement = 300;

  const handleScroll = event => { 
    const scrollPosition = event.currentTarget.scrollTop;
    const increments = Math.floor(scrollPosition / scrollIncrement);
    dispatch({ type : "CHANGE_IMAGE", payload: increments });
  }

  return (
      <div className="slider-list" onScroll={handleScroll}>
        {datas.map((item, index) => (
          <figure
            key={index}
            className='slider-list__image'
            >
              <img className="image-vertical-slider" src={item.cover} alt={item.title} />
          </figure>
        ))}
      </div>
  );
}

export default VerticalSlider;