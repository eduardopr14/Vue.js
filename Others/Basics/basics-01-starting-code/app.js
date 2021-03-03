const app = Vue.createApp({
    data() { // Function
        return { // returna um objeto
            courseGoal: 'Teste!',
            courseGoalA: 'Finish the course and learn Vue!',
            courseGoalB: '<h4>Master Vue and build amazing apps!</h4>',
            vueLink: 'https://vuejs.org/'
        };
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                // return randomNumber;
                return this.courseGoalA;
            } else {
                // return randomNumber;
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');