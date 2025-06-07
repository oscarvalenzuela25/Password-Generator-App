import useThemeStore from "../../../store/themeStore";

const useTheme = () => {
  const isDarkMode = useThemeStore((state) => state.isDarkMode);
  const handleToggleTheme = useThemeStore((state) => state.toggleTheme);

  return {
    isDarkMode,
    handleToggleTheme,
  };
};

export default useTheme;
