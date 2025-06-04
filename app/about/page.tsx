import Image from "next/image";
import Link from "next/link";
import { 
  Lightbulb, 
  Users, 
  TrendingUp, 
  Eye, 
  Brain, 
  LogIn, 
  Plus, 
  Zap,
  Target,
  Rocket,
  Star,
  Crown,
  ChevronRight
} from "lucide-react";

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
        
        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                ABOUT
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
                THINKDROP
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-1 max-w-32"></div>
              <div className="flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm font-semibold tracking-wider">WHERE IDEAS MATTER</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-1 max-w-32"></div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-white/80 font-medium max-w-4xl mx-auto mb-12 leading-relaxed">
            🌟 The Ultimate Platform for Entrepreneurs to Shine, Connect, and Transform Ideas into Reality
          </p>

          {/* Floating elements */}
          <div className="absolute top-20 left-10 animate-bounce">
            <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg"></div>
          </div>
          <div className="absolute top-32 right-16 animate-bounce animation-delay-1000">
            <div className="w-3 h-3 bg-pink-400 rounded-full shadow-lg"></div>
          </div>
          <div className="absolute bottom-20 left-20 animate-bounce animation-delay-2000">
            <div className="w-5 h-5 bg-blue-400 rounded-full shadow-lg"></div>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Why Use ThinkDrop Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gray-800">Why Use </span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">ThinkDrop?</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              Your Gateway to Entrepreneurial Success and Recognition
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Get Noticed */}
            <div className="group bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-100">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                Get Noticed
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Stand out in the crowded startup ecosystem. Your innovative ideas deserve the spotlight they need to attract the right attention.
              </p>
              <div className="flex items-center text-purple-600 font-semibold group-hover:text-purple-800">
                <span>Shine Bright</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Connect with Entrepreneurs */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-blue-100">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                Connect with Entrepreneurs
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Join a vibrant community of like-minded innovators. Network, collaborate, and learn from fellow entrepreneurs on similar journeys.
              </p>
              <div className="flex items-center text-blue-600 font-semibold group-hover:text-blue-800">
                <span>Build Network</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Attract Investors */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-green-100">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl mb-6 group-hover:scale-110 transition-all duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                Attract Investors
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Showcase your startup to potential investors and funding opportunities. Turn your brilliant ideas into funded ventures.
              </p>
              <div className="flex items-center text-green-600 font-semibold group-hover:text-green-800">
                <span>Get Funded</span>
                <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Become Talk of the Town */}
            <div className="group bg-gradient-to-br from-yellow-50 to-orange-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-yellow-100 lg:col-span-3 md:col-span-2">
              <div className="flex flex-col md:flex-row items-center text-center md:text-left">
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-3xl mb-6 md:mb-0 md:mr-8 group-hover:scale-110 transition-all duration-300">
                  <Crown className="w-10 h-10 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                    Become the Talk of the Town
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-lg mb-4">
                    Transform from unknown to unforgettable. Create buzz around your startup, gain media attention, and become the success story everyone talks about. Your journey from idea to industry leader starts here.
                  </p>
                  <div className="flex items-center justify-center md:justify-start text-orange-600 font-semibold text-lg group-hover:text-orange-800">
                    <Star className="w-5 h-5 mr-2" />
                    <span>Rise to Fame</span>
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Use ThinkDrop Section */}
      <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              <span className="text-gray-800">How to Use </span>
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">ThinkDrop</span>
            </h2>
            <p className="text-xl text-gray-600 font-medium max-w-3xl mx-auto">
              Four Simple Steps to Transform Your Ideas into Success Stories
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Step 1: Think */}
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg animate-pulse">
                    1
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors">
                  THINK
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Brainstorm your innovative startup idea. Let your creativity flow and envision the solution you want to bring to the world.
                </p>
              </div>

              {/* Step 2: Login */}
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <LogIn className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg animate-pulse">
                    2
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors">
                  LOGIN
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Join our community of entrepreneurs. Quick and easy registration to get you started on your journey to success.
                </p>
              </div>

              {/* Step 3: Create */}
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <Plus className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg animate-pulse">
                    3
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                  CREATE
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Craft your startup pitch with our intuitive tools. Add details, images, and compelling descriptions to showcase your vision.
                </p>
              </div>

              {/* Step 4: Drop */}
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mx-auto shadow-2xl group-hover:scale-110 transition-all duration-300">
                    <Zap className="w-12 h-12 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg animate-pulse">
                    4
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                  DROP
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Launch your idea into the ThinkDrop universe! Watch as the community votes, comments, and helps your startup soar.
                </p>
              </div>
            </div>

            {/* Connection Lines for larger screens */}
            <div className="hidden lg:block relative -mt-32 mb-16">
              <div className="absolute top-12 left-1/4 w-1/4 h-0.5 bg-gradient-to-r from-purple-300 to-blue-300"></div>
              <div className="absolute top-12 left-2/4 w-1/4 h-0.5 bg-gradient-to-r from-blue-300 to-green-300"></div>
              <div className="absolute top-12 left-3/4 w-1/4 h-0.5 bg-gradient-to-r from-green-300 to-orange-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Transform Your 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Ideas</span>?
            </h2>
            <p className="text-xl text-white/80 font-medium mb-12 leading-relaxed">
              Join thousands of entrepreneurs who are already making waves in the startup world. Your success story starts with a single drop.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link href="/" className="group">
                <div className="flex items-center space-x-3 bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-10 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-1 hover:scale-105 font-bold text-lg">
                  <Rocket className="w-6 h-6 group-hover:animate-bounce" />
                  <span>START YOUR JOURNEY</span>
                  <Zap className="w-5 h-5" />
                </div>
              </Link>
              
              <div className="text-white/60 font-medium">
                No credit card required • Free to start
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}