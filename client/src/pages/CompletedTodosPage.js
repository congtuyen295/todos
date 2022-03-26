import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Todo from "../Components/common/todo";
import { actions, useStore } from "../store";

const CompletedTodosPage = () => {
  const [state, dispatch] = useStore();
  const { todos } = state;
  const { deleteTodo } = actions;
  const todoCompleted = todos.some(todo=> todo.completed === true)

  const handleDeleteTodos = async (id) => {
    dispatch(deleteTodo(id));
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleteTodo = async (id, updateTodo) => {};

  return (
    <>
      <div className="container">
        <div className="row">
          {todos &&
            todos?.map((todo) => {
              if (todo.completed === true) {
                return (
                  <div key={todo._id} className="col-12 col-sm-6 col-md-4">
                    <Todo
                      value={[todo, handleDeleteTodos, handleCompleteTodo]}
                    />
                  </div>
                );
              } else {
                return null
              }
            })}
          {todos.length === 0 && (
            <p className="text-center my-3">
              <span className="text-danger fs-5 fw-bold">Don't have anything! - </span>
              <Link className="text-decoration-none" to="addtodo">
                Add Todo
              </Link>
            </p>
          )}
          {
            todos.length !== 0 && !todoCompleted && (
              <p className="text-center my-3 fs-5 text-danger fw-bold">Chưa có công việc nào hoàn thành!</p>
            )
          }
        </div>
      </div>
    </>
  );
};

export default CompletedTodosPage;
