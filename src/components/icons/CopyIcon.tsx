import { type FC, type SVGProps } from "react";

type Props = SVGProps<SVGSVGElement>;

const CopyIcon: FC<Props> = (props) => (
  <svg
    width={24}
    height={24}
    fill={"currentColor"}
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M20 2H10c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2m0 12H10V4h10z"></path>
    <path d="M14 20H4V10h2V8H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-2h-2z"></path>
  </svg>
);
export default CopyIcon;
