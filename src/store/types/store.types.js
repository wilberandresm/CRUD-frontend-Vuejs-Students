export const TypesStore = {
  state: {
    //global cambia de acuerdo al contexto
    LANGUAGE: `GLOBAL:LANGUAGE`,
    STUDENTS: `GLOBAL:STUDENTS`,
    PSTUDENTS:`GLOBAL:PSTUDENTS`
  },
  actions: {
    GET_STUDENTS: `GLOBAL:GET_STUDENTS`,
    POST_STUDENTS: `GLOBAL:POST_STUDENTS`,
  },
  mutations: {
    SET_LANGUAGE: `GLOBAL:SET_LANGUAGE`,
    SET_STUDENTS: `GLOBAL:GET_STUDENTS`,
    SET_PSTUDENT: `GLOBAL:POST_STUDENTS`
  }
};
