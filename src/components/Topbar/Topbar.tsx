import darkStyles from "./styles/Topbar.dark.module.css";
import lightStyles from "./styles/Topbar.light.module.css";
import ThemeController from "../ThemeController";
import useTheme from "../../modules/home/hooks/useTheme";

const Topbar = () => {
  const { isDarkMode, handleToggleTheme } = useTheme();
  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <nav className={styles.topbarContainer}>
      <ThemeController
        isDarkMode={isDarkMode}
        handleThemeSwitch={handleToggleTheme}
      />
    </nav>
  );
};

export default Topbar;
