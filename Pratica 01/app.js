const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: 'Eduardo',
            age: ''
        };
    },
    methods: {
        add() {
            this.counter++;
        },
        setName() {
            this.name = event.target.value;
            if(event.target.value.length > 3){
                event.target.value = '';
                this.name = '';
            }
        },
        setCounterPlusFive() {
        // Retorna o counter +5, não adiciona ao valor real
            return this.counter + 5;
        }
    }
}).mount('#events');
