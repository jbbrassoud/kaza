import './dropdown.css'

import React, { useState } from 'react';



function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
        
      <button onClick={toggleDropdown} className="dropdown-toggle">
      <h2>{props.title}</h2>
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
            <path d="M4.293 8.293a1 1 0 0 1 1.414 0L8 10.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
            <path d="M4.293 5.293a1 1 0 0 1 1.414 0L8 7.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"/>
          </svg>
        )}
        
    </button>
        {isOpen && (
            <div className="dropdown-menu">
                <p>{props.description}</p>
            </div>
        )}
    </div>
  );
}


export default Dropdown;

