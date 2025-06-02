import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { User } from './types';
import { useRouter } from 'vue-router';

/**
 * Хранилище пользователя
 * @store user
 * @description Управляет состоянием авторизации пользователя
 */
export const useUserStore = defineStore('user', () => {
  const user = ref<User | null>(localStorage.getItem('user') ?? null);
  const router = useRouter();

  /**
   * Устанавливает данные пользователя
   * @param {User} data - имя пользователя
   */
  function setUser(data: User) {
    localStorage.setItem('user', JSON.stringify(data));
    user.value = data;
  }

  function logout() {
    localStorage.removeItem('user');
    user.value = null;
    router.push({ name: 'auth' });
  }

  return {
    user,
    setUser,
    logout
  }
});
