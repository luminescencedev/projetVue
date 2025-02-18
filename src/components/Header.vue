<template>
    <header class="w-screen fixed flex flex-row justify-between p-6 z-100">
        <router-link to="/"><h1>Home Made</h1></router-link>
        <nav class="flex flex-row gap-10">
            <router-link to="/chefs">Cuisiniers</router-link>
            <router-link to="/register">Inscription</router-link>
            <router-link to="/login">Connexion</router-link>
            <router-link to="/cart">Panier</router-link>
        </nav>
    </header>
</template>

<script lang="ts" setup>

</script>

<style>

</style>