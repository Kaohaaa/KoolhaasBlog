<!-- src\components\footer.vue -->
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
.site-footer {
    width: 100%;
    padding: 40px 0;
    background: #9BBB72;
    color: white;
    position: relative;
    z-index: 1000;
}

.container {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    text-align: center;
}

.links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
}

.links a {
    color: white;
    text-decoration: none;
    padding: 6px 10px;
    border-radius: 6px;
    transition: background 150ms ease;
}

.meta {
    gap: 12px;
    align-items: center;
    flex-direction: column;
}

.meta small {
    color: white;
}

/* language buttons */
.lang {
    display: flex;
    gap: 8px;
    margin-top: 6px;
}

.lang button {
    background: transparent;
    color: #fff;
    padding: 6px 8px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 0.9rem;
}

/* responsive */
@media (min-width: 640px) {
    .meta { flex-direction: row; }
}
</style>