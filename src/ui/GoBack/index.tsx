import { useNavigate } from "react-router-dom";
import cn from "classnames";
import { FC } from "react";
import Button from "../Button";

import styles from "./index.module.scss";

const GoBack: FC = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate(-1);
  };
  return (
    <Button className={cn("d-iflex", styles.button)} onClick={clickHandler}>
      &lt; Назад
    </Button>
  );
};

export default GoBack;
