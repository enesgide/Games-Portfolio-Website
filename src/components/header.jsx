import RoundButton from "./roundButton.jsx"

const Header = () => {
    const navLinks = [
        {id: 1, text: "Home", url: "/"},
        {id: 2, text: "Games", url: "#games"},
        {id: 3, text: "Stats", url: "#stats"},
        {id: 4, text: "Roblox", url: "https://www.roblox.com/groups/9512031/Awesome-Fun-Games#!/about"},
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
                        <RoundButton text="Contact Us" color="orange" leftIcon="envelope.png"/>
                    </div>         
                </div>
            </div>            
        </header>
    );
};

const NavButton = (props) => {
    return (
        <li className="nav-button">
            <a className="nav-text" href={props.url}>
                {props.text}
            </a>
        </li>
    );
}

export default Header;