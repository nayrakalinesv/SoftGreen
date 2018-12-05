new Vue({
    el: '#app',
    data: {
        nomeEmpresa: "Empresa LTDA",
        email: '',
        password: '',
        dolar: 3.98,
        logins: {
            "ricardo@empresaltda.com.br": "654321",
            "admin@empresaltda.com.br": "123456"
        }
    },

    computed: {
        emailValid(){
            return this.logins[this.email]
        },
        passwordValid(){
           return this.logins[this.email] == this.password
        }
    }
})