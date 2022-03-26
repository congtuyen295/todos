import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  SET_TODOS,
  UPDATE_TODO,
} from "./constants";

const initState = {
  todos: [],
};

function reducer(state = initState, action) {
  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo._id !== action.payload),
      };
    case COMPLETE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo._id === action.payload) {
            return {
              ...todo,
              completed: true,
            };
          } else {
            return todo;
          }
        }),
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case UPDATE_TODO:
      const newTodos = state.todos.map((todo) =>
        todo._id === action.payload._id ? action.payload : todo
      );

      return {
        ...state,
        todos: newTodos,
      };
    default:
      return state;
  }
}

export { initState };
export default reducer;
