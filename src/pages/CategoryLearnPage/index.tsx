import { FC } from "react";
import { useParams } from "react-router-dom";
import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import Button from "../../ui/Button";
import Loader from "../../ui/Loader";
import InfoBlock from "../../ui/InfoBlock";
import { ICategoryItem } from "../../types/Categories";
import { objToArr } from "../../utils/objToArr";
import {
  useFavoritesByIdQuery,
  useDeleteFavoriteMutation
} from "../../lib/favoritesApi";

import styles from "./index.module.scss";

interface FavoriteItem extends ICategoryItem {
  uniqueId: string;
}

const CategoryLearnPage: FC = () => {
  const { id } = useParams() as { id: string };
  const {
    data: favorites,
    error: getError,
    isLoading: isGetLoading,
    isSuccess: isGetSuccess,
    refetch
  } = useFavoritesByIdQuery(id);

  const [deleteFavorite] = useDeleteFavoriteMutation();

  const removeFromFavoriteHandler = async (removeId: string) => {
    await deleteFavorite({
      category: id,
      id: removeId
    });
    refetch();
  };

  let content;

  if (isGetLoading) {
    content = <Loader />;
  }
  if (getError) {
    content = <InfoBlock type="error" title="Ошибка загрузки" />;
  }

  if (!favorites) {
    return (
      <PageWrapper goBack>
        <div className="container">{content}</div>
      </PageWrapper>
    );
  }
  if (isGetSuccess) {
    if (objToArr(favorites.list).length > 0) {
      content = (
        <ul>
          {favorites &&
            objToArr(favorites.list).map((favoriteItem: FavoriteItem) => (
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
                    onClick={() =>
                      removeFromFavoriteHandler(favoriteItem.uniqueId)
                    }
                  >
                    Убрать
                  </Button>
                </div>
              </div>
            ))}
        </ul>
      );
    } else {
      content = (
        <Typography tag="p" isBig isCenter>
          Список пуст
        </Typography>
      );
    }
  }

  if (favorites.list === null) {
    content = (
      <Typography tag="p" isBig isCenter>
        Список пуст
      </Typography>
    );
  }

  return (
    <PageWrapper title={favorites && favorites.name} goBack>
      <div className="container">{content}</div>
    </PageWrapper>
  );
};

export default CategoryLearnPage;
