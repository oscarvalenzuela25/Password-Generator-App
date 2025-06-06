import type { FC, SVGProps } from "react";
import darkStyles from "./styles/PortfolioIcon.dark.module.css";
import lightStyles from "./styles/PortfolioIcon.light.module.css";

type Props = SVGProps<SVGSVGElement> & {
  isDarkMode?: boolean;
  url?: string;
};

const PortfolioIcon: FC<Props> = ({ isDarkMode, url, ...props }) => {
  const styles = isDarkMode ? darkStyles : lightStyles;
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={styles.icon}
      onClick={() => window.open(url, "_blank")}
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 12l3 3l3 -3l-3 -3z" />
      <path d="M15 12l3 3l3 -3l-3 -3z" />
      <path d="M9 6l3 3l3 -3l-3 -3z" />
      <path d="M9 18l3 3l3 -3l-3 -3z" />
    </svg>
  );
};

export default PortfolioIcon;
