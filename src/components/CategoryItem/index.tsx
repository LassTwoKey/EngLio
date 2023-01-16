import { FC } from "react";
import Typography from "../../ui/Typography";

import styles from "./index.module.scss";

interface CategoryItemProps {
  img: string;
  name: string;
}

const CategoryItem: FC<CategoryItemProps> = props => {
  const { img, name } = props;
  return (
    <div className={styles.categoriesItem}>
      <div className={styles.categoryImage}>
        <img src={img} alt="" />
      </div>
      <Typography tag="h3" className="pt-2">
        {name}
      </Typography>
    </div>
  );
};

export default CategoryItem;
