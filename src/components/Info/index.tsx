import cn from "classnames";
import Typography from "../../ui/Typography";
import { IInfo } from "../../types/Info";

import styles from "./index.module.scss";

const Info = (props: IInfo) => {
  const { title, text, type } = props;
  const infoTypeClass = {
    [styles[type]]: !!type
  };
  return (
    <div
      className={cn(
        "container d-flex fd-col jc-center pb-4",
        styles.centered,
        infoTypeClass
      )}
    >
      <Typography tag="h2" className="mb-2" isCenter>
        {title}
      </Typography>
      {text && (
        <Typography tag="p" isCenter>
          {text}
        </Typography>
      )}
    </div>
  );
};

export default Info;
