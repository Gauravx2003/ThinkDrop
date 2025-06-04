import React from 'react'
import { sanityFetch } from '@/sanity/lib/live';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ContentRenderer from '@/components/ui/ContenRenderer';
import { PortableText } from '@portabletext/react'
import { Suspense } from 'react';
import { Skeleton  } from '@/components/ui/skeleton';
import View from '@/components/View';
import markdownit from 'markdown-it';
import { PLAYLIST_BY_SLUG_QUERY } from '@/sanity/lib/queries';
import { client } from '@/sanity/lib/client';
import StartupCard from '@/components/StartupCard';
import { StartupCardType } from '@/components/StartupCard';
import { Calendar, User, Eye, Lightbulb, Star, ArrowLeft } from 'lucide-react';

export const experimental_ppr = true;
const md = markdownit();

const page = async ({params}:{ params: Promise<{id: string}>}) => {
  
  const id = (await params).id;
  
  const [ {data:post}, { select: editorPosts}] = await Promise.all([
         sanityFetch({ query: STARTUP_BY_ID_QUERY, params: {id}}),
         client.fetch(PLAYLIST_BY_SLUG_QUERY, { slug: 'editor-s-choice'}),
        ]); 

  console.log("Editors Choice is: ", editorPosts);

  if( !post) return notFound();
  const parsedContent = md.render(post?.pitch || '');

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
            <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
          </div>
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:50px_50px]"></div>
          
          <div className="relative z-10 container mx-auto px-6">
            {/* Back Navigation */}
            <div className="mb-8">
              <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors duration-200 group">
                <ArrowLeft className="size-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-medium">Back to Home</span>
              </Link>
            </div>

            {/* Date Badge */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <Calendar className="size-4 text-purple-300" />
                <span className="text-white/90 font-semibold text-sm tracking-wider">
                  {formatDate(post?._createdAt)}
                </span>
              </div>
            </div>

            {/* Main Title */}
            <div className="text-center max-w-5xl mx-auto mb-8">
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
                  {post.title}
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 font-medium leading-relaxed">
                {post.description}
              </p>
            </div>
          </div>
          
          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-white">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            {/* Main Image */}
            <div className="mb-16">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-purple-100 to-blue-100 p-2">
                <img
                  src={post.image}
                  alt="Startup thumbnail"
                  className="w-full h-auto max-h-[500px] object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            </div>

            {/* Author and Details Section */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-16">
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                  {/* Author Info */}
                  <Link
                    href={`/user/${post.author?._id}`}
                    className="flex items-center gap-4 group"
                  >
                    <div className="relative">
                      <Image
                        src={post.author.image}
                        alt="Author avatar"
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-3 border-white rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-200">
                        {post.author.name}
                      </h3>
                      <p className="text-lg text-gray-600 group-hover:text-purple-600 transition-colors duration-200">
                        @{post.author.username}
                      </p>
                    </div>
                  </Link>

                  {/* Category Badge */}
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 px-6 py-3 rounded-full border border-purple-200">
                    <span className="text-lg font-bold bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                      #{post.Category}
                    </span>
                  </div>
                </div>

                {/* Pitch Details Header */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full">
                    <Lightbulb className="size-6 text-purple-600" />
                  </div>
                  <h2 className="text-3xl font-black bg-gradient-to-r from-purple-700 to-blue-700 bg-clip-text text-transparent">
                    Pitch Details
                  </h2>
                </div>

                {/* Pitch Content */}
                <div className="prose prose-lg max-w-none font-medium leading-relaxed">
                  {parsedContent ? (
                    <div
                      className="text-gray-700 break-words [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:text-gray-900 [&>h1]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mb-3 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:text-gray-900 [&>h3]:mb-2 [&>p]:mb-4 [&>ul]:mb-4 [&>ol]:mb-4 [&>li]:mb-2 [&>blockquote]:border-l-4 [&>blockquote]:border-purple-300 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-600"
                      dangerouslySetInnerHTML={{ __html: parsedContent }}
                    />
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📝</span>
                      </div>
                      <p className="text-gray-500 text-lg">No detailed pitch provided</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center mb-16">
              <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1 max-w-xs"></div>
              <div className="px-6">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-300 to-transparent flex-1 max-w-xs"></div>
            </div>

            {/* Editor's Choice Section */}
            {editorPosts?.length > 0 && (
              <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/20 rounded-full">
                      <Star className="size-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-black text-white">Editor's Choice</h2>
                  </div>
                  <p className="text-white/90 mt-2 text-lg">Handpicked startups you might love</p>
                </div>

                <div className="p-8">
                  <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {editorPosts.map((post: StartupCardType, index: number) => (
                      <StartupCard key={index} post={post} />
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* View Component */}
            <div className="mt-8">
              <Suspense fallback={
                <div className="flex justify-center py-8">
                  <div className="w-8 h-8 border-2 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
                </div>
              }>
                <View id={id}/>
              </Suspense>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default page