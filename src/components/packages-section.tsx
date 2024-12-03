'use client';

import './packages.css';
import './packages-new.css';
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
      
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-white rounded-xl p-8 shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_6px_rgba(0,0,0,0.1)] transition-shadow duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">{pkg.title}</h3>
              <p className="text-gray-600">{pkg.description}</p>
              <div className="text-4xl font-bold my-6">₹{pkg.price}</div>
              <div className="text-gray-500 mb-6">{pkg.duration}</div>
              <Button 
                className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-lg py-3 transition-colors duration-300"
                onClick={() => handlePackageSelect(pkg.id)}
              >
                Select Package
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}