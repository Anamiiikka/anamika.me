"use client";

import { ExternalLink } from "lucide-react";
import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 space-y-12">
      <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#4FD1C5] leading-tight text-center">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {experience.map((exp, index) => (
          <div
            key={index}
            className="group rounded-3xl bg-[#1A1A1A] border border-white/10 p-6 md:p-8 hover:border-[#E2F84E]/50 transition-all"
          >
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="space-y-1.5">
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl font-bold text-white group-hover:text-[#E2F84E] transition-colors">
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                      </span>
                      <span className="text-xs font-medium text-green-400">Current</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-400">
                  <span className="text-[#4FD1C5] font-medium">{exp.company}</span>
                  <span className="text-gray-600"> · </span>
                  {exp.type}
                  {exp.location && (
                    <>
                      <span className="text-gray-600"> · </span>
                      {exp.location}
                    </>
                  )}
                </p>
              </div>

              <div className="flex flex-col items-start md:items-end gap-2">
                <span className="text-sm text-gray-500 font-medium whitespace-nowrap">
                  {exp.period}
                </span>
                {exp.link && (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#E2F84E] transition-colors"
                  >
                    <ExternalLink size={13} /> Live Link
                  </a>
                )}
              </div>
            </div>

            {/* Sub-project / tech tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {exp.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Bullet points */}
            <ul className="mt-5 space-y-2.5">
              {exp.points.map((point, i) => (
                <li key={i} className="flex gap-3 text-gray-400 leading-relaxed">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#E2F84E]/70 shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
