import { USER } from "@/constants/StorageKeysConstants";
import { getItem } from "@/utils/localStorage";

export const getUser = (state) => {
  state.user = getItem(USER, JSON.stringify(state.user));
  return JSON.parse(state.user);
};
