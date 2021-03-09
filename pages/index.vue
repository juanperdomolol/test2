<template>
  <b-container>
    <b-row>
      <b-col cols="4">
        <b-row>
          <b-col>
            <b-input-group  class="mt-3">
              <b-input-group-prepend>
                <b-button variant="success" class="material-icons" 
                  >search
                </b-button>
              </b-input-group-prepend>
              <b-form-input
                type="text"
                class="mr-sm-2"
                placeholder="Buscar"
              ></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <span>Ordenar por fecha</span>
            <b-button  class="mt-2">Asc </b-button>
            <b-button  class="mt-2">Desc </b-button>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div v-b-scrollspy>
              <users
              class="mt-3"
                v-for="(user, i) in UserNames"
                :key="user.id"
                :UserNames="UserNames[i]"
                
              />
            </div>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="8">
        <b-row>
          <b-col>
            <b-card bg-variant="warning"  class="mt-3 mb-5">
              <b-row no-gutters>
                <b-col md="3">
                  <b-card-img
                    src="../assets/user_icon.png"
                    style="max-width: 50px"
                  ></b-card-img>
                </b-col>
                <b-col md="9">
                  <b-card-body title="Nombre Usuario">
                    <b-card-text> NickName </b-card-text>
                    <b-button variant="primary" class="material-icons" 
                  >update
                </b-button>
                  </b-card-body>
                </b-col>
              </b-row>
            </b-card>
            <formulario ref="formularioUser" />
              
              <!-- <formulario /> -->
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import users from "@/components/users";
import formulario from "@/components/formulario";

import { mapState, mapActions } from "vuex";
export default {
  components: {
    users,
    formulario,
  },
  created() {
    this.$store.dispatch("getPasswords");
    // editarFormulario()
  },
  computed: {
    ...mapState(["UserNames"]),
  },
  methods: {
    ...mapActions(["setNewUsuario"]),
    // editarFormulario(){
    //   this.$store.state('UserNames')===this.formUser
    // },
    procesarUsuario() {
      // if (this.formUser.nombreUsuario.trim() === "") {
      //   console.log("Campo Vacio");
      //   return;
      // }
      // else if (this.formUser.Contrasena.trim() === "") {
      //   console.log("password vacio");
      //   return;
      // }
      //enviando datos
      this.setNewUsuario(this.formUser);
      //limpiando datos
      this.formUser = {
        nombreUsuario: "",
        NickName: "",
        Contrasena: "",
        fechaCreacion: "",
        FechaEdicion: "",
      };
    },
  },
};
</script>

<style>
</style>
