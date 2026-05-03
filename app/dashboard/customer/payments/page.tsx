"use client";

import {
  LayoutDashboard,
  CalendarPlus,
  CalendarCheck,
  FileText,
  CheckCircle,
  CreditCard,
  Star,
  Settings,
  Download,
  FileDown,
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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

interface Payment {
  id: string;
  eventName: string;
  vendor: string;
  paymentType: "Advance" | "Final";
  amount: string;
  status: "Completed" | "Pending" | "Failed";
  date: string;
}

const mockPayments: Payment[] = [
  {
    id: "1",
    eventName: "Corporate Conference",
    vendor: "Tech Events Co.",
    paymentType: "Advance",
    amount: "₹25,000",
    status: "Completed",
    date: "2024-05-01",
  },
  {
    id: "2",
    eventName: "Wedding Celebration",
    vendor: "Elite Photography Studios",
    paymentType: "Advance",
    amount: "₹30,000",
    status: "Completed",
    date: "2024-05-15",
  },
  {
    id: "3",
    eventName: "Birthday Party",
    vendor: "Premium Catering Services",
    paymentType: "Final",
    amount: "₹25,000",
    status: "Pending",
    date: "2024-04-20",
  },
  {
    id: "4",
    eventName: "Anniversary Party",
    vendor: "Decor Dreams Studio",
    paymentType: "Final",
    amount: "₹15,000",
    status: "Completed",
    date: "2024-03-31",
  },
  {
    id: "5",
    eventName: "Graduation Ceremony",
    vendor: "Event Pros Inc.",
    paymentType: "Advance",
    amount: "₹40,000",
    status: "Failed",
    date: "2024-06-01",
  },
];

function getStatusColor(status: Payment["status"]) {
  switch (status) {
    case "Completed":
      return "bg-green-500/10 text-green-700";
    case "Pending":
      return "bg-amber-500/10 text-amber-700";
    case "Failed":
      return "bg-red-500/10 text-red-700";
  }
}

export default function PaymentsPage() {
  return (
    <DashboardLayout
      title="Payment History"
      navItems={customerNavItems}
      userType="customer"
    >
      <div className="space-y-6">
        <Card className="overflow-hidden border border-border bg-card">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border bg-muted/50">
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Event Name</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Vendor</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Type</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Amount</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Status</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Date</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mockPayments.map((payment) => (
                  <tr key={payment.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{payment.eventName}</td>
                    <td className="px-6 py-4 text-foreground">{payment.vendor}</td>
                    <td className="px-6 py-4 text-foreground">
                      <span className="rounded-full bg-secondary/50 px-2 py-1 text-xs font-semibold">
                        {payment.paymentType}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-bold text-primary">{payment.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(payment.status)}`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-muted-foreground">
                      {new Date(payment.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" title="View Invoice">
                          <FileDown className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Download Receipt">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
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
