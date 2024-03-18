import { Link } from "react-router-dom";
import Title from "../Title/Title";
import styles from "./Options.module.css";
import Button from "../Button/Button";
import CardContent from "../../CardContent";
import PaymentLogos from "../../PaymentLogos";

const CardLogos = PaymentLogos.map((logo) => {
  return (
    <li>
      <img className={styles.logo} src={logo.imgSrc} alt="card logo" />
    </li>
  );
});

const cardItems = CardContent.map((item) => {
  console.log(item.planDetails);
  return (
    <li className={styles.card}>
      <div className={styles["card-top"]}>
        <div className={styles["card-links"]}>
          <Link className={styles.linkOne} to="#">
            {item.link}
          </Link>
          <Link className={styles.link} to="#">
            {item.freeLink}
          </Link>
        </div>
        <p className={styles.package}>{item.title}</p>
        <div className={styles["package-text"]}>
          <small>{item.rate}</small>
          <small>{item.plan}</small>
        </div>

        <div className={styles.middle}>
          <div className={styles["btn-case"]}>
            <ul className={styles.details}>
              {item.planDetails.map((detail, detailIndex) => (
                <li key={detailIndex}>
                  <detail.icon className={styles.icon} />{" "}
                  <small>{detail.text}</small>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className={styles.btn}>View Plans</button>
            <hr className={styles.blur} />
            <ul className={styles.terms}>
              {item.terms.map((term, termIndex) => (
                <li key={termIndex}>
                  <small>
                    <Link className={styles["term-link"]} to="#">
                      {term.link}
                    </Link>
                    {term.policy}
                  </small>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </li>
  );
});

function Options() {
  return (
    <section className={styles.options}>
      <div>
        <Title text="Pick your Premium"></Title>
        <div className={styles["sub-heading"]}>
          <small>
            Listen without limits on your phone, speaker, and other devices.
          </small>

          <ul className={styles["payment-method"]}>{CardLogos}</ul>
        </div>
      </div>
      <ul className={styles.cards}>{cardItems}</ul>

      <div className={styles.discount}>
        <h5>Special discount for eligible students in university</h5>
        <Button
          className={styles["btn-black"]}
          type="outlined"
          text="Learn more"
        />
      </div>
    </section>
  );
}
export default Options;
