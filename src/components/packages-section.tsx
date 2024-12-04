'use client';

import './packages.css';
import './packages-new.css';
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const PACKAGES = [
  {
    id: 1,
    title: 'Basic Consultation 11',
    description: 'Perfect for quick questions and brief consultations',
    price: 499,
    duration: '30 Minutes',
  },
  {
    id: 2,
    title: 'Standard Consultation 2',
    description: 'Ideal for in-depth discussions and detailed advice',
    price: 899,
    duration: '60 Minutes',
  },
  {
    id: 3,
    title: 'Extended Consultation 3',
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
        <div className="custom-packages-grid">
          {PACKAGES.map((pkg) => (
            <div key={pkg.id} className="custom-card">
              <div className="custom-title">{pkg.title}</div>
              <p>{pkg.description}</p>
              <div className="custom-price">₹{pkg.price}</div>
              <div>{pkg.duration}</div>
              <button 
                className="custom-button"
                onClick={() => handlePackageSelect(pkg.id)}
              >
                Select Package
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}