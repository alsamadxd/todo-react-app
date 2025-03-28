import React from "react";

const NavBar = () => {
  return (
    <nav className="flex justify-between bg-slate-800 py-3 text-white">
        <div className="logo">
            <span className="font-bold text-xl mx-10">✏️iList</span>
        </div>
      <ul className="flex gap-10 mx-10">
        <li className="cursor-pointer hover:font-bold transition-all ">home</li>
        <li className="cursor-pointer hover:font-bold transition-all ">Your Task</li>
      </ul>
    </nav>
  );
};

export default NavBar;
