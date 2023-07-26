import styles from "./Main.module.css"

const Main = () => {
    return (
        <main className={styles.main}>
            <img 
                src="illustration-devices.svg" 
                alt=""
                aria-hidden="true"
                className={styles.main_image}
             />
             <div className={styles.intro}>
                <div className={styles.intro_subheading}>
                    <p className={styles.subheading_badge}>New</p>
                    <p className={styles.subheading_paragraph}>Monograph dashboard</p>
                </div>
                <h1 className={styles.intro_title}>Powerful insights into your team</h1>
                <p className={styles.intro_paragraph}>
                    Project planning and time tracking for agile teams
                </p>
                <div className={styles.intro_foot}>
                    <button className={styles.foot_button}>Schedule a demo</button>
                    <p className={styles.foot_paragraph}>To see a preview</p>
                </div>
             </div>
        </main>
    )
}

export default Main