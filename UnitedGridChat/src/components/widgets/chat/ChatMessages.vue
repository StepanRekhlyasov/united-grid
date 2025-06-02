/**
 * Компонент отображения списка сообщений
 * @component ChatMessages
 * @description Отображает список всех сообщений чата, используя компонент ChatMessage
 */
<template>
  <div class="messages-container">
    <ChatMessage v-for="(message, index) in messages" :key="index" :message="message" />
  </div>
</template>

<script setup lang="ts">
import { useChatStore } from '@/store/chat';
import ChatMessage from './ChatMessage.vue';
import { storeToRefs } from 'pinia';

const chatStore = useChatStore();
const { messages } = storeToRefs(chatStore);
</script>

<style scoped>
.messages-container {
  overflow: auto;
  height: 100%;
  padding: 1rem;
}
</style>