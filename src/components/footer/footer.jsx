
import styles from "./footer.module.css";
const Footer = ({completedTasks}) =>{ 
    if (completedTasks) {
        return (
            <footer>
                <code className={styles.Footer}>
                Tu a eliminer <span className="important"> {completedTasks} </span>Tache
                {completedTasks > 1 ? "s" :""} !
                </code>
            </footer>
        );
    } return null;
   
};

export default Footer;