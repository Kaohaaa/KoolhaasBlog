<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
import home from './components/home.vue'

document.title = t("title", { ownerName: t("ownerName") });
</script>

<template>
  <home />
</template>

<style>
  body {
    margin: 0;
    padding: 0;
    border: none;
  }
</style>
