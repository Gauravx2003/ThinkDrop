"use client";

import React from 'react'
import Link from "next/link";
import { X, RotateCcw } from "lucide-react";

const SearchFormReset = () => {

    const reset = () => {
        const form = document.querySelector('#search-form') as HTMLFormElement

        if (form) {
            form.reset();
        }
    }

    return (
        <button 
            type="reset" 
            onClick={reset}
            className="group/reset relative overflow-hidden"
        >
            <Link 
                href='/' 
                className="relative flex items-center justify-center w-10 h-10 bg-gradient-to-r from-gray-500 to-gray-600 hover:from-red-500 hover:to-pink-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 group-hover/reset:rotate-12"
            >
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover/reset:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                
                {/* Icon container */}
                <div className="relative flex items-center justify-center">
                    <X className="size-4 group-hover/reset:scale-110 transition-transform duration-200" />
                    
                    {/* Rotating reset icon that appears on hover */}
                    <RotateCcw className="absolute size-3 opacity-0 group-hover/reset:opacity-100 group-hover/reset:animate-spin transition-all duration-300 text-white/80" />
                </div>

                {/* Ripple effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover/reset:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-white/20 rounded-lg animate-ping"></div>
                </div>
            </Link>

            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/reset:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
                Clear Search
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-800"></div>
            </div>
        </button>
    )
}

export default SearchFormReset