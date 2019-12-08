<template>
  <div>
    <b-table striped hover :items="STUDENTS"></b-table>
  </div>
</template>

<script>
//Importar los types que se van a utilizar
import { TypesStore } from "./../store/types/store.types";
//mapgetter la variable que ecesito para obtener el estado
//map actions la action GET_students
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions({
      GET_STUDENTS: TypesStore.actions.GET_STUDENTS
    })
  },
  computed: {
    ...mapGetters({
      STUDENTS: TypesStore.state.STUDENTS
    })
  },
  mounted() {
    this.GET_STUDENTS();
  }
};
</script>

<style scoped>
</style>