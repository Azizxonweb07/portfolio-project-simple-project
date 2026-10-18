import { useState } from 'react';
import {
  ArrowUpRight, Menu, X, Sun, Moon, Code2, Send, Mail, Github,
  CheckCircle2, Globe, Smartphone, Bot, Copy
} from 'lucide-react';

const copy = {
  uz: {
    nav: ['Men haqimda', 'Ko‘nikmalar', 'Tajriba', 'Loyihalar', 'Xizmatlar', 'Aloqa'],
    available: 'Yangi imkoniyatlarga ochiqman',
    title: <>Raqamli g‘oyalarni <span>haqiqiy natijaga</span> aylantiraman.</>,
    lead: 'Men Mirzaboyev Azizbek — zamonaviy web texnologiyalar va kreativ yechimlarga qiziqadigan dasturchiman. Foydali, tezkor va chiroyli raqamli tajribalar yarataman.',
    work: 'Loyihalarni ko‘rish', contact: 'Bog‘lanish', years: 'yil tajriba', tech: 'asosiy texnologiya', ideas: 'yangi g‘oyalar',
    role: 'Web dasturchi · Kreativ texnologiyalar', status: 'Yangi loyihalarni muhokama qilish mumkin',
    aboutK: '01 / MEN HAQIMDA', aboutTitle: 'Kod ortidagi inson.', aboutDesc: 'Texnologiya, dizayn va muammolarni sodda yechimlarga aylantirish chorrahasida ishlayman.',
    intro: 'Qisqacha tanishuv', aboutText: 'Men foydalanuvchiga qulay interfeyslar va amaliy web yechimlar yaratishga intilaman. Har bir loyihada toza kod, tezlik va puxta detallarni qadrlayman. Bu matnni o‘zingiz haqingizdagi haqiqiy ma’lumotlar bilan almashtiring.',
    facts: 'Qisqa ma’lumot', location: 'Joylashuv', exp: 'Tajriba', focus: 'Yo‘nalish', languages: 'Tillar',
    skillsTitle: 'Asboblar qutim.', skillsDesc: 'G‘oyani prototipdan tayyor mahsulotgacha olib borishda foydalanadigan texnologiyalar.',
    expTitle: 'O‘sish yo‘lim.', expDesc: 'Quyidagi tajriba namunaviy, uni o‘zingizga moslab tahrirlang.',
    current: 'Mustaqil web dasturchi', currentText: 'Shaxsiy loyihalar va kichik web tajribalar ustida ishlash. Responsive sahifalar va komponentli interfeyslar yaratish.',
    learning: 'Web dasturlashni o‘rganish', learningText: 'Web texnologiyalarini o‘rganish, kichik loyihalar yaratish va amaliy ko‘nikmalarni rivojlantirish.',
    projectsTitle: 'Tanlangan loyihalar.', projectsDesc: 'Namunaviy loyihalar — o‘z ishlaringiz va GitHub havolalaringiz bilan almashtiring.',
    all: 'Barchasi', web: 'Web', ui: 'UI / UX', python: 'Python',
    p1: 'Creative Landing Page', p1d: 'Brend yoki xizmat uchun zamonaviy, moslashuvchan landing sahifa.',
    p2: 'Dashboard UI Concept', p2d: 'Ma’lumotlarni tushunarli ko‘rsatishga mo‘ljallangan boshqaruv paneli.',
    p3: 'Python Utility Tool', p3d: 'Takrorlanuvchi vazifalarni yengillashtiradigan kichik avtomatlashtirish vositasi.',
    servicesTitle: 'Nimalarda yordam beraman.', servicesDesc: 'G‘oyangizni ko‘rib chiqib, mos yechimni birga tanlaymiz.',
    s1: 'Web sayt yaratish', s1d: 'Portfolio, landing page va biznes uchun responsive saytlar.',
    s2: 'Frontend interfeys', s2d: 'Foydalanish oson va turli ekranlarda ishlaydigan interfeyslar.',
    s3: 'Python yechimlari', s3d: 'Skriptlar, yordamchi vositalar va vazifalarni avtomatlashtirish.',
    contactTitle: 'Biror g‘oyangiz bormi?', contactDesc: 'Xabar yuboring — u Telegram botimga keladi.',
    letsTalk: 'Keling, bog‘lanamiz.', contactText: 'Taklif, hamkorlik yoki savol bo‘lsa, yozing.',
    copyEmail: 'Emailni nusxalash', sendMessage: 'Xabar yuborish', yourName: 'Ismingiz', yourEmail: 'Email manzilingiz',
    subject: 'Mavzu', message: 'Xabaringiz', send: 'Telegramga yuborish', sending: 'Yuborilmoqda...',
    formNote: 'Xabar xavfsiz backend orqali Telegram botga yuboriladi.', success: 'Xabar Telegramga yuborildi!', error: 'Xabar yuborilmadi. Qayta urinib ko‘ring.',
    namePlaceholder: 'Ali Valiyev', emailPlaceholder: 'ali@example.com', messagePlaceholder: 'Loyihangiz haqida qisqacha yozing...',
    subjectOptions: ['Web sayt loyihasi', 'Frontend dasturlash', 'Python avtomatlashtirish', 'Boshqa'],
    rights: 'Barcha huquqlar himoyalangan.', back: 'Yuqoriga ↑', copied: 'Email nusxalandi!'
  },
  en: {
    nav: ['About', 'Skills', 'Experience', 'Projects', 'Services', 'Contact'],
    available: 'Open to new opportunities',
    title: <>Turning digital ideas into <span>real results.</span></>,
    lead: 'I’m Azizbek Mirzaboyev — a developer interested in modern web technologies and creative solutions. I build useful, fast, and thoughtful digital experiences.',
    work: 'Explore projects', contact: 'Get in touch', years: 'years experience', tech: 'core technologies', ideas: 'new ideas',
    role: 'Web Developer · Creative Technology', status: 'Open to discussing new projects',
    aboutK: '01 / ABOUT ME', aboutTitle: 'The person behind the code.', aboutDesc: 'Working at the intersection of technology, design, and turning problems into simple solutions.',
    intro: 'A quick introduction', aboutText: 'I enjoy creating user-friendly interfaces and practical web solutions. I value clean code, speed, and thoughtful details. Replace this sample with your real story.',
    facts: 'Quick facts', location: 'Location', exp: 'Experience', focus: 'Main focus', languages: 'Languages',
    skillsTitle: 'My toolkit.', skillsDesc: 'Technologies I use to take ideas from prototype to product.',
    expTitle: 'My journey.', expDesc: 'The experience below is sample content; edit it to match your background.',
    current: 'Independent Web Developer', currentText: 'Working on personal projects and small web experiences. Building responsive pages and component-based interfaces.',
    learning: 'Learning Web Development', learningText: 'Learning web technologies, creating small projects, and developing practical skills.',
    projectsTitle: 'Selected projects.', projectsDesc: 'Sample projects — replace these with your work and GitHub links.',
    all: 'All projects', web: 'Web', ui: 'UI / UX', python: 'Python',
    p1: 'Creative Landing Page', p1d: 'A modern, responsive landing page for a brand or service.',
    p2: 'Dashboard UI Concept', p2d: 'A dashboard concept designed to present information clearly.',
    p3: 'Python Utility Tool', p3d: 'A small automation tool to simplify repetitive tasks.',
    servicesTitle: 'How I can help.', servicesDesc: 'Let’s explore your idea and choose a solution that fits.',
    s1: 'Website development', s1d: 'Responsive portfolios, landing pages, and business websites.',
    s2: 'Frontend interfaces', s2d: 'Easy-to-use interfaces that work across screen sizes.',
    s3: 'Python solutions', s3d: 'Scripts, helper tools, and task automation.',
    contactTitle: 'Have an idea in mind?', contactDesc: 'Send a message — it will arrive in my Telegram bot.',
    letsTalk: 'Let’s connect.', contactText: 'For opportunities, collaboration, or questions, send me a message.',
    copyEmail: 'Copy email', sendMessage: 'Send a message', yourName: 'Your name', yourEmail: 'Your email',
    subject: 'Topic', message: 'Your message', send: 'Send to Telegram', sending: 'Sending...',
    formNote: 'Your message is sent to the Telegram bot through a secure backend.', success: 'Message sent to Telegram!', error: 'Could not send. Please try again.',
    namePlaceholder: 'Alex Smith', emailPlaceholder: 'alex@example.com', messagePlaceholder: 'Tell me briefly about your project...',
    subjectOptions: ['Website project', 'Frontend development', 'Python automation', 'Other'],
    rights: 'All rights reserved.', back: 'Back to top ↑', copied: 'Email copied!'
  }
};

