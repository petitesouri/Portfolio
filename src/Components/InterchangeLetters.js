import { motion } from 'framer-motion';

const InterchangeLetters = ({ text }) => {  

  const letters = text.split('');

  return (
    <div className="interchange-letters" >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          className="letter"
          whileHover="swapped"
          whileTap="swapped"
        >
          {letter}
        </motion.span>
      ))}
    </div>
  );
};

export default InterchangeLetters;
