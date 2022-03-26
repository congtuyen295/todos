import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import AddTodoPage from "./pages/AddTodoPage";
import ListTodos from "./Components/modules/ListTodos";
import EditTodo from "./pages/EditTodoPage";
import CompletedTodosPage from "./pages/CompletedTodosPage";

import "./App.css";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="" element={<ListTodos />} />
          <Route path="about" element={<About />} />
          <Route path="completedtodos" element={<CompletedTodosPage />} />
          <Route path="addtodo" element={<AddTodoPage />} />
          <Route path="edittodo/:id" element={<EditTodo />}>
            <Route index element={<NotFound />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
