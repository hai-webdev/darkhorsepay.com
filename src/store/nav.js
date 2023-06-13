import getList from "@/api/getList";

const state = {
  data: {},
};
const mutations = {
  GET_DATA(state, payload) {
    state.data = payload;
  },
};
const actions = {
  async getData(ctx) {
    const result = await getList({scode:7});
    ctx.commit("GET_DATA", result);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
