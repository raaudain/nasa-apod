import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../css/Header.css"

export default function Header(props){
    
    const changeDate = e => {
        props.setDate(e)
    };

    return(
        
            <div className="header">

                    <div className="nasa">
                        <i className="fas fa-user-astronaut"></i>
                        <div>NASA Astronomy</div>
                    </div>
                    

                    <div className="date-picker">
                        <span>Choose a date:</span>
                        <DatePicker 
                            selected={props.date} 
                            onChange={changeDate}
                            peekNextMonth
                            // showMonthDropdown
                            // showYearDropdown
                            dropdownMode="select"
                            dateFormat="MMMM d, yyyy"
                        />
                    </div>
                
            </div>
        
    )
}