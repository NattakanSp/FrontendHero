import { useState } from "react";
import "./App.css";
import { END_POINT, RESOURCE_EMPLOYEE } from "./constant.js";
import axios from "axios";

function App() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [level, setLevel] = useState("");
  const [employee, setEmployee] = useState([]);
  const [isfetch, setIsFetch] = useState(false);

  const submitForm = async (e) => {
    e.preventDefault();
    const body = {
      first_name: fname,
      last_name: lname,
      level: level,
    };
    console.log("body", body);
    await axios
      .post(END_POINT + RESOURCE_EMPLOYEE, body)
      .then((res) => {
        console.log(res);
        setEmployee([...employee, res.data]);
        setFname("");
        setLname("");
        setLevel("");
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
    return setEmployee;
  };

  const getData = () => {
    axios
      .get(END_POINT + RESOURCE_EMPLOYEE)
      .then((res) => {
        setEmployee(res.data);
        setIsFetch(true);
        return;
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="employee-card">
        <form className="add-employee">
          <div className="row d-flex align-item-center">
            <label className="">First name</label>{" "}
            <input
              value={fname}
              className="fname-input"
              placeholder="first name"
              onChange={(e) => setFname(e.target.value)}
            />
          </div>
          <div className="row">
            <label>Last name</label>{" "}
            <input
              value={lname}
              className="lname-input"
              placeholder="last name"
              onChange={(e) => setLname(e.target.value)}
            />
          </div>
          <div className="select-box">
            <label>Position</label>
            <select name="level" id="level" className="btn" onChange={(e) => setLevel(e.target.value)} value={level}>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
            </select>
          </div>

          <button className="btn" onClick={submitForm}>
            Submit
          </button>
        </form>
        <button className="btn" onClick={getData}>
          Fetch
        </button>
        <hr></hr>
        {isfetch && (
          <table>
            <tr>
              <th>First name</th>
              <th>Last name</th>
              <th>Position</th>
            </tr>
            {employee &&
              employee.map((item) => (
                <tr key={item._id}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.level}</td>
                </tr>
              ))}
          </table>
        )}
      </div>
    </>
  );
}

export default App;
