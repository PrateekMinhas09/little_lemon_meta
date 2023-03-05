import React,{useState} from "react";
import BookingForm from "./BookingForm";
import "./BookingForm.css"

function initializeTimes() {
    return [
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ];
  }

function UpdateTimes(state,action) {
    switch (action.type) {
        case "UPDATE_TIMES":
          // TODO: Implement logic for updating available times based on selected date
          // For example, you could use a conditional statement to check the selected date
          // and return a new array of available times based on that date
          return state;
        default:
          return state;
      }
  }

function BookingPage() {
    const [availableTimes, setAvailableTimes] = useState([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00"
    ]);

 

    return (
        <>
        <div className="contaier">
       
            <BookingForm availableTimes={availableTimes}  />
        </div>
            
        </>
    );
}

export default BookingPage;