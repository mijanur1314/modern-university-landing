"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="hero-bg min-h-screen flex items-center pt-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-indigo-600 font-semibold mb-4 uppercase tracking-widest">
            Future Ready Education
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-gray-900">
            Learn.
            <span className="text-indigo-600"> Build.</span>
            <br />
            Succeed.
          </h1>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Empower your future with industry-driven programs, expert mentors,
            and a modern learning experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="gradient-bg text-white px-7 py-4 rounded-full font-semibold">
              Explore Courses
            </button>

            <button className="border border-gray-300 px-7 py-4 rounded-full font-semibold">
              Watch Video
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop"
            alt="Students"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
