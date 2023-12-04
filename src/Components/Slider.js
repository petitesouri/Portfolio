import { useDispatch } from "react-redux";
import { setSelectedImage } from "../redux/actions/datas.action"
import { openModal } from "../redux/actions/styles.action";

const VerticalSlider = ({ datasProject, sliderRef }) => {
  const dispatch = useDispatch();  

  const handleImageClick = (index) => {
    dispatch(setSelectedImage(index));
    dispatch(openModal(true));
  };
  
  return (
      <ul ref={sliderRef} className="slider-list" >
        {datasProject.map((item, index) => (
          <li key={index} className='slider-list__image'>
            <img 
                className="image-vertical-slider" 
                src={item.cover} 
                alt={item.title} 
                onClick={() => handleImageClick(index)}
                />
          </li>
        ))}
      </ul>
  );
}

export default VerticalSlider;
