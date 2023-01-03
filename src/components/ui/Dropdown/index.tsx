import { FC } from "react";
import cn from "classnames";
import Typography from "../Typography";

import styles from "./index.module.scss";

type DropdownProps = {
  messages?: { id: string; value: string }[];
  btnElement: React.ReactNode;
  renderElement?: React.ReactNode;
  headerText?: string;
  heigth?: string;
};

const Dropdown: FC<DropdownProps> = props => {
  const { messages, btnElement, headerText, renderElement, heigth } = props;

  const heightStyle = {
    height: heigth || "auto",
  };

  const messageList = messages && (
    <ul className={styles.dropdownTextList}>
      {messages.length === 0 && (
        <li className="p-2 d-iflex jc-center">Сообщений нет</li>
      )}
      {messages.map(message => (
        <Typography tag="li" key={message.id} className={cn("p-2")}>
          {message.value}
        </Typography>
      ))}
    </ul>
  );
  const menuElement = renderElement && renderElement;

  return (
    <div className={styles.dropdown}>
      {btnElement && btnElement}
      <div className={styles.dropdownContent} style={heightStyle}>
        {headerText && (
          <Typography tag="div" className={cn(styles.dropdownHeader, "p-2")}>
            {headerText}
          </Typography>
        )}
        {messageList}
        {menuElement}
      </div>
    </div>
  );
};

export default Dropdown;
