import { NavLink } from "react-router-dom";
import { paths } from "../../../data/constants";

import styles from "./index.module.scss";

const Logo = () => {
  return (
    <NavLink className={styles.logo} to={paths.main}>
      <span className={styles.first}>EngLio</span>
      <span className={styles.second}>English it's easy</span>
    </NavLink>
  );
};

export default Logo;
