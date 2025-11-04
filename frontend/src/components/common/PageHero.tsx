import React from 'react';
import { Text } from '../atoms';
import { PageHeroProps } from './types';
import { VARIANT_COLORS } from './constants';

function PageHero({ badge, title, subtitle, stats, action, variant = 'default' }: PageHeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-16 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-20 -left-40 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Left Content */}
          <div>
            {badge && (
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
                {badge.icon}
                <Text variant="small" className="text-white font-medium">
                  {badge.text}
                </Text>
              </div>
            )}

            <h1 className="text-4xl lg:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-blue-100 text-lg max-w-2xl">
              {subtitle}
            </p>

            {/* Stats */}
            {stats && stats.length > 0 && (
              <div className="flex flex-wrap items-center gap-4 mt-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 px-4 py-2 backdrop-blur-sm rounded-full ${
                      VARIANT_COLORS[stat.variant || 'default']
                    }`}
                  >
                    {stat.icon}
                    <Text variant="small" className="text-white font-bold">
                      {stat.value} {stat.label}
                    </Text>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Action */}
          {action && <div>{action}</div>}
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-12 fill-gray-50" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </div>
  );
}

export default PageHero;
