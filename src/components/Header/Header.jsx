import { useState } from "react"
import Nav from "../Nav/Nav"
import styles from "./Header.module.css"

// eslint-disable-next-line react/prop-types
const Header = () => {

    const [icon, setIcon] = useState("icon-hamburger.svg");
    
    function handleClick() {
        if(icon.includes("hamburger")) {
            setIcon("icon-close.svg");
        } else {
            setIcon("icon-hamburger.svg");
        }
    }

    return (
        <header className={styles.header}>
            <img 
                src="logo.svg" 
                alt="logo icon"
                className={styles.header_logo}
            />
            <button 
                onClick={handleClick}
                className={styles.header_menu_button}
            >
                <img 
                    src={icon}
                    alt="menu icon"
                />
            </button>
            <Nav 
                iconState = {icon}
            />
        </header>
    )
}

export default Header