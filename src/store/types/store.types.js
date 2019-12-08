export const TypesStore = {
  state: {
    //global cambia de acuerdo al contexto
    LANGUAGE: `GLOBAL:LANGUAGE`,
    STUDENTS: `GLOBAL:STUDENTS`
  },
  actions: {
    GET_STUDENTS: `GLOBAL:GET_STUDENTS`
  },
  mutations: {
    SET_LANGUAGE: `GLOBAL:SET_LANGUAGE`,
    SET_STUDENTS: `GLOBAL:GET_STUDENTS`
  }
};
