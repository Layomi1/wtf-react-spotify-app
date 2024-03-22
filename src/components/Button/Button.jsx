import styles from "./Button.module.css";

function Button({ text, ButtonStyle }) {
  return (
    <button className={`${styles.Buttton} ${styles.buttonStyle}`}>
      {text}
    </button>
  );
}

export default Button;
