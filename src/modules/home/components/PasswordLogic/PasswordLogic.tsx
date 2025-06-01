import darkStyles from "./styles/PasswordLogic.dark.module.css";
import { useTranslation } from "react-i18next";
import Checkbox from "../../../../components/icons/Checkbox";
import clsx from "clsx";
import type { ColumnsStrength, Settings } from "../../types/home";
import type { FC } from "react";

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
  const { t } = useTranslation();

  return (
    <div className={darkStyles.container}>
      <div className={darkStyles.container__rowTitle}>
        <p className={darkStyles.rowTitle__text}>{t("home:characterLength")}</p>
        <p className={darkStyles.rowTitle__textNumber}>
          {settings.characterLength}
        </p>
      </div>

      <div className={darkStyles.container__rowInput}>
        <input
          className={darkStyles.rowInput__input}
          id="container__rowInput"
          type="range"
          min="0"
          max={maxCharacterLength}
          value={settings.characterLength}
          onChange={(e) =>
            handleChangeSettings("characterLength", Number(e.target.value))
          }
          style={{
            background: `linear-gradient(to right, #a4ffaf 0%, #a4ffaf ${percent}%, #111016 ${percent}%, #111016 100%)`,
          }}
        />
      </div>

      <div className={darkStyles.container__rowCheckbox}>
        <Checkbox
          name="includeUppercase"
          checked={settings.upperCase}
          onChange={(e) => handleChangeSettings("upperCase", e.target.checked)}
        />
        <p
          className={clsx(
            settings.upperCase
              ? darkStyles.rowCheckbox__textActive
              : darkStyles.rowCheckbox__text
          )}
        >
          {t("home:includeUppercase")}
        </p>
      </div>

      <div className={darkStyles.container__rowCheckbox}>
        <Checkbox
          name="includeLowercase"
          checked={settings.lowerCase}
          onChange={(e) => handleChangeSettings("lowerCase", e.target.checked)}
        />
        <p
          className={clsx(
            settings.lowerCase
              ? darkStyles.rowCheckbox__textActive
              : darkStyles.rowCheckbox__text
          )}
        >
          {t("home:includeLowercase")}
        </p>
      </div>

      <div className={darkStyles.container__rowCheckbox}>
        <Checkbox
          name="includeNumbers"
          checked={settings.numbers}
          onChange={(e) => handleChangeSettings("numbers", e.target.checked)}
        />
        <p
          className={clsx(
            settings.numbers
              ? darkStyles.rowCheckbox__textActive
              : darkStyles.rowCheckbox__text
          )}
        >
          {t("home:includeNumbers")}
        </p>
      </div>

      <div className={darkStyles.container__rowCheckbox}>
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
              ? darkStyles.rowCheckbox__textActive
              : darkStyles.rowCheckbox__text
          )}
        >
          {t("home:includeSpecialCharacters")}
        </p>
      </div>

      <div className={darkStyles.container__rowSecurity}>
        <p className={darkStyles.rowSecurity__textSecurity}>
          {t("home:strength")}
        </p>

        <div className={darkStyles.rowSecurity__containerRight}>
          <p className={darkStyles.containerRight__text}>
            {passwordStrength ? t(`home:strengths.${passwordStrength}`) : ""}
          </p>
          <div className={darkStyles.containerRight__containerColumn}>
            {columnsStrength.map(({ id, active }) => (
              <div
                key={id}
                className={clsx(
                  (!passwordStrength || !active) &&
                    darkStyles.containerColumn__columnBase,
                  passwordStrength === "weak" &&
                    active &&
                    darkStyles.containerColumn__columnWeak,
                  passwordStrength === "medium" &&
                    active &&
                    darkStyles.containerColumn__columnMedium,
                  passwordStrength === "strong" &&
                    active &&
                    darkStyles.containerColumn__columnStrong
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        type="button"
        className={darkStyles.container__button}
        disabled={!settings.characterLength}
        onClick={handlePasswordGenerate}
      >
        <p className={darkStyles.button__text}>{t("home:generate")}</p>
      </button>
    </div>
  );
};

export default PasswordLogic;
