import React, { useContext } from "react";
import { TodoContext } from "../../TodoContext/TodoContext";
import styles from "./List.module.css";

const List = () => {
  
  const { todo, deleteTodo } = useContext(TodoContext);

  return (
    <>
      {todo.map((items, index) => (
        <div key={index} className={styles.lists}>
          <h1>{items.task}</h1>
          <button onClick={() => deleteTodo(index)} className={styles.deletebtn}>
            Delete
          </button>
        </div>
      ))}
    </>
  );
};

export default List;
