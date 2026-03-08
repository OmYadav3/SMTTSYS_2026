import React, { useState } from "react";
import {
  ChevronsLeft,
  ChevronLeft,
  ChevronsRight,
  ChevronRight,
} from "lucide-react";

const DateAndTime = () => {
  const [isDateBox, setIsDateBox] = useState(false);
  const [isYearBox, setIsYearBox] = useState(false);
  const [isMonthBox, setIsMonthBox] = useState(false);
  const [isCalender, setIsCalender] = useState(true);

  const weekdays = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];

  const months = [ "January", "Febrary", " March", "April", "May", "June", "July", "September", "October", "November", "December"];

  const years = [];

for (let i = 2021; i <= 2050; i++) {
  years.push(i);
}

const days = [];
for (let i = 1; i <= 31; i++) {
  days.push(i);
}


  const date = new Date();

  // const day = date.getDate();
  // const month = date.getMonth() + 1; // month in number
  const monthName = date.toLocaleString("default", { month: "long" }); // current month name
  const year = date.toLocaleString("default", { year: "numeric" }); // current year

  // const year = date.getYear();

  // console.log(date, "DATE");
  // console.log(day, "CURRENT DATE");
  // console.log(monthName, "CURRENT MONTH");
  // console.log(year, "CURRENT YEAR");
  // console.log(day, month, year);
  // console.log(date.toISOString().split("T")[0], "TODAY DATE");

  const handleDateInputBox = () => {
    setIsDateBox(true)

  };
  const handleDateBox = () => {
    setIsDateBox(false)

  };
  const HandlerYears = () => {
    setIsYearBox(true);
    setIsMonthBox(false);
    setIsCalender(false)

  };
  const HandlerMonths = () => {
    setIsMonthBox(true);
    setIsYearBox(false)
    setIsCalender(false)
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
            className="text-2xl border" 
            onClick={handleDateInputBox}
            />
        </div>

        {/*DateBox */}
        {
          isDateBox && <div className="absolute left-26 border rounded-md w-73 mt-4 bg-black/30 ">
          {/*Calender inputs */}
          <div className="border-b flex justify-around ">
            <input type="text" className="text-2xl border w-32 m-2 rounded-md" />
            <input type="text" className="text-2xl border w-32 m-2 rounded-md" />
          </div>

          {/* Main Calender */}
          <div className="border-b">
            <div className="flex items-center justify-center">

              {isMonthBox === true || isYearBox === true
                ? <button>
                  <ChevronLeft className="w-8 h-8" />
                </button> 
                : <div className="flex p-2">
                <button>
                  <ChevronsLeft className="w-8 h-8" />
                </button>
                <button>
                  <ChevronLeft className="w-8 h-8" />
                </button>
              </div>}


              <div className="flex p-2 m-2 gap-2">
                <button onClick={HandlerYears}>
                  {isYearBox === true ? (
                    <div className="text-xl">{year}</div>
                  ) : (
                    <div className="text-xl">{year}</div>
                  )}
                </button>
                <button onClick={HandlerMonths}>
                  {isMonthBox === true ? (
                    <div className="text-xl text-center">{monthName}</div>
                  ) : (
                    <div className="text-xl">{monthName}</div>
                  )}
                </button>
              </div>


                {isMonthBox === true || isYearBox === true
                ? <button>
                  <ChevronRight className="w-8 h-8" />
                </button> 
                : <div className="flex p-2">
                <button>
                  <ChevronRight className="w-8 h-8" />
                </button>
                <button>
                  <ChevronsRight className="w-8 h-8" />
                </button>
              </div>}
              
            </div>

            {/* Year Box */}
            {isYearBox && (
              <div className="border grid grid-cols-3 text-center">
                {years.slice(0,10).map((year, index) => {
                  return (
                    <div
                      key={index}
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
                    <div
                      key={index}
                      className="border p-2 font-extrabold hover:bg-blue-500"
                    >
                      {month}
                    </div>
                  );
                })}
              </div>
            )}

            {/* Year Box */}
            {isCalender && (
              <div className="border-t grid grid-cols-7 text-center">
                
                {weekdays.slice().map((day, index) => {
                  return (
                    <div
                      key={index}
                      className=" border-b p-2 font-extrabold "
                    >
                      {day}
                    </div>
                  );
                })}
                {days.slice().map((day, index) => {
                  return (
                    <div
                      key={index}
                      className="border-l  p-2 font-extrabold hover:bg-blue-500"
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="flex items-center justify-end mx-3 gap-2" >
            <button
              onClick={handleDateBox}  
              className="border my-2 px-2 py-1 rounded-lg hover:bg-green-500/50"
              >Now
              </button>
            <button
              onClick={handleDateBox} 
              className="border my-2 px-2 py-1 rounded-lg hover:bg-blue-500/50"
              >Ok
              </button>
          </div>
        </div>
        }

        
        
      </div>
    </div>
  );
};

export default DateAndTime;
