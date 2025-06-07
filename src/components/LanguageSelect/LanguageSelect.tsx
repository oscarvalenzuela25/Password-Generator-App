import { useTranslation } from "react-i18next";
import darkStyles from "./styles/LanguageSelect.dark.module.css";
import lightStyles from "./styles/LanguageSelect.light.module.css";
import useTheme from "../../features/home/hooks/useTheme";
import type { ChangeEvent, FC } from "react";

const LanguageSelect: FC = () => {
  const { i18n, t } = useTranslation();
  const { isDarkMode } = useTheme();
  const styles = isDarkMode ? darkStyles : lightStyles;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedLang = e.target.value;
    i18n.changeLanguage(selectedLang);
  };

  return (
    <div className={styles.wrapper}>
      <select
        value={i18n.language}
        onChange={handleChange}
        className={styles.select}
      >
        <option value="en">{t("home:language.options.en")}</option>
        <option value="es">{t("home:language.options.es")}</option>
      </select>
    </div>
  );
};

export default LanguageSelect;
