const app = Vue.createApp({
    data() {
        return {
            user: '',
            confirmedInput: ''
        };
    },
    methods: {
        showAlert() {
            alert('Alert!');
        },
        registerUser() {
            this.user = event.target.value;
        },
        confirmInput() {
            this.confirmedInput = this.user;
        }
    }
}).mount('#assignment');
