import { FC } from "react";
import cn from "classnames";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import { RootState } from "../../redux/store";
import { setBurgerMenuToggle } from "../../redux/modules/global/slice";
import Button from "../../ui/Button";

import styles from "./index.module.scss";

const HeaderMenu: FC = () => {
  const dispatch = useAppDispatch();
  const { menuList } = useAppSelector(
    (state: RootState) => state.global.header
  );
  const { burgerMenuToggle } = useAppSelector(
    (state: RootState) => state.global
  );

  const menuClose = () => {
    dispatch(setBurgerMenuToggle(false));
  };

  return (
    <nav className={cn("d-flex ai-center", styles.headerNav)}>
      <div
        className={cn(styles.blackout, { [styles.open]: burgerMenuToggle })}
        onClick={menuClose}
      />
      <ul
        className={cn("d-flex ai-center", styles.list, {
          [styles.open]: burgerMenuToggle
        })}
      >
        {menuList.map(menuItem => (
          <li key={menuItem.value}>
            <Button to={menuItem.path} onClick={menuClose} type="light">
              {menuItem.value}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderMenu;
