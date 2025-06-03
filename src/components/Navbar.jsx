import { ChevronDown, LogOut } from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="flex justify-between items-center px-8 py-3 shadow border-b bg-white"
      style={{ fontFamily: "Poppins, sans-serif", minHeight: 64 }}
    >
      {/* Left: Logo + Menu */}
      <div className="flex items-center gap-50">
        {/* Logo */}
      
          <img src="/logo.jpg" alt="Logo" className="h-10" />
        

        {/* Menu */}
        <div className="flex items-center gap-7 font-medium text-[#222] text-[15px]">
          <span className="cursor-pointer hover:text-[#ff3e3e]">Home</span>
          <span className="cursor-pointer hover:text-[#ff3e3e]">Practice</span>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#ff3e3e]">
            <span>Assessment</span>
            <ChevronDown size={16} />
          </div>
          <span className="cursor-pointer hover:text-[#ff3e3e]">Leaderboard</span>
          <div className="flex items-center gap-1 cursor-pointer hover:text-[#ff3e3e]">
            <span>Company Specific</span>
            <ChevronDown size={16} />
          </div>
        </div>
      </div>

      {/* Right: Profile + Logout */}
      <div className="flex items-center gap-4">
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
        <button className="flex items-center gap-1 bg-[#ff3e3e] hover:bg-[#e11d48] text-white px-5 py-2 rounded-lg text-[15px] font-semibold shadow-none">
          Logout <LogOut size={16} />
        </button>
      </div>
    </nav>
  );
}
