import { motion } from 'framer-motion';
import { openModal, contactMode } from '../redux/actions/styles.action';
import { useDispatch } from "react-redux"

const InterchangeLetters = ({ text }) => {
  const dispatch = useDispatch()   

  const handleOpenModal = () => {
      dispatch(openModal(true));
      dispatch(contactMode(true));
  };

  const letters = text.split('');

  return (
    <div className="interchange-letters" >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="letter"
          whileHover="swapped"
          whileTap="swapped"
          onClick={handleOpenModal}
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default InterchangeLetters;
