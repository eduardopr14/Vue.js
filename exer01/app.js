const app = Vue.createApp({
    data() {
        return { 
            value: 0,
            confirmedValue: 0,
            randomValue: 0,
        };
    },
    methods: {
        addValue() {
            if(event.target.value > 0) {
                this.value = event.target.value;
            }
            if(event.target.value.length > 5) {
                event.target.value = '';
                this.value = '';
            }
        },
        confirmValue() {
            if(this.value > 0 && this.value.length <= 5) {
                this.confirmedValue = this.value;
            } else {
                this.confirmedValue = 0;
            }
            this.randomValueGenerator(this.confirmedValue);
        },
        randomValueGenerator(value) {
            this.randomValue = Math.ceil(Math.random()*value);
        }
    }
});

app.mount('#user-vue');
