import "./dashboard-home.css";

/* ---------------- Icons ---------------- */

function WaveMark({ className = "logo-mark" }) {
  return (
    <svg className={className} viewBox="0 0 64 40" fill="none" aria-hidden="true">
      <path
        d="M2 22c5-9 11-9 16 0s11 9 16 0 11-9 16 0"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <path
        d="M2 31c5-9 11-9 16 0s11 9 16 0 11-9 16 0"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinecap="round"
        opacity="0.45"
      />
    </svg>
  );
}

function PulseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path d="M3 12h4l2-6 4 12 2-6h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="8.6" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 12.3l2.6 2.6L16 9.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <circle cx="6" cy="7" r="2.1" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="18" cy="7" r="2.1" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="18" r="2.1" stroke="currentColor" strokeWidth="1.6" />
      <path d="M7.7 8.4L10.4 16M16.3 8.4L13.6 16M8.1 7H15.9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none">
      <path
        d="M12 19.5s-6.8-4.3-9-8.3C1.3 7.7 2.3 4.7 5.2 4c2-.5 3.8.4 4.8 2 .1.2.3.2.4 0 1-1.6 2.8-2.5 4.8-2 2.9.7 3.9 3.7 2.2 7.2-2.2 4-9 8.3-9 8.3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ---------------- Content ---------------- */

const features = [
  {
    icon: <PulseIcon />,
    chip: "chip-teal",
    title: "Emotional, not just statistical",
    text: "Connect through location and participation — not spreadsheets and charts alone.",
  },
  {
    icon: <CheckCircleIcon />,
    chip: "chip-amber",
    title: "Ordinary actions, real impact",
    text: "Spot cleanups, documentation, and learning all become ecological contributions.",
  },
  {
    icon: <NetworkIcon />,
    chip: "chip-navy",
    title: "Community + technology",
    text: "Citizen science and local ecological knowledge, working together — not replacing one another.",
  },
  {
    icon: <HeartIcon />,
    chip: "chip-rose",
    title: "Care that's affordable",
    text: "Care can't be a specialized visit. We build for accessibility and dignity first.",
  },
];

const traceCards = [
  ["Coral condition", "56 items", "teal"],
  ["Mangrove update", "43 entries", "navy"],
  ["Fisheries", "64 reports", "amber"],
  ["Oral history", "31 stories", "rose"],
];

const educationCards = [
  ["Mangrove ecosystems", "12 min", "navy"],
  ["Reading tide charts", "8 min", "teal"],
  ["Oral histories", "15 min", "rose"],
  ["Youth missions", "10 min", "amber"],
];

const steps = [
  ["1", "Join your community", "Sign up and connect to your nearest coastal community — see what's already being logged nearby."],
  ["2", "Log what you see", "Snap a photo, record a story, or note a sighting. It takes under a minute to add to the shared archive."],
  ["3", "Watch the impact grow", "Your contribution joins the collective — visible alongside everyone else's small acts of care."],
];

/* ---------------- Building blocks ---------------- */

function Logo() {
  return (
    <div className="logo">
      <WaveMark />
      <span>TideTrace</span>
    </div>
  );
}

function Button({ children, primary = false, onDark = false, onClick }) {
  const cls = primary ? "btn btn-primary" : onDark ? "btn btn-outline-dark" : "btn btn-outline";
  return (
    <button className={cls} onClick={onClick}>
      {children}
    </button>
  );
}

function MiniDashboard() {
  return (
    <div className="mini-wrap">
      <div className="mini-dashboard">
        <div className="mini-top">
          <span className="dot" />
          <span className="dot" />
          <span className="dot" />
        </div>
        <div className="mini-body">
          <div className="impact-box">
            <strong>This month's impact</strong>
            <small>Ordinary acts, made visible</small>
          </div>
          <div className="mini-stats">
            <span><b>128</b><small>traces</small></span>
            <span><b>3.2t</b><small>material</small></span>
            <span><b>14</b><small>days</small></span>
            <span><b>640</b><small>voices</small></span>
          </div>
          <div className="mini-row">
            <i className="swatch swatch-teal" />
            <div><b>Beach patch near St. Louis</b><small>4 min · New trace</small></div>
          </div>
          <div className="mini-row">
            <i className="swatch swatch-amber" />
            <div><b>Mangrove seedlings planted</b><small>2 hours · Shared</small></div>
          </div>
        </div>
      </div>
      <div className="float-note top-note">＋ New trace<br /><small>Just now</small></div>
      <div className="float-note bottom-note">✓ Trace verified<br /><small>Community check</small></div>
    </div>
  );
}

function CardGrid({ cards }) {
  return (
    <div className="card-grid">
      {cards.map(([title, meta, tone]) => (
        <div className="data-card" key={title}>
          <div className={`data-color data-${tone}`} />
          <b>{title}</b>
          <small>{meta}</small>
        </div>
      ))}
    </div>
  );
}

/* ---------------- Page ---------------- */

/**
 * DashboardHome
 * The signed-in home/dashboard. It doesn't manage auth itself — it just
 * calls onLogout() when the person logs out, and the parent (App.jsx)
 * decides that means going back to the login screen.
 */
