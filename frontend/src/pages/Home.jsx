import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Play, ArrowRight, Target, Users, Trophy } from 'lucide-react';

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
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
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
              src="https://sample-videos.com/zip/10/mp4/720/mp4/SampleVideo_720x480_1mb.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          {/* Circular Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center border-4 border-red-500 hover:scale-110 transition-transform duration-300">
              <span className="text-white font-semibold text-sm">Logo Placeholder</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            <span className="text-white">AA Fitness</span>
            <span className="block text-red-500 mt-2">Gym</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Transform your body, elevate your mind, and unleash your potential
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/contact">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                Join Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Button 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
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

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-red-500">Transform</span> Your Life?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of members who have already started their fitness journey with us
          </p>
          <Link to="/contact">
            <Button className="bg-red-600 hover:bg-red-700 text-white px-12 py-4 text-xl font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Start Your Journey Today
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;