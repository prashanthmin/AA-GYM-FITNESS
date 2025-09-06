import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../components/ui/dropdown-menu';
import { ArrowRight, Target, Users, Trophy, ChevronDown, MapPin } from 'lucide-react';

const Home = () => {
  const features = [
    {
      icon: Target,
      title: 'Personal Training',
      description: 'Get customized workout plans from certified trainers'
    },
    {
      icon: Users,
      title: 'Group Classes',
      description: 'Join energetic group fitness classes for all levels'
    },
    {
      icon: Trophy,
      title: 'Results Guaranteed',
      description: 'Achieve your fitness goals with our proven methods'
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen flex items-end justify-center overflow-hidden pb-20">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
              type="video/mp4"
            />
            {/* Fallback video source */}
            <source
              src="https://sample-videos.com/zip/10/mp4/720/mp4/SampleVideo_720x480_1mb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>

        {/* Only 2 Buttons at Bottom */}
        <div className="relative z-10 text-center text-white px-4">
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* Branches Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-red-600 hover:bg-red-700 text-white px-12 py-6 text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  <MapPin className="mr-3 h-6 w-6" />
                  Branches
                  <ChevronDown className="ml-3 h-6 w-6" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white border border-gray-200 rounded-lg shadow-lg">
                <DropdownMenuItem asChild>
                  <Link to="/branch1" className="flex items-center px-4 py-3 hover:bg-gray-50 text-gray-700 cursor-pointer">
                    <MapPin className="mr-2 h-4 w-4 text-red-600" />
                    Downtown Branch
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/branch2" className="flex items-center px-4 py-3 hover:bg-gray-50 text-gray-700 cursor-pointer">
                    <MapPin className="mr-2 h-4 w-4 text-red-600" />
                    Suburban Branch
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* Nutrition Button */}
            <Link to="/nutrition">
              <Button 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-12 py-6 text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                Nutrition
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Why Choose <span className="text-red-600">AA Fitness?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide everything you need to achieve your fitness goals in a supportive environment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-red-50 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 text-white rounded-full mb-6 hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;