'use client';

import {
  LayoutDashboard,
  ImageIcon,
  Zap,
  FileText,
  CheckCircle,
  TrendingUp,
  Star,
  Settings,
  MessageSquare,
  Eye,
} from 'lucide-react';
import { DashboardLayout } from '@/components/dashboard/layout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

const mockBookings = [
  {
    id: 1,
    eventName: 'Wedding Reception',
    customerName: 'Priya Sharma',
    eventType: 'Wedding',
    eventDate: '2024-06-15',
    location: 'Mumbai, Maharashtra',
    totalAmount: '₹2,50,000',
    status: 'Upcoming',
  },
  {
    id: 2,
    eventName: 'Corporate Conference',
    customerName: 'Rajesh Kumar',
    eventType: 'Corporate Event',
    eventDate: '2024-04-20',
    location: 'Bangalore, Karnataka',
    totalAmount: '₹12,00,000',
    status: 'Completed',
  },
  {
    id: 3,
    eventName: 'Birthday Party',
    customerName: 'Aisha Patel',
    eventType: 'Birthday Party',
    eventDate: '2024-05-30',
    location: 'Delhi, Delhi',
    totalAmount: '₹75,000',
    status: 'Upcoming',
  },
];

export default function BookingsPage() {
  return (
    <DashboardLayout
      title="My Bookings"
      navItems={vendorNavItems}
      userType="vendor"
    >
      <div className="space-y-6">
        {/* Summary stats */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card className="border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">Total Bookings</p>
            <p className="text-2xl font-bold text-foreground mt-1">{mockBookings.length}</p>
          </Card>
          <Card className="border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">Total Earnings</p>
            <p className="text-2xl font-bold text-green-600 mt-1">₹15,25,000</p>
          </Card>
        </div>

        {/* Bookings Table */}
        <Card className="border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Event Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Customer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Location</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mockBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">{booking.eventName}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{booking.customerName}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{booking.eventType}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(booking.eventDate).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">{booking.location}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-foreground">{booking.totalAmount}</td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                        booking.status === 'Upcoming'
                          ? 'bg-blue-50 text-blue-700'
                          : 'bg-green-50 text-green-700'
                      }`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2 flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <Eye className="h-4 w-4" />
                        Details
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Chat
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}
