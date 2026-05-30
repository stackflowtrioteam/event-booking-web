"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#570861]">
            <CalendarDays className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-[#570861]" style={{ fontFamily: "var(--font-heading)" }}>
            EventVendor
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <Link href="#how-it-works" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </Link>
          <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Features
          </Link>
          <Link href="#why-us" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Why Choose Us
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Testimonials
          </Link>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <button
            className="rounded-lg px-4 py-2 text-sm font-semibold text-[#570861] transition-colors hover:bg-purple-50"
          >
            <Link href="/login">Login</Link>
          </button>
          <button
            className="rounded-lg bg-[#570861] px-6 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#3f0547] hover:scale-105"
          >
            <Link href="/register">Register</Link>
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              How It Works
            </Link>
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#why-us"
              className="text-sm font-medium text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Why Choose Us
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-medium text-muted-foreground"
              onClick={() => setMobileOpen(false)}
            >
              Testimonials
            </Link>
            <div className="flex flex-col gap-2 pt-2">
              <button
                className="rounded-lg px-4 py-2 text-sm font-semibold text-[#570861] transition-colors hover:bg-purple-50 text-left"
              >
                <Link href="/login" onClick={() => setMobileOpen(false)}>Login</Link>
              </button>
              <button
                className="rounded-lg bg-[#570861] px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#3f0547]"
              >
                <Link href="/register" onClick={() => setMobileOpen(false)}>Register</Link>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
