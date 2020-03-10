const state = {
    color: 'cyan',
    drawer: false,
    darkmode: false,
    mobile: false
};

const getters = {
    mainColor: (state) => state.color,
    drawerState: (state) => state.drawer,
    darkMode: (state) => state.darkmode,
    isMobile: (state) => state.mobile,
};

const actions = {
    updateColor({commit}, color) {
        commit('setColor', color)
    },
    updateDrawer({commit, state}) {
        commit('setDrawer', !state.drawer)
    },
    updateDarkMode({commit, state}) {
        commit('setDarkMode', !state.darkmode)
    },
    updateMobile({commit, value}) {
        commit('setMobile', value)
    }
};

const mutations = {
    // setColor: (state, color) => (state.color = color),
    setColor (state, color) {
        state.color = color
    },
    setDrawer (state, value) {
        state.drawer = value
    },
    setDarkMode (state, value) {
        state.darkmode = value
    },
    setMobile (state,value) {
        state.mobile = value
    }

};

export default {
    state,
    getters,
    actions,
    mutations
};
