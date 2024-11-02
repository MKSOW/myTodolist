import styles from "./taskList.module.css";
import TaskItem from "../taskItem/taskItem";

const TaskList = ({
    taskList,
    editTask,
    deleteTask,
    incompletedTasks
}) => {
    const taskItems = taskList.map((task) => (
        <TaskItem 
            key={task.id}
            task={task}
            editTask={editTask}
            deleteTask={deleteTask}
        />
    ));

    return (
        <div className="box">
            {incompletedTasks > 0 ? (
                <p>Il te reste encore <span className="important"> {incompletedTasks} </span>  tâche(s) à accomplir</p>
            ) : (
                <h2 className={styles.title}>
                    Génial, tu as accompli toutes tes tâches.
                </h2>
            )}

            {taskItems && taskItems.length > 0 ? (
                <ul className={styles.contenue}>
                    {taskItems}
                </ul>
            ) : (
                <p>Aucune tâche en cours.</p>
            )}
        </div>
    ); 
};

export default TaskList;
