import styles from "./index.module.scss";

const Logo = () => {
  return (
    <a className={styles.Logo} href="/">
      <span className={styles.First}>EngLio</span>
      <span className={styles.Second}>English it's easy</span>
    </a>
  );
};

export default Logo;
