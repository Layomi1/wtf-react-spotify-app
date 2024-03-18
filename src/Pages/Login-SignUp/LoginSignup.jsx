// import React, { Link } from "react";
import styles from "./LoginSignup.module.css";
import Logo from "../../components/Logo/Logo";
import CustomButton from "../../components/CustomButton/CustomButton";
import { BsFacebook } from "react-icons/bs";
import { IoLogoApple } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import line from "../../assets/images/line.png";
import { BiHide } from "react-icons/bi";

const LoginSignup = () => {
  return (
    <div className={styles["login-signup"]}>
      <div className={styles.head}>
        <Logo className={styles.logo} useWhite={true} />
      </div>

      <main>
        <div className={styles["register-btns"]}>
          <CustomButton
            className={styles.customButton}
            icon={<BsFacebook className={styles.icon} />}
            text={"Continue with Facebook"}
            buttonStyle={styles["facebook-btn"]}
          />
          <CustomButton
            className={styles.btn}
            icon={<IoLogoApple className={styles.icon} />}
            text={"Continue with Apple"}
            buttonStyle={styles["apple-btn"]}
          />
          <CustomButton
            icon={<FcGoogle className={styles.icon} />}
            text={"Continue with Facebook"}
            buttonStyle={styles["google-btn"]}
          />
        </div>

        <div className={styles.alternative}>
          <img src={line} alt="line" />
          <div className={styles.or}>OR</div>
          <img src={line} alt="line" />
        </div>
        <form>
          <label>Email address or username</label>
          <div className={styles["input-container"]}>
            <input
              type="email"
              id="email"
              placeholder="Email address or username"
              required
            />
          </div>

          <label>Password</label>
          <div className={styles["input-container"]}>
            <input
              type="password"
              id="password"
              placeholder="Password"
              required
              checked
            />
            <BiHide className={styles.hide} />
          </div>
          <a className={styles.anchor} href="/login">
            Forgot your password?
          </a>
          <div className={styles["login-area"]}>
            <div className={styles.reminder}>
              <input type="checkbox" />
              <label className={styles.check}>Remember me</label>
            </div>
            <CustomButton text="Log In" buttonStyle={styles["login-btn"]} />
          </div>
          <hr />
        </form>
        <div className={styles["signup-area"]}>
          <h6>Don't have an account?</h6>
          <CustomButton
            text="Sign up for Spotify"
            buttonStyle={styles["signup-btn"]}
          />
        </div>
      </main>
    </div>
  );
};

export default LoginSignup;
