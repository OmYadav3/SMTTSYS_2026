import React, { useState, useEffect, useRef } from "react";
import Input from "./Input";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function Calender({ label }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isOpen, setIsOpen] = useState(false);

  const [pickedDate, setPickedDate] = useState(null);
  const [pickedTime, setPickedTime] = useState("");

  const [finalValue, setFinalValue] = useState("");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const startDay = new Date(year, month, 1).getDay();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const dates = [];

  for (let i = startDay - 1; i >= 0; i--) {
    dates.push({ day: prevMonthDays - i, muted: true });
  }

  for (let i = 1; i <= daysInMonth; i++) {
    dates.push({ day: i, muted: false });
  }

  while (dates.length % 7 !== 0) {
    dates.push({ day: (dates.length % 7) + 1, muted: true });
  }

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const monthName = currentDate.toLocaleString("default", { month: "long" });

  // ✅ select date
  const selectDate = (day, muted) => {
    if (muted) return;
    setPickedDate(new Date(year, month, day));
  };

  // ✅ OK button (time optional + milliseconds)
  const handleOK = () => {
    if (!pickedDate) return;

    const d = new Date(pickedDate);

    if (pickedTime) {
      const [h, m] = pickedTime.split(":");
      d.setHours(h);
      d.setMinutes(m);
    }

    d.setSeconds(new Date().getSeconds());
    d.setMilliseconds(new Date().getMilliseconds());

    setFinalValue(d.toLocaleString() + "." + d.getMilliseconds());
    setIsOpen(false);
  };

  // ✅ NOW button (with milliseconds)
  const handleNow = () => {
    const now = new Date();

    setPickedDate(now);
    const time = now.toTimeString().slice(0, 5); // HH:mm
    setPickedTime(time);

    setFinalValue(now.toLocaleString() + "." + now.getMilliseconds());
    setIsOpen(false);
  };

  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="rounded-xl relative " ref={ref}>
      {/* TOP FIELD — FINAL VALUE */}
      <Input
        label={label}
        type=""
        size="sm"
        color="primary"
        placeholder="Select Date and Time"
        onClick={() => setIsOpen(true)}
        className="w-full"
        value={finalValue}
        readOnly
      />

      {isOpen === true ? (
        <div className="w-70 border bg-theme text-theme absolute  left-28 p-3 py-5 pb-0 rounded-md shadow-xl z-50">
          {/* YOUR TWO INPUTS */}
          <div className="grid grid-cols-2 gap-3 border-b border-gray-400 pb-4">
            <input
              className="p-2 rounded border border-gray-600 "
              placeholder="Select Date"
              value={pickedDate ? pickedDate.toLocaleDateString() : ""}
              readOnly
            />

            <input
              type="time"
              className="p-2 rounded border border-gray-600"
              value={pickedTime}
              onChange={(e) => setPickedTime(e.target.value)}
            />
          </div>

          {/* CALENDAR */}
          <div className=" p-4 rounded-xl ">
            <div className="flex justify-between mb-4">
              <button onClick={prevMonth}>‹</button>
              <div className="font-semibold text-lg ">
                {monthName} {year}
              </div>
              <button onClick={nextMonth}>›</button>
            </div>

            <div className="grid grid-cols-7 text-xs text-gray-400 mb-2">
              {weekDays.map((d) => (
                <div key={d}>{d}</div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-1 text-sm">
              {dates.map((d, i) => {
                const selected =
                  pickedDate &&
                  d.day === pickedDate.getDate() &&
                  month === pickedDate.getMonth() &&
                  year === pickedDate.getFullYear();

                return (
                  <div
                    key={i}
                    onClick={() => selectDate(d.day, d.muted)}
                    className={`
                  py-2 rounded cursor-pointer text-center
                  ${d.muted && "text-gray-600"}
                  ${selected && "bg-blue-600"}
                  hover:bg-slate-700
                `}
                  >
                    {d.day}
                  </div>
                );
              })}
            </div>

            {/* BUTTONS */}
            <div className="flex justify-end gap-2 mt-4 border-t border-gray-400 pt-3 ">
              <button
                onClick={handleNow}
                className="px-3 py-1 bg-slate-700 rounded"
              >
                Now
              </button>

              <button
                onClick={handleOK}
                className="px-3 py-1 bg-blue-600 rounded"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
