"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="work" className="py-20 space-y-12">
      <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#4FD1C5] leading-tight text-center">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
          <div
            key={index}
            className="group rounded-3xl bg-[#1A1A1A] border border-white/10 overflow-hidden hover:border-[#E2F84E]/50 transition-all"
          >
            {/* Image Area */}
            <div className="h-48 relative overflow-hidden rounded-t-2xl">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />

              {/* Overlay buttons */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-[#E2F84E] transition-colors"
                    >
                      <ExternalLink size={16} /> Demo
                    </a>
                  )}
                  <a
                    href={project.codeLink}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-[#E2F84E] transition-colors"
                  >
                    <Github size={16} /> Code
                  </a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-bold text-white group-hover:text-[#E2F84E] transition-colors">
                  {project.title}
                </h3>
                {project.featured && (
                  <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-xs font-medium text-green-400">
                      Completed
                    </span>
                  </div>
                )}
              </div>

              <p className="text-gray-400 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-white font-medium"
        >
          {showAll ? "Show Less" : "View All Projects"}
        </button>
      </div>
    </section>
  );
}
