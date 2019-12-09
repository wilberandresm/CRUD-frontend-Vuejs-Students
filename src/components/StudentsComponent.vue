<template>
  <div>
    <b-form >
      <b-form-group
        id="input-group-1"
        label="Code:"
        label-for="input-1"
        description="We'll never share your code with anyone else."
      >
        <b-form-input
          id="input-1"
          v-model="form.code"
 
          required
          placeholder="Enter email"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
  
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
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
  data(){
    return{
      form:{
        code:'',
        name:''

      },
    }
  },
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