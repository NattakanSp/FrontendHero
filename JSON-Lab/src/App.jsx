import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { END_POINT, RESOURCE_QUEUES } from "./constant";
import InputForm from "./assets/componant/Input";
import QueueList from "./assets/componant/QueueList";


function App() {
  const [queues, setQueues] = useState([]);
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  useEffect(() => {
    const storedQueues = localStorage.getItem("queues");
    if (storedQueues) {
      setQueues(JSON.parse(storedQueues));
    } else {
      // fetchQueue();
    }
  }, []);

  useEffect(() => {
    if (queues.length > 0) {
      localStorage.setItem("queues", JSON.stringify(queues));
    }
  }, [queues]);

  // const fetchQueue = () => {
  //   axios.get(END_POINT + RESOURCE_QUEUES).then((res) => {
  //     setQueues(res.data);
  //     console.log("queses: ", queues)
  //   });
  // };

  const handleAddQueue = () => {
    if (fname && lname) {
      const body = { fname, lname };
      axios.post(END_POINT + RESOURCE_QUEUES, body).then(() => {
        // fetchQueue();
        setFname("");
        setLname("");
      });
    }
  };

  const handleDeleteQueue = () => {
    if (queues.length === 0) {
      alert("No queue to move.");
      return;
    }
    const firstQueue = queues[0];
    axios.delete(END_POINT + RESOURCE_QUEUES + `/${firstQueue._id}`).then(() => {
      const updatedQueues = queues.filter((queue) => queue._id !== firstQueue._id);
      setQueues(updatedQueues);
      alert("Moved queue successfully");
    });
  };

  return (
    <div className="queue-box">
      <InputForm
        fname={fname}
        lname={lname}
        onFnameChange={(e) => setFname(e.target.value)}
        onLnameChange={(e) => setLname(e.target.value)}
        onAddQueue={handleAddQueue}
      />
      <QueueList queues={queues} onDeleteQueue={handleDeleteQueue} />
    </div>
  );
}

export default App;
