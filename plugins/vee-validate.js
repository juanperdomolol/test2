import {extend} from 'vee-validate'
import {required, min, alpha} from 'vee-validate/dist/rules'

// Vue.component('ValidationProvider', ValidationProvider)
// Vue.component('ValidationObserver', ValidationObserver)

extend('required', {
    ...required,
    message: 'Este Campo No Puede Ir Vació'
})
extend('min', {
    ...min,
    message: 'Este Campo debe ser mayor a 4 caracteres'
})
extend("alpha", {
    ...alpha,
    message: "Este campo debe tener solo valores alfabéticos"
  });