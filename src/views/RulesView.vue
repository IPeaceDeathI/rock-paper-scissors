<script setup lang="ts"></script>

<template>
    <h1>ПРАВИЛА</h1>
    <div class="wrapper">
        <div class="col">
            <h2>ОРИГИНАЛ</h2>
            <img src="/image-rules.svg" />
        </div>

        <div class="col">
            <h2>БОНУС</h2>
            <img src="/image-rules-bonus.svg" />
        </div>
    </div>
</template>
<style scoped>
.wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding: 2em 0;
    gap: 2em;
}
.col {
    height: 380px;
    min-width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
h1 {
    color: #fff;
    text-align: center;
    padding: 1em 0 0 0;
}
h2 {
    background: -webkit-linear-gradient(45deg, #0b01b8, #00ff95 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
