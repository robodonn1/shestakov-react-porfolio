import styles from "./Portfolio.module.css"

function Portfolio() {
    return (
        <>
            <div className={styles.portfolio}>
                <ul>
                    <li>Сайт побольше</li>
                    <li>Сайт поменьше</li>
                    <li>Еще сайт</li>
                    <li>Последний сайт</li>
                </ul>

            </div>
        </>
    )
}

export default Portfolio;