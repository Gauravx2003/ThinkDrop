import Form from "next/form";
import { Search, Sparkles, Zap } from "lucide-react";
import SearchFormReset from "./SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <div className="relative group">
      {/* Glowing background effect */}
      <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-500 animate-pulse"></div>
      
      <Form action="/" scroll={false} className="relative" id="search-form">
        <div className="flex items-center bg-white/90 backdrop-blur-lg border-2 border-white/30 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:bg-white/95 hover:border-white/50 group-hover:scale-[1.02] overflow-hidden">
          {/* Search Icon Container */}
          <div className="flex items-center justify-center pl-6 pr-2">
            <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
              <Search className="size-5 text-white" />
            </div>
          </div>

          {/* Input Field */}
          <div className="flex-1 relative">
            <input
              suppressHydrationWarning
              name="query"
              className="w-full h-14 text-lg font-medium bg-transparent border-none outline-none placeholder:text-gray-500 text-gray-800 px-4 pr-2"
              defaultValue={query}
              placeholder="Discover amazing startups..."
            />
            
            {/* Animated placeholder enhancement */}
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
              <div className="flex items-center gap-1">
                <Sparkles className="size-4 text-purple-500 animate-pulse" />
                <span className="text-xs font-semibold text-gray-400">AI Powered</span>
              </div>
            </div>
          </div>

          {/* Action Buttons Container */}
          <div className="flex items-center gap-2 pr-4">
            {query && (
              <div className="transform hover:scale-105 transition-transform duration-200">
                <SearchFormReset />
              </div>
            )}

            <button 
              suppressHydrationWarning
              type="submit" 
              className="group/btn relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
            >
              {/* Button background animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative flex items-center gap-2">
                <span className="hidden sm:inline text-sm font-semibold">Search</span>
                <div className="relative">
                  <Search className="size-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  <Zap className="absolute -top-1 -right-1 size-3 text-yellow-300 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Floating particles effect */}
        <div className="absolute -top-2 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce transition-opacity duration-500"></div>
        <div className="absolute -top-1 right-1/3 w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce animation-delay-500 transition-opacity duration-500"></div>
        <div className="absolute -bottom-2 right-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 animate-bounce animation-delay-1000 transition-opacity duration-500"></div>
      </Form>

      {/* Search suggestions hint */}
      <div className="absolute -bottom-8 left-0 right-0 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-sm text-white/70 font-medium">
          Try: "AI", "Health", "Fintech", "Education"
        </p>
      </div>
    </div>
  );
};

export default SearchForm;