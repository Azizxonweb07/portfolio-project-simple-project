# Azizbek Mirzaboyev — React portfolio

React + Vite frontend va Express backend. Aloqa formasidan yuborilgan xabarlar Telegram bot orqali siz tanlagan Telegram chatga keladi.

## 1. Kerakli dastur
Node.js 18 yoki undan yangi versiya o‘rnating: https://nodejs.org/

## 2. Loyihani ishga tushirish
Terminalni shu papkada oching:

```bash
npm install
```

`.env.example` faylidan nusxa olib `.env` deb nomlang. `.env` ichidagi Telegram qiymatlarini to‘ldiring.

So‘ng ikkita terminal oynasida ishga tushiring:

Terminal 1 — backend:
```bash
npm run server
```

Terminal 2 — React frontend:
```bash
npm run dev
```

Vite ko‘rsatgan lokal manzilni brauzerda oching (odatda http://localhost:5173).

Production build:
```bash
npm run build
```

## 3. Telegram botni ulash

1. Telegramda **@BotFather** ni oching.
2. `/newbot` yuboring va ko‘rsatmalarga amal qilib bot yarating.
3. BotFather bergan tokenni `.env` faylidagi `TELEGRAM_BOT_TOKEN` qiymatiga kiriting.
4. Yangi botingizni Telegramda ochib **/start** yuboring.
5. Shaxsiy chatga xabar olish uchun chat ID kerak:
   - Brauzerda quyidagi manzilni oching, `BOT_TOKEN` o‘rniga tokeningizni qo‘ying:
     `https://api.telegram.org/botBOT_TOKEN/getUpdates`
   - Javobdan `message.chat.id` raqamini toping.
   - Shu raqamni `.env` dagi `TELEGRAM_CHAT_ID` ga yozing.
   - Agar `result` bo‘sh bo‘lsa, botga Telegramda yana bir xabar yuborib sahifani yangilang.
6. Backendni qayta ishga tushiring (`Ctrl+C`, keyin `npm run server`).
7. Saytdagi Aloqa formasidan test xabar yuboring. Xabar botga kelishi kerak.

Guruhga xabar yuborish uchun botni guruhga qo‘shing va guruh chat ID sini ishlating. Guruh ID si ko‘pincha manfiy raqam bo‘ladi.

## Xavfsizlik
- Bot tokenini faqat `.env` ichida saqlang. Uni React kodiga, GitHub repositoryga yoki boshqalarga yubormang.
- `.env` `.gitignore` ga kiritilgan.
- Frontend Telegram API ga bevosita murojaat qilmaydi; xabar Express backend orqali yuboriladi.
- Saytni internetga joylashtirganda backendni ham deploy qiling va hostingdagi environment variables sozlamalariga `TELEGRAM_BOT_TOKEN` hamda `TELEGRAM_CHAT_ID` ni qo‘shing.
- Bu loyiha lokal ishlab chiqish uchun tayyor. Productionda HTTPS, rate limiting va spam himoyasini kuchaytirish tavsiya etiladi.

## Tahrirlash
- Asosiy sahifa: `src/App.jsx`
- Dizayn va responsive qoidalar: `src/styles.css`
- Telegram backend: `server/index.js`
- Bot sozlamalari: `.env`
