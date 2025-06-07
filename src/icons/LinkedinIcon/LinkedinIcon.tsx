import type { FC, SVGProps } from "react";
import darkStyles from "./styles/LinkedinIcon.dark.module.css";
import lightStyles from "./styles/LinkedinIcon.light.module.css";

type Props = SVGProps<SVGSVGElement> & {
  isDarkMode?: boolean;
  url?: string;
};

const LinkedinIcon: FC<Props> = ({ isDarkMode, url, ...props }) => {
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
      <path d="M8 11v5" />
      <path d="M8 8v.01" />
      <path d="M12 16v-5" />
      <path d="M16 16v-3a2 2 0 1 0 -4 0" />
      <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
    </svg>
  );
};

export default LinkedinIcon;
