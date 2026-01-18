<!-- filepath: e:\vue-project\src\components\footer.vue -->
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
    <footer class="site-footer">
        <div class="container">
            <ul class="links" aria-label="footer links">
                <li><a href="https://space.bilibili.com/1195167431" target="_blank">{{ t('footer.bilibili') }}</a></li>
                <li><a href="https://github.com/Kaohaaa" target="_blank">{{ t('footer.github') }}</a></li>
            </ul>

            <div class="meta">
                <small>© {{ year }} {{ t('ownerName') }} · {{ t('footer.rights') }}</small>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    @import '../styles/footer.css';
</style>