import { FC } from "react";
import cn from "classnames";
import Button from "../../ui/Button";

import styles from "./index.module.scss";

interface CardActionsProps {
  isFavorite: boolean;
  onMemorized: () => void;
  onFailings: () => void;
  onFavorite: () => void;
}

const FlashCardActions: FC<CardActionsProps> = props => {
  const { onMemorized, onFailings, onFavorite, isFavorite } = props;
  const favoriteClass = cn(styles.favorite, {
    [styles.bookmarkActive]: isFavorite
  });

  return (
    <div className={cn(styles.cartAction, "mb-2 d-flex jc-center")}>
      <Button type="common" onClick={onMemorized} className={styles.memorized}>
        <span className="_icon-ok"></span>
      </Button>
      <Button type="common" onClick={onFailings} className={styles.skip}>
        <span className="_icon-close"></span>
      </Button>
      <Button type="common" onClick={onFavorite} className={favoriteClass}>
        <span className="_icon-bookmark"></span>
      </Button>
    </div>
  );
};

export default FlashCardActions;
