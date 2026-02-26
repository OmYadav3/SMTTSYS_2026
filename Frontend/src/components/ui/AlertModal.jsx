import React from "react";

const AlertModal = ({message, open}) => {
    if (open) return null;

  return <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-[#1c1c2e] px-8 py-6 rounded-xl shadow-xl text-center w-[320px]">
        <div className="text-yellow-400 text-5xl mb-2">!</div>
        <p className="text-white font-semibold">{message}</p>
      </div>
    </div>;
};

export default AlertModal;
