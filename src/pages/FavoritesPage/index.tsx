import { FC, useEffect } from "react";
import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import InfoBlock from "../../ui/InfoBlock";
import Loader from "../../ui/Loader";
import useHttp from "../../hooks/use-http";
import { getCategories } from "../../lib/api";
import { IRequestedCategory } from "../../types/RequestData";

import styles from "./index.module.scss";

const FavoritesPage: FC = () => {
  const {
    sendRequest,
    status,
    data: categories,
    error
  } = useHttp(getCategories, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);
  return (
    <PageWrapper title="Избранное">
      <div className="container">
        {status === "pending" && <Loader />}
        {error && <InfoBlock type="error" title="Ошибка загрузки" />}
        {categories &&
          categories.map((categorie: IRequestedCategory) => (
            <Card key={categorie.id} className={"mb-4 pt-0 pb-0 pr-0 pl-0"}>
              <Button to={categorie.id} className={cn("p-4", styles.button)}>
                <Typography tag="h3">{categorie.title}</Typography>
              </Button>
            </Card>
          ))}
      </div>
    </PageWrapper>
  );
};

export default FavoritesPage;
