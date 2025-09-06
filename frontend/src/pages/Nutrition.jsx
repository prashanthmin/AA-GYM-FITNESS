import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Apple, Utensils, Clock, Target, Droplets, Zap } from 'lucide-react';
import { nutritionData } from '../data/mockData';

const Nutrition = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">
            <Apple className="inline-block h-12 w-12 text-red-600 mr-4" />
            Nutrition <span className="text-red-600">Program</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fuel your fitness journey with our comprehensive nutrition plans designed for optimal performance and results
          </p>
        </div>

        {/* Branch 1 Nutrition */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">Downtown Branch Nutrition</h2>
            <p className="text-lg text-gray-600">Specialized meal plans for urban lifestyle and busy professionals</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionData.branch1.meals.map((meal, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl flex items-center">
                      <meal.icon className="h-6 w-6 text-red-600 mr-2" />
                      {meal.name}
                    </CardTitle>
                    <Badge className="bg-red-100 text-red-800">{meal.calories} cal</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Utensils className="h-8 w-8 mx-auto mb-2 text-red-600" />
                      <p className="text-sm">{meal.imageDescription}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ingredients:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {meal.ingredients.map((ingredient, i) => (
                        <li key={i}>• {ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{meal.prepTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-4">Nutrition Guidelines - Downtown Branch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {nutritionData.branch1.guidelines.map((guideline, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <guideline.icon className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-black">{guideline.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{guideline.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Branch 2 Nutrition */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-black mb-4">Suburban Branch Nutrition</h2>
            <p className="text-lg text-gray-600">Family-friendly nutrition plans with focus on balanced lifestyle</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {nutritionData.branch2.meals.map((meal, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl flex items-center">
                      <meal.icon className="h-6 w-6 text-red-600 mr-2" />
                      {meal.name}
                    </CardTitle>
                    <Badge className="bg-green-100 text-green-800">{meal.calories} cal</Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-600">
                      <Utensils className="h-8 w-8 mx-auto mb-2 text-red-600" />
                      <p className="text-sm">{meal.imageDescription}</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Ingredients:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {meal.ingredients.map((ingredient, i) => (
                        <li key={i}>• {ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{meal.prepTime}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-2xl font-bold text-black mb-4">Nutrition Guidelines - Suburban Branch</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {nutritionData.branch2.guidelines.map((guideline, index) => (
                <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                  <guideline.icon className="h-8 w-8 text-red-600 mx-auto mb-2" />
                  <h4 className="font-semibold text-black">{guideline.title}</h4>
                  <p className="text-sm text-gray-600 mt-1">{guideline.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* General Tips */}
        <section className="bg-black text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">
              <Target className="inline-block h-8 w-8 text-red-500 mr-2" />
              General Nutrition Tips
            </h2>
            <p className="text-gray-300">Essential nutrition advice for optimal fitness results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {nutritionData.generalTips.map((tip, index) => (
              <div key={index} className="text-center">
                <tip.icon className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2">{tip.title}</h3>
                <p className="text-gray-300 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nutrition;