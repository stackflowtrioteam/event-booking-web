"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import {
  CalendarDays,
  Clock,
  Users,
  MapPin,
  Tag,
  DollarSign,
  FileText,
  Upload,
  Trash2,
  LayoutDashboard,
  CalendarPlus,
  CalendarCheck,
  CheckCircle,
  CreditCard,
  Star,
  Settings,
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface FormErrors {
  eventTitle?: string;
  eventType?: string;
  eventDate?: string;
  eventTime?: string;
  guestCount?: string;
  eventLocation?: string;
  vendorCategory?: string;
  budgetRange?: string;
  requirements?: string;
}

const EVENT_TYPES = [
  "Wedding",
  "Birthday Party",
  "Anniversary",
  "Corporate Event",
  "Conference",
  "Concert / Music",
  "Festival",
  "Exhibition",
  "Sports Event",
  "Wedding Reception",
  "Engagement Party",
  "Baby Shower",
  "Graduation",
  "Reunion",
  "Other",
];

const VENDOR_CATEGORIES = [
  "Catering",
  "Photographer",
  "Videographer",
  "DJ / Music",
  "Decoration",
  "Florist",
  "Venue",
  "Invitations",
  "Rentals",
  "Entertainment",
  "Makeup & Hair",
  "Transportation",
  "Other",
];

const BUDGET_RANGES = [
  "₹10,000 - ₹50,000",
  "₹50,000 - ₹1,00,000",
  "₹1,00,000 - ₹5,00,000",
  "₹5,00,000 - ₹10,00,000",
  "₹10,00,000+",
];

const customerNavItems = [
  { label: 'Dashboard', href: '/dashboard/customer', icon: <LayoutDashboard className="h-5 w-5" /> },
  { label: 'Post Event', href: '/dashboard/customer/post-event', icon: <CalendarPlus className="h-5 w-5" /> },
  { label: 'My Events', href: '/dashboard/customer/events', icon: <CalendarCheck className="h-5 w-5" /> },
  { label: 'Quotations', href: '/dashboard/customer/quotations', icon: <FileText className="h-5 w-5" /> },
  { label: 'Bookings', href: '/dashboard/customer/bookings', icon: <CheckCircle className="h-5 w-5" /> },
  { label: 'Payments', href: '/dashboard/customer/payments', icon: <CreditCard className="h-5 w-5" /> },
  { label: 'Reviews', href: '/dashboard/customer/reviews', icon: <Star className="h-5 w-5" /> },
  { label: 'Settings', href: '/dashboard/customer/settings', icon: <Settings className="h-5 w-5" /> },
];

