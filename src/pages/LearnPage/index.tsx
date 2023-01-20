import { FC } from "react";
import { useParams, NavLink } from "react-router-dom";
import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import InfoBlock from "../../ui/InfoBlock";
import Loader from "../../ui/Loader";
//import CategoryList from "../../components/CategoryList";
import Card from "../../ui/Card";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../redux/store";
//import { useCategoriesQuery } from "../../lib/categoriesApi";
import { useSectionDataQuery } from "../../lib/sectionApi";

import styles from "./index.module.scss";

const LearnPage: FC = () => {
  const { id } = useParams() as { id: string };
  const { sections } = useAppSelector((state: RootState) => state.global);
  //const { data: categories, error, isLoading } = useCategoriesQuery();
  //console.log(categories);
  const { data: categories, error, isLoading } = useSectionDataQuery(id);

  let content;
  if (error) {
    content = <InfoBlock type="error" title="Ошибка загрузки" />;
  }
  if (isLoading) {
    content = <Loader />;
  }
  if (categories) {
    //console.log(categories, "a[[");
    //console.log(categories.words);
    const keys = ["words", "phrases", "expressions", "phrasal_verbs"];
    content = keys.map(key => {
      if (categories[key]) {
        return (
          categories[key] &&
          categories[key].map((category: any) => {
            return <p key={category.id}>{category.text}</p>;
          })
        );
      }
    });

    // content =
    //   categories.words &&
    //   categories.words.map(category => {

    // 		return <Card key={category.id}>{category.text}</Card>;
    // 	});
    const words = (
      <Card>
        <Typography tag="h2">{}</Typography>
      </Card>
    );
  }

  return (
    <PageWrapper>
      <div className="container pb-6">
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
        {content}
        {/* {categories?.map(category => (
          <Card key={category.id}>
            <Typography tag="h2">{category.title}</Typography>
          </Card>
        ))} */}
        {/* <div className={styles.categories}>
          {categories && <CategoryList categories={categories} section={id} />}
        </div> */}
      </div>
    </PageWrapper>
  );
};

export default LearnPage;
