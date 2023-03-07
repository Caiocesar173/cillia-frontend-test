import state from "./state";

const mutations = require("./mutations");
const getters = require("./getters");
const actions = require("./actions");

const menu = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default menu;
