import Image from "next/image";
import SearchForm from "../../components/SearchForm";
import StartupCard from "@/components/StartupCard";
import { STARTUP_QUERY } from "@/sanity/lib/queries";
import {client} from '@/sanity/lib/client'
import { StartupCardType } from "@/components/StartupCard";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";

export default async function Home({searchParams}:{
  searchParams: Promise<{query?:string}>
}) {
 
  const query = (await searchParams).query;
  const params = {search:query || null}

  const session = await auth();
  //console.log("Session id is: ",session?.id);

  
  const { data: posts} = await sanityFetch({query: STARTUP_QUERY, params});
  //console.log('Sending Data: ', posts);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
        
        <div className="relative z-10 container mx-auto px-6 py-20 text-center">
          {/* Main heading with gradient text */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent animate-pulse">
                PITCH
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                YOUR STARTUP
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-1 max-w-32"></div>
              <div className="flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white/80 text-sm font-semibold tracking-wider">LIVE NOW</span>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-white to-transparent flex-1 max-w-32"></div>
            </div>
            
            <h2 className="text-2xl md:text-4xl font-bold text-white/90 mb-4">
              Connect With 
              <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"> Entrepreneurs</span>
            </h2>
          </div>

          {/* Enhanced subtitle */}
          <p className="text-xl md:text-2xl text-white/80 font-medium max-w-4xl mx-auto mb-12 leading-relaxed">
            🚀 Submit Ideas • 🗳️ Vote on Pitches • 🏆 Get Noticed in Virtual Competitions
          </p>

          {/* Search form with enhanced styling */}
          <div className="max-w-2xl mx-auto">
            <SearchForm query={query} />
          </div>
          
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

      {/* Startups Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          {/* Section header */}
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black mb-4">
              {query ? (
                <>
                  <span className="text-gray-800">Search Results for </span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">"{query}"</span>
                </>
              ) : (
                <>
                  <span className="text-gray-800">Trending </span>
                  <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Startups</span>
                </>
              )}
            </h3>
            <p className="text-xl text-gray-600 font-medium">Discover the next big thing</p>
          </div>

          {/* Startups grid */}
          <div className="max-w-7xl mx-auto">
            {posts?.length > 0 ? (
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: StartupCardType) => (
                  <li suppressHydrationWarning key={post?._id} className="transform hover:scale-105 transition-all duration-300">
                    <StartupCard post={post} />
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-20">
                <div className="mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-4xl">🔍</span>
                  </div>
                  <h4 className="text-2xl font-bold text-gray-800 mb-4">No Startups Found</h4>
                  <p className="text-gray-600 text-lg">
                    {query 
                      ? `No results found for "${query}". Try a different search term.`
                      : "Be the first to share your amazing startup idea!"
                    }
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      

      <SanityLive/>
    </>
  );
}