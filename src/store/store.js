import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import { TypesStore } from "./types/store.types";

import axios from "axios";

export const store = new Vuex.Store({
  state: {
    //variables
    Language: "es",
    //cargando los estudiantes
    Students: []
  },
  getters: {
    //obtener el valor de las variables
    [TypesStore.state.LANGUAGE]: state => state.Language,
    [TypesStore.state.STUDENTS]: state => state.Students
  },
  actions: {
    //Se llama la api y parte operacional
    [TypesStore.actions.GET_STUDENTS]: ({ commit }) => {
      axios.get("students").then(response => {
        commit(TypesStore.mutations.SET_STUDENTS, response.data);
      });
    }
  },
  mutations: {
    //cambio de valor a las variables

    //Obtener el valor de la variable lenguaje que viene por parametro
    [TypesStore.mutations.SET_LANGUAGE]: (state, Language) => {
      state.Language = Language;
    },
    [TypesStore.mutations.SET_STUDENTS]: (state, Students) => {
      state.Students = Students;
    }
  },
  modules: {
    //
  }
});
