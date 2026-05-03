"use client";

import { useState } from "react";
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
  Edit,
  MapPin,
  Users,
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

interface Event {
  id: string;
  title: string;
  type: string;
  date: string;
  location: string;
  guestCount: number;
  status: "Open" | "Quotation Received" | "Booked";
}

const mockEvents: Event[] = [
  {
    id: "1",
    title: "Birthday Party",
    type: "Birthday Party",
    date: "2024-04-15",
    location: "Mumbai, Maharashtra",
    guestCount: 50,
    status: "Open",
  },
  {
    id: "2",
    title: "Corporate Conference",
    type: "Corporate Event",
    date: "2024-05-20",
    location: "Bangalore, Karnataka",
    guestCount: 200,
    status: "Quotation Received",
  },
  {
    id: "3",
    title: "Wedding Celebration",
    type: "Wedding",
    date: "2024-06-10",
    location: "Delhi, India",
    guestCount: 300,
    status: "Booked",
  },
  {
    id: "4",
    title: "Anniversary Party",
    type: "Anniversary",
    date: "2024-07-05",
    location: "Pune, Maharashtra",
    guestCount: 75,
    status: "Open",
  },
];

function getStatusColor(status: Event["status"]) {
  switch (status) {
    case "Open":
      return "bg-blue-500/10 text-blue-700";
    case "Quotation Received":
      return "bg-amber-500/10 text-amber-700";
    case "Booked":
      return "bg-green-500/10 text-green-700";
  }
}

export default function MyEventsPage() {
  return (
    <DashboardLayout
      title="My Events"
      navItems={customerNavItems}
      userType="customer"
    >
      <div className="space-y-6">
        {/* Grid of event cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockEvents.map((event) => (
            <Card key={event.id} className="flex flex-col overflow-hidden border border-border bg-card shadow-md">
              <div className="flex-1 space-y-4 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="font-heading text-lg font-bold text-foreground">
                      {event.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{event.type}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <CalendarCheck className="h-4 w-4" />
                    <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{event.guestCount} guests</span>
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
                  Quotations
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
