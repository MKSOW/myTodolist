import { useState } from "react";
import styles from "./taskInput.module.css";

// Le composant pour afficher le champ de saisie de nos tâches
const TaskInput = ({ addTask }) => {
    const [taskTtitle, setTaskTtitle] = useState("");

    // Capturer ce qui est écrit
    const handleInputChange = (e) => {
        setTaskTtitle(e.target.value);         
    };

    // Ajouter une nouvelle tâche et réinitialiser la valeur de notre tâche à zéro
    const handleAddTask = (e) => {
        e.preventDefault();
        if (taskTtitle.trim().length > 0) { // Vérifie que la tâche n'est pas vide
            addTask(taskTtitle);
            setTaskTtitle("");
        }
    };

    return (
        <div className={`box ${styles.element}`}>
            <h1 className={styles.title}> Ajoute ta première tâche </h1>
            <form className={styles.container} onSubmit={handleAddTask}>
                <input 
                    type="text"
                    className={styles.input}
                    placeholder="Indiquez le nom de la tâche"
                    onChange={handleInputChange}
                    value={taskTtitle}
                />
                <button className="button-primary" type="submit">
                    Ajouter 
                </button>
            </form>
        </div>
    );
}; 

export default TaskInput;
