import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Header(props) {
  const changeDate = e => {
    props.setDate(e);
  };

  return (
    <div className="header">
      <a href="/">
        <div className="nasa">
          <i className="fas fa-user-astronaut"></i>
          <div>NASA Astronomy</div>
        </div>
      </a>

      <div className="date-picker">
        <span>Choose a date:</span>
        <DatePicker
          selected={props.date}
          onChange={changeDate}
          peekNextMonth
          dropdownMode="select"
          dateFormat="MMMM d, yyyy"
          maxDate={new Date()}
          minDate={new Date("June 16, 1995")}
        />
      </div>
    </div>
  );
}
