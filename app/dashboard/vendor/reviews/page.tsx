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
} from 'lucide-react';
import { DashboardLayout } from '@/components/dashboard/layout';
import { Card } from '@/components/ui/card';

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

const mockReviews = [
  {
    id: 1,
    customerName: 'Priya Sharma',
    eventName: 'Wedding Reception',
    rating: 5,
    comment:
      'Excellent catering service! The food was delicious and the staff was very professional. Highly recommended!',
    date: '2024-06-20',
  },
  {
    id: 2,
    customerName: 'Rajesh Kumar',
    eventName: 'Corporate Conference',
    rating: 4,
    comment:
      'Great service overall. The team was efficient and accommodating. There were minor delays but nothing major.',
    date: '2024-04-25',
  },
  {
    id: 3,
    customerName: 'Aisha Patel',
    eventName: 'Birthday Party',
    rating: 5,
    comment:
      'Perfect! Everything was exactly as planned. Great quality and amazing presentation. Will definitely book again!',
    date: '2024-06-05',
  },
  {
    id: 4,
    customerName: 'Vikram Singh',
    eventName: 'Product Launch',
    rating: 4,
    comment:
      'Good service with professional staff. The presentation was well organized. Few suggestions for next time.',
    date: '2024-05-15',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-muted-foreground'
          }`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const averageRating =
    mockReviews.reduce((acc, review) => acc + review.rating, 0) / mockReviews.length;

  return (
    <DashboardLayout
      title="Customer Reviews"
      navItems={vendorNavItems}
      userType="vendor"
    >
      <div className="space-y-8">
        {/* Rating Summary */}
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border border-border bg-card p-8">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">
              Overall Rating
            </h3>
            <div className="flex items-end gap-6">
              <div>
                <p className="text-5xl font-bold text-foreground">
                  {averageRating.toFixed(1)}
                </p>
                <p className="text-sm text-muted-foreground mt-1">out of 5</p>
              </div>
              <div>
                <StarRating rating={Math.round(averageRating)} />
                <p className="text-sm text-muted-foreground mt-3">
                  Based on {mockReviews.length} reviews
                </p>
              </div>
            </div>
          </Card>

          <Card className="border border-border bg-card p-8">
            <h3 className="font-heading text-lg font-bold text-foreground mb-4">
              Rating Distribution
            </h3>
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground w-8">{stars}★</span>
                  <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full bg-yellow-400 rounded-full"
                      style={{
                        width: `${
                          (mockReviews.filter((r) => r.rating === stars).length /
                            mockReviews.length) *
                          100
                        }%`,
                      }}
                    />
                  </div>
                  <span className="text-sm text-muted-foreground w-6 text-right">
                    {mockReviews.filter((r) => r.rating === stars).length}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Reviews Grid */}
        <div className="space-y-4">
          <h3 className="font-heading text-xl font-bold text-foreground">
            Recent Reviews
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {mockReviews.map((review) => (
              <Card
                key={review.id}
                className="border border-border bg-card p-6"
              >
                <div className="space-y-3">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-semibold text-foreground">
                          {review.customerName}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {review.eventName}
                        </p>
                      </div>
                      <StarRating rating={review.rating} />
                    </div>
                  </div>

                  <p className="text-sm text-foreground">{review.comment}</p>

                  <p className="text-xs text-muted-foreground">
                    {new Date(review.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
