import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

interface ThemeState {
  theme: string;
  setInitial: () => void;
  update: (newTheme: string) => void;
}

const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set, get) => ({
        theme: "",
        setInitial: () => {
          const storedTheme = get().theme;
          if (storedTheme) {
            set({ theme: storedTheme });
          } else {
            const currentHour = new Date().getHours();
            const isNightTime = currentHour >= 18 || currentHour < 6;
            const defaultTheme = isNightTime ? "dark" : "light";
            set({ theme: defaultTheme });
          }
        },
        update: (newTheme: string) => set({ theme: newTheme }),
      }),
      {
        name: "theme",
        storage: createJSONStorage(() => localStorage),
      }
    )
  )
);

export default useThemeStore;
