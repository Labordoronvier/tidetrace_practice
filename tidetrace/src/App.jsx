import { useState } from "react";
import LoginForm from "./login/LoginForm.jsx";
import ForgotPasswordFlow from "./forgot-password/ForgotPasswordFlow.jsx";
import DashboardHome from "./dashboard-home/DashboardHome.jsx";

/**
 * App
 * The only place that knows all three screens exist. It holds one piece of
 * state — which screen is active — and hands each screen a small set of
 * callbacks:
 *   - LoginForm calls onAuthenticated() after "Log in" / "Create an account",
 *     and onForgotPassword() when "Forgot password?" is clicked
 *   - ForgotPasswordFlow calls onDone() once the reset flow finishes (or the
 *     person bails out early via "Back to log in")
 *   - DashboardHome calls onLogout() after "Log out"
 * Swap these callbacks for real auth calls later; the wiring stays the same.
 */
function App() {
  const [view, setView] = useState("login"); // "login" | "forgot-password" | "dashboard"

  if (view === "dashboard") {
    return <DashboardHome onLogout={() => setView("login")} />;
  }

  if (view === "forgot-password") {
    return <ForgotPasswordFlow onDone={() => setView("login")} />;
  }

  return (
    <LoginForm
      onAuthenticated={() => setView("dashboard")}
      onForgotPassword={() => setView("forgot-password")}
    />
  );
}

export default App;