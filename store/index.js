export const state = () => ({
    editUser:[],
    UserNames: []
})

export const mutations = {
    getUsers(state,payload){
        state.UserNames = payload
    },
    getEditusuario(state,payload){
        state.editUser = payload
    }
}

export const actions = {
    async verUsuario({commit},payload){
        try {
            console.log(payload)
            commit('getEditusuario',payload)
        } catch (error) {
            
        }
    },
    async setNewUsuario({commit},form){
        try {
            console.log(form)
            const newUser = await this.$axios({
                method: "POST",
                url: "http://localhost:3000/passwords",
                "Content-Type":"application/json",
                data: (form)
            })
            // console.log(newUser)
        } catch (error) {
            
        }
    },
    async getPasswords({commit}){
        try {
            const Passwords = await this.$axios({
                method: "get",
                url: "http://localhost:3000/passwords",
                "Content-Type":"application/json"
            })
            const users = Passwords.data.map(item=>{
                return{
                    id: item.id,
                    fechaCreacion: item.fechaCreacion,
                    nombreUsuario: item.nombreUsuario,
                    Contrasena: item.Contrasena,
                    NickName: item.NickName
                }
            })
            // console.log(users)
            commit('getUsers',users)
        } catch (error) {
            console.log(error)
        }
    },
    async deleteUser({commit},id){
        try {
            const deleteUser = await this.$axios({
                method: "delete",
                url: `http://localhost:3000/passwords${id}`,
            })
            // console.log(deleteUser)
        } catch (error) {
            
        }
    },
    async uptadeUser({commit},id){
        try {
            const actualizarUser = await this.$axios({
                method: "PUT",
                url: `http://localhost:3000/passwords${id}`,
            })
            console.log(actualizarUser)
        } catch (error) {
            
        }
    }
}