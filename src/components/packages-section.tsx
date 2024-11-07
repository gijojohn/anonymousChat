'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PACKAGES = [
  {
    id: 1,
    title: 'Basic Consultation',
    description: 'Perfect for quick questions and brief consultations',
    price: 499,
    duration: '30 Minutes',
  },
  {
    id: 2,
    title: 'Standard Consultation',
    description: 'Ideal for in-depth discussions and detailed advice',
    price: 899,
    duration: '60 Minutes',
  },
  {
    id: 3,
    title: 'Extended Consultation',
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
      
      <div style={{ display: 'flex', flexDirection: 'row', gap: '24px', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>
        {PACKAGES.map((pkg) => (
          <div key={pkg.id} style={{ flex: '1', minWidth: '300px', maxWidth: '400px' }}>
            <Card className="h-full bg-white border border-gray-200 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{pkg.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">{pkg.description}</p>
                <div className="text-3xl font-bold text-gray-900">₹{pkg.price}</div>
                <div className="text-sm text-gray-500">{pkg.duration}</div>
                <Button 
                  onClick={() => handlePackageSelect(pkg.id)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition-colors"
                >
                  Select Package
                </Button>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}