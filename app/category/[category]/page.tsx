import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Filter, SortDesc, Search, Zap, TrendingUp, Calendar, Users } from 'lucide-react';
import StartupCard from '@/components/StartupCard';
import { PLAYLIST_BY_NAME_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import { StartupCardType } from '@/components/StartupCard';

// Temporary mock data - replace with your actual data structure
const mockStartups = [
  {
    _id: '1',
    _createdAt: '2024-01-15',
    title: 'AI-Powered Code Assistant',
    description: 'Revolutionary AI tool that helps developers write better code faster with intelligent suggestions and automated debugging capabilities.',
    Category: 'Technology',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=200&fit=crop',
    views: 2847,
    author: {
      _id: 'author1',
      name: 'Sarah Chen',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b665?w=100&h=100&fit=crop&crop=face'
    }
  },
  {
    _id: '2',
    _createdAt: '2024-01-20',
    title: 'Smart Home IoT Platform',
    description: 'Complete ecosystem for smart home automation with voice control, energy optimization, and security integration.',
    Category: 'Technology',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop',
    views: 1923,
    author: {
      _id: 'author2',
      name: 'Marcus Johnson',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face'
    }
  },
  {
    _id: '3',
    _createdAt: '2024-01-25',
    title: 'Blockchain Healthcare Records',
    description: 'Secure, decentralized platform for managing healthcare records with patient-controlled access and privacy.',
    Category: 'Technology',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=400&h=200&fit=crop',
    views: 3156,
    author: {
      _id: 'author3',
      name: 'Dr. Emily Rodriguez',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face'
    }
  },
  {
    _id: '4',
    _createdAt: '2024-02-01',
    title: 'VR Training Simulator',
    description: 'Immersive virtual reality platform for professional training in high-risk industries like aviation and healthcare.',
    Category: 'Technology',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=400&h=200&fit=crop',
    views: 1456,
    author: {
      _id: 'author4',
      name: 'Alex Kim',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
    }
  },
  {
    _id: '5',
    _createdAt: '2024-02-05',
    title: 'Quantum Computing Cloud',
    description: 'Cloud-based quantum computing service making quantum algorithms accessible to researchers and enterprises.',
    Category: 'Technology',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=200&fit=crop',
    views: 4321,
    author: {
      _id: 'author5',
      name: 'Dr. Michael Zhang',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face'
    }
  },
  {
    _id: '6',
    _createdAt: '2024-02-10',
    title: 'Neural Interface Gaming',
    description: 'Brain-computer interface technology for next-generation gaming experiences with thought-controlled gameplay.',
    Category: 'Technology',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop',
    views: 2789,
    author: {
      _id: 'author6',
      name: 'Lisa Thompson',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  }
];

// Category configuration
const categoryConfig = {
  technology: {
    name: 'technology',
    color: 'from-blue-500 to-purple-600',
    icon: '💻',
    description: 'Cutting-edge tech solutions, AI innovations, and digital transformation'
  },
  environment: {
    name: 'Environment',
    color: 'from-green-500 to-emerald-600',
    icon: '🌱',
    description: 'Sustainable solutions for a greener future'
  },
  social: {
    name: 'Social',
    color: 'from-pink-500 to-rose-600',
    icon: '❤️',
    description: 'Community-driven solutions for social impact'
  },
  business: {
    name: 'Business',
    color: 'from-orange-500 to-amber-600',
    icon: '💼',
    description: 'Enterprise solutions and B2B innovations'
  },
  gaming: {
    name: 'Gaming',
    color: 'from-purple-500 to-indigo-600',
    icon: '🎮',
    description: 'Next-gen gaming and entertainment experiences'
  },
  'e-commerce': {
    name: 'E-commerce',
    color: 'from-cyan-500 to-blue-600',
    icon: '🛒',
    description: 'Online retail and marketplace innovations'
  },
  education: {
    name: 'Education',
    color: 'from-violet-500 to-purple-600',
    icon: '🎓',
    description: 'EdTech solutions transforming learning'
  },
  media: {
    name: 'Media',
    color: 'from-red-500 to-pink-600',
    icon: '📸',
    description: 'Content creation and media technology'
  }
};

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default async function CategoryPage({params}:{params: {category: string}}) {

  const query = (await params).category as string;
  console.log("query: ", query);
  const {select: category} = await client.fetch(PLAYLIST_BY_NAME_QUERY, { title: query });
  console.log("Category is:" , category);
  const config = categoryConfig[query as keyof typeof categoryConfig];
  
  if (!config || category==null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Category Not Found</h1>
          <Link href="/" className="text-purple-600 hover:text-purple-700 font-semibold">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className={`relative min-h-[50vh] bg-gradient-to-br ${config.color} overflow-hidden`}>
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]"></div>
        
        <div className="relative z-10 container mx-auto px-6 py-16">
          {/* Back button */}
          <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors duration-200">
            <ArrowLeft className="size-4" />
            <span className="font-medium">Back to Home</span>
          </Link>
          
          <div className="text-center">
            {/* Category icon and title */}
            <div className="mb-6">
              <div className="text-6xl mb-4">{config.icon}</div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4">
                {config.name.toLocaleUpperCase()}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 font-medium max-w-3xl mx-auto">
                {config.description}
              </p>
            </div>

            {/* Stats */}
            <div className="flex items-center justify-center gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <TrendingUp className="size-5" />
                  <span className="font-bold text-2xl">{category.length}</span>
                  <span className="text-white/80">Startups</span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
                <div className="flex items-center gap-2 text-white">
                  <Users className="size-5" />
                  <span className="font-bold text-2xl">142</span>
                  <span className="text-white/80">Founders</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 fill-gray-50">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Filters and Content Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          {/* Filter bar */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 border border-gray-100">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-gray-50 px-4 py-2 rounded-full">
                  <Filter className="size-4 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-700">Filters</span>
                </div>
                <select className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>All Time</option>
                  <option>This Week</option>
                  <option>This Month</option>
                  <option>This Year</option>
                </select>
              </div>
              
              <div className="flex items-center gap-2">
                <SortDesc className="size-4 text-gray-600" />
                <select className="bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                  <option>Most Popular</option>
                  <option>Most Recent</option>
                  <option>Most Viewed</option>
                  <option>Alphabetical</option>
                </select>
              </div>
            </div>
          </div>

          {/* Startups grid */}
          <div className="max-w-7xl mx-auto">
            {mockStartups.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.map((post: StartupCardType, index: number) => (
                      <StartupCard key={index} post={post} />
                    ))}
              </ul>
            ) : (
              <div className="text-center py-20">
                <div className="mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">{config.icon}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">No {config.name} Startups Yet</h4>
                  <p className="text-gray-600 text-lg mb-8">
                    Be the first to share your amazing {config.name.toLowerCase()} startup idea!
                  </p>
                  <Link 
                    href="/startup/create"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  >
                    <Zap className="size-4" />
                    Create Startup
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
    
  );
}