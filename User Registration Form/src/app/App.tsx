import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

const NAVY = "#0d1b3e";
const INDIGO = "#3730a3";
const AQUA = "#06b6d4";
const WHITE = "#ffffff";

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: `linear-gradient(135deg, ${NAVY} 0%, ${INDIGO} 55%, #1e3a5f 100%)`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem 1rem",
    fontFamily: "'Inter', sans-serif",
  },
  card: {
    background: WHITE,
    borderRadius: "1.25rem",
    boxShadow: "0 24px 64px rgba(6, 182, 212, 0.18), 0 8px 32px rgba(13,27,62,0.28)",
    overflow: "hidden",
    maxWidth: "900px",
    width: "100%",
    display: "flex",
    flexDirection: "row" as const,
  },
  sidebar: {
    background: `linear-gradient(180deg, ${INDIGO} 0%, ${NAVY} 100%)`,
    padding: "3rem 2.25rem",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "space-between",
    minWidth: "280px",
    maxWidth: "280px",
    color: WHITE,
    position: "relative" as const,
    overflow: "hidden",
  },
  sidebarBlob1: {
    position: "absolute" as const,
    top: "-60px",
    right: "-60px",
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    background: `rgba(6, 182, 212, 0.15)`,
    pointerEvents: "none" as const,
  },
  sidebarBlob2: {
    position: "absolute" as const,
    bottom: "-40px",
    left: "-40px",
    width: "140px",
    height: "140px",
    borderRadius: "50%",
    background: `rgba(6, 182, 212, 0.10)`,
    pointerEvents: "none" as const,
  },
  logo: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    marginBottom: "2.5rem",
  },
  logoIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    background: AQUA,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  },
  logoText: {
    fontSize: "1.2rem",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    color: WHITE,
    lineHeight: 1.1,
  },
  sidebarTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 800,
    fontSize: "1.6rem",
    lineHeight: 1.25,
    color: WHITE,
    marginBottom: "1rem",
  },
  sidebarText: {
    fontSize: "0.875rem",
    color: "rgba(255,255,255,0.7)",
    lineHeight: 1.65,
    marginBottom: "2rem",
  },
  featureItem: {
    display: "flex",
    alignItems: "center",
    gap: "0.6rem",
    marginBottom: "0.8rem",
  },
  featureDot: {
    width: "8px",
    height: "8px",
    borderRadius: "50%",
    background: AQUA,
    flexShrink: 0,
  },
  featureText: {
    fontSize: "0.82rem",
    color: "rgba(255,255,255,0.8)",
  },
  sidebarFooter: {
    fontSize: "0.75rem",
    color: "rgba(255,255,255,0.4)",
    marginTop: "2rem",
  },
  formSection: {
    flex: 1,
    padding: "2.75rem 2.5rem",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
  },
  formTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: "1.65rem",
    color: NAVY,
    marginBottom: "0.35rem",
  },
  formSubtitle: {
    fontSize: "0.875rem",
    color: "#64748b",
    marginBottom: "2rem",
  },
  label: {
    fontSize: "0.8rem",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "0.35rem",
    display: "block",
  },
  input: {
    width: "100%",
    padding: "0.6rem 0.9rem",
    border: "1.5px solid #e2e8f0",
    borderRadius: "0.6rem",
    fontSize: "0.875rem",
    color: NAVY,
    background: "#f8fafc",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    fontFamily: "'Inter', sans-serif",
  },
  inputFocus: {
    borderColor: AQUA,
    boxShadow: `0 0 0 3px rgba(6, 182, 212, 0.15)`,
  },
  btn: {
    width: "100%",
    padding: "0.75rem",
    background: `linear-gradient(90deg, ${INDIGO}, ${AQUA})`,
    border: "none",
    borderRadius: "0.65rem",
    color: WHITE,
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: "0.95rem",
    cursor: "pointer",
    transition: "opacity 0.2s, transform 0.15s",
    marginTop: "0.5rem",
  },
  divider: {
    textAlign: "center" as const,
    color: "#94a3b8",
    fontSize: "0.8rem",
    margin: "1rem 0",
    position: "relative" as const,
  },
  loginLink: {
    textAlign: "center" as const,
    fontSize: "0.85rem",
    color: "#64748b",
    marginTop: "1.25rem",
  },
  aquaLink: {
    color: INDIGO,
    fontWeight: 600,
    textDecoration: "none",
    cursor: "pointer",
  },
  errorText: {
    fontSize: "0.75rem",
    color: "#ef4444",
    marginTop: "0.25rem",
  },
  successBanner: {
    background: "linear-gradient(90deg, #d1fae5, #a7f3d0)",
    border: "1px solid #6ee7b7",
    borderRadius: "0.65rem",
    padding: "1rem 1.25rem",
    color: "#065f46",
    fontSize: "0.875rem",
    fontWeight: 500,
    textAlign: "center" as const,
    marginBottom: "1.5rem",
  },
};

type FormData = {
  fullName: string;
  email: string;
  cpf: string;
  phone: string;
  password: string;
  confirmPassword: string;
  terms: boolean;
};

