import React from "react";

const TimePicker = ({
  hours,
  minutes,
  seconds,
  hour,
  minute,
  second,
  handleTimeChange
}) => {

  return (
    <div className="flex gap-2 p-2 border-t bg-black/80 absolute top-16 left-34">

      <div className="h-32 overflow-y-scroll border">
        {hours.map((h,i)=>(
          <div
            key={i}
            onClick={()=>handleTimeChange(h,"hour")}
            className={`p-1 cursor-pointer hover:bg-blue-400
            ${hour===h ? "bg-blue-500 text-white" : ""}`}
          >
            {h}
          </div>
        ))}
      </div>

      <div className="h-32 overflow-y-scroll border">
        {minutes.map((m,i)=>(
          <div
            key={i}
            onClick={()=>handleTimeChange(m,"minute")}
            className={`p-1 cursor-pointer hover:bg-blue-400
            ${minute===m ? "bg-blue-500 text-white" : ""}`}
          >
            {m}
          </div>
        ))}
      </div>

      <div className="h-32 overflow-y-scroll border">
        {seconds.map((s,i)=>(
          <div
            key={i}
            onClick={()=>handleTimeChange(s,"second")}
            className={`p-1 cursor-pointer hover:bg-blue-400
            ${second===s ? "bg-blue-500 text-white" : ""}`}
          >
            {s}
          </div>
        ))}
      </div>

    </div>
  );
};

export default TimePicker;