import cn from "classnames";
import { FC } from "react";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../redux/store";
import Button from "../../ui/Button";

import styles from "./index.module.scss";

const MobileFooter: FC = () => {
  const { menuList } = useAppSelector(
    (state: RootState) => state.global.footer
  );

  return (
    <footer className={cn("d-flex ai-center", styles.footer)}>
      <div className={cn("d-flex jc-between container")}>
        {menuList.map(menuItem => (
          <Button
            className={styles.btn}
            type="common"
            icon={menuItem.icon}
            to={menuItem.path}
            key={menuItem.value}
          >
            {menuItem.value}
          </Button>
        ))}
      </div>
    </footer>
  );
};

export default MobileFooter;
