import { DashboardLayout } from '@/components/dashboard/layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import {
  LayoutDashboard,
  CalendarPlus,
  CalendarCheck,
  FileText,
  CheckCircle,
  CreditCard,
  Star,
  Settings,
} from 'lucide-react';

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

export const metadata = {
  title: 'Customer Dashboard - EventVendor',
  description: 'Manage your events and bookings',
};

export default function CustomerDashboard() {
  return (
    <DashboardLayout
      title="Dashboard"
      navItems={customerNavItems}
      userType="customer"
    >
      <div className="space-y-8">
        {/* Welcome section */}
        <div>
          <h2 className="font-heading text-3xl font-bold text-foreground">
            Welcome back, John!
          </h2>
          <p className="mt-2 text-muted-foreground">
            Here's what's happening with your events today.
          </p>
        </div>

        {/* Quick action cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Active Events</p>
                <p className="mt-2 text-3xl font-bold text-foreground">3</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <CalendarCheck className="h-6 w-6 text-primary" />
              </div>
            </div>
          </Card>

          <Card className="border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pending Quotations</p>
                <p className="mt-2 text-3xl font-bold text-foreground">7</p>
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
                <p className="mt-2 text-3xl font-bold text-foreground">5</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10">
                <CheckCircle className="h-6 w-6 text-green-500" />
              </div>
            </div>
          </Card>

          <Card className="border border-border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Spent</p>
                <p className="mt-2 text-3xl font-bold text-foreground">$4,250</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10">
                <CreditCard className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </Card>
        </div>

        {/* Recent activity */}
        <Card className="border border-border bg-card p-6">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-lg font-bold text-foreground">Recent Activity</h3>
            <Button variant="outline" size="sm">
              View All
            </Button>
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between border-b border-border py-4">
              <div>
                <p className="font-medium text-foreground">Birthday Party Event Created</p>
                <p className="text-sm text-muted-foreground">2 hours ago</p>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                New
              </span>
            </div>

            <div className="flex items-center justify-between border-b border-border py-4">
              <div>
                <p className="font-medium text-foreground">Quotation received from DJ Plus</p>
                <p className="text-sm text-muted-foreground">5 hours ago</p>
              </div>
              <span className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
                Quotation
              </span>
            </div>

            <div className="flex items-center justify-between py-4">
              <div>
                <p className="font-medium text-foreground">Payment confirmed for Catering Service</p>
                <p className="text-sm text-muted-foreground">1 day ago</p>
              </div>
              <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-500">
                Completed
              </span>
            </div>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
