<template>
  <div>
    <form v-on:submit.prevent="onSubmit">
    <b-form id="input" class="text-center">
      <b-form-group 
        id="input-group-1"
        label="Code:"
        label-for="input-1"
        description="We'll never share your code with anyone else."
      >
        <b-col >
        <b-form-input
          id="input-1"
          v-model="form.code"
 
          required
          placeholder="Enter code"
         
        ></b-form-input>
        </b-col>
      </b-form-group>

      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
        <b-col>
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Enter name"
        ></b-form-input>
        </b-col>
      </b-form-group>

       <b-button type="submit" @click="POST_STUDENTS(form)" variant="primary">Submit</b-button>

      
    </b-form>

    </form>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>

     <form @submit.prevent>
    <b-form >
    <b-table  :items="STUDENTS" :fields="fields" striped responsive="sm" fixed class="text-center">
      <template v-slot:cell(show_details)="row">
       
          <b-button  type="submit" size="sm" @click="DELET_STUDENTS(row.item.id)" class="mr-2" pill variant="outline-danger">
            Borrar
          </b-button>
          <b-button size="sm" @click="row.toggleDetails" class="mr-2 m-2" variant="outline-primary">
            {{row.detailsShowing ? 'No' : ''}} Actualizar

          </b-button>

       

        <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
        
      </template>
        <!--Actualizar-->
      <template v-slot:row-details="row">
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
                placeholder="Enter code"
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
               <b-col>{{row.item.id}}</b-col>
               <h1>{{form}}</h1>
            <b-button type="submit" @click="PUT_STUDENTS([row.item.id,form])" variant="primary">Actualizar</b-button>

        
      </b-form>




      </template>

    
    </b-table>
    </b-form>

     </form>
 
   <!-- <h1>{{STUDENTS[0].id}}</h1>-->
  <!--  <b-table striped hover :items="STUDENTS"></b-table> -->

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
      POST_STUDENTS:TypesStore.actions.POST_STUDENTS,
      DELET_STUDENTS:TypesStore.actions.DEL_STUDENTS,
      PUT_STUDENTS:TypesStore.actions.PUT_STUDENTS
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

  #input{
    margin-top: 20px;
  }
</style>