// 'use client';

// import { useState } from 'react';
// import {
//   LayoutDashboard,
//   ImageIcon,
//   Zap,
//   FileText,
//   CheckCircle,
//   TrendingUp,
//   Star,
//   Settings,
//   Upload,
//   Trash2,
//   CheckCircle2,
//   Clock,
//   AlertCircle,
// } from 'lucide-react';
// import { DashboardLayout } from '@/components/dashboard/layout';
// import { Card } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';

// const vendorNavItems = [
//   { label: 'Dashboard', href: '/dashboard/vendor', icon: <LayoutDashboard className="h-5 w-5" /> },
//   { label: 'Portfolio', href: '/dashboard/vendor/portfolio', icon: <ImageIcon className="h-5 w-5" /> },
//   { label: 'Event Leads', href: '/dashboard/vendor/leads', icon: <Zap className="h-5 w-5" /> },
//   { label: 'My Quotations', href: '/dashboard/vendor/quotations', icon: <FileText className="h-5 w-5" /> },
//   { label: 'Bookings', href: '/dashboard/vendor/bookings', icon: <CheckCircle className="h-5 w-5" /> },
//   { label: 'Earnings', href: '/dashboard/vendor/earnings', icon: <TrendingUp className="h-5 w-5" /> },
//   { label: 'Reviews', href: '/dashboard/vendor/reviews', icon: <Star className="h-5 w-5" /> },
//   { label: 'Settings', href: '/dashboard/vendor/settings', icon: <Settings className="h-5 w-5" /> },
// ];

// export default function PortfolioPage() {
//   const [portfolioImages, setPortfolioImages] = useState<string[]>(['sample-1.jpg', 'sample-2.jpg']);
//   const [formData, setFormData] = useState({
//     businessName: 'Elite Event Catering',
//     category: 'Catering',
//     city: 'Mumbai',
//     description: 'Premium catering services for weddings and corporate events.',
//     startingPrice: '₹5,000',
//     services: 'Menu customization, Setup & Cleanup, On-site staff, Beverage service',
//   });

//   return (
//     <DashboardLayout
//       title="Vendor Portfolio"
//       navItems={vendorNavItems}
//       userType="vendor"
//     >
//       <div className="space-y-8">
//         {/* Verification Status Card */}
//         <div className="rounded-lg border border-green-200 bg-green-50 p-6">
//           <div className="flex items-start gap-4">
//             <CheckCircle2 className="h-6 w-6 text-green-600 flex-shrink-0" />
//             <div>
//               <h3 className="font-heading font-bold text-green-900">Verified & Approved</h3>
//               <p className="text-sm text-green-800">Your portfolio has been approved. You are ready to receive quotation requests.</p>
//             </div>
//           </div>
//         </div>

//         {/* Portfolio Form */}
//         <Card className="border border-border bg-card p-8">
//           <h2 className="font-heading text-2xl font-bold text-foreground mb-6">Edit Portfolio</h2>

//           <form className="space-y-8">
//             {/* Business Info Section */}
//             <div>
//               <h3 className="font-heading text-lg font-bold text-foreground mb-4">Business Information</h3>
//               <div className="space-y-4">
//                 <div>
//                   <Label className="block text-sm font-medium text-foreground mb-2">Business Name</Label>
//                   <Input
//                     type="text"
//                     value={formData.businessName}
//                     onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
//                     placeholder="Your business name"
//                     className="w-full"
//                   />
//                 </div>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <Label className="block text-sm font-medium text-foreground mb-2">Category</Label>
//                     <select className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground">
//                       <option>Catering</option>
//                       <option>Photography</option>
//                       <option>Decorations</option>
//                       <option>Venue</option>
//                       <option>Entertainment</option>
//                     </select>
//                   </div>
//                   <div>
//                     <Label className="block text-sm font-medium text-foreground mb-2">City</Label>
//                     <Input
//                       type="text"
//                       value={formData.city}
//                       onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//                       placeholder="Your city"
//                     />
//                   </div>
//                 </div>
//                 <div>
//                   <Label className="block text-sm font-medium text-foreground mb-2">Description</Label>
//                   <textarea
//                     value={formData.description}
//                     onChange={(e) => setFormData({ ...formData, description: e.target.value })}
//                     placeholder="Describe your services"
//                     className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
//                     rows={4}
//                   />
//                 </div>
//               </div>
//             </div>

//             {/* Portfolio Upload Section */}
//             <div>
//               <h3 className="font-heading text-lg font-bold text-foreground mb-4">Portfolio Gallery</h3>
//               <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
//                 <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
//                 <p className="text-foreground font-medium">Upload images of past events</p>
//                 <p className="text-sm text-muted-foreground">Drag and drop or click to browse</p>
//                 <Button variant="outline" className="mt-4">Choose Files</Button>
//               </div>

