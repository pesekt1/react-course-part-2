import { useReducer } from "react";
import "./App.css";
import PostList from "./react-query/PostList";
import PostListPaginated from "./react-query/PostListPaginated";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/counter/Counter";
import LoginStatus from "./state-management/auth/LoginStatus";
import TaskList from "./state-management/tasks/TaskList";
import NavBar from "./state-management/NavBar";
import HomePage from "./state-management/HomePage";
import { AuthProvider } from "./state-management/auth";
import { TasksProvider } from "./state-management/tasks";

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <NavBar />
        <HomePage />
      </TasksProvider>
    </AuthProvider>
  );
}

export default App;
