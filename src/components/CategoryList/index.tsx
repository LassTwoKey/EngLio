import { FC } from "react";
import { Link } from "react-router-dom";
import CategoryItem from "../CategoryItem";

//import styles from "./index.module.scss";

interface CategoryItemProps {
  categories: any;
  section: string;
}

const CategoryList: FC<CategoryItemProps> = props => {
  const { categories, section } = props;
  return (
    <>
      {categories &&
        categories.map((category: any) => (
          <Link key={category.id} to={`${category.id}`}>
            <CategoryItem img={category.img} name={category.title} />
          </Link>
        ))}
    </>
  );
};

export default CategoryList;
