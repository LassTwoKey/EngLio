import { FC } from "react";
import styles from "./index.module.scss";

interface Option {
  value: string;
  text: string;
}

interface SelectProps {
  name: string;
  optns: Option[];
}

const Select: FC<SelectProps> = props => {
  const { name, optns } = props;
  return (
    <select className={styles.select} name={name}>
      {optns.length > 0 &&
        optns.map((optn: Option) => (
          <option key={optn.value} value={optn.value}>
            {optn.text}
          </option>
        ))}
    </select>
  );
};

export default Select;
