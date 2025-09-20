"use client";

export default function Home() {

  const handleClick = async () => {
    const res1 = await fetch("/api/flag1");
    const res2 = await fetch("/api/flag2");
    const res3 = await fetch("/api/flag3");
    const res4 = await fetch("/api/flag4");
    const res5 = await fetch("/api/flag5");
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center space-y-12">
          {/* Header Section */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight">
              Flag Finder
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-light">
              You don&apos;t have to leave this site
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
          </div>

          {/* Mission Statement */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4">
              The flag is here in the site itself
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              To find the flag, you have to first find the tab where it is hidden.
              Follow the instructions below to discover the hidden treasure.
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Instructions
            </h3>
            <ol className="text-left space-y-4 text-gray-700 dark:text-gray-300">
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </span>
                <span className="text-lg">Click on what you want</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </span>
                <span className="text-lg">Network detective work (inspect)</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </span>
                <span className="text-lg">Patience pays, you will get your response</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-medium">
                  4
                </span>
                <span className="text-lg">Five paths, one treasure</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full flex items-center justify-center text-sm font-medium">
                  5
                </span>
                <span className="text-lg">They speak in 0s and 1s so good luck</span>
              </li>
            </ol>
          </div>

          {/* Get Flag Button */}
          <div className="pt-8">
            <button

              className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700 active:scale-95"
            >
              <span className="relative z-10">Get Flag</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
            </button><button

              className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700 active:scale-95"
            >
              <span className="relative z-10">Get Flag</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
            </button><button
              onClick={handleClick}
              className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700 active:scale-95"
            >
              <span className="relative z-10">Get Flag</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
            </button><button

              className="group relative px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-700 active:scale-95"
            >
              <span className="relative z-10">Get Flag</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
