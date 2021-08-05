<template>
    <h1 class="year">{{new Date().getFullYear()}}</h1>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
.year {
    margin-left: 5rem;
    padding: 1rem;
    text-align: center;
}
</style>
