import { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import VerticalSlider from "../Components/Slider"

const Loader = ({ datasProject }) => {
    const sliderRef = useRef()
    const textAnimation = useAnimation();

    const animateText = async () => {
        await textAnimation.start({
          x: 0,
          opacity: 1,
          transition: { duration: 0.5, ease: "easeInOut" },
        });
    };
      
    useEffect(() => {
    animateText();
    }, []);

    return (
        <div className="loader">
            <motion.h1
                data-text="Virginie RUDOWSKI"
                animate={textAnimation}
                initial={{ x: -100, opacity: 0 }}
                style={{ originX: 0 }}
            >
                Virginie RUDOWSKI
            </motion.h1>
            <motion.p
                animate={{
                    x: 0,
                    opacity: 1,
                    originX: 0,
                    transition: { duration: 0.5,delay:0.5, ease: "easeInOut" }
                }}
                initial={{ x: -100, opacity: 0 }} 
            >
                Intégratrice Web
            </motion.p>
            <div className="loader__layout">
                <motion.p
                    className="citation"
                    animate={{
                        x: 0,
                        opacity: 1,
                        originX: 0,
                        transition: { duration: 0.5,delay:0.7, ease: "easeInOut" }
                    }}
                    initial={{ x: -100, opacity: 0 }} 
                >
                    "Le web est un vaste univers où chaque clic ouvre une porte vers la connaissance, 
                    reliant les esprits créatifs et formant une toile infinie tissée par l'échange d'idées 
                    et d'innovations."
                </motion.p>
                <div className="slider-container">              
                    <VerticalSlider 
                        id='showScroll' 
                        sliderRef={sliderRef} 
                        datasProject={datasProject}
                    />
                </div> 
            </div>
        </div>
    );
};

export default Loader;
