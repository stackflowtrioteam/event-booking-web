"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import {
  CalendarDays,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  Building2,
  MapPin,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Role = "customer" | "vendor";

interface FormErrors {
  fullName?: string;
  businessName?: string;
  ownerName?: string;
  email?: string;
  phone?: string;
  eventCategory?: string;
  city?: string;
  password?: string;
  confirmPassword?: string;
}

const EVENT_CATEGORIES = [
  "Wedding",
  "Birthday Party",
  "Corporate Event",
  "Conference",
  "Concert / Music",
  "Festival",
  "Exhibition",
  "Sports Event",
  "Other",
];

export default function RegisterPage() {
  const [role, setRole] = useState<Role>("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Shared fields
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Customer fields
  const [fullName, setFullName] = useState("");

  // Vendor fields
  const [businessName, setBusinessName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [eventCategory, setEventCategory] = useState("");
  const [city, setCity] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});

  const isCustomer = role === "customer";

  function validate(): FormErrors {
    const e: FormErrors = {};

    if (isCustomer) {
      if (!fullName.trim()) e.fullName = "Full name is required";
    } else {
      if (!businessName.trim()) e.businessName = "Business name is required";
      if (!ownerName.trim()) e.ownerName = "Owner name is required";
      if (!eventCategory) e.eventCategory = "Select an event category";
      if (!city.trim()) e.city = "City is required";
    }

    if (!email.trim()) {
      e.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = "Enter a valid email address";
    }

    if (!phone.trim()) {
      e.phone = "Phone number is required";
    } else if (!/^\+?[\d\s\-()]{7,15}$/.test(phone)) {
      e.phone = "Enter a valid phone number";
    }

    if (!password) {
      e.password = "Password is required";
    } else if (password.length < 6) {
      e.password = "Password must be at least 6 characters";
    }

    if (!confirmPassword) {
      e.confirmPassword = "Please confirm your password";
    } else if (confirmPassword !== password) {
      e.confirmPassword = "Passwords do not match";
    }

    return e;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);
    if (Object.keys(validationErrors).length === 0) {
      // TODO: Integrate with backend registration
    }
  }

  function switchRole(newRole: Role) {
    setRole(newRole);
    setErrors({});
    setSubmitted(false);
  }

  function clearFieldError(field: keyof FormErrors) {
    if (submitted) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  const heading = isCustomer ? "Create Customer Account" : "Create Vendor Account";
  const buttonText = isCustomer ? "Create Customer Account" : "Create Vendor Account";

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
      <div className="w-full max-w-lg rounded-xl border border-border bg-card p-8 shadow-lg">
        {/* Toggle tabs */}
        <div className="mb-6 flex rounded-lg bg-gray-100 p-1">
          <button
            type="button"
            onClick={() => switchRole("customer")}
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
            onClick={() => switchRole("vendor")}
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
          {isCustomer
            ? "Sign up to post events and receive vendor quotations"
            : "Register your business and start receiving event leads"}
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
          {/* --- Customer: Full Name --- */}
          {isCustomer && (
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="fullName">Full Name</Label>
              <div className="relative">
                <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => { setFullName(e.target.value); clearFieldError("fullName"); }}
                  className={`pl-10 ${submitted && errors.fullName ? "border-destructive focus-visible:ring-destructive" : ""}`}
                  aria-invalid={submitted && !!errors.fullName}
                />
              </div>
              {submitted && errors.fullName && (
                <p className="text-xs text-destructive">{errors.fullName}</p>
              )}
            </div>
          )}

          {/* --- Vendor: Business Name --- */}
          {!isCustomer && (
            <>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="businessName">Business Name</Label>
                <div className="relative">
                  <Building2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="businessName"
                    type="text"
                    placeholder="Your Business Name"
                    value={businessName}
                    onChange={(e) => { setBusinessName(e.target.value); clearFieldError("businessName"); }}
                    className={`pl-10 ${submitted && errors.businessName ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    aria-invalid={submitted && !!errors.businessName}
                  />
                </div>
                {submitted && errors.businessName && (
                  <p className="text-xs text-destructive">{errors.businessName}</p>
                )}
              </div>

              {/* Owner Name */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="ownerName">Owner Name</Label>
                <div className="relative">
                  <User className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="ownerName"
                    type="text"
                    placeholder="Owner full name"
                    value={ownerName}
                    onChange={(e) => { setOwnerName(e.target.value); clearFieldError("ownerName"); }}
                    className={`pl-10 ${submitted && errors.ownerName ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    aria-invalid={submitted && !!errors.ownerName}
                  />
                </div>
                {submitted && errors.ownerName && (
                  <p className="text-xs text-destructive">{errors.ownerName}</p>
                )}
              </div>
            </>
          )}

          {/* Email (shared) */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email">Email</Label>
            <div className="relative">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => { setEmail(e.target.value); clearFieldError("email"); }}
                className={`pl-10 ${submitted && errors.email ? "border-destructive focus-visible:ring-destructive" : ""}`}
                aria-invalid={submitted && !!errors.email}
              />
            </div>
            {submitted && errors.email && (
              <p className="text-xs text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Phone (shared) */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="phone">Phone</Label>
            <div className="relative">
              <Phone className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => { setPhone(e.target.value); clearFieldError("phone"); }}
                className={`pl-10 ${submitted && errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}`}
                aria-invalid={submitted && !!errors.phone}
              />
            </div>
            {submitted && errors.phone && (
              <p className="text-xs text-destructive">{errors.phone}</p>
            )}
          </div>

          {/* --- Vendor-only: Event Category & City --- */}
          {!isCustomer && (
            <>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="eventCategory">Event Category</Label>
                <div className="relative">
                  <Tag className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <select
                    id="eventCategory"
                    value={eventCategory}
                    onChange={(e) => { setEventCategory(e.target.value); clearFieldError("eventCategory"); }}
                    className={`flex h-10 w-full rounded-md border bg-card pl-10 pr-4 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                      submitted && errors.eventCategory
                        ? "border-destructive focus-visible:ring-destructive"
                        : "border-input"
                    }`}
                    aria-invalid={submitted && !!errors.eventCategory}
                  >
                    <option value="" disabled>
                      Select a category
                    </option>
                    {EVENT_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                {submitted && errors.eventCategory && (
                  <p className="text-xs text-destructive">{errors.eventCategory}</p>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="city">City</Label>
                <div className="relative">
                  <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    id="city"
                    type="text"
                    placeholder="e.g. Mumbai"
                    value={city}
                    onChange={(e) => { setCity(e.target.value); clearFieldError("city"); }}
                    className={`pl-10 ${submitted && errors.city ? "border-destructive focus-visible:ring-destructive" : ""}`}
                    aria-invalid={submitted && !!errors.city}
                  />
                </div>
                {submitted && errors.city && (
                  <p className="text-xs text-destructive">{errors.city}</p>
                )}
              </div>
            </>
          )}

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="password">Password</Label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Min 6 characters"
                value={password}
                onChange={(e) => { setPassword(e.target.value); clearFieldError("password"); }}
                className={`pl-10 pr-10 ${submitted && errors.password ? "border-destructive focus-visible:ring-destructive" : ""}`}
                aria-invalid={submitted && !!errors.password}
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
              <p className="text-xs text-destructive">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password */}
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Lock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                id="confirmPassword"
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={(e) => { setConfirmPassword(e.target.value); clearFieldError("confirmPassword"); }}
                className={`pl-10 pr-10 ${submitted && errors.confirmPassword ? "border-destructive focus-visible:ring-destructive" : ""}`}
                aria-invalid={submitted && !!errors.confirmPassword}
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground transition-colors hover:text-foreground"
                aria-label={showConfirm ? "Hide password" : "Show password"}
              >
                {showConfirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            {submitted && errors.confirmPassword && (
              <p className="text-xs text-destructive">{errors.confirmPassword}</p>
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
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#570861] underline-offset-4 transition-colors hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
