import { ChevronDown, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="flex justify-between items-center px-4 md:px-8 py-3 shadow border-b bg-white"
      style={{ fontFamily: "Poppins, sans-serif", minHeight: 64 }}
    >
      {/* Left: Hamburger (mobile) + Logo */}
      <div className="flex items-center gap-4 flex-1">
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        <img src="/logo.jpg" alt="Logo" className="h-10" />
      </div>

      {/* Menu (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-7 font-medium text-[#222] text-[15px] flex-1 justify-center">
        <span className="cursor-pointer hover:text-[#ff3e3e]">Home</span>
        <span className="cursor-pointer hover:text-[#ff3e3e]">Practice</span>
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#ff3e3e]">
          <span>Assessment</span>
          <ChevronDown size={16} />
        </div>
        <span className="cursor-pointer hover:text-[#ff3e3e]">Leaderboard</span>
        <div className="flex items-center gap-1 cursor-pointer hover:text-[#ff3e3e]">
          <span>CompanySpecific</span>
          <ChevronDown size={16} />
        </div>
      </div>

      {/* Profile + Logout (hidden on mobile) */}
      <div className="hidden md:flex items-center gap-4 flex-1 justify-end">
        <div className="flex items-center gap-2">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="Profile"
            className="h-10 w-10 rounded-full border border-[#e5e5e5]"
          />
          <span className="font-semibold text-[#222] text-[15px]">
            Muskan Verma
          </span>
        </div>
        <button className="flex items-center gap-1 bg-[#ff3e3e] hover:bg-[#e11d48] text-white px-5 py-2 rounded-[3px] text-[15px] font-semibold shadow-none">
          Logout <LogOut size={16} />
        </button>
      </div>
    </nav>
  );
}
