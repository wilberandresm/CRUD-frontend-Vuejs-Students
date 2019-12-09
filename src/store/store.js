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
    Students: [],
    Pstudents:[]
  
  },
  getters: {
    //obtener el valor de las variables
    [TypesStore.state.LANGUAGE]: state => state.Language,
    [TypesStore.state.STUDENTS]: state => state.Students,
    [TypesStore.state.PSTUDENTS]:state=> state.Pstudents
  },
  actions: {
    //Se llama la api y parte operacional
    [TypesStore.actions.GET_STUDENTS]: ({ commit }) => {
      axios.get("students").then(response => {
        commit(TypesStore.mutations.SET_STUDENTS, response.data);
      });
    },
    [TypesStore.actions.POST_STUDENTS]:({commit},datajson)=>{
      axios.post('students',datajson)
                .then(function(response){
                    commit(TypesStore.mutations.SET_PSTUDENT,response.data);
                })
                .catch(function(error){
                  commit(TypesStore.mutations.SET_PSTUDENT,error)
                })
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
    },
    [TypesStore.mutations.SET_PSTUDENT]:(state,Pstudents)=>{
      state.Pstudents=Pstudents;
    }
  },
  modules: {
    //
  }
});
