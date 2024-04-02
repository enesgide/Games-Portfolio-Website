import {Link} from "react-router-dom"
import RoundButton from "./roundButton.jsx"

const Header = () => {
    const navLinks = [
        {id: 1, text: "Home", url: "/"},
        {id: 2, text: "Games", url: "/games"},
        {id: 3, text: "Blogs", url: "/blogs"},
        {id: 4, text: "Merch", url: "/merch"},
    ]

    return (
        <header>
            <div className="nav">
                <img style={{marginRight: "20px"}} src="logo.png" alt="logo" height="50"/>
                <div className="nav-content">                    
                    <ul className="nav-buttons">
                        { navLinks.map(navLink => {
                            return <NavButton key={navLink.id} text={navLink.text} url={navLink.url}></NavButton>
                        }) }
                    </ul>       
                    <div className="contact-nav-button">
                        <RoundButton text="Contact Us" color="orange" />
                    </div>         
                </div>
            </div>            
        </header>
    );
};

const NavButton = (props) => {
    return (
        <Link to={props.url}>
            <li className="nav-text">
                {props.text}
            </li>
        </Link>
    );
}

export default Header;