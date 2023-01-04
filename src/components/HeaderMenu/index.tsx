import React, { FC } from "react";
import { useSelector, useDispatch } from "react-redux";
import cn from "classnames";
import { RootState } from "../../redux/store";
import { setBurgerMenuToggle } from "../../redux/modules/globalState/slice";
import Button from "../../ui/Button";

import styles from "./index.module.scss";

const HeaderMenu: FC = () => {
  const dispatch = useDispatch();
  const { menuList } = useSelector((state: RootState) => state.global.header);
  const { burgerMenuToggle } = useSelector((state: RootState) => state.global);

  const menuClose = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
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
