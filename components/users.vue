<template>
  <div > 
              
    <b-card  bg-variant="warning">  
         <b-row no-gutters>
      <b-col md="3">
        <b-card-img src="../assets/user_icon.png" style="max-width: 50px" ></b-card-img>
      </b-col>
      <b-col md="9">
        <b-card-body :title="UserNames.nombreUsuario">
          <b-card-text>
            {{UserNames.NickName}}- {{UserNames.fechaCreacion}} 
          </b-card-text>
          <b-button variant="success" @click.prevent="editUser()">Ver Info
          </b-button>
        </b-card-body>
      </b-col>
    </b-row>
    </b-card>
  </div>
</template>

<script>
import {mapActions} from "vuex"
export default {
    props:{
        UserNames:Object
    },
    methods:{
        ...mapActions(["verUsuario"]),
        editUser(id){
            this.verUsuario(this.UserNames)
            // this.$router.push("/formEdit")
        }
    }

};
</script>

<style>
</style>