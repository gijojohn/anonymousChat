'use client';

import './packages.css';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PACKAGES = [
  {
    id: 1,
    title: 'Basic Consultation ....',
    description: 'Perfect for quick questions and brief consultations',
    price: 499,
    duration: '30 Minutes',
  },
  {
    id: 2,
    title: 'Standard Consultation ....',
    description: 'Ideal for in-depth discussions and detailed advice',
    price: 899,
    duration: '60 Minutes',
  },
  {
    id: 3,
    title: 'Extended Consultation ....',
    description: 'Comprehensive consultation for complex matters',
    price: 1599,
    duration: '120 Minutes',
  },
];

export function PackagesSection() {
  const handlePackageSelect = (packageId: number) => {
    console.log(`Selected package: ${packageId}`);
  };

  return (
    <section className="py-12 px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Choose Your Package</h2>
        <p className="text-gray-600">
          Select the consultation package that best suits your needs
        </p>
      </div>
      
      <div className="max-w-[1200px] mx-auto">
      <div className="packages-grid">
  {PACKAGES.map((pkg) => (
    <div key={pkg.id} className="card-content">
      <Card className="h-full border-0 shadow-none">
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-bold mb-4">{pkg.title}</CardTitle>
          <p className="text-gray-600 mb-6">{pkg.description}</p>
        </CardHeader>
        <CardContent className="p-0 space-y-4">
          <div className="text-4xl font-bold">₹{pkg.price}</div>
          <div className="text-gray-500">{pkg.duration}</div>
          <Button 
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg"
            onClick={() => handlePackageSelect(pkg.id)}
          >
            Select Package
          </Button>
        </CardContent>
      </Card>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}