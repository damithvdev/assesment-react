import React from "react";

const Header = () => {
  return (
    <header>
      <nav id="nav">
        <div className="navbar">
          <div className="brand">
            <a href="#welcome">Home</a>
          </div>
          <div className="brand">
            <a href="#cart">Cart</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
