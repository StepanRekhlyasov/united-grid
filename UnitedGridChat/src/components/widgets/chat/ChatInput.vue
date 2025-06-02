/**
 * Компонент ввода сообщений
 * @component ChatInput
 * @description Предоставляет интерфейс для ввода и отправки новых сообщений
 */
<template>
  <div style="width: 100%;">
    <ion-input
      v-model="text"
      label="Text input" 
      label-placement="stacked"
      placeholder="Enter text"
      @keyup.enter="sendMessage"
    />
    <ion-button @click="sendMessage" style="width: 100%;">Send</ion-button>
    <ion-button @click="userStore.logout" style="width: 100%;">Logout</ion-button>
  </div>
</template>

<script setup lang="ts">
  import { useChatStore } from '@/store/chat';
  import { ref } from 'vue';
  import { IonButton, IonInput } from '@ionic/vue';
  import { useUserStore } from '@/store/user';
  
  const chatStore = useChatStore();
  const userStore = useUserStore();
  const text = ref('');

  /**
   * Отправляет сообщение в чат
   * Очищает поле ввода после отправки
   */
  function sendMessage() {
    chatStore.sendMessage(text.value);
    text.value = '';
  }
</script>