'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { Utensils, Clock, MapPin, Phone, Star } from 'lucide-react'

export default function Home() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          router.push('/admin')
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="bg-white p-3 sm:p-4 rounded-full shadow-lg">
                <Utensils className="h-8 w-8 sm:h-12 sm:w-12 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Taj Resto
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Experience the finest Indian cuisine with our comprehensive food ordering and management system
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 max-w-4xl mx-auto px-4">
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg mb-3 sm:mb-4 mx-auto">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Quick Delivery</h3>
                <p className="text-sm sm:text-base text-gray-600">Fast and reliable delivery to your doorstep</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg mb-3 sm:mb-4 mx-auto">
                  <Star className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Premium Quality</h3>
                <p className="text-sm sm:text-base text-gray-600">Fresh ingredients and authentic recipes</p>
              </div>
              
              <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md sm:col-span-2 lg:col-span-1">
                <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 rounded-lg mb-3 sm:mb-4 mx-auto">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-orange-600" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Multiple Locations</h3>
                <p className="text-sm sm:text-base text-gray-600">Serving across multiple branches</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md max-w-md mx-auto mb-6 sm:mb-8 px-4">
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-gray-600 text-sm sm:text-base">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  <span>10:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>

            {/* Redirect Message */}
            <div className="bg-orange-100 border border-orange-200 rounded-lg p-4 sm:p-6 max-w-md mx-auto px-4">
              <h3 className="text-base sm:text-lg font-semibold text-orange-900 mb-2">
                Admin Dashboard Demo
              </h3>
              <p className="text-sm sm:text-base text-orange-700 mb-3 sm:mb-4">
                Redirecting to the admin dashboard in {countdown} seconds...
              </p>
              <div className="w-full bg-orange-200 rounded-full h-2">
                <div 
                  className="bg-orange-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${((3 - countdown) / 3) * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 