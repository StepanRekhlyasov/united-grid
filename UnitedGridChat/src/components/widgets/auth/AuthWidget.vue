/**
 * Компонент авторизации пользователя
 * @component AuthWidget
 */
<template>
  <div class="ion-padding authWrapper">
    <h1>Auth</h1>
    <IonInput 
      v-model="name" 
      placeholder="Input your name"
      style="text-align: center;"
    />
    <IonButton @click="loginHandler" :disabled="!name">Login</IonButton>
  </div>  
</template>

<script setup lang="ts">
import { IonInput, IonButton, useIonRouter } from '@ionic/vue';
import { useUserStore } from '@/store/user';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore()
const name = ref('')
const router = useRouter()
const ionRouter = useIonRouter()

/**
 * Обработчик авторизации пользователя
 * Сохраняет имя пользователя в store и перенаправляет на страницу чата
 */
function loginHandler() {
  userStore.setUser(name.value)
  router.push({ name: 'chat' })
}
</script>
<style scoped>
.authWrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 500px;
  margin: 0 auto;
}
</style>