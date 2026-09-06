import { useState } from "react";
import "./login.css";

function EyeIcon({ open }) {
  return open ? (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="12" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  ) : (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path
        d="M3 3l18 18M10.6 10.7a3.2 3.2 0 0 0 4.5 4.5M6.6 6.9C4 8.5 2 12 2 12s3.6 7 10 7c1.8 0 3.3-.4 4.6-1.1M9.9 5.2A10.4 10.4 0 0 1 12 5c6.4 0 10 7 10 7a15.6 15.6 0 0 1-2.9 3.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

function WaveMark() {
  return (
    <svg className="auth-logo-mark" viewBox="0 0 64 40" fill="none">
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

function BackgroundWaves() {
  return (
    <svg
      className="auth-bg-waves"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        className="auth-wave auth-wave-1"
        d="M0,224 C240,280 480,168 720,192 C960,216 1200,288 1440,240 L1440,320 L0,320 Z"
      />
      <path
        className="auth-wave auth-wave-2"
        d="M0,256 C240,192 480,272 720,240 C960,208 1200,160 1440,208 L1440,320 L0,320 Z"
      />
      <path
        className="auth-wave auth-wave-3"
        d="M0,288 C240,248 480,304 720,272 C960,240 1200,296 1440,272 L1440,320 L0,320 Z"
      />
    </svg>
  );
}

/**
 * LoginForm
 * Self-contained login + create-account flow. Doesn't know anything about
 * what happens after auth — it just calls onAuthenticated() when the person
 * successfully logs in or creates an account, and the parent decides what
 * screen comes next (see App.jsx).
 */
function LoginForm({ onAuthenticated, onForgotPassword }) {
  const [page, setPage] = useState("login");
  const [genderOpen, setGenderOpen] = useState(false);
  const [gender, setGender] = useState("");
  const [showLoginPw, setShowLoginPw] = useState(false);
  const [showRegPw, setShowRegPw] = useState(false);
  const [birthday, setBirthday] = useState("");

  return (
    <div className="app">
      <BackgroundWaves />

      {page === "login" ? (
        <>
          <div className="auth-logo">
            <WaveMark />
            <h1>TideTrace</h1>
            <p>every ripple counts</p>
          </div>

          <div className="form-card login-card">
            <h2>Welcome back</h2>
            <p className="card-sub">Log in to keep tracking your ripples</p>

            <div className="field">
              <label htmlFor="login-email">Email</label>
              <input id="login-email" type="email" placeholder="you@example.com" />
            </div>

            <div className="field">
              <label htmlFor="login-password">Password</label>
              <div className="input-wrap">
                <input
                  id="login-password"
                  type={showLoginPw ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="toggle-eye"
                  onClick={() => setShowLoginPw(!showLoginPw)}
                  aria-label={showLoginPw ? "Hide password" : "Show password"}
                >
                  <EyeIcon open={showLoginPw} />
                </button>
              </div>
            </div>

            <div className="options-row">
              <label className="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </label>
              <button
                type="button"
                className="forgot-link"
                onClick={() => onForgotPassword?.()}
              >
                Forgot password?
              </button>
            </div>

            <button
              type="button"
              className="orange-btn"
              onClick={() => onAuthenticated?.()}
            >
              Log in
            </button>

            <div className="divider">
              <span>or</span>
            </div>

            <button className="link-btn" onClick={() => setPage("register")}>
              New here? Create an account
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="register-title">
            <h2>Create your account</h2>
            <p>Get started on TideTrace</p>
          </div>

          <div className="form-card register-card">
            <label>Name</label>
            <div className="name-row">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>

            <label htmlFor="reg-birthday">Birthday</label>
            <input
              id="reg-birthday"
              type="date"
              className="date-input"
              value={birthday}
              max={new Date().toISOString().split("T")[0]}
              onChange={(e) => setBirthday(e.target.value)}
            />

            <label>Gender</label>
            <div className="gender-container">
              <button
                type="button"
                className="gender-select"
                onClick={() => setGenderOpen(!genderOpen)}
              >
                <span>{gender || "Select your gender"}</span>
                <span className="arrow">⌄</span>
              </button>

              {genderOpen && (
                <div className="gender-options">
                  {["Male", "Female", "Others"].map((option) => (
                    <button
                      type="button"
                      key={option}
                      className={option === gender ? "selected" : ""}
                      onClick={() => {
                        setGender(option);
                        setGenderOpen(false);
                      }}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <label>Email</label>
            <input type="email" placeholder="you@example.com" />

            <label>Password</label>
            <div className="input-wrap">
              <input
                type={showRegPw ? "text" : "password"}
                placeholder="Create a password"
              />
              <button
                type="button"
                className="toggle-eye"
                onClick={() => setShowRegPw(!showRegPw)}
                aria-label={showRegPw ? "Hide password" : "Show password"}
              >
                <EyeIcon open={showRegPw} />
              </button>
            </div>
            <p className="hint">Use 8 or more characters</p>

            <button
              type="button"
              className="orange-btn"
              onClick={() => onAuthenticated?.()}
            >
              Create an account
            </button>

            <button className="account-link" onClick={() => setPage("login")}>
              Already have an account? <span>Log in</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default LoginForm;
