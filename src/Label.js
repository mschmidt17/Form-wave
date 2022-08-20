import React from "react";
import "./App.css";


const Label = ({ label }) => {
    const letters = label.split('');
  
    return (
      <label>
        {letters.map((letter, index) => (
          <span key={index} style={{ transitionDelay: `${index * 50}ms` }}>
            {letter}
          </span>
        ))}
      </label>
    );
  };
  
  export default Label;