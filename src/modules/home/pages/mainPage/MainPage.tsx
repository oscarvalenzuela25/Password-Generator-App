import { useTranslation } from "react-i18next";
import PasswordLogic from "../../components/PasswordLogic";
import PasswordVisualizer from "../../components/PasswordVisualizer";
import darkStyles from "./styles/MainPage.dark.module.css";
import lightStyles from "./styles/MainPage.light.module.css";
import { Toaster } from "sonner";
import useMainPage from "./hooks/useMainPage";
import Topbar from "../../../../components/Topbar";
import useTheme from "../../hooks/useTheme";

const MainPage = () => {
  const { isDarkMode } = useTheme();
  const styles = isDarkMode ? darkStyles : lightStyles;
  const { t } = useTranslation();
  const {
    settings,
    password,
    passwordStrength,
    maxCharacterLength,
    percent,
    columnsStrength,
    handleChangeSettings,
    handlePasswordGenerate,
  } = useMainPage();

  return (
    <main className={styles.container}>
      <Topbar />
      <section className={styles.main}>
        <div className={styles.passwordContainer}>
          <h1 className={styles.passwordContainer__title}>{t("home:title")}</h1>
          <PasswordVisualizer password={password} />
          <PasswordLogic
            settings={settings}
            passwordStrength={passwordStrength}
            maxCharacterLength={maxCharacterLength}
            percent={percent}
            columnsStrength={columnsStrength}
            handleChangeSettings={handleChangeSettings}
            handlePasswordGenerate={handlePasswordGenerate}
          />
        </div>
      </section>
      <Toaster richColors position="bottom-right" />
    </main>
  );
};

export default MainPage;
