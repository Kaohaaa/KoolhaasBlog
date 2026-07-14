<template>
   <div class="markdown-content" v-html="renderedHtml"></div>
 </template>
 <script setup>
 import { ref, watch, defineProps } from 'vue'
 import markdownIt from 'markdown-it'
 import hljs from 'highlight.js'
 import 'highlight.js/styles/atom-one-light.css'
 import { useI18n } from 'vue-i18n'

 const { t } = useI18n()
 const props = defineProps({
   md: {
     type: String,
     required: true,
     default: ''
   }
 })
 const renderedHtml = ref('')
 const md = markdownIt({
   highlight: function (str, lang) {
     if (lang && hljs.getLanguage(lang)) {
       try {
         return hljs.highlight(str, { language: lang }).value
       } catch (__) {}
     }
     return md.utils.escapeHtml(str)
   },
   html: true,
   linkify: true,
   typographer: true
 })
 const renderMd = (content) => {
   if (!content) return ''
   const processedContent = content.replace(/\{\{ (\w+) \}\}/g, (_, key) => t(key))
   renderedHtml.value = md.render(processedContent)
 }
 watch(() => props.md, (newVal) => {
   renderMd(newVal)
 }, { immediate: true, deep: true })
 </script>
 <style scoped>
 .markdown-content {
  text-align: center;
   line-height: 1.8;
   font-size: 14px;
   padding: 16px 0;
 }
 .markdown-content pre {
   padding: 12px;
   border-radius: 4px;
   overflow-x: auto;
   margin: 16px 0;
 }
 .markdown-content code {
   padding: 2px 4px;
   border-radius: 2px;
   font-family: Consolas, Monaco, 'Courier New', monospace;
 }
 .markdown-content h1, h2, h3, h4, h5, h6 {
   margin: 24px 0 16px;
   font-weight: 600;
 }
 .markdown-content p {
   margin: 8px 0;
 }
 .markdown-content ul, ol {
   padding-left: 24px;
   margin: 8px 0;
 }
 .markdown-content a {
   color: #42b983;
   text-decoration: none;
 }
 .markdown-content a:hover {
   text-decoration: underline;
 }
 .markdown-content blockquote {
   border-left: 4px solid #eee;
   padding-left: 16px;
   color: #666;
   margin: 16px 0;
 }
 </style>
