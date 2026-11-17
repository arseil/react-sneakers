<div align="center">
  <h1>👟 React Sneakers</h1>
  <p><strong>Небольшой интернет-магазин кроссовок на React</strong></p>
  <p>
    <img src="https://img.shields.io/badge/React-UI-61DAFB?logo=react&logoColor=20232A" alt="React" />
    <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=20232A" alt="JavaScript" />
    <img src="https://img.shields.io/badge/SCSS-CSS%20Modules-CC6699?logo=sass&logoColor=white" alt="SCSS" />
    <img src="https://img.shields.io/badge/Axios-API-671DDF" alt="Axios" />
    <img src="https://img.shields.io/badge/MockAPI-backend-2F80ED" alt="MockAPI" />
  </p>
</div>

---

## ✨ Возможности

- **Каталог и поиск** — просмотр кроссовок и фильтрация по названию.
- **Корзина** — добавление нескольких экземпляров одного товара и удаление каждого отдельно.
- **Стоимость заказа** — автоматический подсчёт суммы и налога 5%.
- **Избранное** — переключение состояния товара.
- **Обратная связь** — анимация подтверждения добавления, состояния загрузки и ошибки.

## 🚀 Запуск проекта

```bash
npm install
npm start
```

Приложение откроется по адресу [http://localhost:3000](http://localhost:3000).

| Команда | Назначение |
| --- | --- |
| `npm start` | Запуск в режиме разработки |
| `npm run build` | Production-сборка |
| `npm test` | Запуск тестов |

## 🧩 Структура проекта

```text
src/
├── components/       # Header, Card, Cart, CartItem
├── constants/        # Конфигурация API
├── hooks/            # useCart — логика корзины
├── services/         # Запросы к MockAPI
├── App.js
├── App.module.scss
└── index.scss        # Глобальные стили
```

## 🛠️ Технологии и подходы

- **React Hooks** — состояние и логика компонентов.
- **Custom Hook `useCart`** — загрузка, добавление и удаление товаров, расчёт суммы.
- **Axios + MockAPI** — получение каталога и хранение данных корзины.
- **SCSS Modules** — изолированные стили компонентов.

## 🔌 API

Используется MockAPI: `https://6afb0955730c1d152f32f8ad.mockapi.io/api/v1`

| Метод | Endpoint | Действие |
| --- | --- | --- |
| `GET` | `/items` | Получить каталог |
| `GET` | `/cart` | Получить корзину |
| `POST` | `/cart` | Добавить запись в корзину |
| `DELETE` | `/cart/:id` | Удалить запись из корзины |

Каждая запись корзины имеет собственный `id`, поэтому одинаковые товары можно добавлять и удалять независимо.

> **Примечание:** избранное хранится в состоянии интерфейса. Кнопка оформления заказа пока не выполняет реальную покупку.

---

<div align="center">
  <sub>Учебный проект для практики React, работы с API и организации компонентных стилей.</sub>
</div>
