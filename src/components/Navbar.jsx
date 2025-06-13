import { ChevronDown, LogOut, Menu as MenuIcon, X } from "lucide-react";
import { useState } from "react";
import {
  NavbarContainer,
  NavbarLeft,
  Hamburger,
  Logo,
  Menu,
  MenuItem,
  MenuItemDropdown,
  Profile,
  ProfileInfo,
  Avatar,
  ProfileName,
  LogoutButton
} from "../styles/Navbar.styles";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer style={{ fontFamily: "Poppins, sans-serif", minHeight: 48 }}>
      {/* Left: Hamburger + Logo */}
      <NavbarLeft>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={24} />
          ) : (
            <MenuIcon size={24} />
          )}
        </Hamburger>
        <Logo src="/logo.jpg" alt="Logo" />
      </NavbarLeft>

      {/* Middle Menu (visible on desktop) */}
      <Menu>
        <MenuItem>Home</MenuItem>
        <MenuItem>Practice</MenuItem>
        <MenuItemDropdown>
          <span>Assessment</span>
          <ChevronDown size={16} />
        </MenuItemDropdown>
        <MenuItem>Leaderboard</MenuItem>
        <MenuItemDropdown>
          <span>CompanySpecific</span>
          <ChevronDown size={16} />
        </MenuItemDropdown>
      </Menu>

      {/* Right Profile */}
      <Profile>
        <ProfileInfo>
          <Avatar src="https://i.pravatar.cc/40?img=12" alt="Profile" />
          <ProfileName>Muskan Verma</ProfileName>
        </ProfileInfo>
        <LogoutButton>
          Logout <LogOut size={16} />
        </LogoutButton>
      </Profile>
    </NavbarContainer>
  );
}
