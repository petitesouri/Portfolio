import { Link } from "react-router-dom";

// Faire version page About

const Header = () => {
    return (
        <header>
            <nav>            
                <Link to="/">
                    <h1>Virginie RUDOWSKI</h1>
                </Link>
                <Link to="/About">
                    A Propos
                </Link> 
            </nav>           
        </header>
    )
}

export default Header;