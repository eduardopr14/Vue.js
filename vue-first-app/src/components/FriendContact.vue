<template>
    <li>
        <h2>{{ name }} {{ isFavorite === '1' ? '(Favorite)' : '' }}</h2>
        <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details </button>
        <ul v-if="detailsAreVisible">
            <li><strong>Phone: </strong>{{ phoneNumber }}</li>
            <li><strong>Email: </strong>{{ emailAddress }}</li>
        </ul>
    </li>
</template>

<script>
    export default {
        props: [
            'name',
            'phoneNumber',
            'emailAddress',
            "isFavorite"
        ],
        data() {
            return {
                detailsAreVisible: false,
                friend: {
                            id: 'Manuel',
                            name: 'Manuel Otto',
                            phone: '0123456789',
                            email: 'manuel@email.com'
                        }
            };
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            }
        }
    };
</script>