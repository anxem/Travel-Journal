import React from "react";

export default function Navbar() {
  return (
    <nav>
      <div className="site--identity">
        <img src="./images/logo.png" className="site--logo" alt="logo" />
        <img
          src="./images/logo-texts.png"
          className="site--logo_texts"
          alt="logo texts"
        />
      </div>
    </nav>
  );
}
