import React, { useState } from "react";
import "../App.css";

function Login({ onLogin }) {
  return (
    <div className="auth-card">
      <h3>Please login</h3>
      <button className="action-button" onClick={onLogin}>
        Login
      </button>
    </div>
  );
}

function Home({ onLogout }) {
  return (
    <div className="auth-card">
      <h3>Welcome back!</h3>
      <button className="action-button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}

export default function ConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h2>Conditional Rendering</h2>
      <h3>Ternary</h3>

      {isLoggedIn ? (
        <Home onLogout={() => setIsLoggedIn(false)} />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}

      <h3>Logical &&</h3>
      {isLoggedIn && <p>You are logged in.</p>}
    </div>
  );
}