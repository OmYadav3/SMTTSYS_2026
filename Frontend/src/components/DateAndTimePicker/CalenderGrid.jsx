import React from "react";
import { weekdays } from "./constant.js";

const CalendarGrid = ({
  days,
  emptyDays,
  selectedDay,
  evenChangeHandler
}) => {

  return (
    <div className="border-t grid grid-cols-7 text-center">

      {weekdays.map((day, index) => (
        <div key={index} className="border-b p-2 font-extrabold">
          {day}
        </div>
      ))}

      {emptyDays.map((_, index) => (
        <div key={`empty-${index}`} className="p-2"></div>
      ))}

      {days.map((day, index) => (
        <button
          key={index}
          onClick={() => evenChangeHandler(day, "day")}
          className={`border-l p-2 font-extrabold hover:bg-blue-500
          ${selectedDay === day ? "bg-blue-500 text-white scale-102" : ""}`}
        >
          {day}
        </button>
      ))}

    </div>
  );
};

export default CalendarGrid;