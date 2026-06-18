"use client";

import Link from "next/link";
import { ArrowRight, Eye, EyeOff, LockKeyhole, UserPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function PortalAccess() {
  // TODO(Phase 2): Connect registration, authentication, password reset, and
  // session handling to the selected identity provider and backend API.
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "register">("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="aerial-panel p-5 shadow-glow sm:p-7">
      <div className="grid grid-cols-2 border border-white/10 bg-navy/60 p-1">
        <button
          type="button"
          onClick={() => setMode("login")}
          className={`min-h-11 px-4 text-sm font-bold transition ${
            mode === "login" ? "bg-flight text-white" : "text-slate-400"
          }`}
        >
          Existing Client
        </button>
        <button
          type="button"
          onClick={() => setMode("register")}
          className={`min-h-11 px-4 text-sm font-bold transition ${
            mode === "register" ? "bg-flight text-white" : "text-slate-400"
          }`}
        >
          New Client
        </button>
      </div>

      <div className="mt-7">
        <div className="flex h-11 w-11 items-center justify-center border border-flight/40 bg-flight/15 text-flight">
          {mode === "login" ? <LockKeyhole size={21} /> : <UserPlus size={21} />}
        </div>
        <h2 className="mt-4 text-2xl font-black text-white">
          {mode === "login" ? "Access your projects" : "Create a client account"}
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-400">
          {mode === "login"
            ? "Review missions, deliverables, messages, and payment milestones."
            : "Set up your workspace to request and manage drone missions."}
        </p>
      </div>

      <form
        className="mt-6 grid gap-4"
        onSubmit={(event) => {
          event.preventDefault();
          router.push("/portal/dashboard");
        }}
      >
        {mode === "register" ? (
          <>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Full name
              <input
                type="text"
                placeholder="Your name"
                className="min-h-12 border border-white/15 bg-navy/70 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-flight"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold text-slate-200">
              Company
              <input
                type="text"
                placeholder="Company or organization"
                className="min-h-12 border border-white/15 bg-navy/70 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-flight"
              />
            </label>
          </>
        ) : null}

        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Email address
          <input
            type="email"
            placeholder="name@company.com"
            className="min-h-12 border border-white/15 bg-navy/70 px-4 text-white outline-none transition placeholder:text-slate-600 focus:border-flight"
          />
        </label>

        <label className="grid gap-2 text-sm font-semibold text-slate-200">
          Password
          <span className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              className="min-h-12 w-full border border-white/15 bg-navy/70 px-4 pr-12 text-white outline-none transition placeholder:text-slate-600 focus:border-flight"
            />
            <button
              type="button"
              onClick={() => setShowPassword((value) => !value)}
              className="absolute right-0 top-0 flex h-12 w-12 items-center justify-center text-slate-400 hover:text-white"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </span>
        </label>

        <button
          type="submit"
          className="mt-2 inline-flex min-h-12 items-center justify-center gap-2 bg-signal px-5 text-sm font-black text-navy transition hover:bg-white"
        >
          {mode === "login" ? "Sign In" : "Create Account"}{" "}
          <ArrowRight size={17} />
        </button>
      </form>

      <div className="my-6 flex items-center gap-3">
        <span className="h-px flex-1 bg-white/10" />
        <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-500">
          MVP Preview
        </span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <Link
        href="/portal/dashboard"
        className="inline-flex min-h-12 w-full items-center justify-center gap-2 border border-flight/40 bg-flight/10 px-5 text-sm font-bold text-white transition hover:bg-flight/20"
      >
        Explore Demo Portal <ArrowRight size={17} />
      </Link>

      <p className="mt-5 text-center text-xs leading-5 text-slate-500">
        Demo access only. Secure authentication and persistent accounts will be
        enabled with the Phase 2 backend.
      </p>
    </div>
  );
}
