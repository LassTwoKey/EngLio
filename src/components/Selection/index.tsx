import { FC } from "react";
import cn from "classnames";
import Card from "../../ui/Card";
import Button from "../../ui/Button";

import styles from "./index.module.scss";

const Selection: FC = () => {
  return (
    <Card className={cn(styles.selection, "mb-2 pb-0 pt-0 pl-0 pr-0")}>
      <Button>Грабитель</Button>
      <Button>Дом</Button>
      <Button>Храм</Button>
    </Card>
  );
};

export default Selection;
