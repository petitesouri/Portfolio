import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { toggleAboutLink } from "../redux/actions/styles.action"


const Header = (props) => {
    return (
        <header>
            <nav>
                <Link to="/">
                    <h1>{props.title}</h1>
                </Link>
                {props.showAboutLink && (
                    <Link to="/About">{props.text}</Link>
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
