<!-- src/components/bar.vue -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
    <nav class="top-nav" role="navigation" aria-label="Main navigation">
        <div class="container">
            
            <div class="brand">
                <a href="">
                    <img src="/Koolhaas.png" alt="" class="logo">
                    {{ t('title', { ownerName: t('ownerName') }) }}
                </a>
            </div>

            <ul class="nav-list">
                <li><a href="">{{ t('nav.home') }}</a></li>
                <li><a href="#about">{{ t('nav.about') }}</a></li>
                <li><a href="#projects">{{ t('nav.projects') }}</a></li>
                <li><a href="#contact">{{ t('nav.contact') }}</a></li>
            </ul>

            <div class="lang">
                <button @click="$i18n.locale='en-US'">EN</button>
                <button @click="$i18n.locale='zh-CN'">简</button>
                <button @click="$i18n.locale='zh-TW'">繁</button>
                <button @click="$i18n.locale='lzh'">文言</button>
            </div> 

            
        </div>
    </nav>
</template>

<style scoped>

    @import '../styles/navBar.css';

</style>