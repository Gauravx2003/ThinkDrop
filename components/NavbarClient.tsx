'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LogOut, Lightbulb, Zap, Compass, Info } from 'lucide-react';
import { AvatarImage, Avatar, AvatarFallback } from './ui/avatar';
import dynamic from 'next/dynamic';
import { loginAction } from '@/lib/action/login';
import { logoutAction } from '@/lib/action/logout';
//import ExploreModal from './ExploreModal';

const ExploreModal = dynamic(() => import('./ExploreModal'), { ssr: false });

interface Props {
  session: any;
}

const NavbarClient: React.FC<Props> = ({ session }) => {
  const [isExploreModalOpen, setIsExploreModalOpen] = useState(false);

  return (
    <>
      <header className='bg-white shadow-lg border-b border-gray-100 px-6 py-4 sticky top-0 z-50 backdrop-blur-sm bg-white/95'>
        <nav className='flex justify-between items-center max-w-7xl mx-auto'>
          <Link href="/" className="group">
            <div className="flex items-center space-x-3 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <Image src="/logo.png" alt="logo" width={50} height={50} className="rounded-xl shadow-md" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  ThinkDrop
                </h1>
                <p className="text-xs text-gray-500 font-medium tracking-wider">IDEAS THAT MATTER</p>
              </div>
            </div>
          </Link>

          <div className='flex items-center gap-4'>
            {/* About Link - Always visible */}
            <Link href="/about" className="group">
              <div className="flex items-center space-x-2 text-gray-700 hover:text-purple-600 px-4 py-2 rounded-full hover:bg-purple-50 transition-all duration-300 hover:scale-105">
                <Info className="size-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className='max-sm:hidden font-semibold text-sm'>ABOUT</span>
              </div>
            </Link>

            {session?.user ? (
              <>
                <Link href="/startup/create" className="group">
                  <div className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-105">
                    <Lightbulb className="size-4 group-hover:animate-pulse" />
                    <span className='max-sm:hidden font-semibold text-sm'>CREATE IDEA</span>
                    <Zap className="size-3" />
                  </div>
                </Link>

                <button
                  onClick={() => setIsExploreModalOpen(true)}
                  className="group flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-105"
                >
                  <Compass className="size-4 group-hover:rotate-12 transition-transform duration-300" />
                  <span className='max-sm:hidden font-semibold text-sm'>EXPLORE</span>
                  <Zap className="size-3" />
                </button>

                <form action={logoutAction}>
                        <button
                        suppressHydrationWarning
                         type="submit"
                         className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                        >
                           <span className="max-sm:hidden font-medium text-sm">LOGOUT</span>
                             <LogOut className="size-4 group-hover:rotate-12 transition-transform" />
                        </button>
                </form>

                <Link href={`/user/${session?.id}`} className="group">
                  <div className="relative">
                    <Avatar className="size-10 border-2 border-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 group-hover:scale-105">
                      <AvatarImage src={session?.user?.image || ''} alt={session?.user?.name || ''} />
                      <AvatarFallback className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-sm">
                        {session?.user?.name?.charAt(0) || 'U'}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full" />
                    </div>
                  </div>
                </Link>
              </>
            ) : (
              <form action={loginAction}>
                        <button
                         type="submit"
                         className="group flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 font-semibold"
                        >
                            <span className="text-sm tracking-wide">LOGIN</span>
                            <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
                                <span className="text-xs">🚀</span>
                            </span>
                        </button>
                    </form>
            )}
          </div>
        </nav>
      </header>

      {/* Explore Modal */}
      <ExploreModal isOpen={isExploreModalOpen} onClose={() => setIsExploreModalOpen(false)} />
    </>
  );
};

export default NavbarClient;