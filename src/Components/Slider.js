import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { setSelectedImage } from "../redux/actions/datas.action"
import { debounce } from "lodash";

const VerticalSlider = ({ datasProject, sliderRef }) => {
  const dispatch = useDispatch();  
  const scrollIncrementRef = useRef(); 
  const scrollIncrementPercentage = 0.8;
  const selectedIndex = useSelector((state) => state.dataReducer.index);

  // controle du nombre de dispatch au scroll de slider
  const debouncedScrollHandler = debounce(() => {
    if (sliderRef.current && scrollIncrementRef.current) {
      const scrollPosition = sliderRef.current.scrollTop;
      const visibleIndex = Math.round(scrollPosition / scrollIncrementRef.current);
      dispatch(setSelectedImage(visibleIndex));
    }
  }, 200);

  // mesure de la première image
  useEffect(() => {
    if (sliderRef.current && sliderRef.current.firstChild) {
      const measureElementHeight = () => {
        const firstElement = sliderRef.current.firstChild;
        if (firstElement) {
          const elementHeight = firstElement.clientHeight;
          scrollIncrementRef.current = elementHeight * scrollIncrementPercentage;
        }
      };
      measureElementHeight();
      window.addEventListener("resize", measureElementHeight);

      return () => {
        window.removeEventListener("resize", measureElementHeight);
      };
    }
  }, [datasProject, sliderRef]);

  useEffect(() => {
    if (sliderRef.current && sliderRef.current.children[selectedIndex]) {
      const selectedImageElement = sliderRef.current.children[selectedIndex];
      const offset =
        selectedImageElement.offsetTop -
        sliderRef.current.clientHeight / 2 +
        selectedImageElement.clientHeight / 2;
      sliderRef.current.scrollTo({ top: offset, behavior: "smooth" });
    }
  }, [selectedIndex, sliderRef]);
  
  const handleScroll = () => { 
    if (sliderRef.current) {
      const scrollPosition = sliderRef.current.scrollTop;
      const increments = Math.round(scrollPosition / scrollIncrementRef.current);
      debouncedScrollHandler(increments);
    }
  }
  

  return (
      <ul ref={sliderRef} className="slider-list" onScroll={handleScroll}>
        {datasProject.map((item, index) => (
          <li key={index} className='slider-list__image'>
            <img className="image-vertical-slider" src={item.cover} alt={item.title} />
          </li>
        ))}
      </ul>
  );
}

export default VerticalSlider;
