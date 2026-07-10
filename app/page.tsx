import Link from "next/link";
import { assetPath } from "./lib/assetPath";

export default function Home() {
  const englishHome = assetPath("/en/");

  return (
    <main className="site-shell">
      <meta httpEquiv="refresh" content={`0;url=${englishHome}`} />
      <p>
        <Link href="/en">Open Alex Portfolio</Link>
      </p>
    </main>
  );
}
