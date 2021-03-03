const app = Vue.createApp({
    data() {
        return {
            name: '',
            confirmedName: ''
        };
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        setName(event, lastName) {
            this.name = event.target.value + ' ' + lastName;
            if(event.target.value.length > 10){
                event.target.value = '';
                this.name = '';
            }
        },
        submitForm(event) {
            alert('Submitted!');
        },
    }
}).mount('#events');
