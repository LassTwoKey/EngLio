import { FC } from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import { data } from "../../mock/favorites";

import styles from "./index.module.scss";

const FavoritePage: FC = () => {
  const { id } = useParams();
  if (!id) return null;

  const favoriteName = data[id].name;
  const favoriteItems = data[id].list;

  let content;

  content = (
    <ul>
      {favoriteItems.map(favoriteItem => (
        <div
          key={favoriteItem.id}
          className={cn("d-flex jc-between py-4", styles.item)}
        >
          <div className="">
            <div className="d-flex ai-center">
              <Typography tag="h3" className="mr-2">
                {favoriteItem.word}
              </Typography>
              {favoriteItem.transcription && (
                <Typography tag="p">{favoriteItem.transcription}</Typography>
              )}
            </div>
            <Typography tag="p">{favoriteItem.translate}</Typography>
          </div>
          <div className="d-flex ai-center">
            <Button type="outlined" className="mr-2">
              Сложное
            </Button>
            <Button type="primary">Убрать</Button>
          </div>
        </div>
      ))}
    </ul>
  );

  if (favoriteItems.length === 0) {
    content = (
      <Typography tag="h3" isCenter>
        Список пуст
      </Typography>
    );
  }

  return (
    <PageWrapper title={favoriteName} goBack>
      <div className="container">{content}</div>
    </PageWrapper>
  );
};

export default FavoritePage;
