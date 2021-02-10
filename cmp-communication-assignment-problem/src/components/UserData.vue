<!-- Form to create a new user -->
<template>
    <form @submit.prevent="submitData">
        <div>
            <label>Username</label>
            <input type="text" v-model="enteredUsername" />
        </div>
        <div>
            <label>Age</label>
            <input type="text" v-model="enteredAge" />
        </div>
        <div>
            <button>Add User</button>
        </div>
    </form>
</template>

<script>
    export default {
        emits: ['add-user'],
        data() {
            return {
                // v-model variables of inputs username and age
                enteredUsername: '',
                enteredAge: '',
            };
        },
        methods: {
            // Submiting inputed data
            submitData() {
                this.$emit('add-user', this.enteredUsername, this.enteredAge);
            }
        }
    };
</script>