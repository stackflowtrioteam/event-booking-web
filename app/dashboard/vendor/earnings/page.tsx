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
  Download,
  FileText as FileIcon,
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

const mockTransactions = [
  {
    id: 1,
    eventName: 'Wedding Reception',
    customerName: 'Priya Sharma',
    paymentType: 'Advance',
    amount: '₹1,25,000',
    date: '2024-02-15',
    status: 'Completed',
  },
  {
    id: 2,
    eventName: 'Wedding Reception',
    customerName: 'Priya Sharma',
    paymentType: 'Final',
    amount: '₹1,25,000',
    date: '2024-06-20',
    status: 'Pending',
  },
  {
    id: 3,
    eventName: 'Corporate Conference',
    customerName: 'Rajesh Kumar',
    paymentType: 'Advance',
    amount: '₹6,00,000',
    date: '2024-02-28',
    status: 'Completed',
  },
  {
    id: 4,
    eventName: 'Corporate Conference',
    customerName: 'Rajesh Kumar',
    paymentType: 'Final',
    amount: '₹6,00,000',
    date: '2024-04-25',
    status: 'Completed',
  },
];

function getStatusColor(status: string) {
  return status === 'Completed'
    ? 'bg-green-50 text-green-700'
    : 'bg-yellow-50 text-yellow-700';
}

export default function EarningsPage() {
  return (
    <DashboardLayout
      title="Earnings Overview"
      navItems={vendorNavItems}
      userType="vendor"
    >
      <div className="space-y-8">
        {/* Stats Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="border border-border bg-card p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Total Earnings</p>
              <p className="text-3xl font-bold text-foreground mt-2">₹25,25,000</p>
              <p className="text-xs text-muted-foreground mt-2">All time</p>
            </div>
          </Card>

          <Card className="border border-border bg-card p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">This Month</p>
              <p className="text-3xl font-bold text-primary mt-2">₹3,50,000</p>
              <p className="text-xs text-muted-foreground mt-2">March 2024</p>
            </div>
          </Card>

          <Card className="border border-border bg-card p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Pending Payments</p>
              <p className="text-3xl font-bold text-yellow-600 mt-2">₹1,25,000</p>
              <p className="text-xs text-muted-foreground mt-2">2 pending</p>
            </div>
          </Card>

          <Card className="border border-border bg-card p-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Completed Payments</p>
              <p className="text-3xl font-bold text-green-600 mt-2">₹24,00,000</p>
              <p className="text-xs text-muted-foreground mt-2">8 transactions</p>
            </div>
          </Card>
        </div>

        {/* Transaction History */}
        <Card className="border border-border bg-card overflow-hidden">
          <div className="px-6 py-4 border-b border-border">
            <h3 className="font-heading text-lg font-bold text-foreground">
              Transaction History
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-secondary border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Event Name</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Customer</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Type</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Amount</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mockTransactions.map((transaction) => (
                  <tr key={transaction.id} className="hover:bg-secondary/50 transition-colors">
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {transaction.eventName}
                    </td>
                    <td className="px-6 py-4 text-sm text-foreground">
                      {transaction.customerName}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {transaction.paymentType}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-foreground">
                      {transaction.amount}
                    </td>
                    <td className="px-6 py-4 text-sm text-muted-foreground">
                      {new Date(transaction.date).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 text-sm">
                      <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(transaction.status)}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm space-x-2 flex gap-2">
                      <Button variant="outline" size="sm" className="gap-2">
                        <FileIcon className="h-4 w-4" />
                        Invoice
                      </Button>
                      <Button variant="outline" size="sm" className="gap-2">
                        <Download className="h-4 w-4" />
                        Receipt
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
