import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail, Dumbbell } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Dumbbell className="h-8 w-8 text-red-500" />
              <span className="font-bold text-2xl">AA Fitness Gym</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Transform your body and mind at AA Fitness. We provide world-class equipment, 
              expert trainers, and a supportive community to help you achieve your fitness goals.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-gray-800 p-3 rounded-full hover:bg-red-600 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-400 hover:text-red-500 transition-colors">Home</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-red-500 transition-colors">Contact</a></li>
              <li><a href="/branch1" className="text-gray-400 hover:text-red-500 transition-colors">Branch 1</a></li>
              <li><a href="/branch2" className="text-gray-400 hover:text-red-500 transition-colors">Branch 2</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">123 Fitness Street, Gym City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">info@aafitness.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 text-center">
          <p className="text-gray-400">
            &copy; 2025 AA Fitness Gym. All rights reserved. Built for fitness enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;