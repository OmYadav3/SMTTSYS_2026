import React from "react";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  label,
  color = "primary",
  size = "sm",
  error,
  onClick,
}) => {

  /* ⭐ SIZE VARIANTS */
  const sizeVarient = {
    xs: "text-xs px-2 py-1",
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
    theme-transition
    rounded w-full
  `;

  return (
    <div className="flex flex-col gap-1 w-full">
      {label && <label className="text-theme text-sm font-semibold">{label}</label>}

      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onClick={onClick}
        className={classes}
      />
    </div>
  );
};

export default Input;
