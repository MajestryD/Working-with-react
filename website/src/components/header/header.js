import React from 'react';

function Header() {
  return (
    <header>
      <div className = "side_nav">
        <div className="Links">
            <ul>
                <li><a href="chef.html" > Chef </a></li>
                <li><a href="#"> Programmer</a></li>
                <li><a href="#"> Hobbyist</a></li>
                <li><a href="#"> Biography</a></li>
                <li><a href="#"> Contact</a></li>
            </ul>
        </div>

        <div className="Contact_bar">
            <a href="#"> Facebook  </a>
            <a href="#"> Instagram </a>
            <a href="#"> Twitter </a>
            <a href="#"> LinkedIn</a>
        </div>
      </div>
    </header>
  );
}

export default Header;
