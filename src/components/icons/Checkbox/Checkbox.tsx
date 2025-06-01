import React, { type FC } from "react";
import darkStyles from "./styles/Checkbox.dark.module.css";

type Props = {
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Checkbox: FC<Props> = ({ name, checked, onChange }) => {
  return (
    <label className={darkStyles.checkboxWrapper}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        className={darkStyles.checkboxInput}
      />
      <span className={darkStyles.customCheckbox}></span>
    </label>
  );
};

export default Checkbox;
