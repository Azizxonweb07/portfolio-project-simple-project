import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const port = Number(process.env.PORT || 3001);

app.use(cors({ origin: process.env.NODE_ENV === 'production' ? false : true }));
app.use(express.json({ limit: '20kb' }));

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, service: 'portfolio-contact-api' });
});

app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message, website } = req.body || {};

  // Honeypot field: basic spam protection for bots.
  if (website) return res.json({ ok: true });

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ ok: false, error: 'Barcha maydonlarni to‘ldiring.' });
  }

  const clean = (value, max = 1200) => String(value).trim().slice(0, max);
  const safeName = clean(name, 100);
  const safeEmail = clean(email, 160);
  const safeSubject = clean(subject, 160);
  const safeMessage = clean(message, 3000);

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail)) {
    return res.status(400).json({ ok: false, error: 'Email manzili noto‘g‘ri.' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId || token.includes('PUT_YOUR') || chatId.includes('PUT_YOUR')) {
    console.error('Telegram sozlamalari .env faylida to‘ldirilmagan.');
    return res.status(503).json({
      ok: false,
      error: 'Telegram bot hali sozlanmagan. Administrator .env faylini tekshirsin.'
    });
  }

  const text = [
    '📩 PORTFOLIO SAYTIDAN YANGI XABAR',
    '',
    `👤 Ism: ${safeName}`,
    `📧 Email: ${safeEmail}`,
    `🗂 Mavzu: ${safeSubject}`,
    '',
    '💬 Xabar:',
    safeMessage
  ].join('\n');

  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        disable_web_page_preview: true
      })
    });

    const result = await response.json();
    if (!response.ok || !result.ok) {
      console.error('Telegram API xatosi:', result.description || response.status);
      return res.status(502).json({
        ok: false,
        error: 'Telegramga xabar yuborilmadi. Bot tokeni va chat ID ni tekshiring.'
      });
    }

    return res.json({ ok: true, message: 'Xabaringiz Telegramga yuborildi!' });
  } catch (error) {
    console.error('Telegram bilan ulanish xatosi:', error.message);
    return res.status(502).json({ ok: false, error: 'Telegram bilan ulanishda xatolik.' });
  }
});

app.listen(port, () => {
  console.log(`Portfolio API http://localhost:${port} da ishga tushdi`);
});
