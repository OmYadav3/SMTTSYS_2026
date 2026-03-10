import React, { useEffect, useRef, useState } from "react";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from "lucide-react";

const DateAndTime = ({ label }) => {

  /* ---------------- CURRENT DATE ---------------- */

  const date = new Date();

  const monthName = date.toLocaleString("default", { month: "short" });
  const year = date.getFullYear();

  /* ---------------- SELECTED DATE STATES ---------------- */

  const [selectedDay, setSelectedDay] = useState(date.getDate());
  const [selectedMonth, setSelectedMonth] = useState(monthName);
  const [selectedYear, setSelectedYear] = useState(year);

  /* input field value */
  const [dateValue, setDateValue] = useState("");

  /* ---------------- UI STATE CONTROLLERS ---------------- */

  const [isDateBox, setIsDateBox] = useState(false);
  const [isYearBox, setIsYearBox] = useState(false);
  const [isMonthBox, setIsMonthBox] = useState(false);
  const [isCalender, setIsCalender] = useState(true);

  /* ---------------- TIME STATES ---------------- */

  const [hour, setHour] = useState("00");
  const [minute, setMinute] = useState("00");
  const [second, setSecond] = useState("00");

  const [timeValue, setTimeValue] = useState("00:00:00");
  const [isTimeBox, setIsTimeBox] = useState(false);

  /* ---------------- STATIC DATA ---------------- */

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const months = [
    "Jan","Feb","Mar","Apr","May","Jun",
    "Jul","Aug","Sep","Oct","Nov","Dec",
  ];

  const years = [];
  for (let i = 2021; i <= 2050; i++) {
    years.push(i);
  }

  const hours = Array.from({ length: 24 }, (_, i) =>
    String(i).padStart(2, "0")
  );

  const minutes = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
  );

  const seconds = Array.from({ length: 60 }, (_, i) =>
    String(i).padStart(2, "0")
  );

  /* ---------------- GET DAYS IN MONTH ---------------- */

  const getDaysInMonth = (month, year) => {
    const monthIndex = months.indexOf(month);
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

  /* create array of days */
  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  /* ---------------- FIX WEEKDAY ALIGNMENT ---------------- */
  /* find which weekday the first day of month starts */

  const firstDayIndex = new Date(
    selectedYear,
    months.indexOf(selectedMonth),
    1
  ).getDay();

  /* create empty spaces before day 1 */

  const emptyDays = Array.from({ length: firstDayIndex });

  /* ---------------- DATE CHANGE HANDLER ---------------- */

  const evenChangeHandler = (value, type) => {

    if (type === "day") {
      setSelectedDay(value);

      const fullDate = `${value} ${selectedMonth} ${selectedYear}`;
      setDateValue(fullDate);
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

  /* ---------------- TIME HANDLER ---------------- */

  const handleTimeChange = (value, type) => {

    let h = hour;
    let m = minute;
    let s = second;

    if (type === "hour") {
      setHour(value);
      h = value;
    }

    if (type === "minute") {
      setMinute(value);
      m = value;
    }

    if (type === "second") {
      setSecond(value);
      s = value;
    }

    const fullTime = `${h}:${m}:${s}`;
    setTimeValue(fullTime);
  };

  /* ---------------- INPUT BOX OPEN ---------------- */

  const handleDateInputBox = () => {
    setIsDateBox(true);
  };

  /* ---------------- CLOSE DATE BOX ---------------- */

  const handleDateBox = () => {
    setIsDateBox(false);
  };

  /* ---------------- YEAR SELECT ---------------- */

  const HandlerYears = () => {
    setIsYearBox(true);
    setIsMonthBox(false);
    setIsCalender(false);
  };

  /* ---------------- MONTH SELECT ---------------- */

  const HandlerMonths = () => {
    setIsMonthBox(true);
    setIsYearBox(false);
    setIsCalender(false);
  };

  /* ---------------- CHEVRON FUNCTIONS ---------------- */

  const handlePrevYear = () => {
    setSelectedYear((prev) => prev - 1);
  };

  const handleNextYear = () => {
    setSelectedYear((prev) => prev + 1);
  };

  const handlePrevMonth = () => {

    const currentIndex = months.indexOf(selectedMonth);

    if (currentIndex === 0) {
      setSelectedMonth(months[11]);
      setSelectedYear((prev) => prev - 1);
    } else {
      setSelectedMonth(months[currentIndex - 1]);
    }
  };

  const handleNextMonth = () => {

    const currentIndex = months.indexOf(selectedMonth);

    if (currentIndex === 11) {
      setSelectedMonth(months[0]);
      setSelectedYear((prev) => prev + 1);
    } else {
      setSelectedMonth(months[currentIndex + 1]);
    }
  };

  /* ---------------- CLICK OUTSIDE CLOSE ---------------- */

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

  /* ---------------HandleNowButton ---------*/

  const handleNowButton = () => {
  const now = new Date();

  const day = now.getDate();
  const month = months[now.getMonth()];
  const year = now.getFullYear();

  const h = String(now.getHours()).padStart(2, "0");
  const m = String(now.getMinutes()).padStart(2, "0");
  const s = String(now.getSeconds()).padStart(2, "0");

  // set calendar values
  setSelectedDay(day);
  setSelectedMonth(month);
  setSelectedYear(year);

  // set time values
  setHour(h);
  setMinute(m);
  setSecond(s);

  // update input values
  setDateValue(`${day} ${month} ${year}`);
  setTimeValue(`${h}:${m}:${s}`);

  // close picker
  setIsDateBox(false);
};


  /* ---------------- UI ---------------- */

  return (
    <div ref={ref}>
      <div className="relative">

        {/* INPUT FIELD */}

        <div className="flex items-center">
          <label className="pr-8 font-bold w-45">{label}</label>

          <input
            type="text"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            className="text-sm border p-2 font-bold w-full"
            onClick={handleDateInputBox}
            placeholder="Select Date and Time"
          />
        </div>

        {/* DATE PICKER BOX */}

        {isDateBox === true && (
          <div className="absolute left-26 border rounded-md w-73 mt-4 bg-black/70">

            {/* DATE + TIME INPUT */}

            <div className="border-b flex justify-around">

              <input
                type="text"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                className="text-sm border w-32 m-2 rounded-md px-4"
              />

              <input
                type="text"
                value={timeValue}
                onClick={() => setIsTimeBox(!isTimeBox)}
                onChange={(e) => setTimeValue(e.target.value)}
                className="text-sm p-2 border w-32 m-2 rounded-md"
              />
            </div>

            {/* CALENDAR HEADER */}

            <div className="border-b">

              <div className="flex items-center justify-center">

                <div className="flex p-2">
                  <button onClick={handlePrevYear}>
                    <ChevronsLeft className="w-8 h-8" />
                  </button>

                  <button onClick={handlePrevMonth}>
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                </div>

                <div className="flex p-2 m-2 gap-2">

                  <button onClick={HandlerYears}>
                    <div className="text-xl">{selectedYear}</div>
                  </button>

                  <button onClick={HandlerMonths}>
                    <div className="text-xl">{selectedMonth}</div>
                  </button>

                </div>

                <div className="flex p-2">

                  <button onClick={handleNextMonth}>
                    <ChevronRight className="w-8 h-8" />
                  </button>

                  <button onClick={handleNextYear}>
                    <ChevronsRight className="w-8 h-8" />
                  </button>

                </div>

              </div>

              {/* YEAR BOX */}

              {isYearBox && (
                <div className="border grid grid-cols-3 text-center">
                  {years.slice(0, 10).map((year, index) => (
                    <div
                      key={index}
                      onClick={() => evenChangeHandler(year, "year")}
                      className="border p-2 font-extrabold hover:bg-blue-500"
                    >
                      {year}
                    </div>
                  ))}
                </div>
              )}

              {/* MONTH BOX */}

              {isMonthBox && (
                <div className="border grid grid-cols-3 text-center">
                  {months.map((month, index) => (
                    <button
                      key={index}
                      onClick={() => evenChangeHandler(month, "month")}
                      className="border p-2 font-extrabold hover:bg-blue-500"
                    >
                      {month}
                    </button>
                  ))}
                </div>
              )}

              {/* CALENDAR */}

              {isCalender && (
                <div className="border-t grid grid-cols-7 text-center">

                  {weekdays.map((day, index) => (
                    <div key={index} className="border-b p-2 font-extrabold">
                      {day}
                    </div>
                  ))}

                  {/* empty spaces before first day */}

                  {emptyDays.map((_, index) => (
                    <div key={`empty-${index}`} className="p-2"></div>
                  ))}

                  {/* actual days */}

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
              )}

            </div>

            {/* TIME PICKER */}

            {isTimeBox && (
              <div className="flex gap-2 p-2 border-t bg-black/80 absolute top-16 left-34">

                <div className="h-32 overflow-y-scroll border">
                  {hours.map((h, i) => (
                    <div
                      key={i}
                      onClick={() => handleTimeChange(h, "hour")}
                      className={`p-1 cursor-pointer hover:bg-blue-400
                      ${hour === h ? "bg-blue-500 text-white" : ""}`}
                    >
                      {h}
                    </div>
                  ))}
                </div>

                <div className="h-32 overflow-y-scroll border">
                  {minutes.map((m, i) => (
                    <div
                      key={i}
                      onClick={() => handleTimeChange(m, "minute")}
                      className={`p-1 cursor-pointer hover:bg-blue-400
                      ${minute === m ? "bg-blue-500 text-white" : ""}`}
                    >
                      {m}
                    </div>
                  ))}
                </div>

                <div className="h-32 overflow-y-scroll border">
                  {seconds.map((s, i) => (
                    <div
                      key={i}
                      onClick={() => handleTimeChange(s, "second")}
                      className={`p-1 cursor-pointer hover:bg-blue-400
                      ${second === s ? "bg-blue-500 text-white" : ""}`}
                    >
                      {s}
                    </div>
                  ))}
                </div>

              </div>
            )}

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