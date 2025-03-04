import React from "react";

const Item = ({ label, icon: Icon }) => {
  return (
    <div className="flex items-center gap-2 transition text-[#202124] text-[14px] hover:bg-secondary rounded-full px-4 py-2 cursor-pointer dark:text-white">
      <Icon className="w-5 h-5" />
      <span className="pl-2 text-[]] opacity-75">{label}</span>
    </div>
  );
};

export default Item;
