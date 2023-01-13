import { FC } from "react";
import cn from "classnames";
import Typography from "../../ui/Typography";
import Loader from "../../ui/Loader";
import { INotification } from "../../types/RequestData";

import styles from "./index.module.scss";

type DropdownProps = {
  list?: INotification[];
  status?: string;
  error?: string;
  btnElement: React.ReactNode;
  renderElement?: React.ReactNode;
  headerText?: string;
  heigth?: string;
};

const Dropdown: FC<DropdownProps> = props => {
  const { list, btnElement, headerText, renderElement, heigth, status } = props;

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

  return (
    <div className={styles.dropdown}>
      {btnElement && btnElement}
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

export default Dropdown;
