import React from "react";

const Dropdown = ({
  children,
  optionList = [],
  value,
  onChange,
  placeholder = "Select an option",
  size,
}) => {

  const sizeVarient = {
    xs: "sm:text-sm sm:px-4 sm:py-1  p-1",
    sm: "sm:text-sm sm:px-4   p-2",
    md: "sm:text-lg sm:px-6 sm:py-2  p-2",
    lg: "sm:text-xl sm:px-8 sm:py-3  p-2",
  };

  const classes = ` 
  ${sizeVarient[size]} 
  sm:text-sm sm:px-4 p-2 border border-gray-600 bg-gray-800 text-gray-200 text-lg rounded mt-2 `;

  return (
    <>
      <div className="flex items-center gap-4 justify-between ">
        <label htmlFor="" className="font-bold  ">
          {children}
        </label>
        <select
          name="reports"
          id="report"
          className={classes}
          value={value}
          onChange={onChange}
        >
          <option>{placeholder}</option>
          {optionList?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown;
