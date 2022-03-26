import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { actions, useStore } from "../../../store";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { apiUrl } from "../../../store/constants";
import { ADD_TODO_CONDITION, EDIT_TODO_CONDITION } from "../../../constants";
import { updateTodo } from "../../../store/actions";

const FormGroup = ({ value }) => {
  const { condition, initState } = value;
  const [state, dispatch] = useStore();
  const [todo, setTodo] = useState();
  const { addTodo } = actions;
  const navigate = useNavigate();
  const prams = useParams();
  
  //add todo
  useEffect(() => {
    const addTodoApi = async () => {
      const res = await axios.post(`http://localhost:5000/api/todos/`, todo);
      dispatch(addTodo(res.data.todo));
      navigate("/");
    };
    condition === ADD_TODO_CONDITION && todo && addTodoApi();
  }, [todo]);

  //edit todo
  useEffect(() => {
    const addTodoApi = async () => {
      const res = await axios.put(`http://localhost:5000/api/todos/${prams.id}`, todo);
      dispatch(updateTodo(res.data.todo));
      navigate("/");
    };
    condition === EDIT_TODO_CONDITION && todo && addTodoApi();
  }, [todo]);

  const SignupSchema = Yup.object().shape({
    title: Yup.string().required("Required!"),
  });
  return (
    <div style={{ width: "500px" }}>
      <Formik
        initialValues={{
          ...initState,
        }}
        validationSchema={SignupSchema}
        onSubmit={(todo) => {
          setTodo({ ...todo });
        }}
      >
        {({ errors, touched, handleChange, handleSubmit }) => (
          <>
            <div className="mb-3">
              <label className="form-label">Title todo:</label>
              <input
                placeholder={initState.title}
                name="title"
                type="text"
                className="form-control"
                onChange={handleChange}
              />
              <div className="form-text text-danger">
                {errors.title && touched.title ? <>{errors.title}</> : null}
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Content:</label>
              <input
                placeholder={initState.content}
                name="content"
                type="text"
                className="form-control"
                onChange={handleChange}
              />
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="btn btn-primary"
            >
              {condition === ADD_TODO_CONDITION && <>Add</>}
              {condition === EDIT_TODO_CONDITION && <>Edit</>}
            </button>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormGroup;
