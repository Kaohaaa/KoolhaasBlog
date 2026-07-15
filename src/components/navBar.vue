<!-- src/components/bar.vue -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'
const isOpen = ref(false)
const { t } = useI18n()

</script>

<template>
    <nav class="top-nav" role="navigation" aria-label="Main navigation">
        <div class="container">
            
            <div class="brand">
                <a href="">
                    <img src="/images/Koolhaas.png" alt="" class="logo">
                    {{ t('title', { ownerName: t("ownerName") }) }}
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

.root, :root {
    --nav-height: 200px;
}

.logo {
    border: 0;
    padding: 0;
    height: 30px;
    text-align: center;
    margin-bottom: -5px;
}

h1 {
    position: absolute;
    font-size: 80px;
    font-weight: bold;
    color: white;
    text-align: center;
    margin-bottom: 20px;
}

a {
    text-decoration: none;
    color: inherit;
}

p {
    text-align: center;
    margin-bottom: 20px;
    z-index: 1000;
    color: white;
}

.top-nav {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: var(--nav-height);
    background: rgba(255,255,255,0.06);
    border-bottom: 1px solid rgba(230,231,234,0.18);
    box-shadow: 0 1px 0 rgba(0,0,0,0.04);
    border: none;
    overflow: hidden;
    z-index: 10000;
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    transition: background-color 200ms ease, box-shadow 200ms ease;
}

/* translucent overlay*/
.top-nav::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(rgba(0,0,0,0.12), rgba(0,0,0,0.06));
    z-index: 0;
    pointer-events: none;
    transition: opacity 200ms ease;
    opacity: 0.35;
}

.top-nav.scrolled {
    background: rgba(255,255,255,0.14);
    box-shadow: 0 6px 18px rgba(0,0,0,0.08);
}

.top-nav.scrolled::before {
    opacity: 0.85;
}

.container {
    margin: 0 auto;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 1; /* place content above overlay */
    height: 100%;
}

.brand {
    font-weight: 700;
    font-size: 1.5rem;
    color: #ffffff;
}

.nav-list {
    list-style: none;
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;
    align-items: center;
}

.nav-list a {
    color: white;
    font-weight: bold;
    padding: 0.35rem 0.6rem;
    border-radius: 6px;
    transition: background 0.15s;
}

.nav-list a:hover {
    background: rgba(0,0,0,0.04);
}

.lang {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.lang button {
    text-shadow: #0e0e0e 1px 1px 1px;
    font-weight: bold;
    margin: 0;
    background: transparent;
    border: none;
    color: #ffffff;
    padding: 0.35rem 0.6rem;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.95rem;
    transition: background 150ms ease;
}

.lang button:hover {
    background: rgba(0,0,0,0.04);
}

/* hide nav links on small screens */
@media (max-width: 640px) {
    .lang { display: none; }
}

/* ensure page content not hidden behind fixed nav */

</style>