import { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setBurgerMenuToggle } from "../../../redux/modules/globalState/slice";
import cn from "classnames";
import Button from "../Button";

import styles from "./index.module.scss";

const BurgerMenu = () => {
  const dispatch = useDispatch();
  const { menuList } = useSelector((state: RootState) => state.global.header);
  const { burgerMenuToggle } = useSelector((state: RootState) => state.global);

  // const classes = cn("d-flex ai-start jc-start", styles.wrapper, {
  //   [styles.wrapper_show]: burgerMenuToggle,
  // });

  const close = () => dispatch(setBurgerMenuToggle(false));

  console.log(menuList);

  return (
    <nav className={cn("d-flex ai-center", styles.headerNav)}>
      <div className={styles.blackout} onClick={close} />
      <ul className={cn("d-flex ai-center")}>
        {menuList.map(menuItem => (
          <li key={menuItem.value}>
            <Button to={menuItem.path} type="light">
              {menuItem.value}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BurgerMenu;
