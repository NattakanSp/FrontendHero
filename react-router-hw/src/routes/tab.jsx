import { useNavigate } from "react-router-dom";


export default function Tab() {
  const navigate = useNavigate();
  return (
    <>
      <div className="tab">
        <button className="tablinks" onClick={() => navigate("/")}>
          About
        </button>
        <button className="tablinks" onClick={() => navigate("/job")}>
          Job
        </button>
        <button className="tablinks" onClick={() => navigate("/portfolio")}>
          Portfolio
        </button>
        <button className="tablinks" onClick={() => navigate("/skill")}>
          Skill
        </button>
        <button className="tablinks" onClick={() => navigate("/todos")}>
          ToDos
        </button>
      </div>
    </>
  );
}