function PostEventForm() {
  const [submitted, setSubmitted] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  // Form fields
  const [eventTitle, setEventTitle] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [guestCount, setGuestCount] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [vendorCategory, setVendorCategory] = useState("");
  const [budgetRange, setBudgetRange] = useState("");
  const [requirements, setRequirements] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});

  function validate(): FormErrors {
    const e: FormErrors = {};

    if (!eventTitle.trim()) e.eventTitle = "Event title is required";
    if (!eventType) e.eventType = "Select an event type";
    if (!eventDate) e.eventDate = "Event date is required";
    if (!eventTime) e.eventTime = "Event time is required";
    if (!guestCount.trim()) {
      e.guestCount = "Number of guests is required";
    } else if (isNaN(Number(guestCount)) || Number(guestCount) < 1) {
      e.guestCount = "Enter a valid number of guests";
    }
    if (!eventLocation.trim()) e.eventLocation = "Event location is required";
    if (!vendorCategory) e.vendorCategory = "Select a vendor category";
    if (!budgetRange) e.budgetRange = "Select a budget range";
    if (!requirements.trim()) e.requirements = "Tell us about your requirements";

    return e;
  }

  function handleSubmit(ev: FormEvent) {
    ev.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSubmitted(true);

    if (Object.keys(validationErrors).length === 0) {
      console.log("[v0] Form submitted successfully", {
        eventTitle,
        eventType,
        eventDate,
        eventTime,
        guestCount,
        eventLocation,
        vendorCategory,
        budgetRange,
        requirements,
        filesCount: uploadedFiles.length,
      });
      // TODO: Integrate with backend API
    }
  }

  function handleFileChange(ev: ChangeEvent<HTMLInputElement>) {
    const files = ev.currentTarget.files;
    if (files) {
      setUploadedFiles((prev) => [...prev, ...Array.from(files)]);
    }
  }

  function removeFile(index: number) {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function clearFieldError(field: keyof FormErrors) {
    if (submitted) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Form Card */}
      <div className="rounded-xl border border-border bg-card p-8 shadow-lg">
          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-8">
            {/* --- Event Details Section --- */}
            <div>
              <h2
                className="mb-6 text-xl font-bold text-card-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Event Details
              </h2>

              <div className="flex flex-col gap-5">
                {/* Event Title */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="eventTitle">Event Title</Label>
                  <div className="relative">
                    <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="eventTitle"
                      type="text"
                      placeholder="e.g. My Wedding, Birthday Bash"
                      value={eventTitle}
                      onChange={(e) => {
                        setEventTitle(e.target.value);
                        clearFieldError("eventTitle");
                      }}
                      className={`pl-10 ${
                        submitted && errors.eventTitle ? "border-destructive focus-visible:ring-destructive" : ""
                      }`}
                      aria-invalid={submitted && !!errors.eventTitle}
                    />
                  </div>
                  {submitted && errors.eventTitle && (
                    <p className="text-xs text-destructive">{errors.eventTitle}</p>
                  )}
                </div>

                {/* Event Type */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="eventType">Event Type</Label>
                  <div className="relative">
                    <Tag className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <select
                      id="eventType"
                      value={eventType}
                      onChange={(e) => {
                        setEventType(e.target.value);
                        clearFieldError("eventType");
                      }}
                      className={`flex h-10 w-full rounded-md border bg-card pl-10 pr-4 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        submitted && errors.eventType
                          ? "border-destructive focus-visible:ring-destructive"
                          : "border-input"
                      }`}
                      aria-invalid={submitted && !!errors.eventType}
                    >
                      <option value="" disabled>
                        Select event type
                      </option>
                      {EVENT_TYPES.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  {submitted && errors.eventType && (
                    <p className="text-xs text-destructive">{errors.eventType}</p>
                  )}
                </div>

                {/* Date and Time - Row */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Event Date */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="eventDate">Event Date</Label>
                    <div className="relative">
                      <CalendarDays className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="eventDate"
                        type="date"
                        value={eventDate}
                        onChange={(e) => {
                          setEventDate(e.target.value);
                          clearFieldError("eventDate");
                        }}
                        className={`pl-10 ${
                          submitted && errors.eventDate ? "border-destructive focus-visible:ring-destructive" : ""
                        }`}
                        aria-invalid={submitted && !!errors.eventDate}
                      />
                    </div>
                    {submitted && errors.eventDate && (
                      <p className="text-xs text-destructive">{errors.eventDate}</p>
                    )}
                  </div>

                  {/* Event Time */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="eventTime">Event Time</Label>
                    <div className="relative">
                      <Clock className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="eventTime"
                        type="time"
                        value={eventTime}
                        onChange={(e) => {
                          setEventTime(e.target.value);
                          clearFieldError("eventTime");
                        }}
                        className={`pl-10 ${
                          submitted && errors.eventTime ? "border-destructive focus-visible:ring-destructive" : ""
                        }`}
                        aria-invalid={submitted && !!errors.eventTime}
                      />
                    </div>
                    {submitted && errors.eventTime && (
                      <p className="text-xs text-destructive">{errors.eventTime}</p>
                    )}
                  </div>
                </div>

                {/* Guest Count and Location - Row */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  {/* Guest Count */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="guestCount">Number of Guests</Label>
                    <div className="relative">
                      <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="guestCount"
                        type="number"
                        placeholder="e.g. 100"
                        value={guestCount}
                        onChange={(e) => {
                          setGuestCount(e.target.value);
                          clearFieldError("guestCount");
                        }}
                        className={`pl-10 ${
                          submitted && errors.guestCount ? "border-destructive focus-visible:ring-destructive" : ""
                        }`}
                        aria-invalid={submitted && !!errors.guestCount}
                      />
                    </div>
                    {submitted && errors.guestCount && (
                      <p className="text-xs text-destructive">{errors.guestCount}</p>
                    )}
                  </div>

                  {/* Location */}
                  <div className="flex flex-col gap-1.5">
                    <Label htmlFor="eventLocation">Event Location (City)</Label>
                    <div className="relative">
                      <MapPin className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="eventLocation"
                        type="text"
                        placeholder="e.g. Mumbai"
                        value={eventLocation}
                        onChange={(e) => {
                          setEventLocation(e.target.value);
                          clearFieldError("eventLocation");
                        }}
                        className={`pl-10 ${
                          submitted && errors.eventLocation ? "border-destructive focus-visible:ring-destructive" : ""
                        }`}
                        aria-invalid={submitted && !!errors.eventLocation}
                      />
                    </div>
                    {submitted && errors.eventLocation && (
                      <p className="text-xs text-destructive">{errors.eventLocation}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* --- Vendor Requirements Section --- */}
            <div>
              <h2
                className="mb-6 text-xl font-bold text-card-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Vendor Requirements
              </h2>

              <div className="flex flex-col gap-5">
                {/* Vendor Category */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="vendorCategory">Vendor Category</Label>
                  <div className="relative">
                    <Tag className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <select
                      id="vendorCategory"
                      value={vendorCategory}
                      onChange={(e) => {
                        setVendorCategory(e.target.value);
                        clearFieldError("vendorCategory");
                      }}
                      className={`flex h-10 w-full rounded-md border bg-card pl-10 pr-4 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        submitted && errors.vendorCategory
                          ? "border-destructive focus-visible:ring-destructive"
                          : "border-input"
                      }`}
                      aria-invalid={submitted && !!errors.vendorCategory}
                    >
                      <option value="" disabled>
                        Select vendor category
                      </option>
                      {VENDOR_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>
                  {submitted && errors.vendorCategory && (
                    <p className="text-xs text-destructive">{errors.vendorCategory}</p>
                  )}
                </div>

                {/* Budget Range */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="budgetRange">Budget Range</Label>
                  <div className="relative">
                    <DollarSign className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <select
                      id="budgetRange"
                      value={budgetRange}
                      onChange={(e) => {
                        setBudgetRange(e.target.value);
                        clearFieldError("budgetRange");
                      }}
                      className={`flex h-10 w-full rounded-md border bg-card pl-10 pr-4 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        submitted && errors.budgetRange
                          ? "border-destructive focus-visible:ring-destructive"
                          : "border-input"
                      }`}
                      aria-invalid={submitted && !!errors.budgetRange}
                    >
                      <option value="" disabled>
                        Select budget range
                      </option>
                      {BUDGET_RANGES.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  {submitted && errors.budgetRange && (
                    <p className="text-xs text-destructive">{errors.budgetRange}</p>
                  )}
                </div>

                {/* Requirements Description */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="requirements">Description of Requirements</Label>
                  <div className="relative">
                    <FileText className="pointer-events-none absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <textarea
                      id="requirements"
                      placeholder="Tell vendors about your specific requirements, preferences, style, theme, etc."
                      value={requirements}
                      onChange={(e) => {
                        setRequirements(e.target.value);
                        clearFieldError("requirements");
                      }}
                      rows={5}
                      className={`flex w-full rounded-md border bg-card pl-10 pr-4 py-2 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                        submitted && errors.requirements ? "border-destructive focus-visible:ring-destructive" : "border-input"
                      }`}
                      aria-invalid={submitted && !!errors.requirements}
                    />
                  </div>
                  {submitted && errors.requirements && (
                    <p className="text-xs text-destructive">{errors.requirements}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-border" />

            {/* --- Attachments Section --- */}
            <div>
              <h2
                className="mb-6 text-xl font-bold text-card-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Reference Images (Optional)
              </h2>

              <div className="flex flex-col gap-5">
                {/* File Upload */}
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="fileUpload">Upload Images</Label>
                  <div className="relative">
                    <Upload className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="fileUpload"
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={handleFileChange}
                      className="pl-10"
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Upload reference images to help vendors understand your vision
                  </p>
                </div>

                {/* Uploaded Files List */}
                {uploadedFiles.length > 0 && (
                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-medium text-foreground">
                      Uploaded Files ({uploadedFiles.length})
                    </p>
                    <div className="space-y-2">
                      {uploadedFiles.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between rounded-md border border-border bg-muted px-4 py-3"
                        >
                          <span className="text-sm text-foreground">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className="text-destructive transition-colors hover:text-destructive/80"
                            aria-label={`Remove ${file.name}`}
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <Button type="submit" size="lg" className="w-full">
              Post Event Requirement
            </Button>
        </form>
      </div>
    </div>
  );
}

export default function PostEventPage() {
  return (
    <DashboardLayout
      title="Post Event"
      navItems={customerNavItems}
      userType="customer"
    >
      <PostEventForm />
    </DashboardLayout>
  );
}
