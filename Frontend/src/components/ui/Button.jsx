import React from "react";
import {
  FileText,
  Plus,
  Trash2,
  Pencil,
  Search,
  FileX,
  ArrowDownToLine,
  OctagonAlert,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Link } from "react-router-dom";

const Button = ({ color, size, icon, children, onClick, to }) => {
  const colorsVarient = {
    primary: "bg-blue-500/20 hover:bg-blue-500 text-blue-500 hover:text-white",
    danger: "bg-red-500/10 hover:bg-red-500/90 text-red-500/80 hover:text-white",
    success:
      "bg-green-500/30 hover:bg-green-300/80 text-lime-500 hover:text-white",
    dark: " hover:bg-color border text-gray-500 hover:text-white ",  
  };

  const sizeVarient = {
    xs: "text-sm px-3 py-1 p-1",
    sm: "sm:text-md sm:px-6 sm:py-3  p-2",
    md: "sm:text-lg sm:px-16 sm:py-2  p-2",
    lg: "sm:text-xl sm:px-18 sm:py-3  p-2",
  };

  const IconVarient = {
    add: Plus,
    edit: Pencil,
    delete: Trash2,
    File: FileText,
    search: Search,
    excel: FileX,
    download: ArrowDownToLine,
    count: OctagonAlert,
    dropdown: ChevronDown,
    dropup: ChevronUp,
  };

  const Icon = IconVarient[icon];

  const classes = `
    ${colorsVarient[color]}
    ${sizeVarient[size]}
    flex items-center justify-center
     font-semibold rounded-md
    transition duration-300
    active:scale-95
  `;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {Icon && <Icon size={20} className="mr-2" />}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {Icon && <Icon size={20} className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
