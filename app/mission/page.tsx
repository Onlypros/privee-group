// app/mission/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const PASSWORD = "privee2025"; // change this

export default function Mission() {
  const [authed, setAuthed] = useState(false);
  const [input, setInput] = useState("");

  useEffect(() => {
    const ok = window.localStorage.getItem("privee_mission_ok") === "1";
    if (ok) setAuthed(true);
  }, []);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (input === PASSWORD) {
      setAuthed(true);
      window.localStorage.setItem("privee_mission_ok", "1");
    } else {
      alert("Wrong password");
    }
  }

  if (!authed) {
    return (
      <main className="min-h-screen flex flex-col">
        <header className="w-full px-6 py-4 flex justify-between">
          <Link href="/" className="font-semibold tracking-wide">PRIVEE GROUP</Link>
        </header>
        <section className="flex-1 flex items-center justify-center">
          <form onSubmit={submit} className="border p-6 w-full max-w-sm">
            <h1 className="text-xl font-medium">Enter password</h1>
            <input
              type="password"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="mt-4 w-full border px-3 py-2 outline-none focus:ring-1 focus:ring-black"
              placeholder="Password"
            />
            <button
              className="mt-4 w-full border border-black px-4 py-2 hover:bg-black hover:text-white transition"
              type="submit"
            >
              Continue
            </button>
          </form>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col">
      <header className="w-full px-6 py-4 flex justify-between">
        <Link href="/" className="font-semibold tracking-wide">PRIVEE GROUP</Link>
      </header>
      <section className="flex-1 flex items-center justify-center p-6 text-center">
        <div>
          <h1 className="text-3xl md:text-4xl">Mission (private draft)</h1>
          <p className="mt-4 text-neutral-600 max-w-xl">
            Coming soon. This area is currently password-protected while we shape the concept.
          </p>
        </div>
      </section>
    </main>
  );
}
