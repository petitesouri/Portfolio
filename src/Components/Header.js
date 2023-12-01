import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { toggleAboutLink } from "../redux/actions/styles.action"
import { useState } from 'react';
import InterchangeLetters from '../Components/InterchangeLetters';
import { motion } from 'framer-motion';

const Header = (props) => {
    const [hoverText, setHoverText] = useState(props.text);

    return (
        <header className={`header ${props.path}`}>
            <nav>                
                <Link to="/">
                    <h1>{props.title}</h1>
                </Link>
                {props.showAboutLink && (
                    <motion.div
                        className="header-link"
                        onHoverStart={() => setHoverText(props.text)}
                        onHoverEnd={() => setHoverText(props.text)}
                    >
                        <Link to="/About">
                            <InterchangeLetters text={hoverText} />
                        </Link>
                    </motion.div>
                )}
            </nav>
        </header>
    );
}

const mapStateToProps = (state) => {
    return {
        showAboutLink: state.stylesReducer.showAboutLink,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        toggleAboutLink: () => dispatch(toggleAboutLink()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
