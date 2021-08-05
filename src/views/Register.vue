<template>
    <Form :title="'Regisztrálás'" :subtitle="'Regisztrálj ma és apacs meglesz veled!'" :submitTitle="'Regisztráció'" :callback="'submitRegistration'" :inputs="[
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
        {
            id: 'password2',
            type: 'password',
            placeholder: 'Jelszó megerősítése'
        },
    ]" />
</template>

<script>
import Form from "@/components/Form";
import { RepositoryFactory } from "@/repositories/RepositoryFactory";

export default {
    name: "Register",
    components: {
        Form
    },
    data: function() {
        return {
            email: "",
            password: "",
            password2: ""
        }
    },
    methods: {
        submitRegistration: async function() {
            await RepositoryFactory.get("user").regUser(JSON.stringify({email: this.email, password: this.password}));
            this.$router.push({ name: "Login" });
        }
    }
}
</script>

<style>

</style>
