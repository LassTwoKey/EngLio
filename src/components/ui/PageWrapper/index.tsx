import cn from "classnames";
import Typography from "../Typography";

import styles from "./index.module.scss";

const PageWrapper = (props: any) => {
  const { className, children, title } = props;

  const classNames = cn({
    [styles.PageWrapper]: true,
    [className]: className,
    "pt-12": true,
  });
  return (
    <div className={classNames}>
      <div>{title && <Typography tag="h3">{title}</Typography>}</div>
      {children}
    </div>
  );
};

export default PageWrapper;
