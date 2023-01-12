import { FC, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import Loader from "../../ui/Loader";
//import useHttp from "../../hooks/use-http";
import InfoBlock from "../../ui/InfoBlock";
import { getFavoritesByCategory } from "../../lib/api";
import { ICategoryItem, IFavoriteCategory } from "../../types/RequestData";
import { removeFromList } from "../../utils/removeFromList";
import { removeFromFavorites } from "../../lib/api";

import styles from "./index.module.scss";

const FavoritePage: FC = () => {
  const { id } = useParams<string>();

  // const {
  //   sendRequest,
  //   status,
  //   //data: favorites,
  //   error
  // } = useHttp(getFavoritesByCategory, true);
  const [favorites, setFavorites] = useState<IFavoriteCategory>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState(null);

  const loadData = useCallback(async () => {
    if (id) {
      setIsLoading(true);
      try {
        const responseData = await getFavoritesByCategory(id);
        setFavorites(responseData);
      } catch (err: any) {
        setError(err.message);
      }
      setIsLoading(false);
    }
  }, [id]);

  useEffect(() => {
    //if (id) loadData(id);
    loadData();
  }, [loadData]);

  if (!id) return null;

  const removeFromFavoriteHandler = (removeId: number | string) => {
    removeFromFavorites(id, removeId);
    const updatedFavorites = removeFromList(removeId, favorites.list);
    setFavorites({ ...favorites, list: updatedFavorites });
  };

  let content;

  if (isLoading) {
    content = <Loader />;
  }
  if (error) {
    content = <InfoBlock type="error" title="Ошибка загрузки" />;
  }

  if (favorites) {
    if (favorites.list) {
      if (favorites.list.length === 0) {
        content = (
          <Typography tag="p" isBig isCenter>
            Список пуст
          </Typography>
        );
      }
      if (favorites.list.length > 0) {
        content = (
          <ul>
            {favorites &&
              favorites.list.map((favoriteItem: ICategoryItem) => (
                <div
                  key={favoriteItem.id}
                  className={cn("d-flex jc-between py-4", styles.item)}
                >
                  <div className="">
                    <div className="d-flex ai-center">
                      <Typography tag="h3" className="mr-2">
                        {favoriteItem.text}
                      </Typography>
                      {favoriteItem.transcription && (
                        <Typography tag="p">
                          {favoriteItem.transcription}
                        </Typography>
                      )}
                    </div>
                    <Typography tag="p">{favoriteItem.translate}</Typography>
                  </div>
                  <div className="d-flex ai-center">
                    <Button type="outlined" className="mr-2">
                      Сложное
                    </Button>
                    <Button
                      type="primary"
                      onClick={() => removeFromFavoriteHandler(favoriteItem.id)}
                    >
                      Убрать
                    </Button>
                  </div>
                </div>
              ))}
          </ul>
        );
      }
    }
    if (!favorites.list) {
      content = (
        <Typography tag="p" isBig isCenter>
          Список пуст
        </Typography>
      );
    }
  }

  return (
    <PageWrapper title={favorites && favorites.name} goBack>
      <div className="container">{content}</div>
    </PageWrapper>
  );
};

export default FavoritePage;
