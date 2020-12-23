const app = Vue.createApp({
    data() {
        return {
            number: 0
        };
    },
    methods: {
        addNumber(num) {
            this.number = this.number + num;
        }
    },
    computed: {
        result() {
            if(this.number < 37) {
                return 'Not there yet!';
            } else if (this.number === 37) {
                return this.number;
            } else {
                return 'Too much!';
            }
        }
    },
    watch: {
        result() { // Reseta o valor de number depois de 5 segundos sem alteração
            const that = this;
            setTimeout(function(){
                that.number = 0;
            }, 3000);
        }
    },
}).mount('#assignment');;