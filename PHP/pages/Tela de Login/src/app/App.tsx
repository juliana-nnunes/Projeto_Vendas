import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useState } from "react";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => setLoading(false), 1800);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif",
        display: "flex",
        background: "#f0f4f8",
      }}
    >
      {/* Left panel */}
      <div
        className="d-none d-lg-flex flex-column justify-content-between p-5"
        style={{
          width: "48%",
          background: "linear-gradient(145deg, #0d1b3e 0%, #1e3a8a 45%, #3730a3 100%)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            width: 480,
            height: 480,
            borderRadius: "50%",
            border: "1px solid rgba(6,182,212,0.15)",
            top: -120,
            right: -160,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 320,
            height: 320,
            borderRadius: "50%",
            border: "1px solid rgba(6,182,212,0.1)",
            top: -60,
            right: -100,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.05)",
            bottom: -200,
            left: -200,
            pointerEvents: "none",
          }}
        />

        {/* Logo */}
        <div className="d-flex align-items-center gap-2">
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "linear-gradient(135deg, #06b6d4, #22d3ee)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="bi bi-shield-check" style={{ color: "#fff", fontSize: 20 }} />
          </div>
          <span
            style={{
              color: "#fff",
              fontWeight: 700,
              fontSize: "1.2rem",
              letterSpacing: "-0.02em",
            }}
          >
            rich+
          </span>
        </div>

        {/* Center content */}
        <div style={{ zIndex: 1 }}>
          <div
            className="mb-4 px-3 py-2 d-inline-flex align-items-center gap-2 rounded-pill"
            style={{
              background: "rgba(6,182,212,0.15)",
              border: "1px solid rgba(6,182,212,0.3)",
            }}
          >
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#06b6d4",
                display: "inline-block",
              }}
            />
            <span style={{ color: "#67e8f9", fontSize: "0.8rem", fontWeight: 500 }}>
              Plataforma Segura
            </span>
          </div>

          <h1
            style={{
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "2.6rem",
              lineHeight: 1.2,
              letterSpacing: "-0.03em",
              marginBottom: "1.25rem",
            }}
          >
            Bem-vindo de<br />
            volta à sua<br />
            <span style={{ color: "#22d3ee" }}>área de trabalho</span>
          </h1>

          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", lineHeight: 1.7 }}>
            Acesse seu painel com segurança e gerencie tudo em um só lugar.
          </p>

          {/* Stats row */}
          <div className="d-flex gap-4 mt-5">
            {[
              { label: "Usuários ativos", value: "12.4k" },
              { label: "Uptime", value: "99.9%" },
              { label: "Segurança", value: "ISO 27001" },
            ].map(({ label, value }) => (
              <div key={label}>
                <div style={{ color: "#22d3ee", fontWeight: 700, fontSize: "1.25rem" }}>
                  {value}
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem", marginTop: 2 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial card */}
        <div
          className="p-4 rounded-3"
          style={{
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.9rem", lineHeight: 1.6, marginBottom: "1rem" }}>
            "A plataforma mais completa que já utilizei. Interface intuitiva e suporte excelente."
          </p>
          <div className="d-flex align-items-center gap-3">
            <div
              style={{
                width: 38,
                height: 38,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #06b6d4, #3730a3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.85rem",
              }}
            >
              JD
            </div>
            <div>
              <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.85rem" }}>Juliana e Danielly</div>
              <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.75rem" }}>Diretoras de TI · TechBrasil</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel — login form */}
      <div
        className="d-flex flex-column justify-content-center align-items-center flex-grow-1 px-3 py-5"
        style={{ background: "#f0f4f8" }}
      >
        <div style={{ width: "100%", maxWidth: 440 }}>
          {/* Mobile logo */}
          <div className="d-flex d-lg-none align-items-center gap-2 justify-content-center mb-5">
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 9,
                background: "linear-gradient(135deg, #06b6d4, #22d3ee)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="bi bi-shield-check" style={{ color: "#fff", fontSize: 18 }} />
            </div>
            <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#0d1b3e" }}>rich+</span>
          </div>

          <div className="mb-4">
            <h2
              style={{
                fontWeight: 700,
                fontSize: "1.9rem",
                color: "#0d1b3e",
                letterSpacing: "-0.03em",
                marginBottom: "0.4rem",
              }}
            >
              Entrar na conta
            </h2>
            <p style={{ color: "#6b7a99", fontSize: "0.95rem" }}>
              Digite suas credenciais para acessar o sistema.
            </p>
          </div>

          {/* Social login */}
          <div className="d-flex gap-3 mb-4">
            {[
              { icon: "bi-google", label: "Google" },
              { icon: "bi-microsoft", label: "Microsoft" },
            ].map(({ icon, label }) => (
              <button
                key={label}
                type="button"
                className="btn flex-grow-1 d-flex align-items-center justify-content-center gap-2"
                style={{
                  background: "#ffffff",
                  border: "1px solid rgba(55,48,163,0.18)",
                  color: "#0d1b3e",
                  fontWeight: 500,
                  fontSize: "0.875rem",
                  padding: "0.6rem 1rem",
                  borderRadius: 10,
                  transition: "all 0.2s",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "#06b6d4";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 0 3px rgba(6,182,212,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(55,48,163,0.18)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 1px 3px rgba(0,0,0,0.06)";
                }}
              >
                <i className={`bi ${icon}`} style={{ fontSize: "1rem" }} />
                {label}
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="d-flex align-items-center gap-3 mb-4">
            <div style={{ flex: 1, height: 1, background: "rgba(55,48,163,0.12)" }} />
            <span style={{ color: "#6b7a99", fontSize: "0.8rem", fontWeight: 500 }}>ou continue com e-mail</span>
            <div style={{ flex: 1, height: 1, background: "rgba(55,48,163,0.12)" }} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email */}
            <div className="mb-3">
              <label
                htmlFor="email"
                style={{ color: "#0d1b3e", fontWeight: 600, fontSize: "0.875rem", marginBottom: "0.5rem", display: "block" }}
              >
                E-mail
              </label>
              <div className="input-group">
                <span
                  className="input-group-text"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(55,48,163,0.2)",
                    borderRight: "none",
                    borderRadius: "10px 0 0 10px",
                    color: "#6b7a99",
                  }}
                >
                  <i className="bi bi-envelope" />
                </span>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    border: "1px solid rgba(55,48,163,0.2)",
                    borderLeft: "none",
                    borderRadius: "0 10px 10px 0",
                    padding: "0.65rem 1rem",
                    fontSize: "0.9rem",
                    color: "#0d1b3e",
                    background: "#fff",
                    boxShadow: "none",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#06b6d4";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(6,182,212,0.15)";
                    const prev = e.currentTarget.previousElementSibling as HTMLElement;
                    if (prev) prev.style.borderColor = "#06b6d4";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(55,48,163,0.2)";
                    e.currentTarget.style.boxShadow = "none";
                    const prev = e.currentTarget.previousElementSibling as HTMLElement;
                    if (prev) prev.style.borderColor = "rgba(55,48,163,0.2)";
                  }}
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-2">
                <label
                  htmlFor="password"
                  style={{ color: "#0d1b3e", fontWeight: 600, fontSize: "0.875rem", marginBottom: 0 }}
                >
                  Senha
                </label>
                <a
                  href="#"
                  style={{ color: "#06b6d4", fontSize: "0.8rem", fontWeight: 500, textDecoration: "none" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#0891b2")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4")}
                >
                  Esqueceu a senha?
                </a>
              </div>
              <div className="input-group">
                <span
                  className="input-group-text"
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(55,48,163,0.2)",
                    borderRight: "none",
                    borderRadius: "10px 0 0 10px",
                    color: "#6b7a99",
                  }}
                >
                  <i className="bi bi-lock" />
                </span>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  style={{
                    border: "1px solid rgba(55,48,163,0.2)",
                    borderLeft: "none",
                    borderRight: "none",
                    padding: "0.65rem 1rem",
                    fontSize: "0.9rem",
                    color: "#0d1b3e",
                    background: "#fff",
                    boxShadow: "none",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#06b6d4";
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(6,182,212,0.15)";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(55,48,163,0.2)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
                <button
                  type="button"
                  className="input-group-text"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    background: "#fff",
                    border: "1px solid rgba(55,48,163,0.2)",
                    borderLeft: "none",
                    borderRadius: "0 10px 10px 0",
                    color: "#6b7a99",
                    cursor: "pointer",
                  }}
                >
                  <i className={`bi ${showPassword ? "bi-eye-slash" : "bi-eye"}`} />
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="form-check mb-4">
              <input
                className="form-check-input"
                type="checkbox"
                id="rememberMe"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                style={{ accentColor: "#06b6d4", cursor: "pointer" }}
              />
              <label
                className="form-check-label"
                htmlFor="rememberMe"
                style={{ color: "#6b7a99", fontSize: "0.875rem", cursor: "pointer" }}
              >
                Manter conectado por 30 dias
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn w-100 d-flex align-items-center justify-content-center gap-2"
              disabled={loading}
              style={{
                background: loading
                  ? "#3730a3"
                  : "linear-gradient(135deg, #1e3a8a 0%, #3730a3 60%, #4338ca 100%)",
                border: "none",
                color: "#fff",
                fontWeight: 600,
                fontSize: "0.95rem",
                padding: "0.75rem 1.5rem",
                borderRadius: 12,
                letterSpacing: "-0.01em",
                boxShadow: "0 4px 14px rgba(55,48,163,0.4)",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                if (!loading) {
                  (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 6px 20px rgba(55,48,163,0.55)";
                  (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-1px)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 4px 14px rgba(55,48,163,0.4)";
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(0)";
              }}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm" role="status" />
                  Entrando...
                </>
              ) : (
                <>
                  Entrar na conta
                  <i className="bi bi-arrow-right" />
                </>
              )}
            </button>
          </form>

          {/* Register */}
          <p className="text-center mt-4" style={{ color: "#6b7a99", fontSize: "0.875rem" }}>
            Não tem uma conta?{" "}
            <a
              href="#"
              style={{ color: "#3730a3", fontWeight: 600, textDecoration: "none" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#06b6d4")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#3730a3")}
            >
              Criar conta gratuita
            </a>
          </p>

          {/* Security note */}
          <div
            className="d-flex align-items-center justify-content-center gap-2 mt-5"
            style={{ color: "#9ba8bf", fontSize: "0.75rem" }}
          >
            <i className="bi bi-shield-lock" style={{ color: "#06b6d4" }} />
            <span>Conexão protegida com criptografia TLS 256-bit</span>
          </div>
        </div>
      </div>
    </div>
  );
}
