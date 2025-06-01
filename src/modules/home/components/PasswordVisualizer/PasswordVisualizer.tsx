import { type FC } from "react";
import darkStyles from "./styles/PasswordVisualizer.dark.module.css";
import CopyIcon from "../../../../components/icons/CopyIcon";
import clsx from "clsx";
import useCopy from "../../hooks/useCopy";

type Props = {
  password: string;
};

const PasswordVisualizer: FC<Props> = ({ password }) => {
  const { handleCopy } = useCopy();
  const defaultPassword = "P4$5W0rD!";
  return (
    <div className={darkStyles.container}>
      <p
        className={clsx(
          darkStyles.container__text,
          password
            ? darkStyles["container__text--value"]
            : darkStyles["container__text--placeholder"]
        )}
      >
        {password || defaultPassword}
      </p>
      <CopyIcon
        className={clsx(
          password
            ? darkStyles.container__iconActive
            : darkStyles.container__iconDisabled
        )}
        onClick={() => handleCopy(password)}
      />
    </div>
  );
};

export default PasswordVisualizer;
