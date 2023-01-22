import { FC } from "react";
import cn from "classnames";
import Button from "../../ui/Button";

import styles from "./index.module.scss";

interface ButtonEventTarget extends EventTarget {
  index: number;
}

interface ButtonMouseEvent extends React.MouseEvent<HTMLButtonElement> {
  target: ButtonEventTarget;
}

interface CardActionsProps {
  isFavorite: boolean;
  onMemorized: (e: ButtonMouseEvent) => void;
  onFailings: (e: ButtonMouseEvent) => void;
  onFavorite: (e: ButtonMouseEvent) => void;
  isLoadingDel: boolean;
}

const FlashCardActions: FC<CardActionsProps> = props => {
  const { onMemorized, onFailings, onFavorite, isFavorite, isLoadingDel } =
    props;
  const favoriteClass = cn(styles.favorite, {
    [styles.bookmarkActive]: isFavorite
  });

  return (
    <div className={cn(styles.cartAction, "mb-2 d-flex jc-center")}>
      {!isLoadingDel ? (
        <>
          <Button
            type="common"
            onClick={(e: any) => {
              onMemorized(e);
            }}
            disabled={isLoadingDel}
            className={styles.memorized}
          >
            <span className="_icon-ok"></span>
          </Button>
          <Button
            type="common"
            onClick={(e: any) => {
              onFailings(e);
            }}
            disabled={isLoadingDel}
            className={styles.skip}
          >
            <span className="_icon-close"></span>
          </Button>
          <Button
            type="common"
            onClick={(e: any) => {
              onFavorite(e);
            }}
            className={favoriteClass}
          >
            {isFavorite ? (
              <span className="_icon-bookmark-filled"></span>
            ) : (
              <span className="_icon-bookmark"></span>
            )}
            {/* <span className="_icon-bookmark"></span> */}
          </Button>
        </>
      ) : (
        <p className="p-2">Идет процесс...</p>
      )}
    </div>
  );
};

export default FlashCardActions;
