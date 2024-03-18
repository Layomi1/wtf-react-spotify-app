import React from "react";
import styles from ".//CustomButton.module.css";

const CustomButton = ({ text, buttonStyle, icon }) => {
  return (
    <button className={`${styles.customButton} ${buttonStyle}`}>
      {icon} {text}
    </button>
  );
};

export default CustomButton;