function DashboardHome({ onLogout }) {
  return (
    <main className="dashboard-home">
      <header className="nav">
        <div className="container nav-inner">
          <Logo />
          <div className="nav-actions">
            <button className="login" onClick={() => onLogout?.()}>
              Log out
            </button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="bg-waves" aria-hidden="true">
          <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path className="wave wave-1" d="M0,224 C240,280 480,168 720,192 C960,216 1200,288 1440,240 L1440,320 L0,320 Z" />
            <path className="wave wave-2" d="M0,256 C240,192 480,272 720,240 C960,208 1200,160 1440,208 L1440,320 L0,320 Z" />
          </svg>
        </div>

        <div className="container hero-inner">
          <div className="hero-copy">
            <span className="eyebrow eyebrow-dark">Welcome back</span>
            <h1>Every small act becomes <em>visible</em> care for the sea.</h1>
            <p>
              TideTrace turns ordinary sightings, clean-ups, and stories from
              coastal communities into a living archive — closing the gap
              between people and the places we're helping protect.
            </p>
            <div className="hero-buttons">
              <Button primary>Log a new trace</Button>
              <Button onDark>See how it works</Button>
            </div>
            <div className="community">
              <div className="people">
                <span /><span /><span /><span />
              </div>
              Joined by coastal communities across the Visayas
            </div>
          </div>
          <MiniDashboard />
        </div>

        <div className="shore" aria-hidden="true">
          <svg viewBox="0 0 1536 60" preserveAspectRatio="none">
            <path d="M0 30 C 160 6, 280 54, 440 30 S 720 6, 880 30 S 1160 54, 1320 30 S 1480 6, 1536 30 L1536 60 L0 60 Z" />
          </svg>
        </div>
      </section>

      <section className="question section">
        <div className="narrow">
          <span className="eyebrow">The core question</span>
          <h2>How do we help people care more — and do more —<br />for each other and the planet?</h2>
          <p>
            Climate change and biodiversity loss aren't the only crises we
            face — apathy is too. Not because people don't care, but because
            they feel unconnected, powerless, and distant. TideTrace exists
            to close that gap, one visible act at a time.
          </p>
        </div>
      </section>

      <section className="different section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow eyebrow-amber">What makes it different</span>
            <h2>Built on people, not just data</h2>
            <p>TideTrace sits at the intersection of citizen science, social participation, and environmental education — rooted in local knowledge.</p>
          </div>
          <div className="features">
            {features.map((f) => (
              <article className="feature" key={f.title}>
                <div className={`feature-icon ${f.chip}`}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="features-detail section">
        <div className="container">
          <div className="detail-row">
            <div className="detail-copy">
              <span className="eyebrow eyebrow-teal">Feature 01 — Trace</span>
              <h2>Turn what you see into shared memory</h2>
              <p>Upload biodiversity sightings, pollution observations, coral conditions, mangrove updates, and oral histories. Every contribution becomes part of a living archive — a biodiversity map, a memory bank, and data the whole community can see.</p>
              <ul>
                <li>Photo, video, and voice-story uploads</li>
                <li>Tagged by category and auto-located</li>
                <li>Builds a shared community archive over time</li>
              </ul>
              <Button primary>Explore Traces</Button>
            </div>
            <CardGrid cards={traceCards} />
          </div>

          <div className="detail-row reverse">
            <CardGrid cards={educationCards} />
            <div className="detail-copy">
              <span className="eyebrow eyebrow-teal">Feature 02 — Education</span>
              <h2>Learn the sea in your own language</h2>
              <p>Short, community-rooted modules on species, local names, marine ecosystems, and conservation challenges — built with oral histories, not just textbooks.</p>
              <ul>
                <li>Bite-sized lessons, 8–15 minutes each</li>
                <li>Local names shown alongside scientific ones</li>
                <li>Youth missions and conservation challenges</li>
              </ul>
              <Button primary>Browse Education</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="container">
          <div className="section-heading light">
            <span className="eyebrow eyebrow-amber">Real-time impact</span>
            <h2>What the community has already logged</h2>
            <p>Numbers that grow because ordinary people showed up — visible, shared, and real.</p>
          </div>
          <div className="impact-stats">
            <div><strong>128</strong><span>Species documented</span></div>
            <div><strong>3.2 t</strong><span>Waste removed</span></div>
            <div><strong>640</strong><span>Mangroves funded</span></div>
            <div><strong>14</strong><span>Communities supported</span></div>
          </div>
        </div>
      </section>

      <section className="steps section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow eyebrow-amber">Getting started</span>
            <h2>Three steps to your first trace</h2>
          </div>
          <div className="step-grid">
            {steps.map(([n, title, text]) => (
              <div className="step" key={n}>
                <span className="step-number">{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="quote">
        <div className="container">
          <blockquote>"Small acts have large impact. Through many small actions, the collective becomes visible."</blockquote>
          <span>— TideTrace vision statement</span>
        </div>
      </section>

      <section className="cta section">
        <div className="container">
          <div className="cta-box">
            <div className="bg-waves cta-waves" aria-hidden="true">
              <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path className="wave wave-1" d="M0,224 C240,280 480,168 720,192 C960,216 1200,288 1440,240 L1440,320 L0,320 Z" />
              </svg>
            </div>
            <h2>Your next trace takes less than a minute.</h2>
            <p>Keep the archive growing — log a sighting, a cleanup, or a story from your community.</p>
            <div className="hero-buttons center">
              <Button primary>Log a new trace</Button>
              <Button onDark>Learn more</Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <Logo />
          <p>Every ripple counts. Built with coastal communities across the Visayas.</p>
          <div className="footer-links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
          <span className="footer-copy">© {new Date().getFullYear()} TideTrace</span>
        </div>
      </footer>
    </main>
  );
}

export default DashboardHome;
