import { USER } from "@/constants/StorageKeysConstants";
import { removeItem } from "@/utils/localStorage";

export const logout = async ({ commit }) => {
  removeItem(USER);
  commit("setUser", null);
};
