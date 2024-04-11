export default function ToDoItem(prop) {
  return (
    <>
      {prop.priority === 0 ? (
        <div className="row bg-red">{prop.name}</div>
      ) : (
        <div className="row bg-white">{prop.name}</div>
      )}
    </>
  );
}
