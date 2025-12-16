import styles from "./Header.module.css";

function Header() {
    return (
        <>
            <div className={styles.header}>
                <h1>Shestakov Andrey</h1>
                <div className={styles.nav}>
                    <p>Мои ЧОрты</p>
                    <p>Ачивки в стим</p>
                    <p>Навыки</p>
                </div>
        </div>
        </>
    );
};


export default Header;