const skills = [
  ['5', 'HTML5', 'Semantic structure'], ['✳', 'CSS3', 'Responsive styling'],
  ['JS', 'JavaScript', 'Interactive experiences'], ['Re', 'React', 'Component-based UI'],
  ['V', 'Vue.js', 'Reactive interfaces'], ['Py', 'Python', 'Scripts & logic'],
  ['UI', 'UI / UX', 'User-centered design'], ['Git', 'Git', 'Version control']
];

function App() {
  const [lang, setLang] = useState('uz');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [light, setLight] = useState(false);
  const [filter, setFilter] = useState('all');
  const [sending, setSending] = useState(false);
  const [notice, setNotice] = useState('');
  const t = copy[lang];

  const projects = [
    { id: 1, category: 'web', title: t.p1, desc: t.p1d, tags: ['HTML', 'CSS', 'JavaScript'] },
    { id: 2, category: 'ui', title: t.p2, desc: t.p2d, tags: ['UI / UX', 'React', 'CSS'] },
    { id: 3, category: 'python', title: t.p3, desc: t.p3d, tags: ['Python', 'Automation'] }
  ];

  async function submitForm(event) {
    event.preventDefault();
    setSending(true);
    setNotice('');
    const form = new FormData(event.currentTarget);
    const payload = Object.fromEntries(form.entries());
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (!response.ok || !result.ok) throw new Error(result.error || t.error);
      setNotice(t.success);
      event.currentTarget.reset();
    } catch (err) {
      setNotice(err.message || t.error);
    } finally {
      setSending(false);
    }
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText('mirzaboyevazizbek@gmail.com');
      setNotice(t.copied);
    } catch {
      window.location.href = 'mailto:mirzaboyevazizbek@gmail.com';
    }
  }

  const navIds = ['about', 'skills', 'experience', 'projects', 'services', 'contact'];

  return (
    <div className={`site ${light ? 'light' : ''}`} id="top">
      <header className="nav">
        <div className="wrap nav-inner">
          <a className="brand" href="#top"><span className="brandmark">A.</span> azizbek<span className="accent">/dev</span></a>
          <nav className={`navlinks ${mobileOpen ? 'open' : ''}`}>
            {t.nav.map((item, i) => <a key={item} href={`#${navIds[i]}`} onClick={() => setMobileOpen(false)}>{item}</a>)}
          </nav>
          <div className="navright">
            <button className="small-btn" onClick={() => setLang(lang === 'uz' ? 'en' : 'uz')}>{lang === 'uz' ? 'UZ / EN' : 'EN / UZ'}</button>
            <button className="icon-btn" aria-label="Change theme" onClick={() => setLight(!light)}>{light ? <Moon size={17}/> : <Sun size={17}/>}</button>
            <button className="icon-btn hamburger" aria-label="Open menu" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X/> : <Menu/>}</button>
          </div>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <div className="eyebrow"><span className="dot"/>{t.available}</div>
              <h1>{t.title}</h1>
              <p className="lead">{t.lead}</p>
              <div className="actions"><a className="btn primary" href="#projects">{t.work} <ArrowUpRight size={17}/></a><a className="btn ghost" href="#contact">{t.contact}</a></div>
              <div className="stats">
                <div className="stat"><strong>1–3<span>+</span></strong><small>{t.years}</small></div>
                <div className="stat"><strong>5<span>+</span></strong><small>{t.tech}</small></div>
                <div className="stat"><strong>∞</strong><small>{t.ideas}</small></div>
              </div>
            </div>
            <aside className="hero-card">
              <div className="card-top"><span>Developer card</span><span>01 — 26</span></div>
              <div className="avatar">AM.</div><h2>Mirzaboyev Azizbek</h2><p>{t.role}</p>
              <div className="status"><span className="dot"/>{t.status}</div>
            </aside>
          </div>
        </section>

        <section className="section" id="about"><div className="wrap">
          <div className="section-head"><div><div className="kicker">{t.aboutK}</div><h2>{t.aboutTitle}</h2></div><p className="section-desc">{t.aboutDesc}</p></div>
          <div className="about-grid">
            <article className="panel"><div className="eyebrow"><span className="dot"/>{t.intro}</div><p>{t.aboutText}</p></article>
            <article className="panel"><div className="eyebrow"><span className="dot"/>{t.facts}</div><div className="facts">
              <div><small>{t.location}</small><b>Tashkent, Uzbekistan</b></div><div><small>{t.exp}</small><b>1–3 years</b></div>
              <div><small>{t.focus}</small><b>Web Development</b></div><div><small>{t.languages}</small><b>O‘zbekcha / English</b></div>
            </div></article>
          </div>
        </div></section>

        <section className="section alternate" id="skills"><div className="wrap">
          <div className="section-head"><div><div className="kicker">02 / SKILLS</div><h2>{t.skillsTitle}</h2></div><p className="section-desc">{t.skillsDesc}</p></div>
          <div className="skill-grid">{skills.map(([icon, name, desc]) => <article className="skill" key={name}><div className="skill-icon">{icon}</div><b>{name}</b><small>{desc}</small></article>)}</div>
        </div></section>

        <section className="section" id="experience"><div className="wrap">
          <div className="section-head"><div><div className="kicker">03 / EXPERIENCE</div><h2>{t.expTitle}</h2></div><p className="section-desc">{t.expDesc}</p></div>
          <div className="timeline"><div className="time">2024 — 2026 · {lang === 'uz' ? 'Hozir' : 'Present'}</div><div><h3>{t.current}</h3><p>{t.currentText}</p><div className="tags"><span>HTML / CSS</span><span>JavaScript</span><span>React · Vue</span></div></div></div>
          <div className="timeline"><div className="time">2023 — 2024</div><div><h3>{t.learning}</h3><p>{t.learningText}</p><div className="tags"><span>Web fundamentals</span><span>Python</span></div></div></div>
        </div></section>

        <section className="section alternate" id="projects"><div className="wrap">
          <div className="section-head"><div><div className="kicker">04 / SELECTED WORK</div><h2>{t.projectsTitle}</h2></div><p className="section-desc">{t.projectsDesc}</p></div>
          <div className="filters">{['all', 'web', 'ui', 'python'].map(f => <button key={f} className={`filter ${filter === f ? 'active' : ''}`} onClick={() => setFilter(f)}>{t[f]}</button>)}</div>
          <div className="projects">{projects.filter(p => filter === 'all' || p.category === filter).map(p => <article className="project" key={p.id}>
            <div className={`project-art art-${p.id}`}><div className="mock"><div className="mock-bar"/><div className="mock-line"/><div className="mock-line short"/><div className="mock-blocks"><i/><i/><i/></div></div></div>
            <div className="project-body"><div className="project-title"><h3>{p.title}</h3><ArrowUpRight className="accent" size={20}/></div><p>{p.desc}</p><div className="tags">{p.tags.map(tag => <span key={tag}>{tag}</span>)}</div></div>
          </article>)}</div>
        </div></section>

        <section className="section" id="services"><div className="wrap">
          <div className="section-head"><div><div className="kicker">05 / SERVICES</div><h2>{t.servicesTitle}</h2></div><p className="section-desc">{t.servicesDesc}</p></div>
          <div className="services">
            <article className="service"><Code2/><div className="service-num">01 — BUILD</div><h3>{t.s1}</h3><p>{t.s1d}</p></article>
            <article className="service"><Globe/><div className="service-num">02 — DESIGN</div><h3>{t.s2}</h3><p>{t.s2d}</p></article>
            <article className="service"><Bot/><div className="service-num">03 — AUTOMATE</div><h3>{t.s3}</h3><p>{t.s3d}</p></article>
          </div>
        </div></section>

        <section className="section alternate" id="contact"><div className="wrap">
          <div className="section-head"><div><div className="kicker">06 / CONTACT</div><h2>{t.contactTitle}</h2></div><p className="section-desc">{t.contactDesc}</p></div>
          <div className="contact-grid">
            <div className="contact-card"><h3>{t.letsTalk}</h3><p>{t.contactText}</p>
              <a className="contact-link" href="mailto:mirzaboyevazizbek@gmail.com"><span className="contact-icon"><Mail size={18}/></span><span><small>Email</small><b>mirzaboyevazizbek@gmail.com</b></span></a>
              <a className="contact-link" href="https://t.me/Mirzaboyev_Azizbek" target="_blank" rel="noreferrer"><span className="contact-icon"><Send size={18}/></span><span><small>Telegram</small><b>@Mirzaboyev_Azizbek</b></span></a>
              <button className="btn ghost copy-btn" onClick={copyEmail}><Copy size={15}/>{t.copyEmail}</button>
              <a className="social-link" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GitHub (havolani tahrirlang)</a>
            </div>
            <div className="contact-card"><h3>{t.sendMessage}</h3>
              <form onSubmit={submitForm}>
                <div className="form-grid">
                  <div className="field"><label htmlFor="name">{t.yourName}</label><input id="name" name="name" required maxLength="100" placeholder={t.namePlaceholder}/></div>
                  <div className="field"><label htmlFor="email">{t.yourEmail}</label><input id="email" name="email" type="email" required maxLength="160" placeholder={t.emailPlaceholder}/></div>
                  <div className="field full"><label htmlFor="subject">{t.subject}</label><select id="subject" name="subject">{t.subjectOptions.map(s => <option key={s}>{s}</option>)}</select></div>
                  <div className="field full"><label htmlFor="message">{t.message}</label><textarea id="message" name="message" required maxLength="3000" placeholder={t.messagePlaceholder}/></div>
                  <div className="field hidden-field" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex="-1" autoComplete="off"/></div>
                  <div className="field full"><button className="btn primary submit-btn" type="submit" disabled={sending}>{sending ? t.sending : t.send} <ArrowUpRight size={17}/></button></div>
                </div>
                <p className="form-note"><CheckCircle2 size={14}/>{t.formNote}</p>
                {notice && <p className={`notice ${notice === t.success || notice === t.copied ? 'ok' : 'bad'}`} role="status">{notice}</p>}
              </form>
            </div>
          </div>
        </div></section>
      </main>
      <footer className="footer"><div className="wrap footer-inner"><span>© {new Date().getFullYear()} Mirzaboyev Azizbek. {t.rights}</span><a className="accent" href="#top">{t.back}</a></div></footer>
    </div>
  );
}

export default App;
