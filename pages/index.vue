<template>
  <b-container>
    <b-row>
      <b-col cols="4">
        <b-row>
          <b-col>
            <b-input-group class="mt-3">
              <b-input-group-prepend>
                <b-button class="material-icons botonEstilo"
                  >search
                </b-button>
              </b-input-group-prepend>
              <b-form-input
                v-model="buscar"
                type="text"
                class="mr-sm-2"
                placeholder="Buscar"
                @keyup="buscarPassword(buscar)"
              ></b-form-input>
            </b-input-group>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <span>Ordenar por fecha</span>
            <b-button @click="Asc" class="mt-2 botonFiltros">Asc </b-button>
            <b-button @click="Desc" class="mt-2 botonFiltros">Desc </b-button>
            <b-button
              @click="nuevo"
              type="submit"
              class="material-icons botonEstilo"
              >person_add_alt
            </b-button>
          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <div >
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
            <b-card  class="card-info mt-3 mb-5">
              <b-row no-gutters>
                <b-col md="3">
                  <b-card-img
                    src="../assets/user_icon.png"
                    style="max-width: 50px"
                  ></b-card-img>
                </b-col>
                <b-col md="9">
                  <b-card-body 
                    :title="`Nombre Usuario :${editUser.nombreUsuario}`"
                  >
                    <b-card-text>
                      {{ `Nickname: ${editUser.NickName}` }}
                    </b-card-text>
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
  data() {
    return {
      buscar: "",
    };
  },
  components: {
    users,
    formulario,
  },
  created() {
    this.$store.dispatch("getPasswords");
    // editarFormulario()
  },
  computed: {
    ...mapState(["UserNames", "editUser"]),
  },
  methods: {
    ...mapActions(["setNewUsuario", "Asc", "Desc"]),
    nuevo() {
      location.reload();
    },
    buscarPassword(buscar) {
      this.$store.dispatch("searchUsuario", buscar);
    },
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
.card-info{
  background-color: #90EE90;
}
.botonEstilo{
background-color: #2E8B57;
}
.botonEstilo:hover{
background:#20B2AA	;
  color: #fff !important;
}
.botonFiltros{
  background-color: #FF00FF;
}
.botonFiltros:hover{
 background: #EE82EE;
  color: #fff !important;
}
.botonFiltros:active{
 background: #EE82EE;
  color: #fff !important;
}
</style>
