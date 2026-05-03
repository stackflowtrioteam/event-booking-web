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
  Clock,
  CheckCircle2,
  X,
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

const mockQuotations = [
  {
    id: 1,
    eventName: 'Wedding Reception',
    customerName: 'Priya Sharma',
    price: '₹2,50,000',
    dateSent: '2024-03-01',
    status: 'Pending',
  },
  {
    id: 2,
    eventName: 'Corporate Conference',
    customerName: 'Rajesh Kumar',
    price: '₹12,00,000',
    dateSent: '2024-02-28',
    status: 'Accepted',
  },
  {
    id: 3,
    eventName: 'Birthday Party',
    customerName: 'Aisha Patel',
    price: '₹75,000',
    dateSent: '2024-02-25',
    status: 'Rejected',
  },
  {
    id: 4,
    eventName: 'Product Launch',
    customerName: 'Vikram Singh',
    price: '₹6,50,000',
    dateSent: '2024-02-20',
    status: 'Pending',
  },
];

function getStatusIcon(status: string) {
  switch (status) {
    case 'Accepted':
      return <CheckCircle2 className="h-4 w-4 text-green-600" />;
    case 'Rejected':
      return <X className="h-4 w-4 text-destructive" />;
    case 'Pending':
      return <Clock className="h-4 w-4 text-yellow-600" />;
  }
}

function getStatusColor(status: string) {
  switch (status) {
    case 'Accepted':
      return 'bg-green-50 text-green-700';
    case 'Rejected':
      return 'bg-red-50 text-red-700';
    case 'Pending':
      return 'bg-yellow-50 text-yellow-700';
  }
}

export default function QuotationsPage() {
  return (
    <DashboardLayout
      title="Sent Quotations"
      navItems={vendorNavItems}
      userType="vendor"
    >
      <div className="space-y-6">
        {/* Summary stats */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">Total Quotations</p>
            <p className="text-2xl font-bold text-foreground mt-1">{mockQuotations.length}</p>
          </Card>
          <Card className="border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">Pending</p>
            <p className="text-2xl font-bold text-yellow-600 mt-1">
              {mockQuotations.filter(q => q.status === 'Pending').length}
            </p>
          </Card>
          <Card className="border border-border bg-card p-4">
            <p className="text-sm text-muted-foreground">Accepted</p>
            <p className="text-2xl font-bold text-green-600 mt-1">
              {mockQuotations.filter(q => q.status === 'Accepted').length}
            </p>
          </Card>
        </div>

        {/* Quotations Table */}
        <Card className="border border-border bg-card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Event Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Customer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date Sent</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mockQuotations.map((quotation) => (
                  <tr key={quotation.id} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-foreground">{quotation.eventName}</td>
                    <td className="px-6 py-4 text-sm text-foreground">{quotation.customerName}</td>
                    <td className="px-6 py-4 text-sm font-semibold text-foreground">{quotation.price}</td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(quotation.dateSent).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(quotation.status)}`}>
                        {getStatusIcon(quotation.status)}
                        {quotation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <Button variant="outline" size="sm">View</Button>
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
