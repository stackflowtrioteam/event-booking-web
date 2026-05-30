import { DashboardLayout } from '@/components/dashboard/layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  ImageIcon,
  Zap,
  FileText,
  CheckCircle,
  TrendingUp,
  Star,
  Settings,
} from 'lucide-react';

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

export const metadata = {
  title: 'Vendor Dashboard - EventVendor',
  description: 'Manage your event business',
};

export default function VendorDashboard() {
  return (
    <DashboardLayout
      title="Dashboard"
      navItems={vendorNavItems}
      userType="vendor"
    >
      <div className="space-y-8">
        {/* Welcome section */}
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground">
            Welcome back, Sarah!
          </h2>
          <p className="mt-2 text-muted-foreground">
            Here's your business performance overview.
          </p>
        </div>

        {/* Quick stats */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Leads</p>
                <p className="mt-2 text-3xl font-bold text-foreground">12</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Zap className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Quotations</p>
                <p className="mt-2 text-3xl font-bold text-foreground">4</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                <FileText className="h-6 w-6 text-accent" />
              </div>
            </div>
          </Card>

          <Card className="border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Confirmed Bookings</p>
                <p className="mt-2 text-3xl font-bold text-foreground">8</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </Card>

          <Card className="border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">This Month Earnings</p>
                <p className="mt-2 text-3xl font-bold text-foreground">$8,450</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                <TrendingUp className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </Card>
        </div>

        {/* Performance metrics */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border border-border bg-card p-6">
            <h3 className="font-heading text-lg font-bold text-foreground">
              Customer Satisfaction
            </h3>

            <div className="mt-6 space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-foreground">Average Rating</p>
                  <span className="text-2xl font-bold text-foreground">4.8/5</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-secondary">
                  <div className="h-full w-4/5 rounded-full bg-primary" />
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-lg text-yellow-500">
                    ★
                  </span>
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                Based on 24 customer reviews
              </p>
            </div>
          </Card>

          <Card className="border border-border bg-card p-6">
            <h3 className="font-heading text-lg font-bold text-foreground">
              Quick Actions
            </h3>

            <div className="mt-6 space-y-3">
              <Button className="w-full justify-start">
                <Zap className="mr-2 h-4 w-4" />
                View New Leads
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <ImageIcon className="mr-2 h-4 w-4" />
                Update Portfolio
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <FileText className="mr-2 h-4 w-4" />
                Send Quotations
              </Button>
            </div>
          </Card>
        </div>

        {/* Recent leads */}
        <Card className="border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-lg font-bold text-foreground">Recent Leads</h3>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border py-4">
              <div>
                <p className="font-medium text-foreground">Wedding Event - June 15</p>
                <p className="text-sm text-muted-foreground">100+ guests • Budget: $15,000</p>
              </div>
              <Button size="sm">View Details</Button>
            </div>

            <div className="flex items-center justify-between border-b border-border py-4">
              <div>
                <p className="font-medium text-foreground">Corporate Conference - July 20</p>
                <p className="text-sm text-muted-foreground">500+ attendees • Budget: $50,000</p>
              </div>
              <Button size="sm">View Details</Button>
            </div>

            <div className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium text-foreground">Birthday Party - May 30</p>
                <p className="text-sm text-muted-foreground">50 guests • Budget: $3,000</p>
              </div>
              <Button size="sm">View Details</Button>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
