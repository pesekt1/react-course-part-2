import "./App.css";
import PostList from "./react-query/PostList";
import PostListPaginated from "./react-query/PostListPaginated";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";
import Counter from "./state-management/Counter";
import TaskList from "./state-management/TaskList";

function App() {
  return (
    <>
      {/* <PostList /> */}
      {/* <PostListPaginated /> */}
      {/* <TodoForm />
      <TodoList />; */}
      {/* <Counter /> */}
      <TaskList />
    </>
  );
}

export default App;
