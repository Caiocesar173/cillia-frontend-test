import { THEME } from "@/constants/StorageKeysConstants";
import { setItem } from "@/utils/localStorage";

export const changeMenuActive = async ({ commit }, active) => {
  commit("setActive", active);
};
export const changeTheme = async ({ commit }, theme) => {
  setItem(THEME, theme);
  commit("setTheme", theme);
};
