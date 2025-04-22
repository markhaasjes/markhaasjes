import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function App() {
  const [year, setYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <main className="w-full flex flex-col bg-black text-white font-sans relative overflow-hidden">
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-6">
        <img
          src="/mnt/data/original-9e040235c6105c1d3c9f769340f7df3f.webp"
          alt="Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 opacity-90"
        />
        <div className="absolute inset-0 bg-black/60 z-0" />

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl sm:text-6xl font-extrabold tracking-tight z-10"
        >
          Hello, my name is
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-4xl sm:text-5xl font-bold text-white mt-4 z-10"
        >
          Mark Haasjes
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-base sm:text-lg text-gray-200 mt-6 max-w-2xl z-10"
        >
          I am a Front-end Developer at NOS, the Dutch Broadcast Foundation
          based in Hilversum, The Netherlands. I love to build web applications
          with JavaScript. I build these with frameworks, libraries and tools
          like; React, Vue, Redux, D3.js, GraphQL, Apollo, Docker, Jest,
          Codeship and more.
        </motion.p>
      </header>

      <footer className="text-center py-12 text-gray-400 bg-black z-10 relative">
        <p className="text-sm">
          &copy; {year} Mark Haasjes. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
