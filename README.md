# Datawawe — React + PayHub Integration

## Структура проекта

```
datawawe/
├── src/                          # React фронтенд
│   ├── api/
│   │   └── payhub.js             # Клиент к PayHub бэкенду
│   ├── components/
│   │   └── Payment/
│   │       ├── PaymentForm.jsx   # Форма оплаты
│   │       └── RefundForm.jsx    # Форма возврата
│   ├── pages/
│   │   ├── Payment/              # Страница /payment (с формой оплаты)
│   │   └── PaymentResult.jsx     # /payment/success и /payment/fail
│   └── i18n/locales/             # ru.json / en.json / kg.json
│
└── server/                       # Node.js бэкенд (PayHub API)
    ├── index.js
    ├── routes/payhub.js
    ├── services/payhub.js
    ├── utils/signature.js
    └── .env.example
```

## Запуск

### 1. Настройте бэкенд
```bash
cd server
cp .env.example .env
# Заполните MERCHANT_ID, TERMINAL_ID, PRIVATE_KEY_PATH
npm install
```

### 2. Настройте фронтенд
```bash
# В корне datawawe:
cp .env.example .env
# REACT_APP_BACKEND_URL=http://localhost:4000
npm install
```

### 3. Запустите оба сервера

**Раздельно (в двух терминалах):**
```bash
# Терминал 1 — бэкенд:
npm run server:dev

# Терминал 2 — фронтенд:
npm start
```

**Или вместе (нужен concurrently):**
```bash
npm install concurrently --save-dev
npm run dev
```

## Как работает оплата

1. Пользователь открывает `/payment`
2. Нажимает "Оплатить онлайн" → заполняет форму
3. Фронтенд → бэкенд `/api/payhub/initiate`
4. Бэкенд → PayHub API (с подписью RSA-SHA256)
5. PayHub возвращает `hppUrl` → редирект на страницу Demirbank
6. После оплаты → `/payment/success` или `/payment/fail`
7. PayHub присылает callback на бэкенд с финальным статусом

## Роуты

| Путь | Компонент |
|------|-----------|
| `/payment` | Страница оплаты (с формой PayHub) |
| `/payment/success` | Успешная оплата |
| `/payment/fail` | Неудачная оплата |
