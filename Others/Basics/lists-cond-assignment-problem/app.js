const app = Vue.createApp({
    data() {
        return {
            enteredGoalValue: '',
            goals: [],
            visibility: false,
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredGoalValue);
        },
        removeGoal(index) {
            this.goals.splice(index, 1);
        },
        changeVisibility() {
            this.visibility = !this.visibility;
        }
    },
    computed: {
        isVisible() {
            return { hidden: this.visibility };
        },
        buttonCaption() {
            return this.visibility ? 'Show List' : 'Hide List';
        }
    },
}).mount('#assignment');