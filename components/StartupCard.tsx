import { cn } from "@/lib/utils";
import { EyeIcon, Calendar, User, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { formatDate } from "@/lib/utils";
import { Startup, Author } from "@/sanity/types";
import { Skeleton } from "./ui/skeleton";


export type StartupCardType = Omit<Startup, 'author'> & {author?: Author};

const StartupCard = ({ post }: { post: StartupCardType }) => {
  const {
    _createdAt,
    views,
    author,
    title,
    Category,
    _id,
    image,
    description,
  } = post;

  //console.log(post);

  return (
    <div suppressHydrationWarning className=" group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 hover:border-purple-200 overflow-hidden">
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/0 to-blue-50/0 group-hover:from-purple-50/50 group-hover:to-blue-50/50 transition-all duration-500 rounded-2xl"></div>
      
      <div className="relative z-10 p-6">
        {/* Header with date and views */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 bg-gradient-to-r from-purple-100 to-blue-100 group-hover:from-purple-200 group-hover:to-blue-200 px-3 py-1.5 rounded-full transition-all duration-300">
            <Calendar className="size-3 text-purple-600" />
            <span className="text-xs font-semibold text-purple-800">
              {formatDate(_createdAt)}
            </span>
          </div>

          <div className="flex items-center gap-2 bg-gray-50 group-hover:bg-gray-100 px-3 py-1.5 rounded-full transition-all duration-300">
            <EyeIcon className="size-4 text-gray-600 group-hover:text-purple-600 transition-colors duration-300"/>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-purple-700 transition-colors duration-300">{views}</span>
          </div>
        </div>

        {/* Author and Title Section */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex-1 min-w-0">
            <Link href={`/user/${author?._id}`} className="group/author">
              <div className="flex items-center gap-2 mb-2">
                <User className="size-3 text-gray-500" />
                <p className="text-sm font-medium text-gray-600 group-hover/author:text-purple-600 transition-colors duration-200 truncate">
                  {author?.name}
                </p>
              </div>
            </Link>
            <Link href={`/startup/${_id}`} className="group/title">
              <h3 className="text-xl font-bold text-gray-900 group-hover/title:text-purple-700 transition-colors duration-200 line-clamp-2 leading-tight mb-2">
                {title}
              </h3>
            </Link>
          </div>
          
          <Link href={`/user/${author?._id}`} className="flex-shrink-0 group/avatar">
            <div className="relative">
              <Image 
                src={author?.image!} 
                alt='Author avatar'
                height={48} 
                width={48} 
                className="rounded-full border-2 border-gray-200 group-hover/avatar:border-purple-300 transition-all duration-300 group-hover/avatar:scale-110 shadow-md"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full opacity-0 group-hover/avatar:opacity-100 transition-opacity duration-300"></div>
            </div>
          </Link>
        </div>

        {/* Description and Image */}
        <Link href={`/startup/${_id}`} className="block group/content">
          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3 group-hover/content:text-gray-700 transition-colors duration-200">
            {description}
          </p>
          
          <div className="relative overflow-hidden rounded-xl mb-5 bg-gradient-to-br from-gray-50 to-gray-100">
            <img 
              src={image} 
              alt="Startup preview" 
              className="w-full h-48 object-cover group-hover/content:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover/content:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>

        {/* Footer with category and button */}
        <div className="flex items-center justify-between gap-3">
          <Link href={`/?query=${Category?.toLowerCase()}`} className="group/category">
            <div className="bg-gradient-to-r from-gray-100 to-gray-200 group-hover/category:from-purple-100 group-hover/category:to-blue-100 px-4 py-2 rounded-full transition-all duration-300">
              <span className="text-sm font-semibold text-gray-700 group-hover/category:text-purple-700 transition-colors duration-300">
                #{Category}
              </span>
            </div>
          </Link>
          
          <Button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold px-6 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group/button" 
            asChild
          >
            <Link href={`/startup/${_id}`} className="flex items-center gap-2">
              <span className="text-sm">Details</span>
              <ArrowRight className="size-4 group-hover/button:translate-x-1 transition-transform duration-300" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-200/20 to-purple-200/20 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-700"></div>
    </div>
  );
};

export const StartupCardSkeleton = () => (
  <>
    {[0, 1, 2, 3, 4].map((index: number) => (
      <li key={cn("skeleton", index)} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="p-6 space-y-4">
          {/* Header skeleton */}
          <div className="flex justify-between items-center">
            <Skeleton className="h-6 w-24 rounded-full" />
            <Skeleton className="h-6 w-16 rounded-full" />
          </div>
          
          {/* Author and title skeleton */}
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-20" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </div>
            <Skeleton className="w-12 h-12 rounded-full" />
          </div>
          
          {/* Description skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-2/3" />
          </div>
          
          {/* Image skeleton */}
          <Skeleton className="w-full h-48 rounded-xl" />
          
          {/* Footer skeleton */}
          <div className="flex justify-between items-center">
            <Skeleton className="h-8 w-20 rounded-full" />
            <Skeleton className="h-8 w-16 rounded-full" />
          </div>
        </div>
      </li>
    ))}
  </>
);

export default StartupCard;