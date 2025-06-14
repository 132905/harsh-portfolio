import React, { useState } from "react";
import { Github, Linkedin, Mail, Download, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function PortfolioHome() {
  const [modalData, setModalData] = useState(null);

  const skills = [
    { title: "Languages", items: ["Python", "Java", "SQL"] },
    { title: "Libraries", items: ["TensorFlow", "Scikit-learn", "NumPy", "Pandas", "PyTorch", "OpenCV"] },
    { title: "ML / AI", items: ["CNN", "NLP", "Generative AI", "Classification", "Clustering"] },
    { title: "Tools", items: ["VS Code", "Git", "Docker", "Jupyter Notebook"] },
    { title: "Analytics & Visualization", items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"] }
  ];

  const projects = [
    {
      title: "Conversational AI Assistant with Langchain & Langgraph",
      tech: "Python, Langchain, Langgraph, OpenRouter.ai",
      description: "Built a foundational reactive conversational AI agent using Langchain & Langgraph.",
      role: "Architected interaction flow, agent design, and extensible tooling.",
      github: "https://github.com/132905/Conversational-AI-Assistant-with-Langchain-Langgraph",
    },
    {
      title: "No-Show Medical Appointments Analysis",
      tech: "Python, Pandas, NumPy, Jupyter",
      description: "EDA on 110k+ medical appointments to find patterns in no-show behavior.",
      role: "Cleaned, explored, and analyzed data, extracted actionable insights.",
      github: "https://github.com/132905/healthcare-appointment-no-show-analysis",
    },
    {
      title: "Global Socio-Economic Comparison Dashboard",
      tech: "Python, Power BI, Tableau",
      description: "Analyzed global socio-economic data and visualized insights in a dashboard.",
      role: "Data cleaning, visual prep, dashboard development.",
      github: "https://github.com/132905/Global-SocioEconomic-Analysis",
    },
    {
      title: "Predictive Analytics for Customer Churn",
      tech: "Python, Scikit-learn, Pandas, Logistic Regression",
      description: "Built ML pipeline to predict customer churn, achieving 85% accuracy.",
      role: "Handled preprocessing, training, evaluation and deployment pipeline.",
      github: "https://github.com/132905/customer-churn-analysis",
    },
    {
      title: "Deep Learning for Image Classification",
      tech: "TensorFlow, Keras, Python",
      description: "Achieved 98.7% accuracy on 70k+ images using a CNN.",
      role: "Model design, training optimization, performance tuning.",
      github: "https://github.com/132905/image-classification-cnn",
    },
    {
      title: "Fall Detection of Parkinson’s Patients",
      tech: "Python, OpenCV, TensorFlow Lite, Mediapipe",
      description: "AI-powered real-time fall detection with 96.8% accuracy.",
      role: "Integrated Mediapipe + CNN on Raspberry Pi with real-time alerts.",
      github: "https://github.com/132905/fall-detection-parkinsons",
    },
  ];

  return (
    <main className="bg-white text-black font-sans">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-4">
        <motion.h1 className="text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          Harsh Malashetti
        </motion.h1>
        <motion.p className="text-xl md:text-2xl text-red-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}>
          AI & ML Enthusiast | Python Developer | Creative Coder
        </motion.p>
        <motion.p className="mt-6 max-w-2xl text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}>
          I'm a passionate and self-driven technologist exploring the world of Artificial Intelligence and Machine Learning. With a solid foundation in Python and hands-on experience in various tools, I aim to build intelligent solutions that create impact.
        </motion.p>

        {/* Scroll Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <button onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-red-600 text-white px-4 py-2 rounded">
            Go to Skills
          </button>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-red-600 text-white px-4 py-2 rounded">
            Go to Projects
          </button>
        </div>

        {/* Contact */}
        <div className="flex gap-6 mt-8">
          <a href="mailto:harshmalashetti@gmail.com" className="p-2 bg-gray-800 rounded-full">
            <Mail className="h-5 w-5 text-white" />
          </a>
          <a href="https://github.com/132905" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full">
            <Github className="h-5 w-5 text-white" />
          </a>
          <a href="https://linkedin.com/in/harsh-malashetti/" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-800 rounded-full">
            <Linkedin className="h-5 w-5 text-white" />
          </a>
          <a href="/Harsh_Malashetti_DS.pdf" download className="p-2 bg-gray-800 rounded-full">
            <Download className="h-5 w-5 text-white" />
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-12 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map(({ title, items }, i) => (
            <div key={i} className="bg-gray-100 rounded-xl p-4 shadow">
              <h3 className="text-xl font-semibold text-red-600 mb-2">{title}</h3>
              <ul className="flex flex-wrap gap-2 text-sm text-gray-800">
                {items.map((skill, idx) => (
                  <li key={idx} className="bg-gray-200 px-3 py-1 rounded-full">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-gray-100 p-4 rounded-xl shadow">
              <h3 className="text-lg font-semibold mb-1">{project.title}</h3>
              <p className="text-sm text-gray-600">{project.tech}</p>
              <button onClick={() => setModalData(project)} className="mt-3 text-sm text-red-600 hover:underline">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {modalData && (
          <motion.div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <motion.div className="bg-white text-black p-6 rounded-xl max-w-lg w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}>
              <button onClick={() => setModalData(null)} className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
                <X />
              </button>
              <h3 className="text-xl font-bold mb-2">{modalData.title}</h3>
              <p className="text-sm text-gray-700 mb-2"><strong>Tech Stack:</strong> {modalData.tech}</p>
              <p className="mb-2"><strong>Description:</strong> {modalData.description}</p>
              <p className="mb-4"><strong>Role:</strong> {modalData.role}</p>
              <a href={modalData.github} target="_blank" rel="noopener noreferrer"
                 className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
                View on GitHub
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
