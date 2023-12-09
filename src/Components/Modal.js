import { useDispatch, useSelector } from "react-redux";
import { setSelectedImage } from "../redux/actions/datas.action";
import Chevron from '../assets/chevron-en-bas.webp'
import { motion } from 'framer-motion';

const Modal = ({ isOpen, onClose, selectedImage, datasProject }) => {
  const dispatch = useDispatch();
  const contact = useSelector(state => state.stylesReducer.contactMode);

  if (!isOpen) {
    return null;
  }

  const selectedItem = selectedImage !== undefined && datasProject !== undefined ? datasProject[selectedImage] : null;

  const handlePrevProject = () => {
    if (selectedImage !== undefined) {
      const prevIndex = selectedImage === 0 ? datasProject.length - 1 : selectedImage - 1;
      dispatch(setSelectedImage(prevIndex));
    }
  };

  const handleNextProject = () => {
    if (selectedImage !== undefined && datasProject !== undefined) {
      const nextIndex = (selectedImage + 1) % datasProject.length;
      dispatch(setSelectedImage(nextIndex));
    }
  };

  const mailTo = () => {
    const email = 'dipie89@hotmail.fr';
    const subject = 'Contact depuis le site web';
    const body = 'Bonjour,';
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const formatFeedbackText = (feedback) => {
    const formattedText = feedback
      .replace(/react/g, '<span style="color: var(--yellow-color);">REACT</span>')
      .replace(/REDUX/g, '<span style="color: var(--yellow-color);">REDUX</span>')
      .replace(/javascript/g, '<span style="color: var(--yellow-color);">JAVASCRIPT</span>');
    return <p dangerouslySetInnerHTML={{ __html: formattedText }} />;
  };
  const formattedFeedback = selectedItem ? formatFeedbackText(selectedItem.feedback) : null;

  return (
    <motion.div
      className="modal-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1}}
    >
      { contact ? (
        <>          
          <p className="contact-button" onClick={mailTo}>M'envoyer un email</p> 
        </>
      ) : (
        <>
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
          >
            {selectedItem && (
              <>
                <div className="top-buttons">
                  <img src={Chevron} alt="Chevron" className="prev-button" onClick={handlePrevProject}></img>
                  <button onClick={onClose} className="close-button">X</button>
                </div>        
                <img src={selectedItem.cover} alt={selectedItem.cover} />
                {formattedFeedback}
                <a href={selectedItem.link} target="_blank" rel="noopener noreferrer">{selectedItem.link}</a>
                <img src={Chevron} alt="Chevron" className="next-button" onClick={handleNextProject}></img>
              </>
            )}
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

export default Modal;