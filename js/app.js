new Vue({
el: '#app',
    data: {
        nomeEmpresa: "Empresa LTDA",
        email: '',
        password: '',
        dolar: 3.86,
        logins: {
            "ricardo@empresaltda.com.br": "654321",
            "admin@empresaltda.com.br": "123456"
        },
        gain: 0,
        greetings: ""
    },

    computed: {
        emailValid(){
            return this.logins[this.email]
        },
        passwordValid(){
        return this.logins[this.email] == this.password
        }
    },

    mounted(){
        axios.get('https://economia.awesomeapi.com.br/usd').then(response => {
            this.dolar = response.data[0].ask
            var lastAsk = response.data[9].ask
            this.gain = this.dolar - lastAsk
        })

        var hour = new Date().getHours()
        if(hour >= 6 && hour <= 12)
            this.greetings = "Bom dia!"
        else if (hour <= 18)
            this.greetings = "Boa tarde!"
        else 
            this.greetings = "Boa noite!"
        
    }

})