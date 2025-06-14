import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { motion } from "framer-motion";

export default function PortfolioHome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 text-white font-sans">
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Harsh Malashetti
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-red-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          AI & ML Enthusiast | Python Developer | Creative Coder
        </motion.p>
        <motion.p
          className="mt-6 max-w-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          I'm a passionate and self-driven technologist exploring the world of Artificial Intelligence and Machine Learning. With a solid foundation in Python and hands-on experience in various tools, I aim to build intelligent solutions that create impact. I enjoy translating complex problems into clean, scalable code and continuously strive to grow through new challenges.
        </motion.p>
        <div className="flex gap-6 mt-8">
          <a
            href="mailto:harshmalashetti@gmail.com"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
          >
            <Mail className="h-5 w-5 text-white" />
          </a>
          <a
            href="https://github.com/132905"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
          >
            <Github className="h-5 w-5 text-white" />
          </a>
          <a
            href="https://linkedin.com/in/harsh-malashetti/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
          >
            <Linkedin className="h-5 w-5 text-white" />
          </a>
          <a
            href="/Harsh_Malashetti_DS.pdf"
            download
            className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
          >
            <Download className="h-5 w-5 text-white" />
          </a>
        </div>
      </section>

      <section className="bg-gray-950 py-16 px-4">
        <h2 className="text-4xl font-semibold text-center mb-10 text-white">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto text-center">
          {[
            "Python",
            "Java",
            "TensorFlow",
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "PyTorch",
            "OpenCV",
            "SQL",
            "Git",
            "Docker",
            "VS Code",
            "Power BI",
            "Tableau"
          ].map((skill, idx) => (
            <div
              key={idx}
              className="bg-gray-800 text-white shadow-md p-4 font-medium rounded-xl"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
