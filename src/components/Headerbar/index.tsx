import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { RootState } from "../../redux/store";
import { setBurgerMenuToggle } from "../../redux/modules/global/slice";
import Button from "../../ui/Button";
import Dropdown from "../Dropdown";
import { useNotificationsQuery } from "../../lib/notificationApi";

import styles from "./index.module.scss";

const Headerbar: FC = () => {
  const dispatch = useDispatch();
  const { data: notifications, error, isLoading } = useNotificationsQuery();

  const { burgerMenuToggle } = useSelector((state: RootState) => state.global);

  const clickAccountHandler = () => {};

  const notificationBtn = {
    className: styles.notification,
    icon: "_icon-notification",
    type: "light"
  };

  const accountBtn = {
    className: styles.account,
    icon: "_icon-account",
    type: "light"
  };

  const accountMenu = (
    <p className="p-2">Как разберусь с авторизацией, сделаю</p>
  );

  return (
    <div className={cn("d-flex ai-center")}>
      <Dropdown
        list={notifications}
        isLoading={isLoading}
        error={error}
        headerText="Уведомления"
        btnOptions={notificationBtn}
      />
      <Dropdown
        renderElement={accountMenu}
        heigth="100px"
        btnOptions={accountBtn}
        onClick={clickAccountHandler}
      />
      <Button
        className={cn("jc-between", styles.menuButton, {
          [styles.open]: burgerMenuToggle
        })}
        onClick={() => dispatch(setBurgerMenuToggle(!burgerMenuToggle))}
      >
        <span></span>
        <span></span>
        <span></span>
      </Button>
    </div>
  );
};

export default Headerbar;
