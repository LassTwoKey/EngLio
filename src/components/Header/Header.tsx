import cn from "classnames";
import Logo from "../ui/Logo";
import BurgerMenu from "../ui/BurgerMenu";
import Headerbar from "../ui/Headerbar";

import styles from "./index.module.scss";

const Header = () => {
  return (
    <header className={cn("d-flex ai-center", styles.header)}>
      <div
        className={cn("container", "d-flex ai-center jc-between")}
        style={{ width: "100%" }}
      >
        <Logo />
        <BurgerMenu />
        <Headerbar />
      </div>
    </header>
  );
};

export default Header;
