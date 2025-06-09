import { ChevronDown, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";
import "../Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="navbar"
      style={{ fontFamily: "Poppins, sans-serif", minHeight: 64 }}
    >
      {/* Left: Hamburger (mobile) + Logo */}
      <div className="navbar-left">
        <button
          className="navbar-hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="navbar-hamburger-icon" /> : <Menu className="navbar-hamburger-icon" />}
        </button>
        <img src="/logo.jpg" alt="Logo" className="navbar-logo" />
      </div>

      {/* Menu (hidden on mobile) */}
      <div className="navbar-menu">
        <span className="navbar-menu-item">Home</span>
        <span className="navbar-menu-item">Practice</span>
        <div className="navbar-menu-item-dropdown">
          <span>Assessment</span>
          <ChevronDown size={16} />
        </div>
        <span className="navbar-menu-item">Leaderboard</span>
        <div className="navbar-menu-item-dropdown">
          <span>CompanySpecific</span>
          <ChevronDown size={16} />
        </div>
      </div>

      {/* Profile + Logout (hidden on mobile) */}
      <div className="navbar-profile">
        <div className="navbar-profile-info">
          <img
            src="https://i.pravatar.cc/40?img=12"
            alt="Profile"
            className="navbar-profile-avatar"
          />
          <span className="navbar-profile-name">
            Muskan Verma
          </span>
        </div>
        <button className="navbar-logout-btn">
          Logout <LogOut size={16} />
        </button>
      </div>
    </nav>
  );
}
