import state from "./state";

const mutations = require("./mutations");
const getters = require("./getters");
const actions = require("./actions");

const auth = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default auth;
