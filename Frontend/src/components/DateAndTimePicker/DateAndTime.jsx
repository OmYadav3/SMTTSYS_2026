import React, { useEffect, useRef, useState } from "react";

import CalendarHeader from "./CalenderHeader";
import CalendarGrid from "./CalenderGrid";
import MonthSelector from "./MonthSelector";
import YearSelector from "./YearSelector";
// import TimePicker from "./TimePicker";

const DateAndTime = ({ label }) => {
  /* CURRENT DATE */

  const date = new Date();
  const monthName = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  /* SELECTED DATE STATES */

  const [selectedDay, setSelectedDay] = useState(date.getDate());
  const [selectedMonth, setSelectedMonth] = useState(monthName);
  const [selectedYear, setSelectedYear] = useState(year);

  const [dateValue, setDateValue] = useState("");

  /* UI STATES */

  const [isDateBox, setIsDateBox] = useState(false);
  const [isYearBox, setIsYearBox] = useState(false);
  const [isMonthBox, setIsMonthBox] = useState(false);
  const [isCalender, setIsCalender] = useState(true);

  /* TIME STATES */

//   const [hour, setHour] = useState("00");
//   const [minute, setMinute] = useState("00");
//   const [second, setSecond] = useState("00");

//   const [timeValue, setTimeValue] = useState("00:00:00");
//   const [isTimeBox, setIsTimeBox] = useState(false);

  /* STATIC DATA */

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const years = [];
  for (let i = 2021; i <= 2050; i++) years.push(i);

//   const hours = Array.from({ length: 24 }, (_, i) =>
//     String(i).padStart(2, "0"),
//   );

//   const minutes = Array.from({ length: 60 }, (_, i) =>
//     String(i).padStart(2, "0"),
//   );

//   const seconds = Array.from({ length: 60 }, (_, i) =>
//     String(i).padStart(2, "0"),
//   );

  /* DAYS IN MONTH */

  const getDaysInMonth = (month, year) => {
    const monthIndex = months.indexOf(month);
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) days.push(i);

  const firstDayIndex = new Date(
    selectedYear,
    months.indexOf(selectedMonth),
    1,
  ).getDay();

  const emptyDays = Array.from({ length: firstDayIndex });

  /* DATE CHANGE */

  const evenChangeHandler = (value, type) => {
    if (type === "day") {
      setSelectedDay(value);
      setDateValue(`${value} ${selectedMonth} ${selectedYear}`);
    }

    if (type === "month") {
      setSelectedMonth(value);
      setIsMonthBox(false);
      setIsCalender(true);
    }

    if (type === "year") {
      setSelectedYear(value);
      setIsYearBox(false);
      setIsCalender(true);
    }
  };

  /* TIME CHANGE */

//   const handleTimeChange = (value, type) => {
//     let h = hour;
//     let m = minute;
//     let s = second;

//     if (type === "hour") {
//       setHour(value);
//       h = value;
//     }
//     if (type === "minute") {
//       setMinute(value);
//       m = value;
//     }
//     if (type === "second") {
//       setSecond(value);
//       s = value;
//     }

    // setTimeValue(`${h}:${m}:${s}`);
//   };

  /* INPUT BOX */

  const handleDateInputBox = () => setIsDateBox(true);
  const handleDateBox = () => setIsDateBox(false);

  const HandlerYears = () => {
    setIsYearBox(true);
    setIsMonthBox(false);
    setIsCalender(false);
  };

  const HandlerMonths = () => {
    setIsMonthBox(true);
    setIsYearBox(false);
    setIsCalender(false);
  };

  /* CHEVRON LOGIC */

  const handlePrevYear = () => setSelectedYear((prev) => prev - 1);
  const handleNextYear = () => setSelectedYear((prev) => prev + 1);

  const handlePrevMonth = () => {
    const index = months.indexOf(selectedMonth);

    if (index === 0) {
      setSelectedMonth(months[11]);
      setSelectedYear((prev) => prev - 1);
    } else {
      setSelectedMonth(months[index - 1]);
    }
  };

  const handleNextMonth = () => {
    const index = months.indexOf(selectedMonth);

    if (index === 11) {
      setSelectedMonth(months[0]);
      setSelectedYear((prev) => prev + 1);
    } else {
      setSelectedMonth(months[index + 1]);
    }
  };

  /* OUTSIDE CLICK */

  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsDateBox(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  /* NOW BUTTON */

  const handleNowButton = () => {
    const now = new Date();

    const day = now.getDate();
    const month = months[now.getMonth()];
    const year = now.getFullYear();

    // const h = String(now.getHours()).padStart(2, "0");
    // const m = String(now.getMinutes()).padStart(2, "0");
    // const s = String(now.getSeconds()).padStart(2, "0");

    setSelectedDay(day);
    setSelectedMonth(month);
    setSelectedYear(year);

    // setHour(h);
    // setMinute(m);
    // setSecond(s);

    setDateValue(`${day} ${month} ${year}`);
    // setTimeValue(`${h}:${m}:${s}`);

    setIsDateBox(false);
  };

  return (
    <div ref={ref}>
      <div className="relative">
        <div className="flex items-center">
          <label className="pr-8 font-bold w-45">{label}</label>

          <input
            type="text"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            onClick={handleDateInputBox}
            className="text-sm border p-2 font-bold w-full"
            placeholder="Select Date and Time"
          />
        </div>

        {isDateBox && (
          <div className="absolute left-26 border rounded-md w-73 mt-4 bg-black/70">
            {/* HEADER */}
            <CalendarHeader
              selectedYear={selectedYear}
              selectedMonth={selectedMonth}
              handlePrevYear={handlePrevYear}
              handleNextYear={handleNextYear}
              handlePrevMonth={handlePrevMonth}
              handleNextMonth={handleNextMonth}
              HandlerYears={HandlerYears}
              HandlerMonths={HandlerMonths}
            />

            {/* YEAR */}
            {isYearBox && (
              <YearSelector
                years={years}
                evenChangeHandler={evenChangeHandler}
              />
            )}

            {/* MONTH */}
            {isMonthBox && (
              <MonthSelector
                months={months}
                evenChangeHandler={evenChangeHandler}
              />
            )}

            {/* CALENDAR */}
            {isCalender && (
              <CalendarGrid
                weekdays={weekdays}
                emptyDays={emptyDays}
                days={days}
                selectedDay={selectedDay}
                evenChangeHandler={evenChangeHandler}
              />
            )}

            {/* TIME */}
            {/* {isTimeBox && (
              <TimePicker
                hours={hours}
                minutes={minutes}
                seconds={seconds}
                hour={hour}
                minute={minute}
                second={second}
                handleTimeChange={handleTimeChange}
              />
            )} */}

            {/* BUTTONS */}

            <div className="flex items-center justify-end mx-3 gap-2">
              <button
                onClick={handleNowButton}
                className="border my-2 px-2 py-1 rounded-lg hover:bg-green-500/50"
              >
                Now
              </button>

              <button
                onClick={handleDateBox}
                className="border my-2 px-2 py-1 rounded-lg hover:bg-blue-500/50"
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateAndTime;
