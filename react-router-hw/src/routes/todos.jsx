import { Link } from "react-router-dom";
import Tab from "./tab.jsx";

export default function ToDos() {
  return (
    <>
      <div>
        <Tab />
        <div id="todos" className="tabcontent">
          <h3></h3>
          <ul>
            <li>
              <Link to="/todos/1">To Do Item 1 </Link>
            </li>
            <li>
              <Link to="/todos/2">To Do Item 2 </Link>
            </li>
            <li>
              <Link to="/todos/3">To Do Item 3 </Link>
            </li>
            <li>
              <Link to="/todos/4">To Do Item 4 </Link>
            </li>
            <li>
              <Link to="/todos/5">To Do Item 5 </Link>
            </li>
            <li>
              <Link to="/todos/6">To Do Item 6 </Link>
            </li>
            <li>
              <Link to="/todos/7">To Do Item 7 </Link>
            </li>
            <li>
              <Link to="/todos/8">To Do Item 8 </Link>
            </li>
            <li>
              <Link to="/todos/9">To Do Item 9 </Link>
            </li>
            <li>
              <Link to="/todos/10">To Do Item 10 </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
