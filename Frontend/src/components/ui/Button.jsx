import React from "react";
import { FileText, Plus, Trash2, Pencil, Search, FileX } from "lucide-react";

const Button = ({ color, size, icon, children, onClick }) => {
  const colorsVarient = {
    primary: "bg-blue-500/20 hover:bg-blue-500 text-blue-500 hover:text-white",
    danger: "bg-red-500/30 hover:bg-red-500/90 text-red-500 hover:text-white",
    success:
      "bg-green-500/30 hover:bg-green-300/80 text-lime-500 hover:text-white",
  };

  const sizeVarient = {
    sm: "text-sm px-14 py-1",
    md: "text-lg px-16 py-2",
    lg: "text-xl px-18 py-3",
  };

  const IconVarient = {
    add: Plus,
    edit: Pencil,
    delete: Trash2,
    File: FileText,
    search: Search,
    excel: FileX,
  };

  const Icon = IconVarient[icon];

  return (
    <button
      onClick={onClick}
      className={`
        ${colorsVarient[color]}
        ${sizeVarient[size]}
        flex items-center justify-center
        mt-4
        font-semibold rounded-md 
        transition duration-300
        active:scale-95  
        focus:outline-none 
        `}
    >
      {Icon && <Icon size={20} className="mr-2" />}
      {children}
    </button>
  );
};

export default Button;
