const base = ""; // vite proxy 덕분에 /api로 충분

export async function register({ email, password }) {
  const res = await fetch(`${base}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Register failed: ${res.status}`);
  return data;
}

export async function login({ email, password }) {
  const res = await fetch(`${base}/api/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || `Login failed: ${res.status}`);
  return data;
}

export async function me() {
  const res = await fetch(`${base}/api/me`, { credentials: "include" });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Not authenticated");
  return data;
}

export async function logout() {
  const res = await fetch(`${base}/api/logout`, {
    method: "POST",
    credentials: "include",
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || "Logout failed");
  return data;
}
