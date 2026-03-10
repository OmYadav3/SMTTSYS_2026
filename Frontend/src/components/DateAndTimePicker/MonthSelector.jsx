import React from "react";
import { months } from "./constant.js";

const MonthSelector = ({ evenChangeHandler }) => {

  return (
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
  );
};

export default MonthSelector;