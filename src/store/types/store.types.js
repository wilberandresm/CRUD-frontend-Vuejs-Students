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
    DEL_STUDENTS:`GLOBAL:DEL_STUDENTS`,
    PUT_STUDENTS:`GLOBAL:PUT_STUDENTS`
  },
  mutations: {
    SET_LANGUAGE: `GLOBAL:SET_LANGUAGE`,
    SET_STUDENTS: `GLOBAL:GET_STUDENTS`,
    SET_PSTUDENT: `GLOBAL:POST_STUDENTS`,
    SET_DSTUDENTS:`GLOBAL:DEL_STUDENTS`,
    SET_PUTSTUDENTS:`GLOBAL:PUT_STUDENTS`
  }
};
