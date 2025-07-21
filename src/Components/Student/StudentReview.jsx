import react from "react";
import React from "react";

class StudentReview extends React.Component {
  render() {
    return (
      <div className="p-2 d-flex align-items-center">
        <i
          class="bi bi-hand-thumbs-up-fill text-success p-1"
          style={{ cursor: "pointer" }}
        ></i>
        <i
          class="bi bi-hand-thumbs-down-fill text-danger"
          style={{ cursor: "pointer" }}
        ></i>
      </div>
    );
  }
}
export default StudentReview;
