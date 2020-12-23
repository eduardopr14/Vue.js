const app = Vue.createApp({
    data() {
        return {
            name: 'Eduardo',
            age: 23,
            imageLink: 'https://upload.wikimedia.org/wikipedia/commons/8/81/Color_icon_black.png'
        };
    },
    methods: {
        agePlusFive() {
            return this.age + 5 + " in 5 years";
        },
        randomNumberMethod() {
            const randomNumber = Math.random();
            return randomNumber;
        }
    }
}).mount('#assignment');