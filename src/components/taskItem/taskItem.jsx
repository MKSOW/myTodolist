import styles from "./taskItem.module.css";

const TaskItem = ({
    task,
    editTask,
    deleteTask
}) => {
    // Fonction pour changer l'état de complétion de la tâche
    const handleCompletionChange = () => {
        editTask(task.id, !task.completed);
    };

    return (
        <li className={`${styles.container} ${task.completed ? styles.success : styles.default}`}>
            <div className={styles.item}>
                <div className={`${styles.id} ${styles.idDefault}`}>{task.id}</div>
                <div className={task.completed ? styles.contentSuccess : styles.contentDefault}>
                    {task.title}
                </div>
            </div>
            {/* Bouton pour marquer comme complétée */}
            <button className="button-primary" title="appuyez ici pour  la Tache comme tache  complete" onClick={handleCompletionChange}>
                {task.completed ? "✓" : "✗"}
            </button>
            {/* Bouton pour supprimer la tâche */}
            <button className="button-primary" onClick={() => deleteTask(task.id)}>
                x
            </button>
        </li>
    );
};

export default TaskItem;
