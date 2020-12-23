const app = Vue.createApp({
    data() {
        return { 
            value: 0,
            confirmedValue: 0,
            randomValue: 0,
            goals: [],
        };
    },
    methods: {
        addValue() {
            if(event.target.value > 0) {
                this.value = event.target.value;
            }
            if(event.target.value.length > 4) {
                event.target.value = '';
                this.value = '';
            }
        },
        confirmValue() {
            this.goals.splice(0);
            if(this.value > 0 && this.value.length <= 4) {
                this.confirmedValue = this.value;
            } else {
                this.confirmedValue = 0;
            }
            this.randomValueGenerator(this.confirmedValue);
        },
        randomValueGenerator(value) {
            this.randomValue = Math.ceil(Math.random()*value);
            this.addGoal();
            
            if(this.randomValue != 99) {
                this.randomValueGenerator(this.confirmedValue);
            }
        },
        addGoal() {
            this.goals.push(this.randomValue);
        },
    }
});

app.mount('#user-vue');
