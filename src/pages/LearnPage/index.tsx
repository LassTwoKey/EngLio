import { FC } from "react";
import { useParams, NavLink } from "react-router-dom";
import cn from "classnames";
import PageWrapper from "../../ui/PageWrapper";
import Typography from "../../ui/Typography";
import SectionCategory from "../../components/SectionCategory";
import { useAppSelector } from "../../hooks/redux";
import { RootState } from "../../redux/store";
import { useSectionDataQuery } from "../../api/sectionApi";
import { CATEGORIES } from "../../data/constants";

import styles from "./index.module.scss";

const LearnPage: FC = () => {
  const { id } = useParams() as { id: string };
  const { sections } = useAppSelector((state: RootState) => state.global);
  const { data: categories, error, isLoading } = useSectionDataQuery(id);
  let content;

  if (error) {
    content = (
      <>
        {CATEGORIES.map(category => (
          <SectionCategory
            key={category[0]}
            title={category[1]}
            currentSection={id}
            currentCategory={category[0]}
            error={error}
          />
        ))}
      </>
    );
  }
  if (isLoading) {
    content = (
      <>
        {CATEGORIES.map(category => (
          <SectionCategory
            key={category[0]}
            title={category[1]}
            currentSection={id}
            currentCategory={category[0]}
            isLoading={isLoading}
          />
        ))}
      </>
    );
  }
  if (categories) {
    content = (
      <>
        {CATEGORIES.map(category => (
          <SectionCategory
            key={category[0]}
            title={category[1]}
            currentSection={id}
            currentCategory={category[0]}
            items={categories[category[0]]}
          />
        ))}
      </>
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
      </div>
    </PageWrapper>
  );
};

export default LearnPage;
