import cn from "classnames";
import Typography from "../Typography";

import styles from "./index.module.scss";

const PageWrapper = (props: any) => {
  const { className, children, title } = props;

  const classNames = cn({
    [styles.pageWrapper]: true,
    [className]: className,
    "pt-12": true,
    "d-flex": true,
    "fd-col": true,
    "jc-center": true,
  });
  return (
    <div className={classNames}>
      {title && <Typography tag="h3">{title}</Typography>}
      {children}
    </div>
  );
};

export default PageWrapper;
