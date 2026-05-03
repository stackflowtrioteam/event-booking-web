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
  MapPin,
  Users,
  DollarSign,
  Calendar,
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

const mockLeads = [
  {
    id: 1,
    title: 'Wedding Reception',
    type: 'Wedding',
    city: 'Mumbai',
    budget: '₹3,00,000 - ₹5,00,000',
    guests: 200,
    date: '2024-06-15',
  },
  {
    id: 2,
    title: 'Corporate Conference',
    type: 'Corporate Event',
    city: 'Bangalore',
    budget: '₹10,00,000 - ₹15,00,000',
    guests: 500,
    date: '2024-07-20',
  },
  {
    id: 3,
    title: 'Birthday Party',
    type: 'Birthday Party',
    city: 'Delhi',
    budget: '₹50,000 - ₹1,00,000',
    guests: 50,
    date: '2024-05-30',
  },
  {
    id: 4,
    title: 'Product Launch',
    type: 'Corporate Event',
    city: 'Mumbai',
    budget: '₹5,00,000 - ₹8,00,000',
    guests: 300,
    date: '2024-08-10',
  },
];

export default function EventLeadsPage() {
  return (
    <DashboardLayout
      title="Available Event Leads"
      navItems={vendorNavItems}
      userType="vendor"
    >
      <div className="space-y-8">
        {/* Filter bar */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <h2 className="font-heading text-xl font-bold text-foreground">
            {mockLeads.length} Active Leads
          </h2>
          <div className="flex gap-2 flex-wrap">
            <select className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm">
              <option>All Types</option>
              <option>Wedding</option>
              <option>Corporate Event</option>
              <option>Birthday Party</option>
            </select>
            <select className="px-3 py-2 border border-border rounded-lg bg-background text-foreground text-sm">
              <option>All Cities</option>
              <option>Mumbai</option>
              <option>Bangalore</option>
              <option>Delhi</option>
            </select>
          </div>
        </div>

        {/* Leads Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockLeads.map((lead) => (
            <Card
              key={lead.id}
              className="border border-border bg-card p-6 hover:shadow-lg transition-shadow"
            >
              <div className="space-y-4">
                <div>
                  <h3 className="font-heading text-lg font-bold text-foreground">
                    {lead.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{lead.type}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <MapPin className="h-4 w-4 text-accent" />
                    {lead.city}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <DollarSign className="h-4 w-4 text-primary" />
                    {lead.budget}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Users className="h-4 w-4 text-primary" />
                    {lead.guests} guests
                  </div>
                  <div className="flex items-center gap-2 text-sm text-foreground">
                    <Calendar className="h-4 w-4 text-accent" />
                    {new Date(lead.date).toLocaleDateString()}
                  </div>
                </div>

                <div className="border-t border-border pt-4 space-y-2">
                  <Button className="w-full">Send Quotation</Button>
                  <Button variant="outline" className="w-full">View Details</Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
