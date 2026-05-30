'use client';

import { useState } from 'react';
import {
  LayoutDashboard,
  ImageIcon,
  Zap,
  FileText,
  CheckCircle,
  TrendingUp,
  Star,
  Settings,
  Eye,
  EyeOff,
} from 'lucide-react';
import { DashboardLayout } from '@/components/dashboard/layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const vendorNavItems = [
  { label: 'Dashboard', href: '/dashboard/vendor', icon: <LayoutDashboard className="h-5 w-5" /> },
  { label: 'Portfolio', href: '/dashboard/vendor/portfolio', icon: <ImageIcon className="h-5 w-5" /> },
  { label: 'Event Leads', href: '/dashboard/vendor/leads', icon: <Zap className="h-5 w-5" /> },
  { label: 'My Quotations', href: '/dashboard/vendor/quotations', icon: <FileText className="h-5 w-5" /> },
  { label: 'Bookings', href: '/dashboard/vendor/bookings', icon: <CheckCircle className="h-5 w-5" /> },
  { label: 'Earnings', href: '/dashboard/vendor/earnings', icon: <TrendingUp className="h-5 w-5" /> },
  { label: 'Reviews', href: '/dashboard/vendor/reviews', icon: <Star className="h-5 w-5" /> },
  { label: 'Settings', href: '/dashboard/vendor/settings', icon: <Settings className="h-5 w-5" /> },
];

export default function SettingsPage() {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [profileData, setProfileData] = useState({
    businessName: 'Elite Event Catering',
    ownerName: 'John Smith',
    email: 'john@elitecatering.com',
    phone: '+91 98765 43210',
    city: 'Mumbai',
    category: 'Catering',
    description: 'Premium catering services for weddings and corporate events.',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  return (
    <DashboardLayout
      title="Account Settings"
      navItems={vendorNavItems}
      userType="vendor"
    >
      <div className="space-y-8 max-w-3xl">
        {/* Profile Information */}
        <Card className="border border-border bg-card p-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Profile Information
          </h2>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">
                  Business Name
                </Label>
                <Input
                  type="text"
                  value={profileData.businessName}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      businessName: e.target.value,
                    })
                  }
                  placeholder="Business name"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">
                  Owner Name
                </Label>
                <Input
                  type="text"
                  value={profileData.ownerName}
                  onChange={(e) =>
                    setProfileData({
                      ...profileData,
                      ownerName: e.target.value,
                    })
                  }
                  placeholder="Owner name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </Label>
                <Input
                  type="email"
                  value={profileData.email}
                  onChange={(e) =>
                    setProfileData({ ...profileData, email: e.target.value })
                  }
                  placeholder="Email address"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">
                  Phone
                </Label>
                <Input
                  type="tel"
                  value={profileData.phone}
                  onChange={(e) =>
                    setProfileData({ ...profileData, phone: e.target.value })
                  }
                  placeholder="Phone number"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">
                  City
                </Label>
                <Input
                  type="text"
                  value={profileData.city}
                  onChange={(e) =>
                    setProfileData({ ...profileData, city: e.target.value })
                  }
                  placeholder="City"
                />
              </div>
              <div>
                <Label className="block text-sm font-medium text-foreground mb-2">
                  Category
                </Label>
                <select className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground">
                  <option>Catering</option>
                  <option>Photography</option>
                  <option>Decorations</option>
                  <option>Venue</option>
                  <option>Entertainment</option>
                </select>
              </div>
            </div>

            <div>
              <Label className="block text-sm font-medium text-foreground mb-2">
                Description
              </Label>
              <textarea
                value={profileData.description}
                onChange={(e) =>
                  setProfileData({
                    ...profileData,
                    description: e.target.value,
                  })
                }
                placeholder="Describe your services"
                className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                rows={4}
              />
            </div>

            <Button size="lg">Save Changes</Button>
          </form>
        </Card>

        {/* Password Settings */}
        <Card className="border border-border bg-card p-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">
            Change Password
          </h2>

          <form className="space-y-4">
            <div>
              <Label className="block text-sm font-medium text-foreground mb-2">
                Current Password
              </Label>
              <div className="relative">
                <Input
                  type={showCurrentPassword ? 'text' : 'password'}
                  value={passwordData.currentPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      currentPassword: e.target.value,
                    })
                  }
                  placeholder="Enter current password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showCurrentPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <Label className="block text-sm font-medium text-foreground mb-2">
                New Password
              </Label>
              <div className="relative">
                <Input
                  type={showNewPassword ? 'text' : 'password'}
                  value={passwordData.newPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      newPassword: e.target.value,
                    })
                  }
                  placeholder="Enter new password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowNewPassword(!showNewPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showNewPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <div>
              <Label className="block text-sm font-medium text-foreground mb-2">
                Confirm Password
              </Label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={passwordData.confirmPassword}
                  onChange={(e) =>
                    setPasswordData({
                      ...passwordData,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="Confirm new password"
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showConfirmPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            <Button size="lg" className="w-full">
              Update Password
            </Button>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
}
