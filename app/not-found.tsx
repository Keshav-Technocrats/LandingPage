import Link from "next/link";
export const metadata = { title: "Page not found", robots: { index: false } };
export default function NotFound() {
  return (
    <main className="wrap" style={{ padding: "120px 22px", textAlign: "center" }}>
      <h1>Page not found</h1>
      <p style={{ color: "var(--mute)", margin: "16px 0 28px" }}>The page you are looking for does not exist.</p>
      <Link className="btn" href="/">Back to home</Link>
    </main>
  );
}
