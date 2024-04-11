import Tab from "./tab.jsx";

export default function Job() {
  return (
    <>
      <div>
        <Tab />

        <div id="job" className="tabcontent">
          <h3>Job</h3>
          <h2>My job</h2>
          <h4>SPECIAL LECTURER (IEP PROGRAM) at Make A Wit Co., Ltd.</h4>
          <p>
            planned and constructed lessons (English, Science, and Math) for classrooms of 30 primary students in a
            conprehensive manner by using English as a key communication for 25 periods each week
          </p>
          <h4>Junior low-code developer at Avalant Co., Ltd.</h4>
          <p>
            trained using lowcode technologies and assisted senior developers to develope UI. using lowcode platform.
          </p>
          <h4>Junior Front-end developer at E-commerce solution Co., Ltd.</h4>
          <p>
            developed UI websites by customizing css and scss. maintained and developed new features in projects
            utilized HTML, CSS, SCSS, Jquery,Vue.Js and React.Js. worked in an agile environment with a focus on
            iterative development, continuous delivery, and collaboration across cross-functional teams.
          </p>
        </div>
      </div>
    </>
  );
}
