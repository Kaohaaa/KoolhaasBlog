<!-- src/components/home.vue -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import navBar from './navBar.vue'
import webFooter from './footer.vue'
const { t } = useI18n()

</script>

<template>
  <navBar />
  <div class="hero" style="position:relative;">
    <img src="../images/home-bg.png" alt="home-bg" class="headimg">
    <h1>
      {{ t("home.title", { ownerName: t("ownerName") }) }}
    </h1>
  </div>
  <h2>{{ t("home.description") }}</h2>
  <p>
    {{ t("home.detailedDescription", { ownerName: t("ownerName") }) }}
  </p>

  <webFooter />
</template>

<style scoped>

  @import '../styles/home.css';

</style>