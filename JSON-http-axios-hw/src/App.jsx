import "./App.css";
import { useState, useEffect } from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { END_POINT, RESOURCE_TASKS } from "./constant";

function App() {
  const [todoTask, setTodotask] = useState("");
  const [todoDue, setTodoDue] = useState("");
  const [status, setStatus] = useState("not finish");
  const [toDos, setToDos] = useState([]);
  const [editList, setEditList] = useState({});

  useEffect(() => {
    const fetchToDos = () => {
      axios.get(END_POINT + RESOURCE_TASKS).then((res) => {
        console.log("res :", res);
        setToDos(res.data);
      });
    };
    fetchToDos();
  }, []);
  const addTasks = (e) => {
    setTodotask(e.target.value);
  };
  const addDue = (e) => {
    setTodoDue(e.target.value);
  };

  const addTaskToList = () => {
    const body = {
      todoTask,
      todoDue,
      status,
    };
    console.log("body", body);
    axios
      .post(END_POINT + RESOURCE_TASKS, body)
      .then((res) => {
        setToDos([...toDos, res.data]);
        setTodotask("");
        setTodoDue("");
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  const editTask = (taskId) => {
    setEditList((prevEditList) => ({ ...prevEditList, [taskId]: !prevEditList[taskId] }));
    setTodotask(todoTask);
    setTodoDue(todoDue);
    setStatus(status);
  };

  const editListName = (e) => {
    setTodotask(e.target.value);
  };
  const editListDue = (e) => {
    setTodoDue(e.target.value);
  };
  const editListStatus = (e) => {
    setStatus(e.target.value);
  };
  const saveEditTask = async (taskId) => {
    const editedTaskIndex = toDos.findIndex((item) => item._id === taskId);
    console.log("taskID", taskId);
    if (editedTaskIndex !== -1) {
      const updatedToDos = [...toDos];
      updatedToDos[editedTaskIndex] = {
        ...updatedToDos[editedTaskIndex],
        todoTask: todoTask, // Update todoTask from state
        todoDue: todoDue,
        status: status,
      };
      // remove key ._id
      delete updatedToDos[editedTaskIndex]._id;
      console.log("updatedToDos[editedTaskIndex] ", updatedToDos[editedTaskIndex]);

      await axios
        .put(END_POINT + RESOURCE_TASKS + `/${taskId}`, updatedToDos[editedTaskIndex])
        .then(() => {
          setToDos(updatedToDos);
          setTodotask("");
          setTodoDue("");
          setEditList({});
        })
        .catch((error) => {
          console.error("Error updating task:", error);
        });
    }
  };
  const delEditTask = async (taskId) => {
    const editedTaskIndex = toDos.findIndex((item) => item._id === taskId);
    console.log("taskID", taskId);
    if (editedTaskIndex !== -1) {
      await axios
        .delete(END_POINT + RESOURCE_TASKS + `/${taskId}`)
        .then((res) => {
          console.log("delete :", res);
          const updatedToDos = toDos.filter((item) => item._id !== taskId);
          setToDos(updatedToDos);
        })
        .catch((error) => {
          console.error("Error deleting task:", error);
        });
    }
  };
  return (
    <>
      <div className="to-do-card">
        <div className="add-to-do">
          <h3>TO DO LIST</h3>
          <div className="add-input">
            <input className="add-task" placeholder="to do task" value={todoTask} onChange={addTasks} />
            <input className="add-due" placeholder="" value={todoDue} onChange={addDue} />
            <button onClick={addTaskToList}>Add task</button>
          </div>
        </div>
        <div className="task-lists">
          <h3 className="tasks">LIST OF WORK TO DO</h3>
          {toDos.map((item) => (
            <>
              <div className="task-card" key={item._id}>
                {editList[item._id] ? (
                  <input
                    defaultValue={item.todotask}
                    placeholder="edit task"
                    value={todoTask}
                    onChange={editListName}
                    className="input-task"
                  />
                ) : (
                  <p className="task-list">{item.todoTask}</p>
                )}
                {editList[item._id] ? (
                  <input
                    defaultValue={item.todoDue}
                    placeholder="edit date"
                    value={todoDue}
                    onChange={editListDue}
                    className="input-date"
                  />
                ) : (
                  <p className="p-date">Due date : {item.todoDue}</p>
                )}
                {editList[item._id] ? (
                  <input
                    defaultValue={item.status}
                    placeholder="edit status"
                    value={status}
                    onChange={editListStatus}
                    className="input-status"
                  />
                ) : (
                  <span className="span-status">{item.status}</span>
                )}
                {editList[item._id] ? (
                  <button onClick={() => saveEditTask(item._id)} className="btn">
                    Save
                  </button>
                ) : (
                  <EditIcon
                    className="edit-icon"
                    onClick={() => {
                      editTask(item._id);
                    }}
                  />
                )}
                <DeleteOutlineIcon className="del-icon" onClick={() => delEditTask(item._id)} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
