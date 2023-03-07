import { getItem } from "@/utils/localStorage";
import { claculateOffset } from "@/utils/position";
import { THEME } from "@/constants/StorageKeysConstants";

export const getActive = (state) => {
  return state.active;
};

export const getTheme = (state) => {
  state.theme = getItem(THEME, state.theme);

  const root = document.getElementsByTagName("html")[0];
  root.setAttribute("class", state.theme);

  return state.theme;
};

export const getOffset = (state) => {
  state.offset = claculateOffset();
  return state.offset;
};
