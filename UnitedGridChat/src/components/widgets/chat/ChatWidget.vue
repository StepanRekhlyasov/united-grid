/**
 * Основной компонент чата
 * @component ChatWidget
 * @description Отображает список сообщений и поле ввода для отправки новых сообщений
 */
<template>
  <div class="chat-widget">
    <ChatMessages />
    <div class="chat-input-wrapper">
      <ChatInput />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatInput from './ChatInput.vue';
import ChatMessages from './ChatMessages.vue';
</script>

<style scoped>
.chat-widget {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.chat-input-wrapper {
  width: 100%;
  border-top: 1px solid var(--ion-color-medium);
  padding: 1rem;
}
</style>