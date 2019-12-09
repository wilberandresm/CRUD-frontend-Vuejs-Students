<template>
  <div>
    <b-form >
      <b-form-group @submit="POST_STUDENTS(form)"
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

       <b-button type="submit" @click="POST_STUDENTS(form)" variant="primary">Submit</b-button>

      
    </b-form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

    <b-table :items="STUDENTS" :fields="fields" striped responsive="sm">
      <template v-slot:cell(show_details)="row">
        <b-button size="sm" class="mr-2">
          Borrar
        </b-button>

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        
      </template>

    
    </b-table>
 

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
      fields:['id','name','code','show_details'],
      form:{
        code:"",
        name:""

      },
    }
  },
  methods: {
    ...mapActions({
      GET_STUDENTS: TypesStore.actions.GET_STUDENTS,
      POST_STUDENTS:TypesStore.actions.POST_STUDENTS
    })
  },
  computed: {
    ...mapGetters({
      STUDENTS: TypesStore.state.STUDENTS,
      PSTUDENTS:TypesStore.state.PSTUDENTS
    })
  },
  mounted() {
    this.GET_STUDENTS();
    this.POST_STUDENTS(this.form.code,this.form.name);
  }
};
</script>

<style scoped>
</style>