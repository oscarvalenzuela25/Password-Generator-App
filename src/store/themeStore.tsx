import { type StateCreator, create } from "zustand";
import { persist } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface ThemeState {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const themeStore: StateCreator<ThemeState, [["zustand/immer", never]]> = (
  set
) => ({
  isDarkMode: true,

  toggleTheme: () => {
    set((state) => {
      state.isDarkMode = !state.isDarkMode;
    });
  },
});

const useThemeStore = create<ThemeState>()(
  persist(immer(themeStore), { name: "Theme-store" })
);

export default useThemeStore;
