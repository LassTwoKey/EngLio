import { FC } from "react";
import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import Card from "../../ui/Card";
import Button from "../../ui/Button";
import { data } from "../../mock/categories";

import styles from "./index.module.scss";

const FavoritesPage: FC = () => {
  const categories = data;
  return (
    <PageWrapper title="Избранное">
      <div className="container">
        {categories.map(categorie => (
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
