import styles from "./Nav.module.css"

// eslint-disable-next-line react/prop-types
const Nav = ({ iconState }) => {

    const listItems = [
        {
            id:0,
            content:"product"
        },
        {
            id:1,
            content:"features"
        },
        {
            id:2,
            content:"pricing"
        }
    ]

    return (
        // eslint-disable-next-line react/prop-types
        <nav className={`${styles.nav} ${iconState.includes("close") ? styles.open : ""}`}>
            <ul className={styles.nav_list}>
                {listItems.map((item) => {
                    return (
                        <li key={item.id}>
                            <a 
                                href="#"
                                className={styles.list_item_link}
                            >{item.content}</a>
                        </li>    
                    )
                    
                })}
            </ul>
            <div className={styles.nav_separator}></div>
            <a 
                href="#" 
                className={styles.nav_button}
            >Login</a>
        </nav>
    )
}  

export default Nav