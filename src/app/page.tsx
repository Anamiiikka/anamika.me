"use client";
import Image from "next/image";
import { useState } from "react";
import Spotlight from "@/components/Spotlight";
import { Briefcase, User, FileText, Linkedin, Phone, Mail, Github, ExternalLink, Menu, X } from "lucide-react";

export default function Home() {
  const [showAll, setShowAll] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      title: "WealthPulse",
      description: "AI-powered investment management platform for tracking mutual funds and crypto with real-time insights.",
      tags: ["Next.js", "Auth0","FastAPI", "MongoDB", "TailwindCSS"],
      demoLink: "https://wealthpulse-nu.vercel.app/",
      codeLink: "https://github.com/Anamiiikka/wealthpulse",
      featured: true
    },
    {
      title: "Team Works",
      description: "Built during my internship at AdaLabs, this platform was designed for Team Works Advisors",
      tags: ["Next.js", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      demoLink: "https://www.teamworksadvisors.com/",
      codeLink: "https://github.com/Anamiiikka/Team-works",
      featured: true
    },
    {
      title: "Codev",
      description: "Real-time collaborative code editor with AI assistance and multi-language execution.",
      tags: ["React", "Node.js", "Socket.IO","AWS SDK", "MongoDB"],
      demoLink: "https://codev-k6mg.onrender.com/",
      codeLink: "https://github.com/Anamiiikka/code-editor",
      featured: false
    },
    {
      title: "FundHive",
      description: "Social crowdfunding platform connecting entrepreneurs with investors through verified pitches.",
      tags: ["React", "Node.js", "MongoDB","AWS S3", "Auth0"],
      demoLink: "https://fundhive.vercel.app/",
      codeLink: "https://github.com/Anamiiikka/fundhive",
      featured: true
    },
    {
      title: "Trendora",
      description: "Trendora is a full-stack e-commerce application designed to provide users with an intuitive interface to browse, purchase, and manage products.",
      tags: ["React.js", "TailwindCSS", "Node.js", "MongoDB","Cloudinary"],
      demoLink: "https://trendora-xo3m.onrender.com/",
      codeLink: "#",
      featured: false
    },
    
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
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#0f0f0f]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold tracking-tight text-white hover:text-[#E2F84E] transition-colors">Anamika!</a>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#work" className="flex items-center gap-2 hover:text-[#E2F84E] transition-colors">
              <Briefcase size={18} /> Work
            </a>
            <a href="#about" className="flex items-center gap-2 hover:text-[#E2F84E] transition-colors">
              <User size={18} /> About
            </a>
            <a href="/resume.pdf" target="_blank" className="flex items-center gap-2 hover:text-[#E2F84E] transition-colors">
              <FileText size={18} /> Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white p-2 hover:text-[#E2F84E] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 w-full bg-[#0f0f0f] border-b border-white/10 p-6 space-y-2 shadow-2xl animate-in slide-in-from-top-5 duration-200">
            <a 
              href="#work" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-[#E2F84E] hover:bg-white/5 rounded-xl p-4 transition-all"
            >
              <Briefcase size={20} /> Work
            </a>
            <a 
              href="#about" 
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-[#E2F84E] hover:bg-white/5 rounded-xl p-4 transition-all"
            >
              <User size={20} /> About
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank"
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-4 text-lg font-medium text-gray-300 hover:text-[#E2F84E] hover:bg-white/5 rounded-xl p-4 transition-all"
            >
              <FileText size={20} /> Resume
            </a>
          </div>
        )}
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-20">
        
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight">
              Hi! I&apos;m <span className="text-[#E2F84E]">Anamika</span>, <br />
              Developer, <br />
              Problem Solver
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-xl font-light">
              Crafting digital experiences that function… unlike my sleep schedule.
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
           <div className="relative w-full max-w-md shrink-0 h-[380px] md:h-[520px]">
             <div className="relative w-full h-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
               <Image
                 src="/about.jpg"
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
                  Hi, I’m Anamika — the human behind the pixels, prototypes, and occasionally questionable sleep schedule. I love taking wild ideas and shaping them into products that work beautifully (even when I don’t). I’m obsessed with intuitive design, clean architecture, and solving problems in ways that make people go, “Oh wow, that’s actually nice.” Whether it’s front-end finesse or full-stack engineering, I’m always creating something new, learning something cooler, and building a little bit of magic along the way.
               </p>
               <p className="text-[#4FD1C5] flex items-start gap-3 font-medium">
                 <span className="text-2xl">👩‍💻</span>
                 <span>
                   Currently engineering delightful digital products with a spark of intelligence.
                 </span>
               </p>
             </div>
             <div className="flex gap-4">
               <a href="#work" className="px-8 py-3 bg-[#E2F84E] text-black font-bold rounded-full hover:scale-105 transition-transform">
                 Learn More
               </a>
               <a href="#contact" className="px-8 py-3 border border-[#E2F84E] text-[#E2F84E] font-bold rounded-full hover:bg-[#E2F84E]/10 hover:scale-105 transition-all">
                 Contact Me
               </a>
             </div>
             
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
                <div className="h-48 relative overflow-hidden rounded-t-2xl">
                  {project.title === "WealthPulse" ? (
                    <Image src="/image.png" alt={project.title} fill className="object-cover" />
                  ) : project.title === "Team Works" ? (
                    <Image src="/teamw.png" alt={project.title} fill className="object-cover" />
                  ) : project.title === "Codev" ? (
                    <Image src="/codev.png" alt={project.title} fill className="object-cover" />
                  ) : project.title === "FundHive" ? (
                    <Image src="/fundhive.png" alt={project.title} fill className="object-cover" />
                  ) : project.title === "Trendora" ? (
                    <Image src="/trendora.png" alt={project.title} fill className="object-cover" />
                  ) : (
                    <div className="absolute inset-0 bg-black group-hover:bg-black/80 transition-colors" />
                  )}

                  {/* Overlay buttons */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                      <a href={project.demoLink} className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-[#E2F84E] transition-colors">
                        <ExternalLink size={16} /> Demo
                      </a>
                      <a href={project.codeLink} className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-[#E2F84E] transition-colors">
                        <Github size={16} /> Code
                      </a>
                    </div>
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
             Questions? Ideas? I&apos;m just one message away and quick to reply.
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
                   <a href="https://www.linkedin.com/in/anamikasingh20/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E2F84E] transition-colors block underline decoration-gray-600 underline-offset-4 hover:decoration-[#E2F84E]">linkedin.com/in/anamikasingh20/</a>
                </div>
             </div>

             {/* GitHub */}
             <div className="flex items-start gap-4">
                <Github className="text-gray-400 mt-1" size={24} />
                <div>
                   <p className="font-medium text-white text-lg">Connect with me on Github</p>
                   <a href="https://github.com/Anamiiikka" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#E2F84E] transition-colors block underline decoration-gray-600 underline-offset-4 hover:decoration-[#E2F84E]">github.com/Anamiiikka</a>
                </div>
             </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10 mt-10 flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#E2F84E]">
                 <Image src="/bg1.png" alt="Anamika" fill className="object-cover" />
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
             
              <a href="https://www.linkedin.com/in/anamikasingh20/" className="w-10 h-10 bg-white/5 text-white rounded-full flex items-center justify-center hover:bg-[#E2F84E] hover:text-black transition-all hover:scale-110">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/Anamiiikka" className="w-10 h-10 bg-white/5 text-white rounded-full flex items-center justify-center hover:bg-[#E2F84E] hover:text-black transition-all hover:scale-110">
                <Github size={18} />
              </a>
           </div>
        </footer>

      </main>
    </div>
  );
}
