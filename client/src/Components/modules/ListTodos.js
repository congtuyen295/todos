import React, { useEffect } from "react";
import Todo from "../common/todo";
import { useStore } from "../../store";
import axios from "axios";
import { actions } from "../../store";
import { Link } from "react-router-dom";

const ListTodos = () => {
  const [state, dispatch] = useStore();
  const { todos } = state;
  const { setTodos, deleteTodo, completeTodo } = actions;
  const todoUncompleted = todos.some(todo=> todo.completed === false)

  useEffect(() => {
    const getAPI = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/todos`);
        dispatch(setTodos(res.data.todos));
      } catch (error) {
        console.log(error);
      }
    };
    getAPI();
  }, []);

  const handleDeleteTodos = async (id) => {
    dispatch(deleteTodo(id));
    try {
      await axios.delete(`http://localhost:5000/api/todos/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCompleteTodo = async (id, updateTodo) => {
    dispatch(completeTodo(id));
    try {
      await axios.put(`http://localhost:5000/api/todos/${id}`, updateTodo);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row">
          {todos &&
            todos?.map((todo) => {
              if (todo.completed !== true) {
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
          {(todos.length === 0 || (todos.length !== 0 && !todoUncompleted )) && (
            <p className="text-center my-3">
              <span className="text-danger fs-5 fw-bold">Don't have anything! - </span>
              <Link className="text-decoration-none" to="/addtodo">
                Add Todo
              </Link>
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default ListTodos;
