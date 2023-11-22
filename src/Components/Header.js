import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <Link to="/">
                <div>MON NOM</div>
            </Link>
            <Link to="/About">
                <div>A Propos</div>
            </Link>
        </header>
    )
}

export default Header;