import React from 'react'
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"


const Navbar = () => {
  const [toggled, isToggled] = useState(false)

  const handleClick = () => {
      isToggled(current => !current);
  }

  return (
    <div className="w-full bg-black text-white flex justify-between items-center">
      <div className="px-10">
        <h1 className="w-full text-3xl font-bold text-[#00df9a] uppercase">Anqatech</h1>
      </div>
      <nav>
        <ul className="hidden md:flex gap-8">
          <li className="p-4"><Link to="/">Home</Link></li>
          <li className="p-4"><Link to="/about">About</Link></li>
        </ul>

        <div onClick={handleClick} className="p-4 flex justify-center md:hidden">
            {toggled ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
        </div>

        <ul className={toggled ? "flex flex-col gap-8": "hidden"}>
          <li className="p-4" onClick={handleClick}><Link to="/">Home</Link></li>
          <li className="p-4" onClick={handleClick}><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
