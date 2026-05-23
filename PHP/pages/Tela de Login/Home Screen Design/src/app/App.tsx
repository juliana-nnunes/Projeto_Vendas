import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const NAVY = "#0A1931";
const INDIGO = "#3730A3";
const AQUA = "#2DD4BF";
const WHITE = "#FFFFFF";

const styles = {
  navbar: {
    backgroundColor: NAVY,
    borderBottom: `3px solid ${AQUA}`,
  },
  navLink: {
    color: "rgba(255,255,255,0.75)",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: "0.9rem",
    letterSpacing: "0.03em",
    transition: "color 0.2s",
  },
  brandText: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 800,
    fontSize: "1.4rem",
    color: WHITE,
    letterSpacing: "-0.02em",
  },
  brandAccent: { color: AQUA },
  hero: {
    background: `linear-gradient(135deg, ${NAVY} 0%, ${INDIGO} 60%, #1e1b6e 100%)`,
    minHeight: "92vh",
    display: "flex",
    alignItems: "center",
    position: "relative" as const,
    overflow: "hidden",
  },
  heroOrb1: {
    position: "absolute" as const,
    top: "-80px",
    right: "-80px",
    width: "420px",
    height: "420px",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${AQUA}33 0%, transparent 70%)`,
    pointerEvents: "none" as const,
  },
  heroOrb2: {
    position: "absolute" as const,
    bottom: "-120px",
    left: "-60px",
    width: "340px",
    height: "340px",
    borderRadius: "50%",
    background: `radial-gradient(circle, ${INDIGO}55 0%, transparent 70%)`,
    pointerEvents: "none" as const,
  },
  heroTag: {
    display: "inline-block",
    backgroundColor: `${AQUA}22`,
    border: `1px solid ${AQUA}66`,
    color: AQUA,
    borderRadius: "999px",
    padding: "4px 14px",
    fontSize: "0.78rem",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase" as const,
    marginBottom: "1.4rem",
    fontFamily: "'Inter', sans-serif",
  },
  heroTitle: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 800,
    fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
    color: WHITE,
    lineHeight: 1.12,
    letterSpacing: "-0.03em",
    marginBottom: "1.4rem",
  },
  heroTitleAccent: { color: AQUA },
  heroSubtitle: {
    color: "rgba(255,255,255,0.65)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "1.1rem",
    lineHeight: 1.75,
    maxWidth: "500px",
    marginBottom: "2.4rem",
  },
  btnPrimary: {
    backgroundColor: AQUA,
    border: "none",
    color: NAVY,
    fontWeight: 700,
    fontFamily: "'Inter', sans-serif",
    padding: "12px 28px",
    borderRadius: "8px",
    fontSize: "0.95rem",
    letterSpacing: "0.01em",
    transition: "transform 0.15s, box-shadow 0.15s",
    cursor: "pointer",
  },
  btnOutline: {
    backgroundColor: "transparent",
    border: `2px solid rgba(255,255,255,0.35)`,
    color: WHITE,
    fontWeight: 600,
    fontFamily: "'Inter', sans-serif",
    padding: "11px 26px",
    borderRadius: "8px",
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "border-color 0.2s, color 0.2s",
  },
  heroDashboard: {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "16px",
    padding: "28px",
    backdropFilter: "blur(12px)",
  },
  miniCard: {
    background: "rgba(255,255,255,0.07)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "10px",
    padding: "14px 18px",
  },
  sectionTitle: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 800,
    fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
    color: NAVY,
    letterSpacing: "-0.025em",
    lineHeight: 1.2,
  },
  sectionSubtitle: {
    color: "#5B6880",
    fontFamily: "'Inter', sans-serif",
    fontSize: "1rem",
    lineHeight: 1.7,
  },
  featuresSection: {
    backgroundColor: "#F7F9FC",
    padding: "96px 0",
  },
  featureCard: {
    backgroundColor: WHITE,
    border: `1px solid rgba(0,0,0,0.07)`,
    borderRadius: "14px",
    padding: "32px 28px",
    height: "100%",
    transition: "transform 0.2s, box-shadow 0.2s",
    cursor: "default",
  },
  iconBox: {
    width: "52px",
    height: "52px",
    borderRadius: "12px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "18px",
    fontSize: "1.5rem",
  },
  statsSection: {
    background: `linear-gradient(135deg, ${INDIGO} 0%, ${NAVY} 100%)`,
    padding: "80px 0",
  },
  statNumber: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 800,
    fontSize: "clamp(2rem, 4vw, 3rem)",
    color: AQUA,
    letterSpacing: "-0.03em",
  },
  statLabel: {
    color: "rgba(255,255,255,0.6)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    letterSpacing: "0.05em",
    textTransform: "uppercase" as const,
    fontWeight: 500,
  },
  testimonialSection: {
    backgroundColor: WHITE,
    padding: "96px 0",
  },
  testimonialCard: {
    border: `1px solid rgba(0,0,0,0.08)`,
    borderRadius: "14px",
    padding: "32px",
    height: "100%",
    position: "relative" as const,
  },
  quote: {
    position: "absolute" as const,
    top: "24px",
    right: "24px",
    fontSize: "3rem",
    color: `${AQUA}33`,
    fontFamily: "Georgia, serif",
    lineHeight: 1,
  },
  avatar: {
    width: "44px",
    height: "44px",
    borderRadius: "50%",
    objectFit: "cover" as const,
    border: `2px solid ${AQUA}`,
  },
  ctaSection: {
    background: `linear-gradient(135deg, ${AQUA}15 0%, ${INDIGO}10 100%)`,
    border: `1px solid ${AQUA}33`,
    borderRadius: "20px",
    padding: "64px 48px",
    margin: "80px auto",
    maxWidth: "860px",
    textAlign: "center" as const,
  },
  footer: {
    backgroundColor: NAVY,
    padding: "64px 0 32px",
    borderTop: `3px solid ${INDIGO}`,
  },
  footerBrand: {
    fontFamily: "'Sora', sans-serif",
    fontWeight: 800,
    color: WHITE,
    fontSize: "1.3rem",
    letterSpacing: "-0.02em",
  },
  footerText: {
    color: "rgba(255,255,255,0.45)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.85rem",
    lineHeight: 1.6,
    maxWidth: "280px",
  },
  footerHeading: {
    color: "rgba(255,255,255,0.85)",
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,
    fontSize: "0.85rem",
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    marginBottom: "14px",
  },
  footerLink: {
    color: "rgba(255,255,255,0.45)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.88rem",
    textDecoration: "none",
    display: "block",
    marginBottom: "8px",
    transition: "color 0.2s",
  },
  footerDivider: {
    borderColor: "rgba(255,255,255,0.1)",
    margin: "40px 0 20px",
  },
  footerCopy: {
    color: "rgba(255,255,255,0.3)",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.8rem",
  },
};

const features = [
  {
    icon: "🚀",
    title: "Alta Performance",
    desc: "Infraestrutura otimizada para cargas de trabalho exigentes, com latência mínima e disponibilidade de 99,99%.",
    color: `${INDIGO}18`,
    iconColor: INDIGO,
  },
  {
    icon: "🔒",
    title: "Segurança Avançada",
    desc: "Criptografia de ponta a ponta, autenticação multifator e conformidade com as normas LGPD e ISO 27001.",
    color: `${AQUA}18`,
    iconColor: "#0891B2",
  },
  {
    icon: "📊",
    title: "Analytics em Tempo Real",
    desc: "Dashboards interativos e relatórios personalizados para tomar decisões com dados precisos e atualizados.",
    color: `${NAVY}12`,
    iconColor: NAVY,
  },
  {
    icon: "🌐",
    title: "Integração Global",
    desc: "Conecte-se a mais de 200 APIs e plataformas líderes de mercado com poucos cliques, sem código.",
    color: `${AQUA}18`,
    iconColor: "#0891B2",
  },
  {
    icon: "⚡",
    title: "Automação Inteligente",
    desc: "Fluxos de trabalho automatizados com IA para eliminar tarefas repetitivas e aumentar a produtividade.",
    color: `${INDIGO}18`,
    iconColor: INDIGO,
  },
  {
    icon: "🤝",
    title: "Suporte 24/7",
    desc: "Equipe especializada disponível a qualquer hora, com tempo de resposta médio de 4 minutos.",
    color: `${NAVY}12`,
    iconColor: NAVY,
  },
];

const stats = [
  { number: "98%", label: "Satisfação dos Clientes" },
  { number: "15M+", label: "Usuários Ativos" },
  { number: "140+", label: "Países Atendidos" },
  { number: "4min", label: "Tempo Médio de Resposta" },
];

const testimonials = [
  {
    text: "A plataforma transformou completamente a forma como gerenciamos nossas operações. Reduzimos custos em 40% no primeiro trimestre.",
    name: "Ana Rodrigues",
    role: "CTO — Fintech Brasil",
    img: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&auto=format",
  },
  {
    text: "Implementação rápida, suporte excepcional e resultados visíveis desde o primeiro dia. Não consigo imaginar trabalhar sem ela.",
    name: "Carlos Mendes",
    role: "Diretor de Inovação — LogiTech",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&auto=format",
  },
  {
    text: "A escalabilidade é impressionante. Crescemos 300% em usuários e a plataforma acompanhou sem nenhum incidente.",
    name: "Marina Costa",
    role: "CEO — StartupHub",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&auto=format",
  },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  return (
    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg sticky-top" style={styles.navbar}>
        <div className="container">
          <a className="navbar-brand" href="#" style={styles.brandText}>
            Nex<span style={styles.brandAccent}>us</span>
          </a>
          <button
            className="navbar-toggler border-0"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: WHITE }}
          >
            <span style={{ fontSize: "1.5rem" }}>{menuOpen ? "✕" : "☰"}</span>
          </button>
          <div className={`collapse navbar-collapse ${menuOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto gap-1">
              {["Produto", "Soluções", "Preços", "Clientes", "Blog"].map((item) => (
                <li key={item} className="nav-item">
                  <a className="nav-link px-3" href="#" style={styles.navLink}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="d-flex gap-2 mt-2 mt-lg-0">
              <button
                className="btn"
                style={{ ...styles.btnOutline, padding: "8px 20px", fontSize: "0.88rem" }}
              >
                Entrar
              </button>
              <button
                className="btn"
                style={{ ...styles.btnPrimary, padding: "8px 20px", fontSize: "0.88rem" }}
              >
                Começar grátis
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroOrb1} />
        <div style={styles.heroOrb2} />
        <div className="container py-5">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div style={styles.heroTag}>✦ Plataforma Empresarial</div>
              <h1 style={styles.heroTitle}>
                Escale seu negócio com{" "}
                <span style={styles.heroTitleAccent}>tecnologia</span>{" "}
                de próxima geração
              </h1>
              <p style={styles.heroSubtitle}>
                Unifique dados, automatize processos e tome decisões mais inteligentes.
                Tudo em uma plataforma segura, rápida e fácil de usar.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <button
                  className="btn"
                  style={styles.btnPrimary}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-2px)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = `0 8px 24px ${AQUA}55`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                  }}
                >
                  Começar gratuitamente →
                </button>
                <button
                  className="btn"
                  style={styles.btnOutline}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = AQUA;
                    (e.currentTarget as HTMLButtonElement).style.color = AQUA;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.35)";
                    (e.currentTarget as HTMLButtonElement).style.color = WHITE;
                  }}
                >
                  ▶ Ver demonstração
                </button>
              </div>
              <div className="d-flex align-items-center gap-3 mt-4">
                <div className="d-flex" style={{ gap: "-6px" }}>
                  {["photo-1494790108755-2616b612b786", "photo-1472099645785-5658abf4ff4e", "photo-1438761681033-6461ffad8d80"].map((id, i) => (
                    <img
                      key={id}
                      src={`https://images.unsplash.com/${id}?w=40&h=40&fit=crop&auto=format`}
                      alt="usuário"
                      style={{
                        ...styles.avatar,
                        width: 34,
                        height: 34,
                        marginLeft: i > 0 ? "-10px" : 0,
                        border: `2px solid ${NAVY}`,
                      }}
                    />
                  ))}
                </div>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.82rem", margin: 0 }}>
                  +15.000 empresas confiam na Nexus
                </p>
              </div>
            </div>

            {/* Hero dashboard mockup */}
            <div className="col-lg-6 d-none d-lg-block">
              <div style={styles.heroDashboard}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem", fontWeight: 600 }}>
                    Painel de Performance
                  </span>
                  <span style={{ color: AQUA, fontSize: "0.75rem", background: `${AQUA}22`, padding: "3px 10px", borderRadius: "999px" }}>
                    Ao vivo
                  </span>
                </div>
                <div className="row g-2 mb-3">
                  {[
                    { label: "Receita", val: "R$ 1,24M", delta: "+18%", up: true },
                    { label: "Conversão", val: "7,4%", delta: "+2.1%", up: true },
                    { label: "Churn", val: "0,8%", delta: "-0.3%", up: false },
                  ].map((m) => (
                    <div key={m.label} className="col-4">
                      <div style={styles.miniCard}>
                        <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.7rem", margin: 0, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                          {m.label}
                        </p>
                        <p style={{ color: WHITE, fontWeight: 700, fontSize: "1.05rem", margin: "4px 0 0", fontFamily: "'Sora', sans-serif" }}>
                          {m.val}
                        </p>
                        <p style={{ color: m.up ? AQUA : "#F87171", fontSize: "0.72rem", margin: 0, fontWeight: 600 }}>
                          {m.delta}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                {/* Bar chart mockup */}
                <div style={{ background: "rgba(255,255,255,0.04)", borderRadius: "10px", padding: "16px" }}>
                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.72rem", margin: "0 0 12px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                    Receita Mensal — 2024
                  </p>
                  <div className="d-flex align-items-end gap-1" style={{ height: "80px" }}>
                    {[45, 62, 55, 78, 65, 88, 72, 95, 80, 100, 88, 112].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${(h / 112) * 100}%`,
                          borderRadius: "4px 4px 0 0",
                          background: i === 11
                            ? AQUA
                            : `${INDIGO}99`,
                          transition: "opacity 0.2s",
                        }}
                      />
                    ))}
                  </div>
                  <div className="d-flex justify-content-between mt-1">
                    {["Jan","","","Abr","","","Jul","","","Out","","Dez"].map((l, i) => (
                      <span key={i} style={{ flex: 1, textAlign: "center", color: "rgba(255,255,255,0.25)", fontSize: "0.6rem" }}>{l}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS BAR */}
      <div style={{ backgroundColor: "#F0F4FA", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "20px 0" }}>
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center gap-5">
            <span style={{ color: "#9AABB8", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" }}>
              Confiado por
            </span>
            {["Votorantim", "Movida", "XP Inc.", "Magalu", "Nubank", "Totvs"].map((brand) => (
              <span key={brand} style={{ color: "#B0BFC9", fontWeight: 700, fontFamily: "'Sora', sans-serif", fontSize: "1rem", letterSpacing: "-0.02em" }}>
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <section style={styles.featuresSection}>
        <div className="container">
          <div className="text-center mb-5">
            <div style={{ ...styles.heroTag, backgroundColor: `${INDIGO}12`, border: `1px solid ${INDIGO}33`, color: INDIGO, marginBottom: "1rem" }}>
              Funcionalidades
            </div>
            <h2 style={styles.sectionTitle}>
              Tudo que sua empresa precisa,<br />em um só lugar
            </h2>
            <p style={{ ...styles.sectionSubtitle, maxWidth: "520px", margin: "12px auto 0" }}>
              Da coleta de dados à automação inteligente — ferramentas empresariais sem a complexidade enterprise.
            </p>
          </div>
          <div className="row g-4">
            {features.map((f, i) => (
              <div key={f.title} className="col-sm-6 col-lg-4">
                <div
                  style={{
                    ...styles.featureCard,
                    transform: hoveredFeature === i ? "translateY(-6px)" : "translateY(0)",
                    boxShadow: hoveredFeature === i
                      ? "0 16px 40px rgba(0,0,0,0.1)"
                      : "0 2px 8px rgba(0,0,0,0.04)",
                    borderTop: hoveredFeature === i ? `3px solid ${AQUA}` : `3px solid transparent`,
                  }}
                  onMouseEnter={() => setHoveredFeature(i)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div style={{ ...styles.iconBox, backgroundColor: f.color }}>
                    {f.icon}
                  </div>
                  <h4 style={{ fontFamily: "'Sora', sans-serif", fontWeight: 700, color: NAVY, fontSize: "1.05rem", marginBottom: "8px" }}>
                    {f.title}
                  </h4>
                  <p style={{ ...styles.sectionSubtitle, fontSize: "0.9rem", margin: 0 }}>
                    {f.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={styles.statsSection}>
        <div className="container">
          <div className="row g-4 text-center">
            {stats.map((s) => (
              <div key={s.label} className="col-6 col-md-3">
                <div style={styles.statNumber}>{s.number}</div>
                <div style={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={styles.testimonialSection}>
        <div className="container">
          <div className="text-center mb-5">
            <div style={{ ...styles.heroTag, backgroundColor: `${AQUA}15`, border: `1px solid ${AQUA}44`, color: "#0891B2", marginBottom: "1rem" }}>
              Depoimentos
            </div>
            <h2 style={styles.sectionTitle}>O que nossos clientes dizem</h2>
          </div>
          <div className="row g-4">
            {testimonials.map((t) => (
              <div key={t.name} className="col-md-4">
                <div style={styles.testimonialCard}>
                  <span style={styles.quote}>"</span>
                  <p style={{ color: "#374151", fontFamily: "'Inter', sans-serif", fontSize: "0.93rem", lineHeight: 1.75, marginBottom: "24px" }}>
                    {t.text}
                  </p>
                  <div className="d-flex align-items-center gap-3">
                    <img src={t.img} alt={t.name} style={styles.avatar} />
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, color: NAVY, fontSize: "0.9rem", fontFamily: "'Sora', sans-serif" }}>
                        {t.name}
                      </p>
                      <p style={{ margin: 0, color: "#8899AA", fontSize: "0.8rem" }}>{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container">
        <div style={styles.ctaSection}>
          <div style={{ ...styles.heroTag, backgroundColor: `${INDIGO}12`, border: `1px solid ${INDIGO}33`, color: INDIGO, marginBottom: "1.2rem" }}>
            Comece hoje
          </div>
          <h2 style={{ ...styles.sectionTitle, marginBottom: "12px" }}>
            Pronto para transformar<br />seu negócio?
          </h2>
          <p style={{ ...styles.sectionSubtitle, maxWidth: "460px", margin: "0 auto 28px" }}>
            Experimente gratuitamente por 14 dias. Sem cartão de crédito, sem compromisso.
          </p>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            <button
              className="btn"
              style={{ ...styles.btnPrimary, backgroundColor: INDIGO, color: WHITE }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "0.9"; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLButtonElement).style.opacity = "1"; }}
            >
              Criar conta gratuita →
            </button>
            <button className="btn" style={{ ...styles.btnOutline, borderColor: `${NAVY}33`, color: NAVY }}>
              Falar com especialista
            </button>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <div style={styles.footerBrand}>
                Nex<span style={styles.brandAccent}>us</span>
              </div>
              <p style={{ ...styles.footerText, marginTop: "12px" }}>
                Plataforma empresarial para empresas que querem crescer com inteligência e segurança.
              </p>
              <div className="d-flex gap-3 mt-3">
                {["𝕏", "in", "▶"].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    style={{
                      width: 36, height: 36, borderRadius: "8px",
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(255,255,255,0.5)", textDecoration: "none", fontSize: "0.85rem",
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            {[
              { heading: "Produto", links: ["Funcionalidades", "Integrações", "Preços", "Roadmap", "Changelog"] },
              { heading: "Empresa", links: ["Sobre nós", "Blog", "Carreiras", "Imprensa", "Parceiros"] },
              { heading: "Suporte", links: ["Central de Ajuda", "Documentação", "API Reference", "Status", "Contato"] },
            ].map((col) => (
              <div key={col.heading} className="col-6 col-md-4 col-lg-2">
                <p style={styles.footerHeading}>{col.heading}</p>
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={styles.footerLink}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = AQUA; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.45)"; }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
          <hr style={styles.footerDivider} />
          <div className="d-flex flex-wrap justify-content-between align-items-center gap-2">
            <p style={styles.footerCopy}>© 2024 Nexus Tecnologia Ltda. Todos os direitos reservados.</p>
            <div className="d-flex gap-4">
              {["Privacidade", "Termos", "Cookies"].map((item) => (
                <a key={item} href="#" style={{ ...styles.footerCopy, textDecoration: "none" }}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
