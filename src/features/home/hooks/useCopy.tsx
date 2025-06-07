import { useTranslation } from "react-i18next";
import { toast } from "sonner";
const useCopy = () => {
  const { t } = useTranslation();
  const handleCopy = (value: string) => {
    if (!value) return;

    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast.success(t("home:copy.success"));
      })
      .catch(() => {
        toast.error(t("home:copy.error"));
      });
  };

  return {
    handleCopy,
  };
};

export default useCopy;
