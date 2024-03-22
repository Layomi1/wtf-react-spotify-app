// import Button from "../Button/Button";
import CustomButton from "../CustomButton/CustomButton";

import styles from "./Hero.module.css";
function Hero() {
  return (
    <section className={styles["home-banner"]}>
      <h1>Get Premium free for 1 month</h1>
      <p>
        Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.
      </p>
      <div className={styles.btns}>
        <CustomButton
          text={"GET STARTED"}
          className={styles.CustomButton}
          buttonStyle={styles["btn-one"]}
        />
        <CustomButton
          text={"SEE OTHER PLANS"}
          buttonStyle={styles["btn-two"]}
        />
      </div>
      <small>
        <a href="/terms" className={styles.link}>
          Terms and conditions apply
        </a>
        . 1 month free not available for users who have already tried Premium.
      </small>
    </section>
  );
}
export default Hero;
