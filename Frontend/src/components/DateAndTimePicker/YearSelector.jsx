import React from "react";

const YearSelector = ({ years, evenChangeHandler }) => {

  return (
    <div className="border grid grid-cols-3 text-center">

      {years.slice(0,10).map((year,index)=>(
        <div
          key={index}
          onClick={() => evenChangeHandler(year,"year")}
          className="border p-2 font-extrabold hover:bg-blue-500"
        >
          {year}
        </div>
      ))}

    </div>
  );
};

export default YearSelector;