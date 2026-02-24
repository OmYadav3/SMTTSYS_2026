import React from "react";

const Input = ({
  type = "text",
  placeholder,
  value,
 
  label,
  color = "primary",
  size = "sm",
  error,
  onClick,
}) => {
  /* ⭐ SIZE VARIANTS */
  const sizeVarient = {
    xs: "text-xs px-1 py-1",
    sm: "text-sm px-3 py-2",
    md: "text-md px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  /* ⭐ COLOR VARIANTS */
  const colorVariant = {
    primary: "input-theme",
    danger: "input-danger",
    success: "input-success",
  };

  const colorKey = error ? "danger" : color;

  const classes = `
    ${sizeVarient[size]}
    ${colorVariant[colorKey]}
    rounded w-[68%] font-semibold 
    
  `;

  return (
    <div className="flex justify-between items-center gap-2 p-2">
      {label && <label className="text-theme font-bold ">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        
        onClick={onClick}
        className={classes}
      />
    </div>
  );
};

export default Input;
