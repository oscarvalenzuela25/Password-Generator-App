import { useTranslation } from "react-i18next";
import PasswordLogic from "../../components/PasswordLogic";
import PasswordVisualizer from "../../components/PasswordVisualizer";
import darkStyles from "./styles/MainPage.dark.module.css";
import { Toaster } from "sonner";
import useMainPage from "./hooks/useMainPage";

const MainPage = () => {
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
    <main className={darkStyles.container}>
      {/* <nav className={darkStyles.topBar}></nav> */}
      <section className={darkStyles.main}>
        <div className={darkStyles.passwordContainer}>
          <h1 className={darkStyles.passwordContainer__title}>
            {t("home:title")}
          </h1>
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
