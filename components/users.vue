<template>
  <div > 
              
    <b-card  class="colorCards" @click.prevent="editUser" style="cursor:pointer">  
         <b-row no-gutters>
      <b-col md="3">
        <b-card-img src="../assets/user_icon.png" style="max-width: 50px" ></b-card-img>
      </b-col>
      <b-col md="9">
        <b-card-body :title="UserNames.nombreUsuario">
          <b-card-text>
            {{UserNames.NickName}}- {{UserNames.fechaCreacion}} 
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
    </b-card>
  </div>
</template>

<script>
import {mapActions, mapState} from "vuex"
export default {
    props:{
        UserNames:Object
    },
    computed: {
      ...mapState(['userEdit'])
    },
    mounted(){
      this.$root.$on("ver-usuario", () => {
        console.log("ejecutado")
      })
    },
    methods:{
        ...mapActions(["verUsuario"]),
        editUser(id){
            this.verUsuario(this.UserNames)
            this.$root.$emit('ver-usuario')
            console.log(this.userEdit)
            // this.$refs.formularioUser.cargarData()
        }
    }

};
</script>

<style>
.colorCards{
  background-color: #98FB98;
}
</style>