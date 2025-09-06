import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapPin, Dumbbell, User, Star } from 'lucide-react';
import { branch1Data } from '../data/mockData';

const Branch1 = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            {branch1Data.name} <span className="text-red-600">Branch</span>
          </h1>
          <div className="flex items-center justify-center space-x-2 text-lg text-gray-600">
            <MapPin className="h-5 w-5 text-red-600" />
            <span>{branch1Data.address}</span>
          </div>
        </div>

        {/* Equipment Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              <Dumbbell className="inline-block h-8 w-8 text-red-600 mr-2" />
              Gym Equipment
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              State-of-the-art equipment to help you achieve your fitness goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {branch1Data.equipment.map((item) => (
              <Card key={item.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="pb-4">
                  <div className="h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-center text-gray-600 px-4">
                      <Dumbbell className="h-8 w-8 mx-auto mb-2 text-red-600" />
                      <p className="text-sm">{item.image}</p>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{item.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Trainers Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              <User className="inline-block h-8 w-8 text-red-600 mr-2" />
              Our Expert Trainers
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Certified professionals dedicated to helping you reach your potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branch1Data.trainers.map((trainer) => (
              <Card key={trainer.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center border-4 border-red-500">
                    <div className="text-center text-gray-600 px-2">
                      <User className="h-8 w-8 mx-auto mb-1 text-red-600" />
                      <p className="text-xs">{trainer.image}</p>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{trainer.name}</CardTitle>
                  <Badge className="bg-red-600 hover:bg-red-700 text-white">
                    {trainer.specialization}
                  </Badge>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="flex items-center justify-center space-x-1 mb-2">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  </div>
                  <p className="text-gray-600 font-medium">{trainer.experience} Experience</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Map Section */}
        <section>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">
              <MapPin className="inline-block h-8 w-8 text-red-600 mr-2" />
              Location & Directions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conveniently located in the heart of downtown with easy parking
            </p>
          </div>

          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-16 w-16 mx-auto mb-4 text-red-600" />
                  <h3 className="text-xl font-semibold mb-2">Branch 1 Location</h3>
                  <p className="max-w-md mx-auto">{branch1Data.mapPlaceholder}</p>
                  <div className="mt-4 space-y-2">
                    <p className="font-medium">{branch1Data.name}</p>
                    <p className="text-sm">{branch1Data.address}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Branch1;