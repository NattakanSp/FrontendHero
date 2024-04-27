import "./App.css";
import { useState } from "react";
import axios from "axios";
import { END_POINT, RESOURCE_QUEUES } from "./constant";

function App() {
  const [queues, setQueues] = useState([""]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const changeName = (e) => {
    setFname(e.target.value);
    console.log(fname);
  };
  const changeLastName = (e) => {
    setLname(e.target.value);
    console.log(lname);
  };

  const clickQueue = () => {
    setFname("");
    setLname("");
    const body = {
      fname,
      lname,
    };
    axios.post(END_POINT + RESOURCE_QUEUES, body);
  };

  const fetchQueue = () => {
    axios.get(END_POINT + RESOURCE_QUEUES).then((res) => {
      console.log("res :", res);
      setQueues(res.data);
    });
  };

  const delQueue = () => {
    const firstQueue = queues[0];
    axios.delete(END_POINT + RESOURCE_QUEUES + `/${firstQueue._id}`).then(() => {
      alert("move queue successfully");
    });
  };

  return (
    <>
      <div className="queue-box">
        <button onClick={fetchQueue}>Fetch</button>
        <div className="queue-form">
          <input type="text" id="fname" name="fname" placeholder="First name" value={fname} onChange={changeName} />
          <input type="text" id="lname" name="lname" placeholder="Last name" value={lname} onChange={changeLastName} />
          <button onClick={clickQueue}>ต่อคิว</button>
        </div>
        <div className="queue">
          <h2>รายชื่อคิว</h2>
          <ol>
            {queues.map((item) => (
              <li key={item._id}>
                {item.fname} {item.lname}
              </li>
            ))}
          </ol>
          <button onClick={delQueue}>เชิญคิวถัดไป</button>
        </div>
      </div>
    </>
  );
}

export default App;
