import { useDispatch } from "react-redux";
import { setSelectedImage } from "../redux/actions/datas.action";
import Chevron from '../assets/chevron-en-bas.png'
import { motion } from 'framer-motion';

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
    <motion.div
      className="modal-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
    >
      <motion.div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, rotateX: -19, rotateY: 36, rotateZ: 12, x: 520, y:-60}}
        animate={[
          {
            opacity: 1,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
            x: 520,
            y: -60,
            scale: 1,
            transition: { duration: 0.5 },
          },
          {
            x: 0,
            scale: 1.5,
            transition: { duration: 0.5, delay: 0.5 },
          },
        ]}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        transformOrigin={{ x: 1, y: 0.5 }}
      >
        {/* <img src={Chevron} alt="Chevron" className="prev-button" onClick={handlePrevProject}></img> */}
        <img src={selectedItem.cover} alt={selectedItem.cover} />
        <p>{selectedItem.description}</p>
        {/* <img src={Chevron} alt="Chevron" className="next-button" onClick={handleNextProject}></img> */}
        <button onClick={onClose}>Fermer</button>
      </motion.div>
    </motion.div>
    // <div className="modal-overlay" onClick={onClose}>
    //   <div className="modal-content" onClick={(e) => e.stopPropagation()}>
    //     <img src={ Chevron } alt="Chevron" className="prev-button" onClick={handlePrevProject}></img>
    //     <img src={selectedItem.cover} alt={selectedItem.cover} />
    //     <p>{selectedItem.description}</p>
    //     <img src={ Chevron } alt="Chevron" className="next-button" onClick={handleNextProject}></img>
    //     <button onClick={onClose}>Fermer</button>
    //   </div>
    // </div>
  );
}

export default Modal;