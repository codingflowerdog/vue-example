import Vue from 'vue'
import Vuex from 'vuex'
import Common from "@/store/common"

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Common
    }
})
