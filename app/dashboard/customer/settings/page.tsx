"use client";

import { useState } from "react";
import {
  LayoutDashboard,
  CalendarPlus,
  CalendarCheck,
  FileText,
  CheckCircle,
  CreditCard,
  Star,
  Settings,
  Eye,
  EyeOff,
  AlertTriangle,
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const customerNavItems = [
  { label: 'Dashboard', href: '/dashboard/customer', icon: <LayoutDashboard className="h-5 w-5" /> },
  { label: 'Post Event', href: '/dashboard/customer/post-event', icon: <CalendarPlus className="h-5 w-5" /> },
  { label: 'My Events', href: '/dashboard/customer/my-events', icon: <CalendarCheck className="h-5 w-5" /> },
  { label: 'Quotations', href: '/dashboard/customer/quotations', icon: <FileText className="h-5 w-5" /> },
  { label: 'Bookings', href: '/dashboard/customer/bookings', icon: <CheckCircle className="h-5 w-5" /> },
  { label: 'Payments', href: '/dashboard/customer/payments', icon: <CreditCard className="h-5 w-5" /> },
  { label: 'Reviews', href: '/dashboard/customer/reviews', icon: <Star className="h-5 w-5" /> },
  { label: 'Settings', href: '/dashboard/customer/settings', icon: <Settings className="h-5 w-5" /> },
];

function SettingsContent() {
  const [profileData, setProfileData] = useState({
    fullName: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    city: "New York",
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswordFields, setShowPasswordFields] = useState({
    current: false,
    new: false,
    confirm: false,
  });

  const [notifications, setNotifications] = useState({
    emailNotifications: true,
    smsNotifications: false,
    eventUpdates: true,
    vendorQuotations: true,
  });

  const [saveStatus, setSaveStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNotificationChange = (key: keyof typeof notifications) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSaveProfile = () => {
    setSaveStatus({ type: "success", message: "Profile updated successfully!" });
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleUpdatePassword = () => {
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setSaveStatus({ type: "error", message: "Passwords don't match!" });
      return;
    }
    if (passwordData.newPassword.length < 8) {
      setSaveStatus({ type: "error", message: "Password must be at least 8 characters!" });
      return;
    }
    setSaveStatus({ type: "success", message: "Password updated successfully!" });
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleSavePreferences = () => {
    setSaveStatus({ type: "success", message: "Preferences saved successfully!" });
    setTimeout(() => setSaveStatus(null), 3000);
  };

  return (
    <div className="mx-auto max-w-3xl space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="font-heading text-3xl font-bold text-foreground">Account Settings</h1>
        <p className="mt-2 text-muted-foreground">Manage your profile, security, and preferences</p>
      </div>

      {/* Status Message */}
      {saveStatus && (
        <div
          className={`rounded-lg border px-4 py-3 ${
            saveStatus.type === "success"
              ? "border-green-200 bg-green-50 text-green-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          {saveStatus.message}
        </div>
      )}

      {/* Section 1: Profile Information */}
      <Card className="border border-border bg-card p-6 shadow-sm rounded-xl">
        <h2 className="font-heading text-xl font-bold text-foreground">Profile Information</h2>
        <p className="mt-1 text-sm text-muted-foreground">Update your personal details</p>

        <div className="mt-6 space-y-4">
          <div>
            <Label htmlFor="fullName" className="text-sm font-medium text-foreground">
              Full Name
            </Label>
            <Input
              id="fullName"
              name="fullName"
              type="text"
              value={profileData.fullName}
              onChange={handleProfileChange}
              className="mt-2 border-border bg-background"
              placeholder="John Doe"
            />
          </div>

          <div>
            <Label htmlFor="email" className="text-sm font-medium text-foreground">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={profileData.email}
              onChange={handleProfileChange}
              className="mt-2 border-border bg-background"
              placeholder="john@example.com"
            />
          </div>

          <div>
            <Label htmlFor="phone" className="text-sm font-medium text-foreground">
              Phone Number
            </Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={profileData.phone}
              onChange={handleProfileChange}
              className="mt-2 border-border bg-background"
              placeholder="+1 (555) 123-4567"
            />
          </div>

          <div>
            <Label htmlFor="city" className="text-sm font-medium text-foreground">
              City
            </Label>
            <Input
              id="city"
              name="city"
              type="text"
              value={profileData.city}
              onChange={handleProfileChange}
              className="mt-2 border-border bg-background"
              placeholder="New York"
            />
          </div>

          <Button onClick={handleSaveProfile} className="mt-6 w-full sm:w-auto">
            Save Changes
          </Button>
        </div>
      </Card>

      {/* Section 2: Password Settings */}
      <Card className="border border-border bg-card p-6 shadow-sm rounded-xl">
        <h2 className="font-heading text-xl font-bold text-foreground">Password Settings</h2>
        <p className="mt-1 text-sm text-muted-foreground">Change your password regularly for security</p>

        <div className="mt-6 space-y-4">
          <div>
            <Label htmlFor="currentPassword" className="text-sm font-medium text-foreground">
              Current Password
            </Label>
            <div className="relative mt-2">
              <Input
                id="currentPassword"
                name="currentPassword"
                type={showPasswordFields.current ? "text" : "password"}
                value={passwordData.currentPassword}
                onChange={handlePasswordChange}
                className="border-border bg-background pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPasswordFields((prev) => ({ ...prev, current: !prev.current }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPasswordFields.current ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div>
            <Label htmlFor="newPassword" className="text-sm font-medium text-foreground">
              New Password
            </Label>
            <div className="relative mt-2">
              <Input
                id="newPassword"
                name="newPassword"
                type={showPasswordFields.new ? "text" : "password"}
                value={passwordData.newPassword}
                onChange={handlePasswordChange}
                className="border-border bg-background pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPasswordFields((prev) => ({ ...prev, new: !prev.new }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPasswordFields.new ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div>
            <Label htmlFor="confirmPassword" className="text-sm font-medium text-foreground">
              Confirm New Password
            </Label>
            <div className="relative mt-2">
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type={showPasswordFields.confirm ? "text" : "password"}
                value={passwordData.confirmPassword}
                onChange={handlePasswordChange}
                className="border-border bg-background pr-10"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPasswordFields((prev) => ({ ...prev, confirm: !prev.confirm }))}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                {showPasswordFields.confirm ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <Button onClick={handleUpdatePassword} className="mt-6 w-full sm:w-auto">
            Update Password
          </Button>
        </div>
      </Card>

      {/* Section 3: Notification Preferences */}
      <Card className="border border-border bg-card p-6 shadow-sm rounded-xl">
        <h2 className="font-heading text-xl font-bold text-foreground">Notification Preferences</h2>
        <p className="mt-1 text-sm text-muted-foreground">Choose how you want to be notified</p>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
            <div>
              <p className="font-medium text-foreground">Email Notifications</p>
              <p className="text-sm text-muted-foreground">Receive updates via email</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={notifications.emailNotifications}
                onChange={() => handleNotificationChange("emailNotifications")}
                className="peer sr-only h-full w-full cursor-pointer"
              />
              <div className="peer relative h-6 w-11 rounded-full bg-muted transition-colors peer-checked:bg-primary"></div>
              <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-5"></span>
            </label>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
            <div>
              <p className="font-medium text-foreground">SMS Notifications</p>
              <p className="text-sm text-muted-foreground">Receive text messages</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={notifications.smsNotifications}
                onChange={() => handleNotificationChange("smsNotifications")}
                className="peer sr-only h-full w-full cursor-pointer"
              />
              <div className="peer relative h-6 w-11 rounded-full bg-muted transition-colors peer-checked:bg-primary"></div>
              <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-5"></span>
            </label>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
            <div>
              <p className="font-medium text-foreground">Event Updates</p>
              <p className="text-sm text-muted-foreground">Get notified about your events</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={notifications.eventUpdates}
                onChange={() => handleNotificationChange("eventUpdates")}
                className="peer sr-only h-full w-full cursor-pointer"
              />
              <div className="peer relative h-6 w-11 rounded-full bg-muted transition-colors peer-checked:bg-primary"></div>
              <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-5"></span>
            </label>
          </div>

          <div className="flex items-center justify-between rounded-lg border border-border bg-background px-4 py-3">
            <div>
              <p className="font-medium text-foreground">Vendor Quotations</p>
              <p className="text-sm text-muted-foreground">Get alerts for new quotations</p>
            </div>
            <label className="relative inline-flex cursor-pointer items-center">
              <input
                type="checkbox"
                checked={notifications.vendorQuotations}
                onChange={() => handleNotificationChange("vendorQuotations")}
                className="peer sr-only h-full w-full cursor-pointer"
              />
              <div className="peer relative h-6 w-11 rounded-full bg-muted transition-colors peer-checked:bg-primary"></div>
              <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-5"></span>
            </label>
          </div>

          <Button onClick={handleSavePreferences} className="mt-6 w-full sm:w-auto">
            Save Preferences
          </Button>
        </div>
      </Card>

      {/* Section 4: Account Actions */}
      <Card className="border border-red-200 bg-red-50 p-6 shadow-sm rounded-xl">
        <div className="flex items-center gap-3">
          <AlertTriangle className="h-5 w-5 text-red-600" />
          <h2 className="font-heading text-xl font-bold text-red-900">Danger Zone</h2>
        </div>
        <p className="mt-2 text-sm text-red-700">Irreversible and destructive actions</p>

        <div className="mt-6">
          <p className="text-sm text-red-800 mb-4">
            Deleting your account will remove all your data permanently. This action cannot be undone.
          </p>
          <Button
            variant="destructive"
            className="w-full sm:w-auto"
            onClick={() => {
              if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
                setSaveStatus({ type: "success", message: "Account deletion initiated..." });
              }
            }}
          >
            Delete Account
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default function CustomerSettingsPage() {
  return (
    <DashboardLayout
      title="Settings"
      navItems={customerNavItems}
      userType="customer"
    >
      <SettingsContent />
    </DashboardLayout>
  );
}
