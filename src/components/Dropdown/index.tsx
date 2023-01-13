import React, { FC } from "react";
import cn from "classnames";
import Typography from "../../ui/Typography";
import Loader from "../../ui/Loader";
import Button from "../../ui/Button";
import { INotification } from "../../types/RequestData";
import useComponentVisible from "../../hooks/useComponentVisible";

import styles from "./index.module.scss";

type DropdownProps = {
  list?: INotification[];
  status?: string;
  error?: string;
  btnOptions?: { className: string; icon: string; type: string };
  renderElement?: React.ReactNode;
  headerText?: string;
  heigth?: string;
  onClick?: () => void;
};

const Dropdown: FC<DropdownProps> = props => {
  const {
    list,
    btnOptions,
    headerText,
    renderElement,
    heigth,
    status,
    onClick
  } = props;

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(false);

  const heightStyle = {
    height: heigth || "auto"
  };

  const messageList = list && (
    <ul className={styles.dropdownTextList}>
      {list.length === 0 && (
        <li className="p-2 d-iflex jc-center">Сообщений нет</li>
      )}
      {list.map(item => (
        <Typography tag="li" key={item.id} className={cn("p-2")}>
          {item.value}
        </Typography>
      ))}
    </ul>
  );
  const menuElement = renderElement && renderElement;

  const onClickButtonHanlder = () => {
    if (onClick) {
      onClick();
    }
    setIsComponentVisible((prev: any) => !prev);
  };

  return (
    <div
      ref={ref}
      className={cn(styles.dropdown, {
        [styles.open]: isComponentVisible
      })}
    >
      {btnOptions && (
        <Button
          type={btnOptions.type}
          className={btnOptions.className}
          icon={btnOptions.icon}
          onClick={onClickButtonHanlder}
        ></Button>
      )}
      <div className={styles.dropdownContent} style={heightStyle}>
        {headerText && (
          <Typography tag="div" className={cn(styles.dropdownHeader, "p-2")}>
            {headerText}
          </Typography>
        )}
        {status === "pending" ? (
          <Loader />
        ) : (
          <>
            {messageList}
            {menuElement}
          </>
        )}
      </div>
    </div>
  );
};

export default React.memo(Dropdown);
