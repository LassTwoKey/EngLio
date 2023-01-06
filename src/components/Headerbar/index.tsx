import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import { RootState } from "../../redux/store";
import { setBurgerMenuToggle } from "../../redux/modules/global/slice";
import Button from "../../ui/Button";
import Dropdown from "../Dropdown";

import styles from "./index.module.scss";

const messages: { id: string; value: string }[] = [
  {
    id: "m1",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: "m2",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: "m3",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: "m4",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: "m5",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: "m6",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  },
  {
    id: "m7",
    value:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
  }
];
const Headerbar: FC = () => {
  const dispatch = useDispatch();
  const { burgerMenuToggle } = useSelector((state: RootState) => state.global);

  const notificationBtn = (
    <Button
      className={styles.notification}
      icon="_icon-notification"
      type="light"
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
        messages={messages}
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
