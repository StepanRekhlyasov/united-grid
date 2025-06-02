/**
 * Компонент отображения списка сообщений
 * @component ChatMessages
 * @description Отображает список всех сообщений чата, используя компонент ChatMessage
 */
<template>
  <div class="messages-container" ref="wrapper">
    <ChatMessage v-for="(message, index) in messages" :key="index" :message="message" />
  </div>
</template>

<script setup lang="ts">
import { useChatStore } from '@/store/chat';
import ChatMessage from './ChatMessage.vue';
import { storeToRefs } from 'pinia';
import { ref, watch, nextTick } from 'vue';

const wrapper = ref<Element>();
const chatStore = useChatStore();
const { messages } = storeToRefs(chatStore);
/**
 * Автоматически прокручивает список сообщений вниз при добавлении новых сообщений
 */
watch(messages.value, async () => {
  if(wrapper.value){
    await nextTick()
    wrapper.value.scrollTop = wrapper.value.scrollHeight;
  }
});
</script>

<style scoped>
.messages-container {
  overflow: auto;
  height: 100%;
  padding: 1rem;
  flex-direction: column;
  display: flex;
}
.messages-container > :first-child {
  margin-top: auto;
}
</style>