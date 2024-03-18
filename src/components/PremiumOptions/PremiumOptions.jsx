import Title from "../Title/Title";
import styles from "./PremiumOptions.module.css";
import Items from "../../Item";

const listItems = Items.map((item) => {
  return (
    <li className={styles.option}>
      <img src={item.imgSrc} alt="item" />
      <div className="info">
        <h5>{item.title}</h5>
        <small className={styles.description}>{item.description}</small>
      </div>
    </li>
  );
});
function PremiumOptions() {
  return (
    <section className={styles.premium}>
      <Title className={styles.title} text={"The power of Premium"} />
      <ul className={styles["premium-options"]}>{listItems}</ul>
    </section>
  );
}
export default PremiumOptions;
