import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormGroup from "../Components/common/formgroup";
import { EDIT_TODO_CONDITION } from "../constants";
import { useStore } from "../store";

const EditTodo = () => {
  const [state, dispatch] = useStore();
  const prams = useParams();
  const navigate = useNavigate();
  const todo = state.todos.find((todo) => todo._id === prams.id);
  useEffect(() => {
    !todo && navigate("/");
  }, [todo]);
  return (
    <>
      <h3 className="text-center ">Edit todo</h3>
      <div className="d-flex justify-content-center">
        <FormGroup
          value={{
            condition: EDIT_TODO_CONDITION,
            initState: { title: todo?.title, content: todo?.content },
          }}
        />
      </div>
    </>
  );
};

export default EditTodo;
