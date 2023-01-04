import cn from "classnames";
import Typography from "../Typography";

import styles from "./index.module.scss";

const PageWrapper = (props: any) => {
  const { className, children, title, center } = props;

  const classNames = cn({
    [styles.pageWrapper]: true,
    [className]: className,
    "pt-12": true,
    "d-flex": true,
    "fd-col": true,
    "jc-center": center
  });
  return (
    <div className={classNames}>
      {title && (
        <div className="container">
          <Typography tag="h2" className={cn("py-8", styles.pageTitle)}>
            {title}
          </Typography>
        </div>
      )}
      {children}
    </div>
  );
};

export default PageWrapper;
