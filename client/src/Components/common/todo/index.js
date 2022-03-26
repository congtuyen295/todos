import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

const Todo = ({ value }) => {
  const [todo, handleDeleteTodos, handleCompleteTodo] = value;
  const { _id, title, content, completed } = todo;

  return (
    <>
      <div className="todoCard shadow-sm my-2">
        <div className={completed ? "card_completed" : "card_completing"}>
          <h4 className="title-card">{title}</h4>
          <p>{content}</p>

          <div className="buttons">
            {!completed && (
              <>
                <button
                  title="Done!"
                  onClick={handleCompleteTodo.bind(this, _id, {
                    title,
                    content,
                    completed: true,
                  })}
                >
                  <i className="fa-solid fa-check"></i>
                </button>
                <button>
                  <Link to={`edittodo/${_id}`}>
                    <i className="fa-solid fa-pen"></i>
                  </Link>
                </button>
              </>
            )}
            <button onClick={handleDeleteTodos.bind(this, _id)}>
              <i className="fa-solid fa-x"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
