<!-- src/components/home.vue -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <h1>{{ t("home.title", { ownerName: t("ownerName") }) }}</h1>
  <p>{{ t("home.description") }}</p>
  <details>
    <summary>{{ t("home.langBotton") }}</summary>
    <ul>
      <li><button @click="$i18n.locale='en-US'">English</button></li>
      <li><button @click="$i18n.locale='zh-CN'">简体中文</button></li>
      <li><button @click="$i18n.locale='zh-TW'">繁體中文</button></li>
      <li><button @click="$i18n.locale='lzh'">文言</button></li>
    </ul>
  </details>
</template>

<style scoped>
  h1 {
    font-size: 80px;
    font-weight: bold;
    color: #42b983;
    text-align: center;
    margin-bottom: 20px;
  }
  p {
    text-align: center;
    margin-bottom: 20px;
  }
  details {
    padding: 0%;
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
    background-color: rgba(0,0,0,0.2);
    border-radius: 4px;
  }
</style>
