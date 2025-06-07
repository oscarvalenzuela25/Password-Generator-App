import darkStyles from "./styles/Topbar.dark.module.css";
import lightStyles from "./styles/Topbar.light.module.css";
import ThemeController from "../ThemeController";
import useTheme from "../../features/home/hooks/useTheme";
import LanguageSelect from "../LanguageSelect";
import GithubIcon from "../../icons/GithubIcon";
import LinkedinIcon from "../../icons/LinkedinIcon";
import { SocialMedia } from "../../config/socialMedia";
import PortfolioIcon from "../../icons/PortfolioIcon";

const Topbar = () => {
  const { isDarkMode, handleToggleTheme } = useTheme();
  const styles = isDarkMode ? darkStyles : lightStyles;

  return (
    <nav className={styles.topbarContainer}>
      <div className={styles.topbarContainer__buttonsContainer}>
        <PortfolioIcon isDarkMode={isDarkMode} url={SocialMedia.portfolio} />
        <GithubIcon isDarkMode={isDarkMode} url={SocialMedia.github} />
        <LinkedinIcon isDarkMode={isDarkMode} url={SocialMedia.linkedin} />
      </div>
      <LanguageSelect />
      <ThemeController
        isDarkMode={isDarkMode}
        handleThemeSwitch={handleToggleTheme}
      />
    </nav>
  );
};

export default Topbar;
