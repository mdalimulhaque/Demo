import { Shield, Droplets, Sparkles, Flower, Sun, CheckCircle, Star, Play, Heart, Zap, Crown, Gem, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import Header from '@/components/Header'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-rose-50">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative overflow-hidden pt-16 lg:pt-20">
        {/* Subtle Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse animation-delay-2000"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 relative">
              {/* Decorative background elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full opacity-10 blur-xl"></div>
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full opacity-10 blur-xl"></div>
              
              {/* Floating decorative elements */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg opacity-20 transform rotate-45 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full opacity-20 animate-bounce"></div>
              
              {/* Content with enhanced styling */}
              <div className="relative bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500 hover:scale-105 hover:bg-white/80">
                {/* Decorative corner accent */}
                <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full opacity-20 blur-md"></div>
                
                <div className="space-y-6 relative z-10">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 hover:from-rose-600 hover:to-pink-700">
                    <Zap className="h-4 w-4" />
                    সীমিত সময়ের অফার - ২৯% ছাড়
                  </div>
                  
                  <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                    <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent hover:from-rose-600 hover:via-pink-600 hover:to-rose-600 transition-all duration-500">
                      শুষ্ক ও ফাটা ঠোঁটকে
                    </span>
                    <br />
                    <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent hover:from-gray-900 hover:via-gray-700 hover:to-gray-900 transition-all duration-500">
                      বিদায় জানান!
                    </span>
                  </h1>
                  
                  <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                    এখন পান <span className="font-semibold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">PKG সিক্রেট লিপবাম</span>-এর গভীর, দীর্ঘস্থায়ী আর্দ্রতা।
                  </p>
                  
                  <p className="text-lg text-gray-500 hover:text-gray-700 transition-colors duration-300">
                    প্রাকৃতিক উপাদানে তৈরি গোপন যত্ন। মাত্র একবার ব্যবহারে অনুভব করুন।
                  </p>
                </div>
              </div>
              
              {/* Enhanced Features with hover effects */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: Droplets, text: "২৪ ঘণ্টা আর্দ্রতা", color: "from-blue-500 to-cyan-600" },
                  { icon: Shield, text: "ফাটা ঠোঁট নিরাময়", color: "from-green-500 to-teal-600" },
                  { icon: Star, text: "প্রাকৃতিক উজ্জ্বলতা", color: "from-yellow-500 to-orange-600" }
                ].map((feature, index) => (
                  <div key={index} className="group relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-gray-100 to-rose-100 rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative bg-white/80 backdrop-blur-sm rounded-xl p-4 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-rose-300">
                      <div className={`w-12 h-12 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 mx-auto mb-2`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <span className="text-gray-700 font-medium text-sm group-hover:text-gray-900 transition-colors duration-300">
                        {feature.text}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Enhanced CTA Button */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                <Button size="lg" className="relative bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-6 text-xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300 border-0">
                  <Crown className="mr-3 h-6 w-6 group-hover:animate-bounce" />
                  এখন কিনুন ও ঠোঁটের সুরক্ষা নিশ্চিত করুন
                </Button>
              </div>
              
              {/* Enhanced Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center gap-6 p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200">
                <div className="flex items-center gap-2 group">
                  <CheckCircle className="h-5 w-5 text-green-500 group-hover:animate-pulse" />
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">দ্রুত ডেলিভারি</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <Heart className="h-5 w-5 text-rose-500 group-hover:animate-pulse" />
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">সহজ রিটার্ন</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <Star className="h-5 w-5 text-yellow-500 group-hover:animate-pulse" />
                  <span className="text-gray-700 font-medium group-hover:text-gray-900 transition-colors duration-300">৪.৯/৫ রেটিং</span>
                </div>
              </div>
            </div>
            
            {/* Right Content - Enhanced Premium Image Area */}
            <div className="relative group">
              {/* Premium Background Effects */}
              <div className="absolute -inset-4 bg-gradient-to-br from-rose-200 via-pink-100 to-purple-200 rounded-3xl blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700"></div>
              <div className="absolute -inset-2 bg-gradient-to-tr from-blue-200 via-purple-100 to-pink-200 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
              
              {/* Floating Premium Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-20 blur-xl group-hover:scale-125 group-hover:rotate-45 transition-all duration-700"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20 blur-xl group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700"></div>
              <div className="absolute top-1/2 -left-4 w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-lg opacity-30 blur-lg group-hover:scale-150 group-hover:rotate-90 transition-all duration-700"></div>
              
              {/* Main Premium Container */}
              <div className="relative bg-gradient-to-br from-white/90 via-rose-50/90 to-pink-50/90 backdrop-blur-2xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 border border-white/50 hover:border-rose-200/50 p-8 group-hover:scale-105 group-hover:-rotate-1">
                
                {/* Premium Corner Accents */}
                <div className="absolute top-0 left-0 w-8 h-8 bg-gradient-to-br from-rose-400 to-pink-500 rounded-tr-2xl rounded-bl-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-rose-400 to-pink-500 rounded-tl-2xl rounded-br-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-8 h-8 bg-gradient-to-tr from-rose-400 to-pink-500 rounded-br-2xl rounded-tl-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-gradient-to-tl from-rose-400 to-pink-500 rounded-bl-2xl rounded-tr-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                
                {/* Premium Image Container */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-50 via-rose-50 to-pink-50 rounded-2xl overflow-hidden shadow-inner group-hover:shadow-2xl transition-all duration-700">
                  
                  {/* Animated Background Pattern */}
                  <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23f43f5e%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22/%3E%3Cpath%20d%3D%22M20%2020h20v20H20z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Premium Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-200/20 via-transparent to-pink-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Main Product Image */}
                  <img 
                    src="/images/product-hero.png" 
                    alt="PKG সিক্রেট লিপবাম" 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 group-hover:rotate-2"
                  />
                  
                  {/* Premium Overlay UI Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Premium Badges */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>NEW</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-3 py-2 rounded-full text-xs font-bold shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300">
                    <div className="flex items-center gap-1">
                      <Crown className="w-3 h-3" />
                      <span>PREMIUM</span>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 right-4 bg-gradient-to-r from-white/90 to-rose-50/90 backdrop-blur-md rounded-full p-3 shadow-xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    <Crown className="h-5 w-5 text-rose-600 group-hover:animate-pulse" />
                  </div>
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:scale-110 transition-transform duration-300">
                      <Heart className="h-4 w-4 text-rose-500 hover:text-rose-600 transition-colors duration-300" />
                    </div>
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg hover:scale-110 transition-transform duration-300">
                      <Zap className="h-4 w-4 text-yellow-500 hover:text-yellow-600 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
                
                {/* Premium Pricing Section */}
                <div className="mt-8 text-center relative">
                  {/* Premium Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl opacity-50"></div>
                  
                  <div className="relative z-10">
                    {/* Premium Offer Badge */}
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-3 rounded-full text-sm font-bold shadow-xl mb-4 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300">
                      <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 animate-pulse" />
                        <span>সীমিত সময়ের অফার - ২৯% ছাড়</span>
                        <Zap className="w-4 h-4 animate-pulse" />
                      </div>
                    </div>
                    
                    {/* Premium Pricing */}
                    <div className="inline-flex items-center gap-4 mb-4">
                      <span className="text-gray-400 line-through text-xl font-medium">৫৫০ টাকা</span>
                      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                        ২৯% ছাড়
                      </div>
                    </div>
                    
                    <p className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-gray-900 via-rose-700 to-gray-900 bg-clip-text text-transparent mb-3 group-hover:from-rose-600 group-hover:via-pink-600 group-hover:to-rose-600 transition-all duration-500">
                      ৩৯০ টাকা
                    </p>
                    
                    <p className="text-xl font-bold text-gray-800 mb-2">PKG সিক্রেট লিপবাম</p>
                    <p className="text-gray-600 font-medium mb-4">Net Weight: 1.5g</p>
                    
                    {/* Premium Features */}
                    <div className="flex justify-center gap-2 mb-4">
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <CheckCircle className="w-3 h-3" />
                        <span>ডার্মাটোলজিস্ট পরীক্ষিত</span>
                      </div>
                      <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                        <Shield className="w-3 h-3" />
                        <span>নিরাপদ</span>
                      </div>
                    </div>
                    
                    {/* Premium CTA Button */}
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-rose-600 to-pink-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-500"></div>
                      <button className="relative bg-gradient-to-r from-rose-600 to-pink-600 hover:from-rose-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 w-full">
                        <div className="flex items-center justify-center gap-2">
                          <ShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
                          <span>এখনই কিনুন</span>
                          <Crown className="w-5 h-5 group-hover:animate-pulse" />
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section id="showcase" className="py-20 bg-gradient-to-br from-rose-50 via-white to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 px-6 py-3 rounded-full text-lg font-semibold mb-6">
              <Gem className="h-5 w-5" />
              প্রিমিয়াম পণ্য
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              দেখুন <span className="text-rose-600">PKG সিক্রেট লিপবাম</span>-এর কার্যকারিতা
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              প্রাকৃতিক উপাদানে তৈরি, আপনার ঠোঁটের জন্য সেরা যত্ন
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-1 bg-rose-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-rose-50 relative">
                  <img 
                    src="/images/product-hero.png" 
                    alt="PKG সিক্রেট লিপবাম প্যাকেজ" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay UI Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <span className="text-xs font-semibold text-rose-600">PREMIUM</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <Sparkles className="h-4 w-4 text-rose-600" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">প্রিমিয়াম প্যাকেজিং</h3>
                  <p className="text-gray-600">মানসম্মত উপস্থাপনা</p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-rose-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-rose-50 relative">
                  <img 
                    src="/images/product-winter.png" 
                    alt="শীতের জন্য PKG লিপবাম" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay UI Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <span className="text-xs font-semibold text-rose-600">WINTER</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <Sun className="h-4 w-4 text-rose-600" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">শীতকালীন সুরক্ষা</h3>
                  <p className="text-gray-600">ফাটা ঠোঁটের সমাধান</p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-rose-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="aspect-square overflow-hidden bg-gradient-to-br from-gray-50 to-rose-50 relative">
                  <img 
                    src="/images/product-hands.png" 
                    alt="PKG লিপবাম ব্যবহার" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  {/* Overlay UI Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <span className="text-xs font-semibold text-rose-600">EASY USE</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <Heart className="h-4 w-4 text-rose-600" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">সহজ ব্যবহার</h3>
                  <p className="text-gray-600">হালকা ও নন-স্টিকি</p>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-rose-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="aspect-square bg-gradient-to-br from-gray-50 to-rose-50 flex items-center justify-center relative">
                  <div className="text-center space-y-6 p-8">
                    <div className="w-32 h-32 bg-rose-500 rounded-full mx-auto flex items-center justify-center shadow-xl">
                      <Droplets className="h-16 w-16 text-white" />
                    </div>
                    <div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">২৪ ঘণ্টা আর্দ্রতা</h3>
                      <p className="text-gray-600">দীর্ঘস্থায়ী সুরক্ষা</p>
                    </div>
                  </div>
                  {/* Overlay UI Elements */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 shadow-lg">
                    <span className="text-xs font-semibold text-rose-600">24/7</span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                    <Shield className="h-4 w-4 text-rose-600" />
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">গভীর আর্দ্রতা</h3>
                  <p className="text-gray-600">সারাদিন কোমলতা</p>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution Section - Enhanced Modern Design */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-sky-50 relative overflow-hidden">
        {/* Premium Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-10 left-1/2 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Enhanced Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-bold mb-6 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                <Heart className="h-5 w-5 animate-pulse" />
                <span>সমস্যা ও সমাধান</span>
                <Heart className="h-5 w-5 animate-pulse" />
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-gray-900 via-rose-700 to-gray-900 bg-clip-text text-transparent">
                  আপনার ঠোঁট কি এই সমস্যাগুলোর সম্মুখীন হচ্ছে?
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                সাধারণ ঠোঁটের সমস্যাগুলো এবং PKG সিক্রেট লিপবামের সমাধান
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-red-100 to-rose-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-rose-50 opacity-50"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400 to-rose-400"></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-100 to-rose-100 rounded-full blur-xl opacity-30"></div>
                      <span className="relative">😓</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 relative">
                      <span className="relative z-10">ঠোঁট কি রুক্ষতা ও শুষ্কতার কারণে ফেটে যাচ্ছে?</span>
                      <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-red-200 to-rose-200"></div>
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-red-400 to-red-400 mx-auto rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-50"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-400 to-red-400"></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-red-100 rounded-full blur-xl opacity-30"></div>
                      <span className="relative">😔</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 relative">
                      <span className="relative z-10">ঠোঁটের স্বাভাবিক উজ্জ্বলতা হারিয়ে কালো দাগ দেখা দিয়েছে?</span>
                      <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-orange-200 to-red-200"></div>
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
                  </div>
                </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                <div className="relative bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-orange-50 opacity-50"></div>
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-orange-400"></div>
                  
                  <div className="relative z-10">
                    <div className="text-6xl mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full blur-xl opacity-30"></div>
                      <span className="relative">😖</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 relative">
                      <span className="relative z-10">সাধারণ লিপবাম কি ঘন ঘন লাগানোর পরও দীর্ঘস্থায়ী আর্দ্রতা দিচ্ছে না?</span>
                      <div className="absolute -bottom-2 left-0 w-full h-px bg-gradient-to-r from-yellow-200 to-orange-200"></div>
                    </h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
                  </div>
                </div>
            </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-gray-100 rounded-3xl blur-2xl opacity-60"></div>
              <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl p-12 text-center shadow-2xl border border-gray-200">
                <div className="inline-flex items-center gap-3 bg-rose-600 text-white px-8 py-4 rounded-full text-2xl font-bold mb-8 shadow-2xl">
                  <Crown className="h-8 w-8" />
                  PKG সিক্রেট লিপবাম হলো আপনার চূড়ান্ত সমাধান!
                </div>
                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  আমাদের বিশেষ ফর্মুলা ঠোঁটের গভীরে প্রবেশ করে এবং মাত্র কয়েক দিনের মধ্যে ফাটা ত্বক মেরামত করে। এটি আপনার ঠোঁটে সারাদিনের জন্য একটি সুরক্ষামূলক স্তরে মুড়ে রাখে, যাতে ঠোঁটে কোমলতা ফিরে আসে এবং প্রাকৃতিক গোলাপি আভা বজায় থাকে।
                </p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-6 py-3 rounded-full text-lg font-semibold mb-6">
              <Sparkles className="h-5 w-5" />
              মূল বৈশিষ্ট্য
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              কেন <span className="text-rose-600">PKG সিক্রেট লিপবাম</span> বেছে নিবেন?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300 mb-6">
                  <Droplets className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">২৪ ঘণ্টা গভীর আর্দ্রতা</h3>
                <p className="text-gray-600 leading-relaxed">এতে থাকা বিশেষ ময়েশ্চারাইজিং উপাদান আপনার ঠোঁটকে দীর্ঘতম সময়ের জন্য নরম ও সতেজ রাখে।</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300 mb-6">
                  <Shield className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ফাটা ঠোঁটের দ্রুত নিরাময়</h3>
                <p className="text-gray-600 leading-relaxed">রুক্ষতা ও ফাটল দূর করে দ্রুত নতুন কোষ গঠনে সাহায্য করে। শীত বা গরমে, সব সময় সুরক্ষা দেয়।</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300 mb-6">
                  <Star className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">প্রাকৃতিক উজ্জ্বলতা বৃদ্ধি</h3>
                <p className="text-gray-600 leading-relaxed">নিয়মিত ব্যবহারে ঠোঁটের কালচে ভাব দূর হয় এবং স্বাভাবিক গোলাপি বা লালচে আভা ফিরিয়ে আনতে সাহায্য করে।</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300 mb-6">
                  <Flower className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">নন-স্টিকি ও হালকা</h3>
                <p className="text-gray-600 leading-relaxed">চিটচিটে ভাব নেই! ঠোঁটে সহজে মিশে যায়, যা দিনে ও রাতে ব্যবহারের জন্য আরামদায়ক।</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-rose-100 to-red-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-r from-rose-500 to-red-600 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300 mb-6">
                  <Sun className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">পরিবেশগত সুরক্ষা</h3>
                <p className="text-gray-600 leading-relaxed">ক্ষতিকারক দূষণ এবং সূর্যের ইউভি (UV) রশ্মি থেকে ঠোঁটকে রক্ষা করে।</p>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-300 mb-6">
                  <Heart className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">ডার্মাটোলজিস্ট পরীক্ষিত</h3>
                <p className="text-gray-600 leading-relaxed">আমাদের পণ্যটি ডার্মাটোলজিস্ট পরীক্ষিত এবং কোনো ক্ষতিকারক প্যারাবেন মুক্ত।</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-6 py-3 rounded-full text-lg font-semibold mb-6">
              <Star className="h-5 w-5" />
              ব্যবহারকারীদের অভিজ্ঞতা
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              কি <span className="text-rose-600">বলছেন আমাদের গ্রাহকেরা</span>
            </h2>
            <div className="flex items-center justify-center gap-2 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-8 h-8 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-3 text-2xl font-bold text-gray-900">৪.৯/৫</span>
              <span className="text-xl text-gray-600">(১০০০+ সন্তুষ্ট গ্রাহকের রিভিউ!)</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-rose-100 to-pink-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"বিশ্বাসই হচ্ছিল না! আমার ফাটা ঠোঁট ২ দিনেই মসৃণ হয়ে গেছে। গন্ধটাও খুব মিষ্টি। এটা আমার এখনকার ফেভারিট!"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-rose-400 to-pink-600 rounded-full flex items-center justify-center text-white font-bold">
                    স
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">সারাহ্ রহমান</h4>
                    <p className="text-gray-600">ঢাকা</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"অনেক নামী ব্র্যান্ড ব্যবহার করেছি, কিন্তু এমন লং-লাস্টিং ময়েশ্চার অন্য কোথাও পাইনি। অফিস ব্যাগে সব সময় থাকে। অত্যন্ত কার্যকরী।"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold">
                    ন
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">নিলীমা চৌধুরী</h4>
                    <p className="text-gray-600">চট্টগ্রাম</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"আমার ঠোঁটের কালো ছোপগুলো হালকা হতে শুরু করেছে। দামের তুলনায় এর গুণমান সত্যিই অসাধারণ।"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
                    ফ
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">ফারহানা ইসলাম</h4>
                    <p className="text-gray-600">খুলনা</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-600 to-pink-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              আর নয় অপেক্ষা!
            </h2>
            <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
              আপনার ঠোঁটের কোমলতা ফিরিয়ে আনুন। PKG সিক্রেট লিপবাম এখন বিশেষ অফারে সীমিত সময়ের জন্য!
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8 border border-white/30">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-white line-through text-2xl">৫৫০ টাকা</span>
                <div className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-lg font-bold">
                  ২৯% ছাড়
                </div>
              </div>
              <p className="text-4xl lg:text-5xl font-bold text-white mb-2">মাত্র ৩৯০ টাকা</p>
              <p className="text-white/80">PKG সিক্রেট লিপবাম - Net Weight: 1.5g</p>
            </div>
            <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100 px-12 py-6 text-2xl font-bold shadow-2xl transform hover:scale-105 transition-all duration-300">
              <Crown className="mr-3 h-8 w-8" />
              এখনই কার্টে যোগ করুন এবং অফারটি লুফে নিন
            </Button>
            <p className="text-white/80 mt-6">
              আমাদের পণ্যটি ডার্মাটোলজিস্ট পরীক্ষিত এবং কোনো ক্ষতিকারক প্যারাবেন মুক্ত। আপনার ঠোঁটের যত্নে কোনো ঝুঁকি নেই!
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}