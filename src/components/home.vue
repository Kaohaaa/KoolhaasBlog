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

  @import '../styles/home.css';

</style>