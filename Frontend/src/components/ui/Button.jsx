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

const Button = ({ color = "primary", size = "sm", icon, children, onClick, to, disabled } ) => {

  /* ⭐ THEME VARIANTS */
  const colorsVarient = {
    primary: "btn-theme",
    danger: "btn-danger",
    success: "btn-success",
    outline: "btn-outline",
  };

  /* ⭐ SIZE VARIANTS */
  const sizeVarient = {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-4 py-2",
    md: "text-md px-6 py-2",
    lg: "text-lg px-8 py-3",
  };

  /* ⭐ ICON MAP */
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
    transition duration-200
    active:scale-95
  `;

  if (to) {
    return (
      <Link to={to} className={classes} >
        {Icon && <Icon size={18} className="mr-2" />}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes} disabled={disabled} >
      {Icon && <Icon size={18} className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
