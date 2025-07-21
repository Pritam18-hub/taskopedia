import React from "react";
import Student from "./Components/Student/Student";
import StudentReview from "./Components/Student/StudentReview";
class Mainbody extends React.Component {
  render() {
    const whatwewilllearn = "React JS";
    const lectureCount = 3;

    return (
      <div style={{ minHeight: "70vh" }}>
        <p>
          In this course we will learn {whatwewilllearn} by buidling Taskopedia.
          <br></br>
          Total lecture - {lectureCount}
        </p>

        <ul>
          <li>Basic Foundation</li>
          <li>Functional & Class components</li>
        </ul>
        {/* <div>
          Enter task: <input type='text' maxLength={5} readOnly={false} placeholder='Enter your text'></input>
        </div> */}
        <div className="container row">Students Enrolled</div>
        <Student experience={2} name="Pritam Biswas">
          <StudentReview></StudentReview>
        </Student>
        <Student experience={5} name="Surya Boss">
          <StudentReview></StudentReview>
        </Student>
        <Student experience={7} name="Yash Gunjal" />
      </div>
    );
  }
}

export default Mainbody;
