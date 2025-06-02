<template>
  <div class="chat-message ion-padding ion-margin-bottom" :class="{ 'user-message': message.user === userStore.user }">
    <b>{{ message.user }}</b>
    <p>{{ message.text }}</p>
    <em>{{ message.timestamp }}</em>
  </div>
</template>
<script setup lang="ts">
import { Message } from '@/store/chat/types';
import { useUserStore } from '@/store/user';

defineProps<{
  message: Message;
}>();
const userStore = useUserStore()
</script>
<style scoped>
.chat-message{
  border-radius: 10px;
}
.user-message {
  background-color: teal;
  color: #fff;
  text-align: right;
}
</style>
