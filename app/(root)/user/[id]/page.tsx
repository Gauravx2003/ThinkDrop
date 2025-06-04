import React from 'react'
import { auth } from '@/auth';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID } from '@/sanity/lib/queries';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Suspense } from 'react';
import UserStartups from '@/components/UserStartups';
import { Skeleton } from '@/components/ui/skeleton';
import { StartupCardSkeleton } from '@/components/StartupCard';
import { User, AtSign, FileText, Star } from 'lucide-react';

const page = async ({params}:{params: {id: string}}) => {
  
    const id = (await params).id;
    const session = await auth();

    const user = await client.fetch(AUTHOR_BY_ID, { id});
    if(!user) return notFound();

     return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
        
        <div className="relative z-10 container mx-auto px-6 py-20">
          {/* Profile Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              <div className="p-8 md:p-12 text-center">
                {/* Profile Image */}
                <div className="relative mb-8">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-lg opacity-50 animate-pulse"></div>
                    <Image
                      src={user.image}
                      alt={user.name}
                      width={220}
                      height={220}
                      className="relative w-44 h-44 md:w-56 md:h-56 rounded-full border-4 border-white/30 shadow-2xl object-cover mx-auto"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 border-4 border-white rounded-full shadow-lg"></div>
                  </div>
                </div>

                {/* User Info */}
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-black">
                    <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                      {user.name}
                    </span>
                  </h1>
                  
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <AtSign className="size-5 text-purple-300" />
                    <p className="text-2xl md:text-3xl font-bold text-white/90">
                      {user?.username}
                    </p>
                  </div>
                  
                  {user?.bio && (
                    <div className="max-w-2xl mx-auto">
                      <p className="text-lg md:text-xl text-white/80 font-medium leading-relaxed">
                        {user.bio}
                      </p>
                    </div>
                  )}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-10 left-10 animate-bounce">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute top-20 right-16 animate-bounce animation-delay-1000">
                  <div className="w-2 h-2 bg-pink-400 rounded-full shadow-lg"></div>
                </div>
                <div className="absolute bottom-16 left-20 animate-bounce animation-delay-2000">
                  <div className="w-4 h-4 bg-blue-400 rounded-full shadow-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Startups Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
                {session?.id === id ? (
                  <User className="size-8 text-purple-600" />
                ) : (
                  <Star className="size-8 text-purple-600" />
                )}
              </div>
              <h2 className="text-4xl md:text-5xl font-black">
                <span className="text-gray-800">
                  {session?.id === id ? "Your" : "All"} 
                </span>
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent ml-3">
                  Startups
                </span>
              </h2>
            </div>
            <p className="text-xl text-gray-600 font-medium">
              {session?.id === id 
                ? "Manage and track your innovative ideas" 
                : `Discover ${user.name}'s innovative projects`
              }
            </p>
          </div>

          {/* Startups Grid */}
          <div className="max-w-7xl mx-auto">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Suspense fallback={<StartupCardSkeleton />}>
                <UserStartups id={id} />
              </Suspense>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default page