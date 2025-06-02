# UnitedGridChat

Многопользовательский чат-клиент, разработанный с использованием Ionic, Vue 3 и SignalR.

## Требования

- Node.js (версия 16 или выше)
- .NET 7 SDK
- Visual Studio 2022 (для бэкенда)
- Git

## Структура проекта

Проект состоит из двух основных частей:
- `UnitedGridChat` - фронтенд на Ionic + Vue 3
- `AzureSignalRService` - бэкенд на ASP.NET Core с SignalR

## Установка и запуск test

### 1. Бэкенд (AzureSignalRService)

1. Перейдите в директорию бэкенда:
```bash
cd AzureSignalRService/src
```

2. Восстановите зависимости:
```bash
dotnet restore
```

3. Запустите проект:
```bash
dotnet run
```

Бэкенд будет доступен по адресу: `http://localhost:3209`

### 2. Фронтенд (UnitedGridChat)

1. Перейдите в директорию фронтенда:
```bash
cd UnitedGridChat
```

2. Установите зависимости:
```bash
npm install
```

3. Запустите проект в режиме разработки:
```bash
ionic serve
```

Фронтенд будет доступен по адресу: `http://localhost:8100`

## Функциональность

- Авторизация пользователей
- Обмен сообщениями в реальном времени
- Поддержка SignalR для мгновенной доставки сообщений
- Адаптивный дизайн с использованием Ionic Framework

## Технологии

### Фронтенд
- Vue 3
- Ionic Framework
- Pinia (управление состоянием)
- TypeScript
- SignalR Client

### Бэкенд
- ASP.NET Core 7
- SignalR
- C#

## API Endpoints

### SignalR Hub
- URL: `http://localhost:3209/messenger/hub`
- Методы:
  - `ReceiveMessage` - получение нового сообщения
  - `SendMessage` - отправка сообщения

### REST API
- `POST /api/Messenger/send` - отправка сообщения
  - Body: `{ user: string, text: string, timestamp: Date }`

## Разработка

### Структура фронтенда
```
united-grid-chat-ionic/
├── src/
│   ├── components/    # Vue компоненты
│   ├── store/         # Pinia хранилища
│   ├── views/         # Страницы приложения
│   └── router/        # Конфигурация маршрутизации
```

### Структура бэкенда
```
AzureSignalRService/
├── src/
│   ├── Controllers/  # API контроллеры
│   ├── Hubs/         # SignalR хабы
│   └── Program.cs    # Точка входа приложения
```