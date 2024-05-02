import { useState } from "react";
import { TodoContext } from "./TodoContext/TodoContext.jsx";
import InputField from "./components/InputField/InputField.jsx";
import List from "./components/List/List.jsx";
import Welcomemsg from "./components/Welcome/Welcomemsg.jsx";
import styles from "./App.module.css";

function App() {

  const [todo, setTodo] = useState([]);


  const addTodo = (taskName) => {
    const addNewTask = [...todo, { task: taskName }];
    setTodo(addNewTask);
  };

  const deleteTodo = (i) => {
    const AFTER_DELETED = todo.filter((_, index) => index !== i);
    setTodo(AFTER_DELETED);
  };


  return (
    <TodoContext.Provider value={{ todo, addTodo, deleteTodo }}>
      <div className={styles.todoContainer}>
        <InputField />
        <div className={styles.listContainer}>
          <Welcomemsg />
          <List />
        </div>
      </div>
    </TodoContext.Provider>
  );
}

export default App;
