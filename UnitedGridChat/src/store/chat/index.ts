import { defineStore } from 'pinia';
import { ref } from 'vue';
import * as signalR from '@microsoft/signalr';
import { Message } from './types';
import { useUserStore } from '../user';

/**
 * Хранилище чата
 * @store chat
 * @description Управляет состоянием чата, подключением к SignalR и отправкой сообщений
 */
export const useChatStore = defineStore('chat', () => {
  const messages = ref<Message[]>([]);
  const userStore = useUserStore();

  /**
   * Подключение к SignalR хабу
   * @type {signalR.HubConnection}
   */
  const connection = new signalR.HubConnectionBuilder()
    .withUrl("http://localhost:3209/messenger/hub")
    .withAutomaticReconnect()
    .build();

  connection.start()
    .then(() => console.log('Connected!'))
    .catch(err => console.error('Connection failed:', err));

  /**
   * Обработчик получения нового сообщения
   * @param {string} user - имя пользователя
   * @param {string} text - текст сообщения
   */
  connection.on("ReceiveMessage", (user, text) => {
    const newMessage: Message = {
      text: text,
      timestamp: new Date(),
      user: user
    };
    messages.value.push(newMessage);
  });

  /**
   * Отправляет новое сообщение на сервер
   * @param {string} message - текст сообщения
   */
  async function sendMessage(message: string) {
    await fetch('http://localhost:3209/api/Messenger/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: userStore.user, text: message, timestamp: new Date() })
    });
  }

  return {
    sendMessage,
    messages
  };
});
