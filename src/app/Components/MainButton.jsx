import React from 'react';
import { Button } from "@mui/material";
import "./MainButton.scss";

const MainButton = ({ text, onClick, className }) => {
  return (
    <Button
      //  className="login_button" 
      onClick={onClick}
      className={`login_button ${className}`} >
      {text}
    </Button>
  );
};

export default MainButton;
