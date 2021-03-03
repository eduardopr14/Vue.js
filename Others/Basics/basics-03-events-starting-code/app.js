const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: ''
        };
    },
    computed: {
        fullname() {
            if(this.name === '') {
                return '';
            }
            return this.name + ' ' + 'New';
        }
    },
    methods: {
        setName(event) {
            this.name = event.target.value;
            if(event.target.value.length > 10){
                event.target.value = '';
                this.name = '';
            }
        },
        resetInput() {
            this.name = '';
        },
    }
}).mount('#events');
