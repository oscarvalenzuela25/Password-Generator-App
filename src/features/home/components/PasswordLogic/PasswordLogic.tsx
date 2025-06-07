import darkStyles from "./styles/PasswordLogic.dark.module.css";
import lightStyles from "./styles/PasswordLogic.light.module.css";
import { useTranslation } from "react-i18next";
import Checkbox from "../../../../components/Checkbox";
import clsx from "clsx";
import type { ColumnsStrength, Settings } from "../../types/home";
import type { FC } from "react";
import { darkPalette, lightPalette } from "../../../../config/palette";
import useTheme from "../../hooks/useTheme";

type Props = {
  settings: Settings;
  passwordStrength: string;
  maxCharacterLength: number;
  percent: number;
  columnsStrength: ColumnsStrength[];
  handleChangeSettings: (name: string, value: boolean | number) => void;
  handlePasswordGenerate: () => void;
};

const PasswordLogic: FC<Props> = ({
  settings,
  passwordStrength,
  maxCharacterLength,
  percent,
  columnsStrength,
  handleChangeSettings,
  handlePasswordGenerate,
}) => {
  const { isDarkMode } = useTheme();
  const styles = isDarkMode ? darkStyles : lightStyles;
  const palette = isDarkMode ? darkPalette : lightPalette;
  const { t } = useTranslation();

  return (
    <div className={styles.container}>
      <div className={styles.container__rowTitle}>
        <p className={styles.rowTitle__text}>{t("home:characterLength")}</p>
        <p className={styles.rowTitle__textNumber}>
          {settings.characterLength}
        </p>
      </div>

      <div className={styles.container__rowInput}>
        <input
          className={styles.rowInput__input}
          id="container__rowInput"
          type="range"
          min="0"
          max={maxCharacterLength}
          value={settings.characterLength}
          onChange={(e) =>
            handleChangeSettings("characterLength", Number(e.target.value))
          }
          style={{
            background: `linear-gradient(to right, ${palette.primaryColor} 0%, ${palette.primaryColor} ${percent}%, ${palette.backgroundPrimaryColor} ${percent}%, ${palette.backgroundPrimaryColor} 100%)`,
          }}
        />
      </div>

      <div className={styles.container__rowCheckbox}>
        <Checkbox
          name="includeUppercase"
          checked={settings.upperCase}
          onChange={(e) => handleChangeSettings("upperCase", e.target.checked)}
        />
        <p
          className={clsx(
            settings.upperCase
              ? styles.rowCheckbox__textActive
              : styles.rowCheckbox__text
          )}
        >
          {t("home:includeUppercase")}
        </p>
      </div>

      <div className={styles.container__rowCheckbox}>
        <Checkbox
          name="includeLowercase"
          checked={settings.lowerCase}
          onChange={(e) => handleChangeSettings("lowerCase", e.target.checked)}
        />
        <p
          className={clsx(
            settings.lowerCase
              ? styles.rowCheckbox__textActive
              : styles.rowCheckbox__text
          )}
        >
          {t("home:includeLowercase")}
        </p>
      </div>

      <div className={styles.container__rowCheckbox}>
        <Checkbox
          name="includeNumbers"
          checked={settings.numbers}
          onChange={(e) => handleChangeSettings("numbers", e.target.checked)}
        />
        <p
          className={clsx(
            settings.numbers
              ? styles.rowCheckbox__textActive
              : styles.rowCheckbox__text
          )}
        >
          {t("home:includeNumbers")}
        </p>
      </div>

      <div className={styles.container__rowCheckbox}>
        <Checkbox
          name="includeSpecialCharacters"
          checked={settings.specialCharacters}
          onChange={(e) =>
            handleChangeSettings("specialCharacters", e.target.checked)
          }
        />
        <p
          className={clsx(
            settings.specialCharacters
              ? styles.rowCheckbox__textActive
              : styles.rowCheckbox__text
          )}
        >
          {t("home:includeSpecialCharacters")}
        </p>
      </div>

      <div className={styles.container__rowSecurity}>
        <p className={styles.rowSecurity__textSecurity}>{t("home:strength")}</p>

        <div className={styles.rowSecurity__containerRight}>
          <p className={styles.containerRight__text}>
            {passwordStrength ? t(`home:strengths.${passwordStrength}`) : ""}
          </p>
          <div className={styles.containerRight__containerColumn}>
            {columnsStrength.map(({ id, active }) => (
              <div
                key={id}
                className={clsx(
                  (!passwordStrength || !active) &&
                    styles.containerColumn__columnBase,
                  passwordStrength === "weak" &&
                    active &&
                    styles.containerColumn__columnWeak,
                  passwordStrength === "medium" &&
                    active &&
                    styles.containerColumn__columnMedium,
                  passwordStrength === "strong" &&
                    active &&
                    styles.containerColumn__columnStrong
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className={styles.container__button}
        disabled={!settings.characterLength}
        onClick={handlePasswordGenerate}
      >
        <p className={styles.button__text}>{t("home:generate")}</p>
      </button>
    </div>
  );
};

export default PasswordLogic;
