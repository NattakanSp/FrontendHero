import "./App.css";
import ToDoItem from "./component/toDoItem";

function App() {
  const toDoItems = [
    { name: "to Do Item1", priority: 0 },
    { name: "to Do Item2", priority: 1 },
    { name: "to Do Item3", priority: 0 },
    { name: "to Do Item4", priority: 1 },
    { name: "to Do Item5", priority: 1 },
    { name: "to Do Item6", priority: 1 },
    { name: "to Do Item7", priority: 1 },
    { name: "to Do Item8", priority: 1 },
    { name: "to Do Item9", priority: 1 },
    { name: "to Do Item10", priority: 1 },
  ];
  return (
    <>
      <div className="to-do">
        <h4>ToDo</h4>
        {toDoItems.map((item, index) => (
          <ToDoItem key={index} name={item.name} priority={item.priority} />
        ))}
      </div>
    </>
  );
}

export default App;
