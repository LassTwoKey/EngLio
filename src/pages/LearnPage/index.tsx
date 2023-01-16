import { FC, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import InfoBlock from "../../ui/InfoBlock";
import Loader from "../../ui/Loader";
import useHttp from "../../hooks/use-http";
import CategoryList from "../../components/CategoryList";
import { getCategories } from "../../lib/api";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../redux/store";

import styles from "./index.module.scss";

const LearnPage: FC = () => {
  const {
    sendRequest: sendRequestCategories,
    status: categoriesStatus,
    data: categories,
    error: errorCategories
  } = useHttp(getCategories, true);

  const { id } = useParams();
  const { sections } = useAppSelector((state: RootState) => state.global);

  useEffect(() => {
    sendRequestCategories();
  }, [sendRequestCategories]);

  if (!id) return null;

  return (
    <PageWrapper>
      <div className="container pb-6">
        {categoriesStatus === "pending" && <Loader />}
        {errorCategories && <InfoBlock type="error" title="Ошибка загрузки" />}
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
