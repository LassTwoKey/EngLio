import { FC } from "react";
import { useParams, NavLink } from "react-router-dom";
import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import InfoBlock from "../../ui/InfoBlock";
import Loader from "../../ui/Loader";
import CategoryList from "../../components/CategoryList";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../redux/store";
import { useCategoriesQuery } from "../../lib/categoriesApi";

import styles from "./index.module.scss";

const LearnPage: FC = () => {
  const { id } = useParams() as { id: string };
  const { data: categories, error, isLoading } = useCategoriesQuery();
  const { sections } = useAppSelector((state: RootState) => state.global);
  return (
    <PageWrapper>
      <div className="container pb-6">
        {isLoading && <Loader />}
        {error && <InfoBlock type="error" title="Ошибка загрузки" />}
        <div className={cn("d-flex pb-4", styles.tabControls)}>
          {sections.map(section => (
            <NavLink
              className={({ isActive }) =>
                isActive ? cn(styles.link, styles.active) : styles.link
              }
              key={section.id}
              to={`/learn/${section.id}`}
            >
              <Typography tag="h4">{section.name}</Typography>
            </NavLink>
          ))}
        </div>
        <div className={styles.categories}>
          {categories && <CategoryList categories={categories} section={id} />}
        </div>
      </div>
    </PageWrapper>
  );
};

export default LearnPage;
