import { useContext } from "react";
import { TodoContext } from "../../TodoContext/TodoContext.jsx";
import style from "./Welcomemsg.module.css";

const Welcomemsg = () => {
  const { todo } = useContext(TodoContext);

  return (
    <>
      {todo.length === 0 && (
        <div className={style.center}>
          <h1 className={style.welcome}>All task completed!</h1>
        </div>
      )}
    </>
  );
};

export default Welcomemsg;
