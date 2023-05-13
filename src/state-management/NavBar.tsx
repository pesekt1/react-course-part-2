import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TasksContext from "./tasks/tasksContext";
import useCounterStore from "./counter/store";

const NavBar = () => {
  const { tasks } = useContext(TasksContext);
  const { counter } = useCounterStore();

  return (
    <nav className="navbar d-flex justify-content-between">
      <div>
        <span className="badge text-bg-secondary">Tasks: {tasks.length}</span>
        <span className="badge text-bg-secondary ms-1">Counter: {counter}</span>
      </div>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
