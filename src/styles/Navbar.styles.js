import styled from 'styled-components';

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 32px;
  box-shadow: 0 1px 2px 0 rgba(16, 24, 40, 0.05);
  border-bottom: 1px solid #e5e7eb;
  background: #fff;
  min-height: 60px;
  height: 55px;

  @media (max-width: 768px) {
    padding-left: 16px;
    padding-right: 16px;
  }
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
`;

export const Hamburger = styled.button`
  background: none;
  border: none;
  display: block;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const HamburgerIcon = styled.img`
  width: 24px;
  height: 24px;
`;

export const Logo = styled.img`
  height: 40px;
`;

export const Menu = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 28px;
    font-weight: 500;
    color: #222;
    font-size: 15px;
    flex: 1;
    justify-content: center;
  }
`;

export const MenuItem = styled.div`
  cursor: pointer;
  transition: color 0.2s;

  &:hover {
    color: #ff3e3e;
  }
`;

export const MenuItemDropdown = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Profile = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 16px;
    flex: 1;
    justify-content: flex-end;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 9999px;
  border: 1px solid #e5e5e5;
  object-fit: cover;
`;

export const ProfileName = styled.div`
  font-weight: 600;
  color: #222;
  font-size: 15px;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  background: #ff3e3e;
  color: #fff;
  padding: 8px 20px;
  border-radius: 3px;
  font-size: 15px;
  font-weight: 600;
  border: none;
  box-shadow: none;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #e11d48;
  }
`;
