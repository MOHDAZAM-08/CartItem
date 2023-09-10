import React, { useState } from 'react';


function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={`sidebar ${menuOpen ? 'open' : ''}`}>
      <button className="toggle-button" onClick={toggleMenu}>
        ☰
      </button>
      <ul className="menu">
      <button className="toggle-button" onClick={toggleMenu}>
        ☰
      </button>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}

export default Sidebar;
