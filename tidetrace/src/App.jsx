import { useState } from "react";
import LoginForm from "./login/LoginForm.jsx";
import DashboardHome from "./dashboard-home/DashboardHome.jsx";

/**
 * App
 * The only place that knows both screens exist. It holds one piece of
 * state — which screen is active — and hands each screen a single callback:
 *   - LoginForm calls onAuthenticated() after "Log in" / "Create an account"
 *   - DashboardHome calls onLogout() after "Log out"
 * Swap these callbacks for real auth calls later; the wiring stays the same.
 */
function App() {
  const [view, setView] = useState("login"); // "login" | "dashboard"

  if (view === "dashboard") {
    return <DashboardHome onLogout={() => setView("login")} />;
  }

  return <LoginForm onAuthenticated={() => setView("dashboard")} />;
}

export default App;
