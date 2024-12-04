'use client';

import './packages.css';
import React from 'react';

const PACKAGES = [
  {
    id: 1,
    title: 'Basic Consultation 1',
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
    <section className="w-full max-w-[1200px] mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">Choose Your Package</h2>
        <p className="text-gray-600">
          Select the consultation package that best suits your needs
        </p>
      </div>
      
      <div className="packages-grid">
        {PACKAGES.map((pkg) => (
          <div key={pkg.id} className="package-card">
            <h3 className="package-title">{pkg.title}</h3>
            <p className="package-description">{pkg.description}</p>
            <div className="package-price">₹{pkg.price}</div>
            <div className="package-duration">{pkg.duration}</div>
            <button 
              className="package-button"
              onClick={() => handlePackageSelect(pkg.id)}
            >
              Select Package
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}