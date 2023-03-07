import { getItem } from "@/utils/localStorage";
import { claculateOffset } from "@/utils/position";
import { THEME } from "@/constants/StorageKeysConstants";

export const getActive = (state) => {
  return state.active;
};

export const getTheme = (state) => {
  state.theme = getItem(THEME, state.theme);
  return state.theme;
};

export const getOffset = (state) => {
  state.offset = claculateOffset();
  return state.offset;
};
