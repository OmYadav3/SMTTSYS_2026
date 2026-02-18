import React from "react";

const Input = ({ type, placeholder, value, onChange, label, color, size, error, onClick }) => {
  const colorsVarient = {
    primary: "focus:ring-blue-500 focus:border-blue-500 outline-none",
    danger: "focus:ring-red-500 focus:border-red-500 outline-none",
    success: "focus:ring-green-500 focus:border-green-500 outline-none",
  };
  
  const colorKey = error ? "danger" : color;

  const sizeVarient = {
    xs: "sm:text-sm sm:px-4 sm:py-1  p-1",
    sm: "sm:text-sm sm:px-4   p-2",
    md: "sm:text-lg sm:px-6 sm:py-2  p-2",
    lg: "sm:text-xl sm:px-8 sm:py-3  p-2",
  };


  const classes = `
  ${colorsVarient[colorKey]} 
  ${sizeVarient[size]} 
  
  bg-component rounded border-2 w-[68%] text-color font-bold`;

  return (
    <>
      <div className=" flex justify-between items-center gap-2 p-2 font-bold">
        <label className="font-bolder text-color ">{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onClick={onClick}
          className={classes}
        />
      </div>
    </>
  );
};

export default Input;
