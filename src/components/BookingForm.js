import React, { useState } from "react";
import ConfirmationPage from "./ConfirmationPage";



function BookingForm({ availableTimes }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [availableOccasions, setAvailableOccasions] = useState([
    "Birthday",
    "Anniversary",
  ]);

  const [submitted,setsubmitted]=useState(false);

  const [submitAttempted, setSubmitAttempted] = useState(false);

  const isFormValid = () => {
    
    console.log("isFormValid");
      return (
      
        date &&
        time &&
        guests &&
        occasion &&
        guests >= 1 &&
        guests <= 10
       
      );
   
   
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("isFormValid");
   setSubmitAttempted(true);
   if (isFormValid()) {
    console.log("Booking submitted");
   setsubmitted(true);
    // handle form submission logic here
  } else {
    alert("Please fill out all fields and enter a valid number of guests.");
  }
    // TODO: handle form submission
  };
  if (submitted) {
    return <ConfirmationPage />;
  }

  const handleDateChange = (e) => {
    setDate(e.target.value);
 
  };

  return (
    <>
     <h2>Fill the form to book</h2>
      <form
        style={{ display: "grid", maxWidth: "200px", gap: "20px" }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          {availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          value={guests}
          onChange={(e) => setGuests(e.target.value)
            }
          required
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          {availableOccasions.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <input type="submit" value="Make Your Reservation" disabled={!isFormValid()}/>
        {submitAttempted && !isFormValid() && (
        <p style={{ color: "red" }}>Please fill out all fields and enter a valid number of guests.</p>
      )}
      </form>
    </>
  );
}

export default BookingForm;