import styles from "./header.module.css";
import reactLogo from "../../assets/react.svg";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.titleContainer}>
                <img src={reactLogo} alt="logo" width={50} height={50} />
                <div>
                    <h1>ToDoList</h1>
                    <div>
                        <code>Éliminez le chaos, suivez le flux.</code>
                    </div>
                </div>
            </div>
            <code className={styles.version}>By MK_SOW</code>
        </div>
    );
};

export default Header;
