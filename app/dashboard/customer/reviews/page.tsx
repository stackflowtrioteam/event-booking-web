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
} from "lucide-react";
import { DashboardLayout } from "@/components/dashboard/layout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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

interface Vendor {
  id: string;
  name: string;
  eventName: string;
  serviceType: string;
  reviewed: boolean;
  rating?: number;
  review?: string;
}

const mockVendors: Vendor[] = [
  {
    id: "1",
    name: "Tech Events Co.",
    eventName: "Corporate Conference",
    serviceType: "Event Management",
    reviewed: true,
    rating: 5,
    review: "Excellent service and professional team. Highly recommended!",
  },
  {
    id: "2",
    name: "Elite Photography Studios",
    eventName: "Wedding Celebration",
    serviceType: "Photography",
    reviewed: true,
    rating: 4,
    review: "Great photography quality and timely delivery of photos.",
  },
  {
    id: "3",
    name: "Premium Catering Services",
    eventName: "Birthday Party",
    serviceType: "Catering",
    reviewed: false,
  },
  {
    id: "4",
    name: "Decor Dreams Studio",
    eventName: "Anniversary Party",
    serviceType: "Decoration",
    reviewed: true,
    rating: 5,
    review: "Beautiful decorations and excellent attention to detail!",
  },
];

function StarRating({ rating, onChange }: { rating: number; onChange: (n: number) => void }) {
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => onChange(star)}
          className="transition-transform hover:scale-110"
        >
          <Star
            className={`h-6 w-6 ${
              star <= rating
                ? "fill-amber-400 text-amber-400"
                : "fill-muted text-muted-foreground"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [reviews, setReviews] = useState<Record<string, string>>({});

  const handleSubmit = (vendorId: string) => {
    console.log(`[v0] Review submitted for vendor ${vendorId}: ${ratings[vendorId]} stars, "${reviews[vendorId]}"`);
  };

  return (
    <DashboardLayout
      title="My Reviews"
      navItems={customerNavItems}
      userType="customer"
    >
      <div className="space-y-6">
        <div className="grid gap-6">
          {mockVendors.map((vendor) => (
            <Card key={vendor.id} className="overflow-hidden border border-border bg-card p-6">
              <div className="mb-6 space-y-2">
                <h3 className="font-heading text-lg font-bold text-foreground">
                  {vendor.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  Service: <span className="font-medium text-foreground">{vendor.serviceType}</span> for {vendor.eventName}
                </p>
              </div>

              {vendor.reviewed ? (
                <div className="space-y-4 rounded-lg bg-muted/30 p-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-semibold text-foreground">Your Rating:</span>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-5 w-5 ${
                              star <= (vendor.rating || 0)
                                ? "fill-amber-400 text-amber-400"
                                : "fill-muted text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-amber-700 font-semibold">{vendor.rating} out of 5 stars</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground mb-2">Your Review:</p>
                    <p className="text-sm text-muted-foreground italic">"{vendor.review}"</p>
                  </div>
                  <div className="flex gap-2 pt-4 border-t border-border">
                    <Button variant="outline" size="sm">
                      Edit Review
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      Delete Review
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <Label className="mb-3 block text-sm font-semibold text-foreground">Rate this vendor</Label>
                    <StarRating
                      rating={ratings[vendor.id] || 0}
                      onChange={(rating) => setRatings({ ...ratings, [vendor.id]: rating })}
                    />
                  </div>

                  <div>
                    <Label htmlFor={`review-${vendor.id}`} className="mb-2 block text-sm font-semibold text-foreground">
                      Write your review
                    </Label>
                    <textarea
                      id={`review-${vendor.id}`}
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder-muted-foreground focus:border-primary focus:outline-none"
                      rows={4}
                      placeholder="Share your experience with this vendor..."
                      value={reviews[vendor.id] || ""}
                      onChange={(e) => setReviews({ ...reviews, [vendor.id]: e.target.value })}
                    />
                  </div>

                  <Button
                    onClick={() => handleSubmit(vendor.id)}
                    disabled={!ratings[vendor.id] || !reviews[vendor.id]}
                  >
                    Submit Review
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
