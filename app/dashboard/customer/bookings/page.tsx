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
  CreditCard as PayIcon,
  Calendar,
  MapPin,
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

interface Booking {
  id: string;
  eventName: string;
  vendorName: string;
  serviceType: string;
  eventDate: string;
  location: string;
  status: "Confirmed" | "Pending" | "Completed";
}

const mockBookings: Booking[] = [
  {
    id: "1",
    eventName: "Corporate Conference",
    vendorName: "Tech Events Co.",
    serviceType: "Event Management & AV Support",
    eventDate: "2024-05-20",
    location: "Bangalore, Karnataka",
    status: "Confirmed",
  },
  {
    id: "2",
    eventName: "Wedding Celebration",
    vendorName: "Elite Photography Studios",
    serviceType: "Professional Photography & Videography",
    eventDate: "2024-06-10",
    location: "Delhi, India",
    status: "Confirmed",
  },
  {
    id: "3",
    eventName: "Birthday Party",
    vendorName: "Premium Catering Services",
    serviceType: "Catering & Food Service",
    eventDate: "2024-04-15",
    location: "Mumbai, Maharashtra",
    status: "Pending",
  },
  {
    id: "4",
    eventName: "Anniversary Party",
    vendorName: "Decor Dreams Studio",
    serviceType: "Decoration & Theme Setup",
    eventDate: "2024-03-30",
    location: "Pune, Maharashtra",
    status: "Completed",
  },
];

function getStatusColor(status: Booking["status"]) {
  switch (status) {
    case "Confirmed":
      return "bg-green-500/10 text-green-700";
    case "Pending":
      return "bg-amber-500/10 text-amber-700";
    case "Completed":
      return "bg-blue-500/10 text-blue-700";
  }
}

export default function BookingsPage() {
  return (
    <DashboardLayout
      title="My Bookings"
      navItems={customerNavItems}
      userType="customer"
    >
      <div className="space-y-6">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {mockBookings.map((booking) => (
            <Card key={booking.id} className="flex flex-col overflow-hidden border border-border bg-card shadow-md">
              <div className="flex-1 space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {booking.eventName}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {booking.vendorName}
                    </p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold whitespace-nowrap ${getStatusColor(booking.status)}`}>
                    {booking.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <p className="text-foreground font-medium">{booking.serviceType}</p>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(booking.eventDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{booking.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 border-t border-border bg-muted/30 p-4">
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <Eye className="h-4 w-4" />
                  Details
                </Button>
                <Button variant="outline" size="sm" className="flex-1 gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Chat
                </Button>
                <Button size="sm" className="flex-1 gap-2" disabled={booking.status === "Completed"}>
                  <PayIcon className="h-4 w-4" />
                  Payment
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
