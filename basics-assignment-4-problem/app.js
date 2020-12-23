const app = Vue.createApp({
    data() {
        return {
            userStyle: '',
            visibility: true,
            userBackground: '',
        };
    },
    computed: {
        customStyle() {
            if(this.userStyle === 'user1') {
                return { user1: true };
            } else if (this.userStyle === 'user2') {
                return { user2: true };
            }
        },
        isVisible() {
            return { hidden: this.visibility };
        },
    },
    methods: {
        userClass() {
            this.userStyle = event.target.value;
            if(this.userStyle.length > 5) {
                this.userStyle = '';
                event.target.value = '';
            }
        },
        visibilityStyle() {
            this.visibility = !this.visibility;
        },
    }
});

app.mount('#assignment');