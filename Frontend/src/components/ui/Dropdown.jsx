import React from "react";

const Dropdown = ({
  children,
  optionList = [],
  value,
  onChange,
  placeholder = "ALL",
  size = "sm",
  error,
}) => {

  /* ⭐ SIZE VARIANTS */
  const sizeVarient = {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-3 py-2",
    md: "text-md px-4 py-2",
    lg: "text-lg px-5 py-3",
  };

  const classes = `
    select-theme theme-transition
    ${sizeVarient[size]}
    rounded w-[68%] font-semibold
    ${error ? "border-red-500" : ""}
  `;

  return (
    <div className="flex justify-between items-center gap-2 p-2">
      <label className="text-theme font-semibold">{children}</label>

      <select
        className={classes}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="">{placeholder}</option>

        {optionList?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
