import { FC } from "react";
import cn from "classnames";
import Card from "../../ui/Card";
import Typography from "../../ui/Typography";

import styles from "./index.module.scss";

const FlashCard: FC = () => {
  return (
    <Card className={cn("mb-4 py-6", styles.cardMain)}>
      <Typography tag="h2" className="mb-3">
        Robber
      </Typography>
      <Typography tag="p" className="mb-3">
        [ˈräbər]
      </Typography>
      <Typography tag="h3">Robber</Typography>
    </Card>
  );
};

export default FlashCard;
