import React, { useState } from "react";
import { BiHide } from "react-icons/bi";
import { MdOutlineVisibility } from "react-icons/md";
import styles from "./CustomInput.module.css";

const CustomInput = ({ label, ...props }) => {
  const [show, setShow] = useState(false);
  let type = props.type;
  if (type === "password") {
    type = !show ? "password" : "text";
  }

  const toggleIcon = () => {
    setShow(!show);
  };

  return (
    <div className={styles.wrap}>
      <label htmlFor={props.type}>{label}</label>
      <input {...props} type={type} />
      {props.type === "password" && (
        <div className={styles.icons} onClick={toggleIcon}>
          {show ? (
            <MdOutlineVisibility size={"1.5rem"} />
          ) : (
            <BiHide size={"1.5rem"} />
          )}
        </div>
      )}
    </div>
  );
};

export default CustomInput;
