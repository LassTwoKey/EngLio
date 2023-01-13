import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { RootState } from "../../redux/store";
import { setBurgerMenuToggle } from "../../redux/modules/global/slice";
import Button from "../../ui/Button";
import Dropdown from "../Dropdown";
import useHttp from "../../hooks/use-http";
import { getNotifications } from "../../lib/api";

import styles from "./index.module.scss";

const Headerbar: FC = () => {
  const dispatch = useDispatch();
  const {
    sendRequest,
    status,
    error,
    data: notifications
  } = useHttp(getNotifications);
  console.log(notifications);

  const { burgerMenuToggle } = useSelector((state: RootState) => state.global);

  const clicknNotificationsHandler = () => {
    sendRequest();
  };

  const notificationBtn = (
    <Button
      className={styles.notification}
      icon="_icon-notification"
      type="light"
      onClick={clicknNotificationsHandler}
    ></Button>
  );

  const accountBtn = (
    <Button
      className={styles.account}
      icon="_icon-account"
      type="light"
    ></Button>
  );

  const accountMenu = (
    <p className="p-2">Как разберусь с авторизацией, сделаю</p>
  );

  return (
    <div className={cn("d-flex ai-center")}>
      <Dropdown
        list={notifications}
        status={status}
        error={error}
        btnElement={notificationBtn}
        headerText="Уведомления"
      />
      <Dropdown
        btnElement={accountBtn}
        renderElement={accountMenu}
        heigth="100px"
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
