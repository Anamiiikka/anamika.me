"use client";
import Image from "next/image";
import { useState } from "react";
import Spotlight from "@/components/Spotlight";
import { Briefcase, User, FileText, Linkedin, Phone, Mail, Github, ExternalLink } from "lucide-react";

export default function Home() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      title: "WealthPulse",
      description: "AI-powered investment management platform for tracking mutual funds and crypto with real-time insights.",
      tags: ["React", "FastAPI", "MongoDB", "AI/ML", "TailwindCSS"],
      demoLink: "#",
      codeLink: "#",
      featured: true
    },
    {
      title: "Team Works WebApp",
      description: "A comprehensive project management tool designed to streamline team collaboration and workflow.",
      tags: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
      demoLink: "#",
      codeLink: "#",
      featured: true
    },
    {
      title: "Codev",
      description: "Real-time collaborative code editor with AI assistance and multi-language execution.",
      tags: ["React", "Node.js", "Socket.IO", "AI", "MongoDB"],
      demoLink: "#",
      codeLink: "#",
      featured: false
    },
    {
      title: "FundHive",
      description: "Social crowdfunding platform connecting entrepreneurs with investors through verified pitches.",
      tags: ["React", "Node.js", "MongoDB", "AI", "AWS S3", "Auth0"],
      demoLink: "#",
      codeLink: "#",
      featured: true
    },
    {
      title: "TaskMaster",
      description: "Smart task management app with AI-driven prioritization and team collaboration features.",
      tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
      featured: false
    },
    {
      title: "EcoTrack",
      description: "Carbon footprint tracker helping users monitor and reduce their environmental impact.",
      tags: ["React Native", "Firebase", "Redux"],
      demoLink: "#",
      codeLink: "#",
      featured: false
    },
    {
      title: "DevSocial",
      description: "A social platform for developers to share code snippets, articles, and connect.",
      tags: ["Vue.js", "GraphQL", "Django"],
      demoLink: "#",
      codeLink: "#",
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-yellow-500/30 relative overflow-hidden">
      <Spotlight />
      
      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20" 
           style={{
             backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
             backgroundSize: '24px 24px'
           }}>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-sm bg-[#0f0f0f]/50 pt-6 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tight">Anamika!</div>
          <div className="flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#work" className="flex items-center gap-2 hover:text-white transition-colors">
              <Briefcase size={18} /> Work
            </a>
            <a href="#about" className="flex items-center gap-2 hover:text-white transition-colors">
              <User size={18} /> About
            </a>
            <a href="/resume.pdf" className="flex items-center gap-2 hover:text-white transition-colors">
              <FileText size={18} /> Resume
            </a>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight">
              Hi! I&apos;m <span className="text-[#E2F84E]">Anamika</span>, <br />
              Product Designer, <br />
              Storyteller
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl font-light">
              With 4+ years of 0-1 experience crafting B2B, B2C solutions
            </p>
          </div>

          <div className="relative w-full max-w-md md:max-w-lg aspect-square shrink-0">
            
            {/* Image Container */}
            <div className="relative z-10 w-full h-full">
               <div className="relative w-full h-full rotate-3 hover:rotate-0 transition-transform duration-500">
                  <Image 
                    src="/bg1.png" 
                    alt="Anamika Singh" 
                    fill
                    className="object-cover object-center rounded-4xl md:rounded-[3rem] shadow-2xl"
                    priority
                  />
                  {/* Inner shadow to blend white edges */}
                  <div className="absolute inset-0 rounded-4xl md:rounded-[3rem] shadow-[inset_0_0_40px_10px_#0f0f0f] pointer-events-none"></div>
               </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
           {/* Image */}
           <div className="relative w-full max-w-md aspect-3/4 shrink-0">
             <div className="relative w-full h-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
               <Image
                 src="/pic.jpg"
                 alt="About Anamika"
                 fill
                 className="object-cover"
               />
             </div>
           </div>

           {/* Content */}
           <div className="flex-1 space-y-8">
             <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#4FD1C5] leading-tight">
               Meet the mind behind <br /> the magic!
             </h2>
             <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
               <p>
                 Software Engineer turned Product Designer, with 4+ years of industry experience. 
                 I have worked on diverse projects across various domains: E-commerce, Healthcare, Finance, Energy and SaaS products.
               </p>
               <p className="text-[#4FD1C5] flex items-start gap-3 font-medium">
                 <span className="text-2xl">👩‍💻</span>
                 <span>
                   Currently leading design of a Gen AI tool for fashion design, at Fword.ai
                 </span>
               </p>
             </div>
             <button className="px-8 py-3 bg-[#E2F84E] text-black font-bold rounded-full hover:scale-105 transition-transform">
               Learn More
             </button>
           </div>
        </section>

        {/* Projects Section */}
        <section id="work" className="py-20 space-y-12">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#4FD1C5] leading-tight text-center">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {projects.slice(0, showAll ? projects.length : 3).map((project, index) => (
              <div key={index} className="group rounded-3xl bg-[#1A1A1A] border border-white/10 overflow-hidden hover:border-[#E2F84E]/50 transition-all">
                {/* Image Area */}
                <div className="h-48 bg-black relative flex items-center justify-center group-hover:bg-black/80 transition-colors">
                   <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <a href={project.demoLink} className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-[#E2F84E] transition-colors">
                        <ExternalLink size={16} /> Demo
                      </a>
                      <a href={project.codeLink} className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-[#E2F84E] transition-colors">
                        <Github size={16} /> Code
                      </a>
                   </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <h3 className="text-2xl font-bold text-white group-hover:text-[#E2F84E] transition-colors">{project.title}</h3>
                    {project.featured && (
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-medium text-green-400">Completed</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-white/5 text-gray-300 rounded-full border border-white/5">
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

        {/* Contact Section */}
        <section id="contact" className="py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
             <h2 className="text-5xl md:text-7xl font-serif text-[#4FD1C5] leading-tight">
               Love my work?
             </h2>
             <p className="text-2xl md:text-3xl font-bold text-white">
               Let&apos;s Connect!
             </p>
             <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Feel free to reach out! I&apos;m here to help and will respond within 24 hours. Your questions matter to me!
            </p>
          </div>

          <div className="space-y-8 md:pl-20">
             

             {/* Email */}
             <div className="flex items-start gap-4">
                <Mail className="text-gray-400 mt-1" size={24} />
                <div>
                   <p className="font-medium text-white text-lg">Write an email</p>
                   <a href="mailto:anamikasingh200205@gmail.com" className="text-gray-400 hover:text-[#E2F84E] transition-colors block underline decoration-gray-600 underline-offset-4 hover:decoration-[#E2F84E]">anamikasingh200205@gmail.com</a>
                </div>
             </div>

             {/* LinkedIn */}
             <div className="flex items-start gap-4">
                <Linkedin className="text-gray-400 mt-1" size={24} />
                <div>
                   <p className="font-medium text-white text-lg">Connect with me on Linkedin</p>
                   <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E2F84E] transition-colors block underline decoration-gray-600 underline-offset-4 hover:decoration-[#E2F84E]">linkedin.com/in/anamika</a>
                </div>
             </div>

             {/* GitHub */}
             <div className="flex items-start gap-4">
                <Github className="text-gray-400 mt-1" size={24} />
                <div>
                   <p className="font-medium text-white text-lg">Connect with me on Github</p>
                   <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E2F84E] transition-colors block underline decoration-gray-600 underline-offset-4 hover:decoration-[#E2F84E]">github.com/anamika</a>
                </div>
             </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10 mt-10 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#E2F84E]">
                 <Image src="/pic.jpg" alt="Anamika" fill className="object-cover" />
              </div>
              <span className="font-serif text-xl text-white">Anamika Singh</span>
           </div>
           
           <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
              <a href="#" className="hover:text-[#E2F84E] transition-colors">Home</a>
              <a href="#work" className="hover:text-[#E2F84E] transition-colors">Projects</a>
              <a href="#about" className="hover:text-[#E2F84E] transition-colors">About me</a>
              <a href="#contact" className="hover:text-[#E2F84E] transition-colors">Contact me</a>
           </div>

           <div className="flex gap-4">
             
              <a href="https://linkedin.com" className="w-10 h-10 bg-white/5 text-white rounded-full flex items-center justify-center hover:bg-[#E2F84E] hover:text-black transition-all hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" className="w-10 h-10 bg-white/5 text-white rounded-full flex items-center justify-center hover:bg-[#E2F84E] hover:text-black transition-all hover:scale-110">
                <Github size={18} />
              </a>
           </div>
        </footer>

      </main>
    </div>
  );
}