//               {portfolioImages.length > 0 && (
//                 <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
//                   {portfolioImages.map((img, idx) => (
//                     <div key={idx} className="relative group">
//                       <div className="w-full aspect-square bg-secondary rounded-lg flex items-center justify-center">
//                         <ImageIcon className="h-8 w-8 text-muted-foreground" />
//                       </div>
//                       <button className="absolute top-2 right-2 p-1 bg-destructive rounded opacity-0 group-hover:opacity-100 transition-opacity">
//                         <Trash2 className="h-4 w-4 text-white" />
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>

//             {/* Pricing Section */}
//             <div>
//               <h3 className="font-heading text-lg font-bold text-foreground mb-4">Pricing</h3>
//               <div className="space-y-4">
//                 <div>
//                   <Label className="block text-sm font-medium text-foreground mb-2">Starting Price</Label>
//                   <Input
//                     type="text"
//                     value={formData.startingPrice}
//                     onChange={(e) => setFormData({ ...formData, startingPrice: e.target.value })}
//                     placeholder="₹5,000"
//                   />
//                 </div>
//                 <div>
//                   <Label className="block text-sm font-medium text-foreground mb-2">Services Offered</Label>
//                   <textarea
//                     value={formData.services}
//                     onChange={(e) => setFormData({ ...formData, services: e.target.value })}
//                     placeholder="List your services"
//                     className="w-full px-3 py-2 border border-border rounded-lg bg-background text-foreground"
//                     rows={3}
//                   />
//                 </div>
//               </div>
//             </div>

//             <Button size="lg" className="w-full">
//               Save Portfolio
//             </Button>
//           </form>
//         </Card>
//       </div>
//     </DashboardLayout>
//   );
// }
"use client";

import { useEffect, useState } from "react";

import {
  LayoutDashboard,
  ImageIcon,
  Zap,
  FileText,
  CheckCircle,
  TrendingUp,
  Star,
  Settings,
  Upload,
  Trash2,
  CheckCircle2,
} from "lucide-react";

import { toast } from "react-toastify";

import { DashboardLayout } from "@/components/dashboard/layout";

import { Card } from "@/components/ui/card";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";

import {
  getCities,
  getEventCategories,
  uploadPortfolio,
} from "@/services/vendor.service";

const vendorNavItems = [
  {
    label: "Dashboard",
    href: "/dashboard/vendor",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    label: "Portfolio",
    href: "/dashboard/vendor/portfolio",
    icon: <ImageIcon className="h-5 w-5" />,
  },
  {
    label: "Event Leads",
    href: "/dashboard/vendor/leads",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    label: "My Quotations",
    href: "/dashboard/vendor/quotations",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    label: "Bookings",
    href: "/dashboard/vendor/bookings",
    icon: <CheckCircle className="h-5 w-5" />,
  },
  {
    label: "Earnings",
    href: "/dashboard/vendor/earnings",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    label: "Reviews",
    href: "/dashboard/vendor/reviews",
    icon: <Star className="h-5 w-5" />,
  },
  {
    label: "Settings",
    href: "/dashboard/vendor/settings",
    icon: <Settings className="h-5 w-5" />,
  },
];

interface Category {
  _id: string;
  name: string;
}

interface City {
  _id: string;
  name: string;
}

