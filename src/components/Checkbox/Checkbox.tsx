import React, { type FC } from "react";
import darkStyles from "./styles/Checkbox.dark.module.css";
import lightStyles from "./styles/Checkbox.light.module.css";
import useTheme from "../../features/home/hooks/useTheme";

type Props = {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FC<Props> = ({ name, checked, onChange }) => {
  const { isDarkMode } = useTheme();
  const styles = isDarkMode ? darkStyles : lightStyles;
  return (
    <label className={styles.checkboxWrapper}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className={styles.checkboxInput}
      />
      <span className={styles.customCheckbox}></span>
    </label>
  );
};

export default Checkbox;
