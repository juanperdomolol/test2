<template>
  <div>
    <b-form >
      <b-form-group label="Nombre de Usuario">
        <b-form-input
          v-model="username"
          type="text"
          placeholder="Ingresa tu nombre de usuario"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="NickName">
        <b-form-input
          v-model="nick"
          type="text"
          placeholder="Ingresa tu NickName"
          required
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="Contraseña">
        <b-input-group>
          <b-form-input
            v-model="passwd"
            type="text"
            placeholder="Ingresa tu Contraseña"
            required
          >
          </b-form-input>
          <b-input-group-append>
            <b-button @click="aleatorio()" variant="success">Generar </b-button>
          </b-input-group-append>
        </b-input-group>

        <b-form-text>
          <p class="text-dark">Fecha creado</p>
          <span class="text-dark">{{ $moment() }}</span>
        </b-form-text>

        <b-form-text>
          <p class="text-dark">Fecha ultima edicion</p>
          <span class="text-dark">{{ $moment() }}</span>
        </b-form-text>

        <b-button v-if="!userEdit" @click="procesarUsuario" type="submit" variant="primary" class="material-icons"
          >save GUARDAR</b-button
        >
        <b-button v-if="userEdit"  type="reset" @click="deleteUser(editUser.id)" variant="danger" class="material-icons"
          >delete ELIMINAR</b-button
        >
          <b-button v-if="userEdit"  @click="editarUsuario(editUser.id)" type="reset" variant="primary" class="material-icons"
          >update ACTUALIZAR</b-button
        >
      </b-form-group>
    </b-form>
  </div>
</template>

<script>
import { mapState, mapGetters,mapActions } from "vuex";
export default {
  data() {
    return {
      dataForm: [],
      username: '',
      nick: '',
      passwd: '',
    };
  },
  mounted() {
    // this.startData();
    this.$root.$on('ver-usuario', () => {
     this.dataForm = this.$store.getters.getUserState,
     this.username = this.dataForm.nombreUsuario,
     this.nick = this.dataForm.NickName,
     this.passwd = this.dataForm.Contrasena
    })
  },
  props: {
    infoUser: Object,
  },
  methods: {
    ...mapActions(["setNewUsuario",'deleteUser','uptadeUser']),

    aleatorio() {
      let r = Math.random().toString(36).substring(7);
      return (this.passwd= r);
    },
    quitarEspacios() {
      return this.infoUser.nombreUsuario.split(" ").join("");
    },
    procesarUsuario() {
      const NuevoUser = {
        nombreUsuario: this.username,
        NickName: this.nick,
        Contrasena: this.passwd,
        fechaCreacion: " ",
      }
      //enviando datos
      this.setNewUsuario(NuevoUser);
  },

    editarUsuario(id){
      const editUsers = {
        nombreUsuario: this.username,
        NickName: this.nick,
        Contrasena: this.passwd,
        fechaCreacion: " ",
        id

      }
        //enviando datos
        this.uptadeUser(editUsers);
    }
  },
  computed: {
    ...mapState(["editUser", "userEdit"]),
  },
}
</script>

<style>
</style>