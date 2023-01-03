import React, { FC } from "react";
import { RootState } from "../../../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setBurgerMenuToggle } from "../../../redux/modules/globalState/slice";
import cn from "classnames";
import Button from "../Button";

import styles from "./index.module.scss";

const Menu: FC = () => {
  const dispatch = useDispatch();
  const { menuList } = useSelector((state: RootState) => state.global.header);
  const { burgerMenuToggle } = useSelector((state: RootState) => state.global);

  const close = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    dispatch(setBurgerMenuToggle(false));
  };

  return (
    <nav className={cn("d-flex ai-center", styles.headerNav)}>
      <div
        className={cn(styles.blackout, { [styles.open]: burgerMenuToggle })}
        onClick={close}
      />
      <ul
        className={cn("d-flex ai-center", styles.list, {
          [styles.open]: burgerMenuToggle,
        })}
      >
        {menuList.map(menuItem => (
          <li key={menuItem.value}>
            <Button to={menuItem.path} onClick={close} type="light">
              {menuItem.value}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
