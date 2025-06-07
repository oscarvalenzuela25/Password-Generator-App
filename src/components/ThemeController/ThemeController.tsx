import type { FC } from "react";
import SunIcon from "../../icons/SunIcon";
import MoonIcon from "../../icons/MoonIcon";
import styles from "./styles.module.css";
import clsx from "clsx";

type Props = {
  isDarkMode: boolean;
  handleThemeSwitch: () => void;
};

const ThemeController: FC<Props> = ({ isDarkMode, handleThemeSwitch }) => {
  return (
    <label className={styles.swap}>
      <input
        type="checkbox"
        className={styles.themeController}
        value="synthwave"
        onChange={handleThemeSwitch}
        checked={!isDarkMode}
      />

      <SunIcon
        className={clsx(styles.icon, styles.swapOff, styles["icon--sun"])}
      />
      <MoonIcon
        className={clsx(styles.icon, styles.swapOn, styles["icon--moon"])}
      />
    </label>
  );
};

export default ThemeController;
