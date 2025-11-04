function HeroVisual() {
  return (
    <div className="hidden lg:block relative animate-in fade-in slide-in-from-right duration-1000 delay-300">
      <div className="relative">
        {/* Floating Cards */}
        <div className="absolute -top-8 -left-8 w-64 h-80 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl transform rotate-6 hover:rotate-3 transition-transform duration-500"></div>
        <div className="absolute top-0 left-0 w-64 h-80 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"></div>
        <div className="relative w-64 h-80 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-2xl border border-white/30 shadow-2xl p-6 transform hover:scale-105 transition-transform duration-500">
          <div className="absolute top-4 right-4 px-3 py-1 bg-green-500 rounded-full text-xs font-bold">
            LIVE
          </div>
          <div className="w-full h-40 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-xl mb-4 flex items-center justify-center">
            <svg className="w-16 h-16 text-white/60" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </div>
          <div className="space-y-3">
            <div className="h-4 bg-white/20 rounded w-3/4"></div>
            <div className="h-3 bg-white/10 rounded w-1/2"></div>
            <div className="mt-6 pt-5 border-t border-white/20">
              <div className="text-xs text-white/70 mb-2 uppercase tracking-wider">Current Bid</div>
              <div className="text-2xl font-bold text-white">$1,250</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroVisual;
