import { type FC } from "react";
import darkStyles from "./styles/PasswordVisualizer.dark.module.css";
import lightStyles from "./styles/PasswordVisualizer.light.module.css";
import CopyIcon from "../../../../components/icons/CopyIcon";
import clsx from "clsx";
import useCopy from "../../hooks/useCopy";
import useTheme from "../../hooks/useTheme";

type Props = {
  password: string;
};

const PasswordVisualizer: FC<Props> = ({ password }) => {
  const { isDarkMode } = useTheme();
  const styles = isDarkMode ? darkStyles : lightStyles;
  const { handleCopy } = useCopy();
  const defaultPassword = "P4$5W0rD!";
  return (
    <div className={styles.container}>
      <p
        className={clsx(
          styles.container__text,
          password
            ? styles["container__text--value"]
            : styles["container__text--placeholder"]
        )}
      >
        {password || defaultPassword}
      </p>
      <CopyIcon
        className={clsx(
          password
            ? styles.container__iconActive
            : styles.container__iconDisabled
        )}
        onClick={() => handleCopy(password)}
      />
    </div>
  );
};

export default PasswordVisualizer;
