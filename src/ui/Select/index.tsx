import { FC } from "react";
import styles from "./index.module.scss";

interface SelectProps {
  name: string;
  optns: any;
  onClick: (min: number, max: number) => void;
}

const Select: FC<SelectProps> = props => {
  const { name, optns, onClick } = props;

  return (
    <select
      className={styles.select}
      name={name}
      onChange={(e: any) =>
        onClick(optns[e.target.value].min, optns[e.target.value].max)
      }
    >
      {optns.length > 0 &&
        optns.map((optn: any) => (
          <option key={optn.value} value={optn.value}>
            {optn.text}
          </option>
        ))}
    </select>
  );
};

export default Select;
