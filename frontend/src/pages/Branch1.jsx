import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { MapPin, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { branch1Data } from '../data/mockData';

const Branch1 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      (prev + 1) % branch1Data.galleryImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? branch1Data.galleryImages.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {branch1Data.name} <span className="text-red-600">Gallery</span>
          </h1>
          <div className="flex items-center justify-center space-x-2 text-lg text-gray-600">
            <MapPin className="h-5 w-5 text-red-600" />
            <span>{branch1Data.address}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Photo Gallery - Left Side */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black mb-6">Gym Photo Gallery</h2>
            <div className="relative">
              <div className="h-80 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
                  <div className="text-center text-gray-600 p-6">
                    <div className="text-4xl mb-4">📸</div>
                    <h3 className="font-semibold text-lg mb-2">
                      Photo {currentImageIndex + 1} of {branch1Data.galleryImages.length}
                    </h3>
                    <p className="text-sm">
                      {branch1Data.galleryImages[currentImageIndex].description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Gallery Navigation */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
              {/* Image Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {branch1Data.galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? 'bg-red-600'
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Gym Services - Right Side */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black mb-6">Gym Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {branch1Data.services.map((service, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl">{service.icon}</div>
                      <div>
                        <h3 className="font-semibold text-lg text-black">{service.name}</h3>
                        <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Location Section */}
        <section className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              <MapPin className="inline-block h-8 w-8 text-red-600 mr-2" />
              Visit Our {branch1Data.name}
            </h2>
            <p className="text-lg text-gray-600">
              Located in the heart of downtown with easy access and parking
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-red-600" />
                <div>
                  <h3 className="font-semibold text-black">Address</h3>
                  <p className="text-gray-600">{branch1Data.address}</p>
                </div>
              </div>
              
              <div className="mt-6">
                <a
                  href={branch1Data.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105">
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View on Google Maps
                  </Button>
                </a>
              </div>
            </div>

            <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center text-gray-600">
                <MapPin className="h-16 w-16 mx-auto mb-4 text-red-600" />
                <h3 className="text-xl font-semibold mb-2">Downtown Location</h3>
                <p className="text-sm">Interactive map showing location, parking, and nearby landmarks</p>
                <p className="text-sm mt-2 font-medium">Click "View on Google Maps" to get directions</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Branch1;