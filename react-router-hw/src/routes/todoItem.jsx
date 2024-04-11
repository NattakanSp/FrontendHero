import { useParams } from "react-router-dom";
import Tab from "./tab.jsx";

export default function ToDoItem() {
  const { toDoItemId } = useParams();
  return (
    <>
      <div>
        <Tab />
        <div>
          <h3>To Do Item {toDoItemId}</h3>
          <p>tasks {toDoItemId}</p>
        </div>
      </div>
    </>
  );
}
