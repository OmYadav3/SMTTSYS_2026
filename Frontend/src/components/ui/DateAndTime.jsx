import React, { useState } from "react";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from "lucide-react";

const DateAndTime = () => {
  const date = new Date();

  const monthName = date.toLocaleString("default", { month: "long" });
  const year = date.toLocaleString("default", { year: "numeric" });

  const [selectedDay, setSelectedDay] = useState(date.getDate());
  const [selectedMonth, setSelectedMonth] = useState(monthName);
  const [selectedYear, setSelectedYear] = useState(year);
  const [dateValue, setDateValue] = useState("");

  const [isDateBox, setIsDateBox] = useState(false);
  const [isYearBox, setIsYearBox] = useState(false);
  const [isMonthBox, setIsMonthBox] = useState(false);
  const [isCalender, setIsCalender] = useState(true);

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
  for (let i = 2021; i <= 2050; i++) {
    years.push(i);
  }

  // dynamic days
  const getDaysInMonth = (month, year) => {
    const monthIndex = months.indexOf(month);
    return new Date(year, monthIndex + 1, 0).getDate();
  };

  const daysInMonth = getDaysInMonth(selectedMonth, selectedYear);

  const days = [];
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  // MAIN DATE HANDLER
  const evenChangeHandler = (value, type) => {

    if (type === "day") {
      setSelectedDay(value);

      const fullDate = `${value} ${selectedMonth} ${selectedYear}`;
      console.log(fullDate);
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
    console.log(selectedDay)
  };

  const handleDateInputBox = () => {
    setIsDateBox(true);
  };

  const handleDateBox = () => {
    setIsDateBox(false);
  };

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

  return (
    <div>
      <div className="relative">
        {/* Main Input Field */}
        <div>
          <label htmlFor="" className="p-4">
            From Date
          </label>
          <input
            type="text"
            value={dateValue}
            onChange={(e) => setDateValue(e.target.value)}
            className="text-sm border p-2 font-bold"
            onClick={handleDateInputBox}
          />
        </div>

        {/*DateBox */}
        {isDateBox && (
          <div className="absolute left-26 border rounded-md w-73 mt-4 bg-black/30 ">
            {/*Calender inputs */}
            <div className="border-b flex justify-around ">
              <input
                type="text"
                value={dateValue}
                onChange={(e) => setDateValue(e.target.value)}
                className="text-sm border w-32 m-2 rounded-md px-4"
              />
              <input
                type="text"
                
                className="text-xl p-2 border w-32 m-2 rounded-md"
              />
            </div>

            {/* Main Calender */}
            <div className="border-b">
              <div className="flex items-center justify-center">

                <div className="flex p-2">
                  <button>
                    <ChevronsLeft className="w-8 h-8" />
                  </button>
                  <button>
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
                  <button>
                    <ChevronRight className="w-8 h-8" />
                  </button>
                  <button>
                    <ChevronsRight className="w-8 h-8" />
                  </button>
                </div>

              </div>

              {/* Year Box */}
              {isYearBox && (
                <div className="border grid grid-cols-3 text-center">
                  {years.slice(0, 10).map((year, index) => {
                    return (
                      <div
                        key={index}
                        onClick={() => evenChangeHandler(year, "year")}
                        className="border p-2 font-extrabold hover:bg-blue-500"
                      >
                        {year}
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Month Box */}
              {isMonthBox && (
                <div className="border grid grid-cols-3 text-center">
                  {months.map((month, index) => {
                    return (
                      <button
                        key={index}
                        onClick={() => evenChangeHandler(month, "month")}
                        className="border p-2 font-extrabold hover:bg-blue-500"
                      >
                        {month}
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Calendar */}
              {isCalender && (
                <div className="border-t grid grid-cols-7 text-center">

                  {weekdays.map((day, index) => (
                    <div key={index} className="border-b p-2 font-extrabold">
                      {day}
                    </div>
                  ))}

                  {days.map((day, index) => (
                    <button
                      key={index}
                      onClick={() => evenChangeHandler(day, "day")}
                     className={`border-l p-2 font-extrabold hover:bg-blue-500 
                
                    ${selectedDay === day ? "bg-blue-500 text-white scale-102 " : ""}
                    `}
                    >
                      {day}
                    </button>
                  ))}

                </div>
              )}
            </div>

            <div className="flex items-center justify-end mx-3 gap-2">
              <button
                onClick={handleDateBox}
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