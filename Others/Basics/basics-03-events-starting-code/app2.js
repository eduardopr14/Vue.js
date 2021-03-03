const app = Vue.createApp({
    data() {
        return {
            counter: 10,
            name: ''
        };
    },
    methods: {
        setName(event, lastName) {
            this.name = event.target.value;
            if(event.target.value.length > 10){
                event.target.value = '';
                this.name = '';
            }
        },
        add() {
            this.counter++;
        },
        reduce() {
            if(this.counter >= 1) {
                this.counter--;
            }
        },
        customAdd(num) {
            this.counter = this.counter + num;
        }
    }
}).mount('#events');
