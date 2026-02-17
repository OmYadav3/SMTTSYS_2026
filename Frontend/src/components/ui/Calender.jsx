import React, { useState } from "react";

const weekDays = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // how many days in month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // start day index (0 = Sun)
  const startDay = new Date(year, month, 1).getDay();

  // previous month days
  const prevMonthDays = new Date(year, month, 0).getDate();

  // build grid
  const dates = [];

  // prev month filler
  for (let i = startDay - 1; i >= 0; i--) {
    dates.push({ day: prevMonthDays - i, muted: true });
  }

  // current month
  for (let i = 1; i <= daysInMonth; i++) {
    dates.push({ day: i, muted: false });
  }

  // next month filler to complete grid
  while (dates.length % 7 !== 0) {
    dates.push({ day: dates.length % 7 + 1, muted: true });
  }

  const prevMonth = () =>
    setCurrentDate(new Date(year, month - 1, 1));

  const nextMonth = () =>
    setCurrentDate(new Date(year, month + 1, 1));

  const monthName = currentDate.toLocaleString("default", {
    month: "long",
  });

  const today = new Date();

  return (
    <div className="w-90  rounded-xl">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <button onClick={prevMonth} className="text-2xl text-gray-400 hover:text-white">
          &lsaquo;
        </button>

        <div className="font-semibold text-xl">
          {monthName} {year}
        </div>

        <button onClick={nextMonth} className="text-2xl text-gray-400 hover:text-white">
          &rsaquo;
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm text-gray-400 mb-2">
        {weekDays.map((d) => (
          <div key={d}>{d}</div>
        ))}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-7 gap-2 text-center text-sm">
        {dates.map((d, i) => {
          const isToday =
            d.day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

          return (
            <div
              key={i}
              className={`
                py-2 rounded cursor-pointer
                ${d.muted ? "text-gray-500" : "hover:bg-slate-700"}
                ${isToday ? "bg-blue-600 text-white font-semibold" : ""}
              `}
            >
              {d.day}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;
