<!-- src/components/home.vue -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import navBar from './navBar.vue'
import webFooter from './footer.vue'

import mdSupport from './mdSupport.vue'
import markdownText from '../post/home.md?raw'

const { t } = useI18n()

</script>

<template>
  <navBar />
  <div class="hero" style="position:relative;">
    <img src="../images/home.png" alt="home-bg" class="headimg">
    <h1>
      {{ t("home.title", { ownerName: t("ownerName") }) }}
    </h1>
    <h2>{{ t("home.subtitle", { ownerName: t("ownerName") }) }}</h2>
  </div>
  <h3>{{ t("home.description") }}</h3>
  <p>
    {{ t("home.detailedDescription", { ownerName: t("ownerName") }) }}
  </p>
  <mdSupport :md="markdownText"/>


  <webFooter />
</template>

<style scoped>
h1 {
    width: max-content;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 2;
    font-size: 80px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
}

h2{
    position: absolute;
    left: 50%;
    top: 65%;
    transform: translate(-50%, -50%);
    color: white;
    z-index: 2;
    font-weight: lighter;
    text-align: center;
    margin-bottom: 20px;
}

h3 {
    padding: 5%;
    color: gray;
    font-size: xx-large;
    text-align: center;
}

p {
    max-width: 60%;
    text-align: center;
    font-size: medium;
    margin: 0 auto 20px;
    z-index: 2000;
}

details {
    padding: 0;
    margin: 20px 45%;
    text-align: center;
}

summary {
    user-select: none;
    display: inline-block;
    box-sizing: border-box;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    background-color: #f0f0f0;
    transition: background-color 0.3s;
}

summary:hover {
    background-color: #e0e0e0;
}

ul {
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    max-height: 150px;
    overflow-y: auto;
}

button {
    margin: 6px auto;
    padding: 6px 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #36a76a;
}

li {
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

/* WebKit scrollbar styling */
ul::-webkit-scrollbar {
  width: 8px;
}

ul::-webkit-scrollbar-track {
    background: transparent;
}

ul::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
}

.headimg {
    padding: 0;
    width: 100%;
    display: block;
}
</style>