export const state = () => ({
    editUser:[],
    UserNames: [],
    userEdit: false
})

export const mutations = {
    update(state,payload){
      state.UserNames = state.UserNames.map(item => item.id === payload.id ? payload : item)
        
    },
    delete(state,payload){
        state.UserNames = state.UserNames.filter(item => item.id !== payload)

    },
    getUsers(state,payload){
        state.UserNames = payload
        // localStorage.setItem('user', {})
    },
    getEditusuario(state,payload){
        state.editUser = payload
        state.userEdit = true
        // localStorage.setItem('user', payload)
    }
}

export const getters ={
    getUserState:(state)=>{
        return state.editUser
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
                method: "DELETE",
                url: `http://localhost:3000/passwords/${id}`,
            })
            console.log(deleteUser)
            commit('delete',deleteUser)
        } catch (error) {
            
        }
    },
    async uptadeUser({commit},editUsers){
        try {
            const actualizarUser = await this.$axios({
                method: "PUT",
                url: `http://localhost:3000/passwords/${editUsers.id}`,
                data: editUsers
            })
        } catch (error) {
            
        }
    }
}