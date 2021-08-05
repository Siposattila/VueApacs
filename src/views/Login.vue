<template>
    <Form :title="'Bejelentkezés'" :subtitle="'Jelentkezz be ma és apacs harapjon meg!'" :submitTitle="'Bejelentkezés'" :callback="'submitLogin'" :inputs="[
        {
            id: 'email',
            type: 'text',
            placeholder: 'Email'
        },
        {
            id: 'password',
            type: 'password',
            placeholder: 'Jelszó'
        },
    ]" />
</template>

<script>
import Form from "@/components/Form";
import { RepositoryFactory } from "@/repositories/RepositoryFactory";

export default {
    name: "Login",
    components: {
        Form
    },
    data: function() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        submitLogin: async function() {
            const user = await RepositoryFactory.get("user").authUser(JSON.stringify({email: this.email, password: this.password}));
            const userData = await RepositoryFactory.get("user").getUser(user.data.response.split("_")[1]);
            this.$store.dispatch("login", userData.data.user);
        }
    }
}
</script>

<style>

</style>
