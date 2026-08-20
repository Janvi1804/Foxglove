// All main sections composed here

function Nav() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="logo" onClick={() => setMenuOpen(false)}>
          <span className="logo-mark">F</span>
          <span>Foxglove</span>
        </a>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          <a href="#how" onClick={() => setMenuOpen(false)}>How it works</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="#signup" className="btn ghost nav-cta" onClick={() => setMenuOpen(false)}>
            Join waitlist
          </a>
        </div>
        <button
          type="button"
          className={`nav-hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}

function Hero({ stickerDensity }) {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <div className="hero-tagline">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 12 L 20 12 M 14 6 L 20 12 L 14 18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/></svg>
            <span>the pocket notebook, but softer</span>
          </div>
          <h1 className="hero-headline">
            Notes that <span className="accent">actually feel</span> like yours.
          </h1>
          <p className="hero-sub">
            Foxglove is a handwritten notes app for grocery lists, dumb little thoughts, road trip maps, and everything in between. Stickers included. Perfection not required.
          </p>
          <div className="hero-ctas">
            <a href="#signup" className="btn">Get early access ?</a>
            <a href="#gallery" className="btn ghost">See the wall</a>
          </div>
          <p className="hero-social-proof">
            ? 12,483 folks already on the list
          </p>
        </div>
        <div className="hero-stage-wrap">
          <StickerStage density={stickerDensity} />
          <div className="hero-scribble">
            drag em around!
          </div>
          <svg className="hero-scribble-arrow" width="60" height="80" viewBox="0 0 60 80" fill="none">
            <path d="M10 10 Q 40 30, 20 70" stroke="#a86868" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="2 4"/>
            <path d="M12 62 L 20 70 L 26 60" stroke="#a86868" strokeWidth="2" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

function Features() {
  const feats = [
    { icon: "?", title: "Pencil-first", body: "Every note starts as ink or graphite. Type only if you must. Yes, it feels weird at first. Yes, you'll get over it." },
    { icon: "?", title: "Stickers & tape", body: "A whole drawer of washi tape, doodled fruit, chunky arrows, and vaguely-illegible mood stamps. Slap them anywhere." },
    { icon: "?", title: "Quietly synced", body: "Notes drift between your phone and desk gently, in the background. No push notifications. No AI helper. On purpose." },
  ];
  return (
    <section id="features" className="features">
      <div className="container">
        <span className="section-eyebrow">what's inside</span>
        <h2 className="section-title">Three small ideas,<br/>one cozy notebook.</h2>
        <p className="section-sub">We built Foxglove because every notes app started to feel like a productivity dashboard. This one wants you to doodle in the margin.</p>
        <div className="features-grid">
          {feats.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-body">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const POLAROIDS = [
  { caption: "grocery list", photoA: "#c98a8a", photoB: "#a86868", label: "list_042", back: { title: "sunday shop", body: "sourdough / honey / pears\nfeta / dill / good butter\n(the one with sea salt)", meta: "may 12 · 3:04pm" } },
  { caption: "road trip", photoA: "#8ba888", photoB: "#6a8f6a", label: "map_007", back: { title: "big sur run", body: "9am start · gas at Salinas\nlunch @ Nepenthe\nsunset — Bixby bridge!", meta: "aug 3 · morning" } },
  { caption: "morning thoughts", photoA: "#e8c66a", photoB: "#c9a648", label: "journal_119", back: { title: "5:42 am", body: "woke up before the alarm again. the kitchen light is the good kind of yellow. tea is steeping.", meta: "sep 21 · dawn" } },
  { caption: "the dog", photoA: "#d4a880", photoB: "#a67e56", label: "polaroid_888", back: { title: "otis, aged 7", body: "still refuses to walk past the mailbox. we accept him as he is.", meta: "aug 30 · park" } },
  { caption: "recipe", photoA: "#c98a8a", photoB: "#e8c66a", label: "recipe_014", back: { title: "sunday soup", body: "onion, garlic, one big leek\nchicken stock · white beans\nsalt too much. then more.", meta: "oct 6 · kitchen" } },
  { caption: "little wins", photoA: "#8ba888", photoB: "#c98a8a", label: "list_209", back: { title: "this week", body: "? finished the book\n? called mom\n? walked 3 days in a row\n? …the plants (sorry)", meta: "nov 4 · friday" } },
];

function Polaroids() {
  const [flipped, setFlipped] = React.useState({});
  return (
    <section className="polaroids-section">
      <div className="container">
        <span className="section-eyebrow">flip them over</span>
        <h2 className="section-title">A shoebox<br/>of little moments.</h2>
        <p className="section-sub">Every polaroid is a real note. Click one and it flips over — that's what's on the back, exactly as it was written.</p>
        <div className="polaroid-wall">
          {POLAROIDS.map((p, i) => (
            <div
              key={i}
              className={`polaroid ${flipped[i] ? "flipped" : ""}`}
              onClick={() => setFlipped(f => ({ ...f, [i]: !f[i] }))}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setFlipped(f => ({ ...f, [i]: !f[i] })); } }}
            >
              <div className="polaroid-face" style={{ "--photo-a": p.photoA, "--photo-b": p.photoB }}>
                <div className="polaroid-photo" style={{ "--photo-a": p.photoA, "--photo-b": p.photoB }}>
                  <span className="photo-label">{p.label}</span>
                </div>
                <div className="polaroid-caption">{p.caption}</div>
              </div>
              <div className="polaroid-face polaroid-back">
                <div className="back-title">{p.back.title}</div>
                <div className="back-body">{p.back.body}</div>
                <div className="back-meta">{p.back.meta}</div>
              </div>
              <span className="flip-hint">click to flip</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { title: "Grab a page", body: "Open a fresh sheet. Lined, dotted, blank, or a folded envelope — pick your paper." },
    { title: "Scribble anything", body: "Words, arrows, tiny maps, a shopping list, a whole mood board. Pencil, ink, or marker." },
    { title: "Slap on stickers", body: "Add tape, doodled fruit, chunky arrows. Rearrange until it feels right. Save. Done." },
  ];
  return (
    <section id="how" className="howitworks">
      <div className="container">
        <span className="section-eyebrow">three steps, honest</span>
        <h2 className="section-title">How it goes<br/>in practice.</h2>
        <div className="steps">
          {steps.map((s, i) => (
            <div className="step" key={i}>
              <div className="step-num">{i + 1}</div>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-body">{s.body}</p>
              {i < 2 && (
                <svg className="step-arrow" width="80" height="40" viewBox="0 0 80 40" fill="none">
                  <path d="M4 20 Q 40 4, 70 20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="3 4"/>
                  <path d="M60 12 L 72 20 L 62 30" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const GALLERY_CARDS = [
  { caption: "beach day", author: "@lena", likes: 128, mA: "#e9c8c4", mB: "#c98a8a", ar: "3/4" },
  { caption: "reading list '26", author: "@juno", likes: 84, mA: "#c9d8b0", mB: "#8ba888", ar: "4/5" },
  { caption: "kitchen notes", author: "@sam", likes: 202, mA: "#f0d896", mB: "#e8c66a", ar: "1/1" },
  { caption: "the cat", author: "@rowan", likes: 341, mA: "#d4b8a8", mB: "#a58876", ar: "3/4" },
  { caption: "brainstorm", author: "@ines", likes: 67, mA: "#e9c8c4", mB: "#c98a8a", ar: "4/5" },
  { caption: "songs for the drive", author: "@theo", likes: 156, mA: "#8ba888", mB: "#6a8f6a", ar: "1/1" },
  { caption: "birthday plan", author: "@mira", likes: 92, mA: "#f0d896", mB: "#c98a8a", ar: "3/4" },
  { caption: "small joys", author: "@oli", likes: 231, mA: "#c9d8b0", mB: "#8ba888", ar: "4/5" },
  { caption: "moving list", author: "@ash", likes: 45, mA: "#d4b8a8", mB: "#c98a8a", ar: "1/1" },
  { caption: "garden diary", author: "@wren", likes: 178, mA: "#8ba888", mB: "#c9a648", ar: "3/4" },
  { caption: "poem draft", author: "@lin", likes: 88, mA: "#e9c8c4", mB: "#e8c66a", ar: "4/5" },
  { caption: "sunday plans", author: "@remy", likes: 114, mA: "#c98a8a", mB: "#a86868", ar: "1/1" },
];

function Gallery() {
  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <span className="section-eyebrow">the community wall</span>
        <h2 className="section-title">12 pages<br/>from other folks.</h2>
        <p className="section-sub">Real notes shared to the public wall this week. Hover to unstick. Every one made by hand, in the app.</p>
        <div className="gallery">
          {GALLERY_CARDS.map((c, i) => (
            <div key={i} className="gallery-card">
              <div className="gallery-media" style={{ "--m-a": c.mA, "--m-b": c.mB, "--ar": c.ar }}>
                <div className="fake-writing"></div>
              </div>
              <div className="gallery-caption">{c.caption}</div>
              <div className="gallery-meta">
                <span>{c.author}</span>
                <span className="heart">? {c.likes}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const quotes = [
    { text: "I switched from three different apps to Foxglove. My grocery lists have never looked so wonky and I love them.", name: "Priya Rao", role: "chronic list-maker", initial: "P", color: "var(--rose)" },
    { text: "The stickers alone. Absolutely unreasonable amount of joy from a small paper heart with tape on it.", name: "Marcus Bell", role: "writer, brooklyn", initial: "M", color: "var(--sage)" },
    { text: "I stopped using the Notes app on my phone entirely. This one respects the fact that my thoughts are messy.", name: "Eun-ji Park", role: "graphic designer", initial: "E", color: "var(--butter)" },
  ];
  return (
    <section className="testimonials">
      <div className="container">
        <span className="section-eyebrow">people say</span>
        <h2 className="section-title">Kind words<br/>from early folks.</h2>
        <div className="quote-grid">
          {quotes.map((q, i) => (
            <div key={i} className="quote-card">
              <div className="quote-mark">"</div>
              <p className="quote-text">{q.text}</p>
              <div className="quote-author">
                <div className="avatar" style={{ background: q.color }}>{q.initial}</div>
                <div>
                  <div className="author-name">{q.name}</div>
                  <div className="author-role">{q.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <span className="section-eyebrow">two plans, that's it</span>
        <h2 className="section-title">Pick your paper.</h2>
        <div className="plans">
          <div className="plan">
            <div className="plan-name">Pocket</div>
            <div className="plan-tag">for the casually scribbly</div>
            <div className="plan-price">Free<span className="per"> / forever</span></div>
            <ul className="plan-features">
              <li>Up to 40 notes</li>
              <li>3 sticker sheets</li>
              <li>Sync across 2 devices</li>
              <li>Community wall access</li>
              <li>Handwritten OCR search</li>
            </ul>
            <a href="#signup" className="btn ghost">Start scribbling</a>
          </div>
          <div className="plan featured">
            <div className="badge">most folks</div>
            <div className="plan-name">Shoebox</div>
            <div className="plan-tag">everything, plus room</div>
            <div className="plan-price">$4<span className="per"> / month</span></div>
            <ul className="plan-features">
              <li>Unlimited notes & pages</li>
              <li>Every sticker sheet (28+)</li>
              <li>Sync across all devices</li>
              <li>Private shoeboxes & albums</li>
              <li>Export to real paper (mail)</li>
              <li>Early access to new tools</li>
            </ul>
            <a href="#signup" className="btn">Get the shoebox</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Signup() {
  const [form, setForm] = React.useState({ name: "", email: "", about: "", platform: "iOS" });
  const [submitted, setSubmitted] = React.useState(false);
  const [waitNum, setWaitNum] = React.useState(0);

  const submit = (e) => {
    e.preventDefault();
    if (!form.email) return;
    setSubmitted(true);
    // animate number
    const target = 12484 + Math.floor(Math.random() * 200);
    let cur = 0;
    const step = () => {
      cur += Math.max(1, Math.floor((target - cur) / 6));
      if (cur >= target) {
        setWaitNum(target);
      } else {
        setWaitNum(cur);
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  };

  return (
    <section id="signup" className="signup">
      <div className="container signup-inner">
        <span className="section-eyebrow">get on the list</span>
        <h2 className="section-title">Come scribble with us.</h2>
        <p className="section-sub" style={{ margin: "0 auto" }}>
          We're rolling out invites in small batches so early folks get a real onboarding, not a form letter.
        </p>

        <div className="form-card">
          {!submitted ? (
            <form onSubmit={submit}>
              <div className="field">
                <label>your name</label>
                <input
                  type="text"
                  placeholder="what should we call you?"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
              </div>
              <div className="field">
                <label>your email *</label>
                <input
                  type="email"
                  required
                  placeholder="you@somewhere.nice"
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <div className="field">
                <label>what would you write about?</label>
                <input
                  type="text"
                  placeholder="grocery lists, doodles, big feelings..."
                  value={form.about}
                  onChange={e => setForm({ ...form, about: e.target.value })}
                />
              </div>
              <div className="field">
                <label>where do you write?</label>
                <div className="platform-chips">
                  {["iOS", "Android", "Web"].map(p => (
                    <button
                      type="button"
                      key={p}
                      className={`chip ${form.platform === p ? "active" : ""}`}
                      onClick={() => setForm({ ...form, platform: p })}
                    >{p}</button>
                  ))}
                </div>
              </div>
              <button type="submit" className="btn">Save my spot ?</button>
            </form>
          ) : (
            <div className="waitlist-reveal">
              <div className="num-label">you're #</div>
              <div className="num">{waitNum.toLocaleString()}</div>
              <div className="num-label">on the list</div>
              <div className="num-msg">
                thanks {form.name || "friend"} — <br/>we'll write soon ?
              </div>
              <div style={{ marginTop: 20, fontSize: 14, color: "var(--ink-soft)" }}>
                confirmation sent to <b>{form.email}</b>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  { q: "Do I need to have nice handwriting?", a: "Absolutely not — messy is the point. The OCR reads even the most chaotic scribbles, and we designed the whole app to make bad handwriting look intentional." },
  { q: "Is there an AI writing helper?", a: "No, and there won't be. Foxglove is a place to make things by hand. If we ever add anything smart, it'll be a search box, not a co-author." },
  { q: "How does it sync?", a: "Quietly, in the background, over end-to-end encrypted channels. Your notes are yours — we can't read them and we don't want to." },
  { q: "Can I export or print my notes?", a: "Yes. Export as PDF, PNG, or — on the Shoebox plan — we'll actually mail you a real printed booklet twice a year, on cream paper." },
  { q: "When can I use it?", a: "We're rolling out invites in batches through late 2026. Join the waitlist and you'll get a real handwritten reply (from a human) when your spot opens up." },
];

function FAQ() {
  const [open, setOpen] = React.useState(0);
  return (
    <section id="faq" className="faq">
      <div className="container">
        <span className="section-eyebrow">questions?</span>
        <h2 className="section-title">Answers, honestly.</h2>
        <div className="faq-list">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`faq-item ${open === i ? "open" : ""}`}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <div className="faq-q">
                <span>{item.q}</span>
                <span className="faq-toggle">+</span>
              </div>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo" style={{ color: "var(--cream)" }}>
              <span className="logo-mark">F</span>
              <span>Foxglove</span>
            </div>
            <p>A small handwritten notes app for people who like paper. Built quietly in Oakland, CA and Lisbon, PT.</p>
          </div>
          <div className="footer-col">
            <h5>Product</h5>
            <ul className="footer-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#gallery">Community wall</a></li>
              <li><a href="#">Changelog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Company</h5>
            <ul className="footer-links">
              <li><a href="#">Story</a></li>
              <li><a href="#">Blog (paper zine)</a></li>
              <li><a href="#">Press kit</a></li>
              <li><a href="#">Careers (2 open)</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Help</h5>
            <ul className="footer-links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#">Contact a human</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-fine">
          <span>© 2026 Foxglove Paper Co. — made with pencils, tea, and a bit of tape.</span>
          <span className="socials">
            <a href="#">instagram</a>
            <a href="#">tumblr</a>
            <a href="#">rss</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Features, Polaroids, HowItWorks, Gallery, Testimonials, Pricing, Signup, FAQ, Footer });
