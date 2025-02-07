import React from 'react';
import { Award, ShieldCheck, Truck, Headphones } from 'lucide-react';

export default function FeaturesBanner() {
  const features = [
    {
      icon: Award,
      title: "High Quality",
      description: "Crafted from top materials",
    },
    {
      icon: ShieldCheck,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      icon: Headphones,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <section className="bg-[#FDF6F0] py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 p-4"
              >
                <div className="flex-shrink-0">
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-gray-800" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-base md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
