const {
  SET_TODOS,
  DELETE_TODO,
  COMPLETE_TODO,
  ADD_TODO,
  UPDATE_TODO,
} = require("./constants");

const setTodos = (payload) => ({
  type: SET_TODOS,
  payload,
});
const deleteTodo = (payload) => ({
  type: DELETE_TODO,
  payload,
});
const completeTodo = (payload) => ({
  type: COMPLETE_TODO,
  payload,
});
const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});
const updateTodo = (payload) => ({
  type: UPDATE_TODO,
  payload,
});

export { setTodos, deleteTodo, completeTodo, addTodo, updateTodo };
