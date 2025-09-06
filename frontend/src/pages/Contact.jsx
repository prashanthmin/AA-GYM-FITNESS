import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { MapPin, Phone, Mail, Clock, User } from 'lucide-react';
import { contactInfo } from '../data/mockData';

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Get In <span className="text-red-600">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your fitness journey? Contact us today and let's make it happen together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Profile Section */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3">
                <User className="h-6 w-6 text-red-600" />
                <span>Meet Our Manager</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center border-2 border-red-500">
                  <span className="text-sm text-gray-600 text-center px-2">
                    {contactInfo.profile.image}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-black">{contactInfo.profile.name}</h3>
                  <p className="text-red-600 font-medium">{contactInfo.profile.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Details */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Contact Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Address</h4>
                  <p className="text-gray-600">{contactInfo.details.address}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Phone</h4>
                  <p className="text-gray-600">{contactInfo.details.phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Email</h4>
                  <p className="text-gray-600">{contactInfo.details.email}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-black">Operating Hours</h4>
                  <p className="text-gray-600">
                    <span className="block">Mon-Fri: {contactInfo.details.hours.weekdays}</span>
                    <span className="block">Sat-Sun: {contactInfo.details.hours.weekends}</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Find Us</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin className="h-12 w-12 mx-auto mb-2 text-red-600" />
                  <p className="font-medium">Interactive Map Placeholder</p>
                  <p className="text-sm">Gym location with nearby landmarks and parking</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;