export default function VendorPortfolioPage() {
  const [categories, setCategories] =
    useState<Category[]>([]);

  const [cities, setCities] =
    useState<City[]>([]);

  const [loading, setLoading] =
    useState(false);

  const [portfolioImages, setPortfolioImages] =
    useState<File[]>([]);

  const [imagePreview, setImagePreview] =
    useState<string[]>([]);

  const [submitted, setSubmitted] =
    useState(false);

  const [errors, setErrors] = useState({
    businessName: "",
    category: "",
    city: "",
    description: "",
    startingPrice: "",
    services: "",
    portfolioImages: "",
  });

  const [formData, setFormData] = useState({
    businessName: "",
    category: "",
    city: "",
    description: "",
    startingPrice: "",
    services: "",
  });

  // =========================
  // Fetch APIs
  // =========================

  useEffect(() => {
    fetchCategories();
    fetchCitiesData();
  }, []);

  const fetchCategories = async () => {
    try {
      const response =
        await getEventCategories();

      console.log(
        response,
        "categories response"
      );

      setCategories(
        response.categories || []
      );
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCitiesData = async () => {
    try {
      const response =
        await getCities();

      console.log(
        response,
        "cities response"
      );

      setCities(response.cities || []);
    } catch (error) {
      console.log(error);
    }
  };

  // =========================
  // Validation
  // =========================

  const validate = () => {
    let newErrors = {
      businessName: "",
      category: "",
      city: "",
      description: "",
      startingPrice: "",
      services: "",
      portfolioImages: "",
    };

    let isValid = true;

    if (!formData.businessName.trim()) {
      newErrors.businessName =
        "Business name is required";

      isValid = false;
    }

    if (!formData.category.trim()) {
      newErrors.category =
        "Category is required";

      isValid = false;
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required";

      isValid = false;
    }

    if (!formData.description.trim()) {
      newErrors.description =
        "Description is required";

      isValid = false;
    }

    if (!formData.startingPrice.trim()) {
      newErrors.startingPrice =
        "Starting price is required";

      isValid = false;
    } else if (
      isNaN(Number(formData.startingPrice))
    ) {
      newErrors.startingPrice =
        "Price must be a number";

      isValid = false;
    }

    if (!formData.services.trim()) {
      newErrors.services =
        "Services field is required";

      isValid = false;
    }

    if (portfolioImages.length === 0) {
      newErrors.portfolioImages =
        "Please upload at least one image";

      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  // =========================
  // Image Upload
  // =========================

  const handleImageUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = Array.from(
      e.target.files || []
    );

    setPortfolioImages(files);

    const previewUrls = files.map((file) =>
      URL.createObjectURL(file)
    );

    setImagePreview(previewUrls);

    if (submitted) {
      setErrors({
        ...errors,
        portfolioImages: "",
      });
    }
  };

  // =========================
  // Remove Image
  // =========================

  const removeImage = (index: number) => {
    const updatedImages = [...portfolioImages];

    const updatedPreview = [...imagePreview];

    updatedImages.splice(index, 1);

    updatedPreview.splice(index, 1);

    setPortfolioImages(updatedImages);

    setImagePreview(updatedPreview);
  };

  // =========================
  // Submit
  // =========================

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setSubmitted(true);

    if (!validate()) return;

    try {
      setLoading(true);

      const payload = new FormData();

      payload.append(
        "businessName",
        formData.businessName
      );

      payload.append(
        "eventCategory",
        formData.category
      );

      payload.append(
        "city",
        formData.city
      );

      payload.append(
        "description",
        formData.description
      );

      payload.append(
        "startingPrice",
        formData.startingPrice
      );

      payload.append(
        "servicesOffered",
        formData.services
      );

      portfolioImages.forEach((file) => {
        payload.append(
          "portfolioImages",
          file
        );
      });

      await uploadPortfolio(payload);

      toast.success(
        "Portfolio uploaded successfully"
      );
    } catch (error: any) {
      console.log(error);

      toast.error(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout
      title="Portfolio"
      navItems={vendorNavItems}
      userType="vendor"
    >
      <div className="space-y-6">
        {/* Verification */}
        <div className="rounded-xl border border-green-200 bg-green-50 p-5">
          <div className="flex items-start gap-4">
            <div className="rounded-full bg-green-100 p-2">
              <CheckCircle2 className="h-5 w-5 text-green-600" />
            </div>

            <div>
              <h3 className="font-semibold text-green-900">
                Verified Vendor
              </h3>

              <p className="mt-1 text-sm text-green-700">
                Your portfolio is approved
                and visible to customers.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <Card className="rounded-2xl border bg-card p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">
              Edit Portfolio
            </h2>

            <p className="mt-1 text-muted-foreground">
              Showcase your services and
              attract more customers.
            </p>
          </div>

          <form
            className="space-y-5"
            onSubmit={handleSubmit}
          >
            {/* Business Name */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Business Name
              </label>

              <Input
                type="text"
                value={formData.businessName}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    businessName:
                      e.target.value,
                  });

                  if (submitted) {
                    setErrors({
                      ...errors,
                      businessName: "",
                    });
                  }
                }}
                placeholder="Your business name"
                className={`w-full ${
                  submitted &&
                  errors.businessName
                    ? "border-red-500"
                    : ""
                }`}
              />

              {submitted &&
                errors.businessName && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.businessName}
                  </p>
                )}
            </div>

            {/* Category + City */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {/* Category */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Event Category
                </label>

                <select
                  value={formData.category}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      category:
                        e.target.value,
                    });

                    if (submitted) {
                      setErrors({
                        ...errors,
                        category: "",
                      });
                    }
                  }}
                  className={`w-full rounded-lg border px-3 py-2 text-sm ${
                    submitted &&
                    errors.category
                      ? "border-red-500"
                      : "border-border"
                  }`}
                >
                  <option value="">
                    Select category
                  </option>

                  {categories.map(
                    (item) => (
                      <option
                        key={item._id}
                        value={item.name}
                      >
                        {item.name}
                      </option>
                    )
                  )}
                </select>

                {submitted &&
                  errors.category && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.category}
                    </p>
                  )}
              </div>

              {/* City */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  City
                </label>

                <select
                  value={formData.city}
                  onChange={(e) => {
                    setFormData({
                      ...formData,
                      city:
                        e.target.value,
                    });

                    if (submitted) {
                      setErrors({
                        ...errors,
                        city: "",
                      });
                    }
                  }}
                  className={`w-full rounded-lg border px-3 py-2 text-sm ${
                    submitted &&
                    errors.city
                      ? "border-red-500"
                      : "border-border"
                  }`}
                >
                  <option value="">
                    Select city
                  </option>

                  {cities.map((item) => (
                    <option
                      key={item._id}
                      value={item.name}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>

                {submitted &&
                  errors.city && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.city}
                    </p>
                  )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Description
              </label>

              <textarea
                rows={4}
                value={formData.description}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    description:
                      e.target.value,
                  });

                  if (submitted) {
                    setErrors({
                      ...errors,
                      description: "",
                    });
                  }
                }}
                placeholder="Describe your services..."
                className={`w-full rounded-lg border px-3 py-2 text-sm ${
                  submitted &&
                  errors.description
                    ? "border-red-500"
                    : "border-border"
                }`}
              />

              {submitted &&
                errors.description && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.description}
                  </p>
                )}
            </div>

            {/* Starting Price */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Starting Price
              </label>

              <Input
                type="text"
                value={
                  formData.startingPrice
                }
                onChange={(e) => {
                  const value =
                    e.target.value.replace(
                      /\D/g,
                      ""
                    );

                  setFormData({
                    ...formData,
                    startingPrice: value,
                  });

                  if (submitted) {
                    setErrors({
                      ...errors,
                      startingPrice: "",
                    });
                  }
                }}
                placeholder="₹5,000"
                className={`w-full ${
                  submitted &&
                  errors.startingPrice
                    ? "border-red-500"
                    : ""
                }`}
              />

              {submitted &&
                errors.startingPrice && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.startingPrice}
                  </p>
                )}
            </div>

            {/* Services */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Services Offered
              </label>

              <textarea
                rows={3}
                value={formData.services}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    services:
                      e.target.value,
                  });

                  if (submitted) {
                    setErrors({
                      ...errors,
                      services: "",
                    });
                  }
                }}
                placeholder="List your services..."
                className={`w-full rounded-lg border px-3 py-2 text-sm ${
                  submitted &&
                  errors.services
                    ? "border-red-500"
                    : "border-border"
                }`}
              />

              {submitted &&
                errors.services && (
                  <p className="mt-1 text-sm text-red-500">
                    {errors.services}
                  </p>
                )}
            </div>

            {/* Upload */}
            <div>
              <label className="mb-2 block text-sm font-medium">
                Portfolio Images
              </label>

              <div className="mt-2">
                <label
                  htmlFor="portfolio-upload"
                  className="flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-border p-8 transition-all hover:border-[#570861] hover:bg-purple-50/30"
                >
                  <Upload className="mb-3 h-10 w-10 text-[#570861]" />

                  <h3 className="text-base font-semibold">
                    Upload Portfolio Images
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Drag & drop images or click
                    to browse
                  </p>

                  <span className="mt-4 rounded-lg bg-[#570861] px-5 py-2 text-sm font-medium text-white">
                    Choose Files
                  </span>

                  <input
                    id="portfolio-upload"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={
                      handleImageUpload
                    }
                    className="hidden"
                  />
                </label>

                {submitted &&
                  errors.portfolioImages && (
                    <p className="mt-2 text-sm text-red-500">
                      {
                        errors.portfolioImages
                      }
                    </p>
                  )}
              </div>

              {/* Preview */}
              {imagePreview.length > 0 && (
                <div className="mt-5 grid grid-cols-2 gap-4 md:grid-cols-4">
                  {imagePreview.map(
                    (image, index) => (
                      <div
                        key={index}
                        className="relative overflow-hidden rounded-xl border"
                      >
                        <img
                          src={image}
                          alt="preview"
                          className="h-36 w-full object-cover"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            removeImage(
                              index
                            )
                          }
                          className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-2">
              <Button
                type="submit"
                disabled={loading}
                className="bg-[#570861] px-8 hover:bg-[#3f0547]"
              >
                {loading
                  ? "Saving..."
                  : "Save Portfolio"}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </DashboardLayout>
  );
}