type Errors = Partial<Record<keyof FormData, string>>;

function formatCpf(val: string) {
  return val
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function formatPhone(val: string) {
  return val
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
}

export default function App() {
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    cpf: "",
    phone: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [errors, setErrors] = useState<Errors>({});
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  function validate(): Errors {
    const e: Errors = {};
    if (!form.fullName.trim() || form.fullName.trim().split(" ").length < 2)
      e.fullName = "Informe o nome completo.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "E-mail inválido.";
    if (form.cpf.replace(/\D/g, "").length < 11)
      e.cpf = "CPF inválido.";
    if (form.phone.replace(/\D/g, "").length < 10)
      e.phone = "Telefone inválido.";
    if (form.password.length < 8)
      e.password = "Senha deve ter ao menos 8 caracteres.";
    if (form.confirmPassword !== form.password)
      e.confirmPassword = "As senhas não coincidem.";
    if (!form.terms)
      e.terms = "Você deve aceitar os termos.";
    return e;
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, checked, type } = e.target;
    let v: string | boolean = type === "checkbox" ? checked : value;
    if (name === "cpf") v = formatCpf(value);
    if (name === "phone") v = formatPhone(value);
    setForm((f) => ({ ...f, [name]: v }));
    if (errors[name as keyof FormData]) {
      setErrors((er) => ({ ...er, [name]: undefined }));
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
  }

  function inputStyle(field: string) {
    return {
      ...styles.input,
      ...(focusedField === field ? styles.inputFocus : {}),
      ...(errors[field as keyof FormData] ? { borderColor: "#ef4444" } : {}),
    };
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        {/* Sidebar */}
        <div style={styles.sidebar}>
          <div style={styles.sidebarBlob1} />
          <div style={styles.sidebarBlob2} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={styles.logo}>
              <div style={styles.logoIcon}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" fill={WHITE} fillOpacity={0.95}/>
                  <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke={WHITE} strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <div style={styles.logoText}>Rich<span style={{ color: AQUA }}>+</span></div>
                <div style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.55)", letterSpacing: "0.08em" }}>PLATAFORMA</div>
              </div>
            </div>

            <h2 style={styles.sidebarTitle}>
              Bem-vindo à<br />nossa plataforma
            </h2>
            <p style={styles.sidebarText}>
              Crie sua conta gratuitamente e tenha acesso a todos os recursos disponíveis.
            </p>

            <div>
              {[
                "Acesso seguro e criptografado",
                "Suporte disponível 24 horas",
                "Integração com suas ferramentas",
                "Dados protegidos pela LGPD",
              ].map((f) => (
                <div key={f} style={styles.featureItem}>
                  <div style={styles.featureDot} />
                  <span style={styles.featureText}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={styles.sidebarFooter}>
            © 2026 Rich+ Plataforma. Todos os direitos reservados.
          </div>
        </div>

        {/* Form */}
        <div style={styles.formSection}>
          {submitted ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <div style={{
                width: "72px", height: "72px", borderRadius: "50%",
                background: `linear-gradient(135deg, ${INDIGO}, ${AQUA})`,
                margin: "0 auto 1.5rem",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                  <path d="M5 13l4 4L19 7" stroke={WHITE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 style={{ ...styles.formTitle, textAlign: "center" }}>Cadastro realizado!</h3>
              <p style={{ color: "#64748b", fontSize: "0.9rem", marginTop: "0.5rem" }}>
                Olá, <strong>{form.fullName.split(" ")[0]}</strong>! Seu cadastro foi concluído com sucesso. Verifique seu e-mail para ativar a conta.
              </p>
              <button
                style={{ ...styles.btn, marginTop: "2rem", width: "auto", padding: "0.7rem 2rem" }}
                onClick={() => { setSubmitted(false); setForm({ fullName:"",email:"",cpf:"",phone:"",password:"",confirmPassword:"",terms:false }); }}
              >
                Novo cadastro
              </button>
            </div>
          ) : (
            <>
              <h1 style={styles.formTitle}>Criar conta</h1>
              <p style={styles.formSubtitle}>Preencha os dados abaixo para se cadastrar</p>

              <form onSubmit={handleSubmit} noValidate>
                {/* Row: Nome */}
                <div style={{ marginBottom: "1rem" }}>
                  <label style={styles.label}>Nome completo</label>
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Ex: Maria Clara Oliveira"
                    value={form.fullName}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("fullName")}
                    onBlur={() => setFocusedField(null)}
                    style={inputStyle("fullName")}
                    autoComplete="name"
                  />
                  {errors.fullName && <p style={styles.errorText}>{errors.fullName}</p>}
                </div>

                {/* Row: Email */}
                <div style={{ marginBottom: "1rem" }}>
                  <label style={styles.label}>E-mail</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Ex: maria@email.com"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    style={inputStyle("email")}
                    autoComplete="email"
                  />
                  {errors.email && <p style={styles.errorText}>{errors.email}</p>}
                </div>

                {/* Row: CPF + Telefone */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                  <div>
                    <label style={styles.label}>CPF</label>
                    <input
                      name="cpf"
                      type="text"
                      placeholder="000.000.000-00"
                      value={form.cpf}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("cpf")}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle("cpf")}
                      inputMode="numeric"
                    />
                    {errors.cpf && <p style={styles.errorText}>{errors.cpf}</p>}
                  </div>
                  <div>
                    <label style={styles.label}>Telefone</label>
                    <input
                      name="phone"
                      type="text"
                      placeholder="(00) 00000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("phone")}
                      onBlur={() => setFocusedField(null)}
                      style={inputStyle("phone")}
                      inputMode="numeric"
                    />
                    {errors.phone && <p style={styles.errorText}>{errors.phone}</p>}
                  </div>
                </div>

                {/* Row: Senha + Confirmar */}
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div>
                    <label style={styles.label}>Senha</label>
                    <div style={{ position: "relative" }}>
                      <input
                        name="password"
                        type={showPass ? "text" : "password"}
                        placeholder="Mín. 8 caracteres"
                        value={form.password}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("password")}
                        onBlur={() => setFocusedField(null)}
                        style={{ ...inputStyle("password"), paddingRight: "2.5rem" }}
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPass((s) => !s)}
                        style={{ position: "absolute", right: "0.7rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#94a3b8", padding: 0 }}
                        tabIndex={-1}
                      >
                        {showPass ? (
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                        ) : (
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        )}
                      </button>
                    </div>
                    {errors.password && <p style={styles.errorText}>{errors.password}</p>}
                  </div>
                  <div>
                    <label style={styles.label}>Confirmar senha</label>
                    <div style={{ position: "relative" }}>
                      <input
                        name="confirmPassword"
                        type={showConfirm ? "text" : "password"}
                        placeholder="Repita a senha"
                        value={form.confirmPassword}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("confirmPassword")}
                        onBlur={() => setFocusedField(null)}
                        style={{ ...inputStyle("confirmPassword"), paddingRight: "2.5rem" }}
                        autoComplete="new-password"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirm((s) => !s)}
                        style={{ position: "absolute", right: "0.7rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#94a3b8", padding: 0 }}
                        tabIndex={-1}
                      >
                        {showConfirm ? (
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                        ) : (
                          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                        )}
                      </button>
                    </div>
                    {errors.confirmPassword && <p style={styles.errorText}>{errors.confirmPassword}</p>}
                  </div>
                </div>

                {/* Strength bar */}
                {form.password.length > 0 && (
                  <div style={{ marginBottom: "1rem" }}>
                    <div style={{ display: "flex", gap: "4px", marginBottom: "4px" }}>
                      {[1,2,3,4].map((i) => {
                        const strength = form.password.length >= 12 && /[A-Z]/.test(form.password) && /[0-9]/.test(form.password) && /[^a-zA-Z0-9]/.test(form.password) ? 4
                          : form.password.length >= 10 ? 3
                          : form.password.length >= 8 ? 2 : 1;
                        const colors = ["#ef4444", "#f97316", "#eab308", AQUA];
                        return <div key={i} style={{ flex: 1, height: "4px", borderRadius: "2px", background: i <= strength ? colors[strength - 1] : "#e2e8f0", transition: "background 0.3s" }} />;
                      })}
                    </div>
                    <span style={{ fontSize: "0.72rem", color: "#94a3b8" }}>
                      {form.password.length < 8 ? "Fraca" : form.password.length < 10 ? "Razoável" : form.password.length >= 12 && /[^a-zA-Z0-9]/.test(form.password) ? "Muito forte" : "Forte"}
                    </span>
                  </div>
                )}

                {/* Terms */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "1.25rem" }}>
                  <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    checked={form.terms}
                    onChange={handleChange}
                    style={{ marginTop: "2px", accentColor: INDIGO, width: "16px", height: "16px", cursor: "pointer" }}
                  />
                  <label htmlFor="terms" style={{ fontSize: "0.8rem", color: "#64748b", cursor: "pointer", lineHeight: 1.5 }}>
                    Concordo com os{" "}
                    <a href="#" style={styles.aquaLink}>Termos de Uso</a>{" "}e a{" "}
                    <a href="#" style={styles.aquaLink}>Política de Privacidade</a>
                  </label>
                </div>
                {errors.terms && <p style={{ ...styles.errorText, marginTop: "-0.9rem", marginBottom: "0.75rem" }}>{errors.terms}</p>}

                <button
                  type="submit"
                  style={styles.btn}
                  onMouseEnter={(e) => { (e.target as HTMLButtonElement).style.opacity = "0.88"; (e.target as HTMLButtonElement).style.transform = "translateY(-1px)"; }}
                  onMouseLeave={(e) => { (e.target as HTMLButtonElement).style.opacity = "1"; (e.target as HTMLButtonElement).style.transform = "none"; }}
                >
                  Criar minha conta
                </button>

                <p style={styles.loginLink}>
                  Já tem uma conta?{" "}
                  <a href="#" style={styles.aquaLink}>Fazer login</a>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
