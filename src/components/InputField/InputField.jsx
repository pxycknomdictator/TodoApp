import { useContext, useRef } from "react";
import { TodoContext } from "../../TodoContext/TodoContext.jsx";
import styles from "./InputField.module.css";

const InputField = () => {

  const TodoInputRef = useRef("");
  const { addTodo } = useContext(TodoContext);

  const submit = (event) => {
    event.preventDefault();
    TodoInputRef.current.focus();
    const todotask = TodoInputRef.current.value;
    !todotask ? false : addTodo(todotask);
    TodoInputRef.current.value = ""
  };
  
  return (
    <form onSubmit={submit} className={styles.inputContainer}>
      <input ref={TodoInputRef} type="text" placeholder="Enter your Todo..." />
      <button className={styles.add}>Add</button>
    </form>
  );
};

export default InputField;
