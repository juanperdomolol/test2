<template>
  <div>
    <b-form >
      <b-form-group label="Nombre de Usuario">
        <b-form-input
          v-model.lazy="username"
          type="text"
          placeholder="Ingresa tu nombre de usuario"
          required
          @blur="quitarEspacios"
        >
        </b-form-input>
      </b-form-group>

      <b-form-group label="NickName">
        <b-form-input
          readonly
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

        <b-form-text v-if="userEdit">
          <p class="text-dark">Fecha creado</p>
          <span class="text-dark">{{ fecha}}</span>
        </b-form-text>

        <b-form-text v-if="userEdit">
          <p class="text-dark">Fecha ultima edicion</p>
          <span class="text-dark">{{ edicion }}</span>
        </b-form-text>

        <b-button v-if="!userEdit" @click="procesarUsuario" type="submit" variant="primary" class="material-icons" :disabled="validar"
          >save GUARDAR</b-button
        >
        <b-button v-if="userEdit"  type="submit" @click="deleteUser(editUser.id)" variant="danger" class="material-icons"
          >delete ELIMINAR</b-button
        >
          <b-button v-if="userEdit" :disabled="validar" @click="editarUsuario(editUser.id)" type="submit" variant="primary" class="material-icons" 
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
      fecha: '',
      edicion: ''
    };
  },
  mounted() {
    // this.startData();
    this.$root.$on('ver-usuario', () => {
     this.dataForm = this.$store.getters.getUserState,
     this.username = this.dataForm.nombreUsuario,
     this.nick = this.dataForm.NickName,
     this.passwd = this.dataForm.Contrasena,
     this.fecha = this.dataForm.fechaCreacion
     this.edicion = this.dataForm.fechaEdicion
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
      let unir = this.username.split(" ")
      this.nick = unir.length > 1 ? unir[0]+'.'+unir[1]  : unir[0]
    },
    procesarUsuario() {
      // if(this.nombreUsuario === "" && this.passwd === ""){
      //   return
      // }
      const NuevoUser = {
        nombreUsuario: this.username,
        NickName: this.nick,
        Contrasena: this.passwd,
        fechaCreacion: this.$moment().format('lll'),
        fechaEdicion: ""
      }
      //enviando datos
      this.setNewUsuario(NuevoUser);
  },

    editarUsuario(id){
    
      const editUsers = {
        nombreUsuario: this.username,
        NickName: this.nick,
        Contrasena: this.passwd,
        fechaCreacion: this.fecha,
        fechaEdicion: this.$moment().format('lll'),
        id

      }
        //enviando datos
        this.uptadeUser(editUsers);
    }
  },
  computed: {
    ...mapState(["editUser", "userEdit"]),
    validar() {
      return this.username.trim() === "" ? true : false 
      
    },
  },
}
</script>

<style>
</style>