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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking submitted");
   setsubmitted(true);
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
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
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
          onChange={(e) => setGuests(e.target.value)}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          {availableOccasions.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        <input type="submit" value="Make Your Reservation" />
      </form>
    </>
  );
}

export default BookingForm;