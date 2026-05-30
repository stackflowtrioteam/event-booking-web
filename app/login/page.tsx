"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { CalendarDays, Eye, EyeOff, Mail, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Role = "customer" | "vendor";

export default function LoginPage() {
  const [role, setRole] = useState<Role>("customer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [submitted, setSubmitted] = useState(false);

  function validate() {
    const newErrors: { email?: string; password?: string } = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);
    if (Object.keys(validationErrors).length === 0) {
      // TODO: Integrate with backend auth
    }
  }

  const isCustomer = role === "customer";
  const heading = isCustomer ? "Customer Login" : "Vendor Login";
  const buttonText = isCustomer ? "Login as Customer" : "Login as Vendor";

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      {/* Logo */}
      <Link href="/" className="mb-8 flex items-center gap-2">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#570861]">
          <CalendarDays className="h-6 w-6 text-white" />
        </div>
        <span
          className="text-2xl font-bold tracking-tight text-[#570861]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          EventVendor
        </span>
      </Link>

      {/* Card */}
      <div className="w-full max-w-md rounded-xl border border-border bg-card p-8 shadow-lg">
        {/* Toggle tabs */}
        <div className="mb-6 flex rounded-lg bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => { setRole("customer"); setErrors({}); setSubmitted(false); }}
            className={`flex-1 rounded-md py-2.5 text-sm font-medium transition-all ${
              isCustomer
                ? "bg-[#570861] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Customer
          </button>
          <button
            type="button"
            onClick={() => { setRole("vendor"); setErrors({}); setSubmitted(false); }}
            className={`flex-1 rounded-md py-2.5 text-sm font-medium transition-all ${
              !isCustomer
                ? "bg-[#570861] text-white shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Vendor
          </button>
        </div>

        {/* Heading */}
        <h1
          className="mb-1 text-2xl font-bold text-card-foreground"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {heading}
        </h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Enter your credentials to access your account
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (submitted) setErrors((prev) => ({ ...prev, email: undefined }));
                }}
                className={`pl-10 ${submitted && errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                aria-invalid={submitted && !!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
              />
            </div>
            {submitted && errors.email && (
              <p id="email-error" className="text-xs text-destructive">
                {errors.email}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (submitted) setErrors((prev) => ({ ...prev, password: undefined }));
                }}
                className={`pl-10 pr-10 ${submitted && errors.password ? "border-destructive focus-visible:ring-destructive" : ""}`}
                aria-invalid={submitted && !!errors.password}
                aria-describedby={errors.password ? "password-error" : undefined}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {submitted && errors.password && (
              <p id="password-error" className="text-xs text-destructive">
                {errors.password}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#570861] py-2.5 font-semibold text-white transition-all duration-200 hover:bg-[#3f0547] hover:scale-105 active:scale-95"
          >
            {buttonText}
          </button>
        </form>

        {/* Footer link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          {"Don't have an account? "}
          <Link
            href="/register"
            className="font-medium text-[#570861] underline-offset-4 transition-colors hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
