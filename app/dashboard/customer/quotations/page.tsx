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
  Eye,
  MessageSquare,
  Check,
  X,
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

interface Quotation {
  id: string;
  eventName: string;
  vendorName: string;
  vendorRating: number;
  quotedPrice: string;
  servicesIncluded: string;
  status: "Pending" | "Accepted" | "Rejected";
}

const mockQuotations: Quotation[] = [
  {
    id: "1",
    eventName: "Birthday Party",
    vendorName: "DJ Plus Entertainment",
    vendorRating: 4.8,
    quotedPrice: "₹15,000",
    servicesIncluded: "Sound System, DJ, Lighting",
    status: "Pending",
  },
  {
    id: "2",
    eventName: "Birthday Party",
    vendorName: "Premium Catering Services",
    vendorRating: 4.6,
    quotedPrice: "₹25,000",
    servicesIncluded: "North Indian, South Indian Buffet",
    status: "Pending",
  },
  {
    id: "3",
    eventName: "Corporate Conference",
    vendorName: "Tech Events Co.",
    vendorRating: 4.9,
    quotedPrice: "₹50,000",
    servicesIncluded: "Stage Setup, AV Equipment, Tech Support",
    status: "Accepted",
  },
  {
    id: "4",
    eventName: "Wedding Celebration",
    vendorName: "Elite Photography Studios",
    vendorRating: 4.7,
    quotedPrice: "₹60,000",
    servicesIncluded: "8-hour Coverage, Candid + Formal, Album",
    status: "Rejected",
  },
];

function getStatusColor(status: Quotation["status"]) {
  switch (status) {
    case "Pending":
      return "bg-amber-500/10 text-amber-700";
    case "Accepted":
      return "bg-green-500/10 text-green-700";
    case "Rejected":
      return "bg-red-500/10 text-red-700";
  }
}

export default function QuotationsPage() {
  return (
    <DashboardLayout
      title="Vendor Quotations"
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
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Vendor Name</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Rating</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Quoted Price</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Services</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Status</th>
                  <th className="px-6 py-4 text-left font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {mockQuotations.map((quotation) => (
                  <tr key={quotation.id} className="hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4 font-medium text-foreground">{quotation.eventName}</td>
                    <td className="px-6 py-4 text-foreground">{quotation.vendorName}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                        <span className="text-foreground">{quotation.vendorRating}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-semibold text-primary">{quotation.quotedPrice}</td>
                    <td className="px-6 py-4 text-muted-foreground max-w-xs">{quotation.servicesIncluded}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(quotation.status)}`}>
                        {quotation.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" title="View Details">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" title="Chat">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        {quotation.status === "Pending" && (
                          <>
                            <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700" title="Accept">
                              <Check className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700" title="Reject">
                              <X className="h-4 w-4" />
                            </Button>
                          </>
                        )}
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
