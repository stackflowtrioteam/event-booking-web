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
  Upload,
  Trash2,
  CheckCircle2,
  Clock,
  AlertCircle,
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

export default function PortfolioPage() {
  const [portfolioImages, setPortfolioImages] = useState<string[]>(['sample-1.jpg', 'sample-2.jpg']);
  const [formData, setFormData] = useState({
    businessName: 'Elite Event Catering',
    category: 'Catering',
    city: 'Mumbai',
    description: 'Premium catering services for weddings and corporate events.',
    startingPrice: '₹5,000',
    services: 'Menu customization, Setup & Cleanup, On-site staff, Beverage service',
  });

  return (
    <DashboardLayout
      title="Vendor Portfolio"
      navItems={vendorNavItems}
      userType="vendor"
    >
      <div className="space-y-8">
        {/* Verification Status Card */}
        <div className="rounded-lg border border-green-200 bg-green-50 p-6">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
            <div>
              <h3 className="font-heading font-bold text-green-900">Verified & Approved</h3>
              <p className="text-sm text-green-800">Your portfolio has been approved. You are ready to receive quotation requests.</p>
            </div>
          </div>
        </div>

        {/* Portfolio Form */}
        <Card className="border border-border bg-card p-8">
          <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Edit Portfolio</h2>

          <form className="space-y-8">
            {/* Business Info Section */}
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">Business Information</h3>
              <div className="space-y-4">
                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">Business Name</Label>
                  <Input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                    placeholder="Your business name"
                    className="w-full"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">Category</Label>
                    <select className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground">
                      <option>Catering</option>
                      <option>Photography</option>
                      <option>Decorations</option>
                      <option>Venue</option>
                      <option>Entertainment</option>
                    </select>
                  </div>
                  <div>
                    <Label className="block text-sm font-medium text-foreground mb-2">City</Label>
                    <Input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="Your city"
                    />
                  </div>
                </div>
                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">Description</Label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Describe your services"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* Portfolio Upload Section */}
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">Portfolio Gallery</h3>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                <p className="text-foreground font-medium">Upload images of past events</p>
                <p className="text-sm text-muted-foreground">Drag and drop or click to browse</p>
                <Button variant="outline" className="mt-4">Choose Files</Button>
              </div>

              {portfolioImages.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {portfolioImages.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <div className="w-full aspect-square bg-secondary rounded-lg flex items-center justify-center">
                        <ImageIcon className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <button className="absolute top-2 right-2 p-1 bg-destructive rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        <Trash2 className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Pricing Section */}
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-4">Pricing</h3>
              <div className="space-y-4">
                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">Starting Price</Label>
                  <Input
                    type="text"
                    value={formData.startingPrice}
                    onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
                    placeholder="₹5,000"
                  />
                </div>
                <div>
                  <Label className="block text-sm font-medium text-foreground mb-2">Services Offered</Label>
                  <textarea
                    value={formData.services}
                    onChange={(e) => setFormData({ ...formData, services: e.target.value })}
                    placeholder="List your services"
                    className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
                    rows={3}
                  />
                </div>
              </div>
            </div>

            <Button size="lg" className="w-full">
              Save Portfolio
            </Button>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
}
