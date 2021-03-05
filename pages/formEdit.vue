<template>
  <div>
    <b-form-group label="Nombre de Usuario">
      <b-form-input
        v-model="editUser.nombreUsuario"
        type="text"
        placeholder="Ingresa tu nombre de usuario"
        required
      >
      </b-form-input>
    </b-form-group>

    <b-form-group label="NickName">
      <b-form-input
        v-model="editUser.NickName"
        type="text"
        placeholder="Ingresa tu NickName"
        required
      >
      </b-form-input>
    </b-form-group>

    <b-form-group label="Contraseña">
      <b-input-group>
        <b-form-input
          v-model="editUser.Contrasena"
          type="text"
          placeholder="Ingresa tu Contraseña"
          required
        >
        </b-form-input>
        <b-input-group-apend>
          <b-button @click="aleatorio()" variant="success">Generar </b-button>
        </b-input-group-apend>
      </b-input-group>

      <b-form-text>
        <p class="text-i">Fecha creado</p>
        <span class="text-dark">{{ $moment() }}</span>
      </b-form-text>

      <b-form-text >
        <p class="text-dark"> Fecha ultima edicion</p>
        <span class="text-dark">{{ $moment() }}</span>
      </b-form-text>

      <b-button type="submit" variant="primary" class="material-icons"
        >save GUARDAR</b-button
      >
      <b-button type="reset" variant="danger" class="material-icons"
        >delete ELIMINAR</b-button
      >
    </b-form-group>
  </div>
</template>

<script>
// import {mapState} from "vuex"

export default {
    created(){
     this.$store.dispatch("editUser")

    },
  computed:{
    // ...mapState('editUser'),

  }
}
</script>

<style>

</style>