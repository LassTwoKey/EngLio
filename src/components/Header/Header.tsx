import cn from "classnames";
import Logo from "../ui/Logo";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={cn("d-flex ai-center", styles.Header)}>
      <div className="container" style={{ width: "100%" }}>
        <Logo />
      </div>
    </header>
  );
};

export default Header;
