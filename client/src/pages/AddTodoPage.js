import FormGroup from "../Components/common/formgroup";
import { ADD_TODO_CONDITION } from "../constants";

const AddTodoPage = () => {
  return (
    <>
      <h3 className="text-center ">Add todo</h3>
      <div className="d-flex justify-content-center">
        <FormGroup
          value={{
            condition: ADD_TODO_CONDITION,
            initState: { title: "", content: "" },
          }}
        />
      </div>
    </>
  );
};

export default AddTodoPage;
