import { useDispatch } from "react-redux";
import { setSelectedImage } from "../redux/actions/datas.action";
import Chevron from '../assets/chevron-en-bas.png'

const Modal = ({ isOpen, onClose, selectedImage, datasProject }) => {
  const dispatch = useDispatch();

  if (!isOpen) {
    return null;
  }

  const selectedItem = datasProject[selectedImage];

  const handlePrevProject = () => {
    const prevIndex = selectedImage === 0 ? datasProject.length - 1 : selectedImage - 1;
    dispatch(setSelectedImage(prevIndex));
  };

  const handleNextProject = () => {
    // fonction qui parcours tous les indices de 0 à datasProject.length et revient à 0 
    const nextIndex = (selectedImage + 1) % datasProject.length;
    dispatch(setSelectedImage(nextIndex));
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <img src={ Chevron } alt="Chevron" className="prev-button" onClick={handlePrevProject}></img>
        <img src={selectedItem.cover} alt={selectedItem.cover} />
        <p>{selectedItem.description}</p>
        <img src={ Chevron } alt="Chevron" className="next-button" onClick={handleNextProject}></img>
        <button onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
}

export default Modal;