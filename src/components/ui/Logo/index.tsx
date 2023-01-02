import { NavLink } from "react-router-dom";
import styles from "./index.module.scss";

const Logo = () => {
  return (
    <NavLink className={styles.Logo} to="/">
      <span className={styles.First}>EngLio</span>
      <span className={styles.Second}>English it's easy</span>
    </NavLink>
  );
};

export default Logo;
