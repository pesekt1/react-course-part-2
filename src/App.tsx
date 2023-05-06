import "./App.css";
import PostList from "./react-query/PostList";
import PostListPaginated from "./react-query/PostListPaginated";
import TodoForm from "./react-query/TodoForm";
import TodoList from "./react-query/TodoList";

function App() {
  return (
    <>
      {/* <PostList /> */}
      {/* <PostListPaginated /> */}
      <TodoForm />
      <TodoList />;
    </>
  );
}

export default App;
