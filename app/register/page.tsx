"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import {
  CalendarDays,
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Phone,
  Building2,
  Tag,
} from "lucide-react";

import Cookies from "js-cookie";

import { toast } from "react-toastify";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { registerUser } from "@/services/auth.service";

type Role = "customer" | "vendor";

interface FormErrors {
  name?: string;
  businessName?: string;
  email?: string;
  phoneNumber?: string;
  eventCategory?: string;
  state?: string;
  city?: string;
  password?: string;
}

const EVENT_CATEGORIES = [
  "Wedding",
  "Birthday Party",
  "Corporate Event",
  "Conference",
  "Concert",
  "Festival",
  "Sports Event",
];

export default function RegisterPage() {
  const router = useRouter();

  const [role, setRole] =
    useState<Role>("customer");

  const [showPassword, setShowPassword] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [loading, setLoading] =
    useState(false);

  const [errors, setErrors] =
    useState<FormErrors>({});

  // Common Fields
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [phoneNumber, setPhoneNumber] =
    useState("");

  const [password, setPassword] =
    useState("");

  // Vendor Fields
  const [businessName, setBusinessName] =
    useState("");

  const [eventCategory, setEventCategory] =
    useState("");

  const [state, setState] = useState("");

  const [city, setCity] = useState("");

  const isCustomer = role === "customer";

  function clearFieldError(
    field: keyof FormErrors
  ) {
    if (submitted) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  }

  function validate(): FormErrors {
    const e: FormErrors = {};

    // Name
    if (!name.trim()) {
      e.name = "Name is required";
    }

    // Email
    if (!email.trim()) {
      e.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
        email
      )
    ) {
      e.email = "Please enter valid email";
    }

    // Phone
    if (!phoneNumber.trim()) {
      e.phoneNumber =
        "Phone number is required";
    } else if (
      !/^[0-9]{10}$/.test(phoneNumber)
    ) {
      e.phoneNumber =
        "Phone number must be 10 digits";
    }

    // Password
    if (!password) {
      e.password = "Password is required";
    } else if (password.length < 6) {
      e.password =
        "Password must be at least 6 characters";
    }

    // Vendor Validation
    if (!isCustomer) {
      if (!businessName.trim()) {
        e.businessName =
          "Business name is required";
      }

      if (!eventCategory) {
        e.eventCategory =
          "Select event category";
      }

      if (!state.trim()) {
        e.state = "State is required";
      }

      if (!city.trim()) {
        e.city = "City is required";
      }
    }

    return e;
  }

  async function handleSubmit(
    ev: FormEvent
  ) {
    ev.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    setSubmitted(true);

    if (
      Object.keys(validationErrors).length > 0
    )
      return;

    try {
      setLoading(true);

      const payload = {
        name,
        email,
        password,
        userType: role,
        phoneNumber,

        ...(role === "vendor" && {
          businessName,
          eventCategory,
          state,
          city,
        }),
      };

      const response = await registerUser(
        payload
      );

      // Store In Cookies
      Cookies.set(
        "token",
        response.token,
        {
          expires: 7,
        }
      );

      Cookies.set(
        "user",
        JSON.stringify(response),
        {
          expires: 7,
        }
      );

      Cookies.set("role", role, {
        expires: 7,
      });

      toast.success(
        "Account created successfully"
      );

      // Redirect
      if (role === "customer") {
        router.push("/dashboard/customer");
      } else {
        router.push("/dashboard/vendor");
      }
    } catch (error: any) {
      console.log(error);

      toast.error(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-12">
      {/* Logo */}
      <Link
        href="/"
        className="mb-8 flex items-center gap-2"
      >
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#570861]">
          <CalendarDays className="h-6 w-6 text-white" />
        </div>

        <span className="text-2xl font-bold tracking-tight text-[#570861]">
          EventVendor
        </span>
      </Link>

      {/* Card */}
      <div className="w-full max-w-lg rounded-xl border bg-card p-8 shadow-lg">
        {/* Tabs */}
        <div className="mb-6 flex rounded-lg bg-gray-100 p-1">
          <button
            type="button"
            onClick={() =>
              setRole("customer")
            }
            className={`flex-1 rounded-md py-2.5 text-sm font-medium transition-all ${
              isCustomer
                ? "bg-[#570861] text-white"
                : "text-gray-600"
            }`}
          >
            Customer
          </button>

          <button
            type="button"
            onClick={() =>
              setRole("vendor")
            }
            className={`flex-1 rounded-md py-2.5 text-sm font-medium transition-all ${
              !isCustomer
                ? "bg-[#570861] text-white"
                : "text-gray-600"
            }`}
          >
            Vendor
          </button>
        </div>

        {/* Heading */}
        <h1 className="mb-2 text-2xl font-bold">
          {isCustomer
            ? "Create Customer Account"
            : "Create Vendor Account"}
        </h1>

        <p className="mb-6 text-sm text-muted-foreground">
          {isCustomer
            ? "Sign up to post events"
            : "Register your business"}
        </p>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          noValidate
          className="flex flex-col gap-5"
        >
          {/* Name */}
          <div>
            <Label>Name</Label>

            <div className="relative mt-1">
              <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                type="text"
                placeholder={
                  isCustomer
                    ? "Enter your full name"
                    : "Enter owner name"
                }
                value={name}
                onChange={(e) => {
                  setName(e.target.value);

                  clearFieldError("name");
                }}
                className="pl-10"
              />
            </div>

            {errors.name && (
              <p className="mt-1 text-xs text-red-500">
                {errors.name}
              </p>
            )}
          </div>

          {/* Vendor Fields */}
          {!isCustomer && (
            <>
              {/* Business Name */}
              <div>
                <Label>
                  Business Name
                </Label>

                <div className="relative mt-1">
                  <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <Input
                    type="text"
                    placeholder="Business name"
                    value={businessName}
                    onChange={(e) => {
                      setBusinessName(
                        e.target.value
                      );

                      clearFieldError(
                        "businessName"
                      );
                    }}
                    className="pl-10"
                  />
                </div>

                {errors.businessName && (
                  <p className="mt-1 text-xs text-red-500">
                    {
                      errors.businessName
                    }
                  </p>
                )}
              </div>

              {/* Event Category */}
              <div>
                <Label>
                  Event Category
                </Label>

                <div className="relative mt-1">
                  <Tag className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                  <select
                    value={eventCategory}
                    onChange={(e) => {
                      setEventCategory(
                        e.target.value
                      );

                      clearFieldError(
                        "eventCategory"
                      );
                    }}
                    className="flex h-10 w-full rounded-md border bg-background pl-10 pr-3 text-sm"
                  >
                    <option value="">
                      Select Category
                    </option>

                    {EVENT_CATEGORIES.map(
                      (cat) => (
                        <option
                          key={cat}
                          value={cat}
                        >
                          {cat}
                        </option>
                      )
                    )}
                  </select>
                </div>

                {errors.eventCategory && (
                  <p className="mt-1 text-xs text-red-500">
                    {
                      errors.eventCategory
                    }
                  </p>
                )}
              </div>

              {/* State */}
              <div>
                <Label>State</Label>

                <Input
                  type="text"
                  placeholder="Enter state"
                  value={state}
                  onChange={(e) => {
                    setState(
                      e.target.value
                    );

                    clearFieldError(
                      "state"
                    );
                  }}
                  className="mt-1"
                />

                {errors.state && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.state}
                  </p>
                )}
              </div>

              {/* City */}
              <div>
                <Label>City</Label>

                <Input
                  type="text"
                  placeholder="Enter city"
                  value={city}
                  onChange={(e) => {
                    setCity(
                      e.target.value
                    );

                    clearFieldError(
                      "city"
                    );
                  }}
                  className="mt-1"
                />

                {errors.city && (
                  <p className="mt-1 text-xs text-red-500">
                    {errors.city}
                  </p>
                )}
              </div>
            </>
          )}

          {/* Email */}
          <div>
            <Label>Email</Label>

            <div className="relative mt-1">
              <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                type="text"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);

                  clearFieldError("email");
                }}
                className="pl-10"
              />
            </div>

            {errors.email && (
              <p className="mt-1 text-xs text-red-500">
                {errors.email}
              </p>
            )}
          </div>

          {/* Phone */}
          <div>
            <Label>
              Phone Number
            </Label>

            <div className="relative mt-1">
              <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="9876543210"
                value={phoneNumber}
                onChange={(e) => {
                  const value =
                    e.target.value.replace(
                      /\D/g,
                      ""
                    );

                  setPhoneNumber(value);

                  clearFieldError(
                    "phoneNumber"
                  );
                }}
                className="pl-10"
              />
            </div>

            {errors.phoneNumber && (
              <p className="mt-1 text-xs text-red-500">
                {errors.phoneNumber}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <Label>Password</Label>

            <div className="relative mt-1">
              <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                type={
                  showPassword
                    ? "text"
                    : "password"
                }
                placeholder="Enter password"
                value={password}
                onChange={(e) => {
                  setPassword(
                    e.target.value
                  );

                  clearFieldError(
                    "password"
                  );
                }}
                className="pl-10 pr-10"
              />

              <button
                type="button"
                onClick={() =>
                  setShowPassword(
                    !showPassword
                  )
                }
                className="absolute right-3 top-1/2 -translate-y-1/2"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>

            {errors.password && (
              <p className="mt-1 text-xs text-red-500">
                {errors.password}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-[#570861] py-2.5 font-semibold text-white transition-all duration-200 hover:bg-[#3f0547] disabled:opacity-70"
          >
            {loading
              ? "Please wait..."
              : isCustomer
              ? "Create Customer Account"
              : "Create Vendor Account"}
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-[#570861] hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}