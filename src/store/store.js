import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modulos/carrinho'
import parametros from './modulos/parametros'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: { carrinho, parametros }
})