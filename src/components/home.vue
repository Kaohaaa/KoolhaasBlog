<!-- src/components/home.vue -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import navBar from './navBar.vue'
import webFooter from './footer.vue'
const { t } = useI18n()
const ownerName = t("ownerName")
</script>

<template>
  <navBar />
  <div class="hero" style="position:relative;">
    <img src="../images/home-bg.png" alt="home-bg" class="headimg">
    <h1>
      {{ t("home.title", { ownerName }) }}
    </h1>
    <h2>{{ t("home.subtitle", { ownerName }) }}</h2>
  </div>
  <h3>{{ t("home.description") }}</h3>
  <p>
    {{ t("home.detailedDescription", { ownerName }) }}
  </p>

  <webFooter />
</template>

<style scoped>

  @import '../styles/home.css';

</style>