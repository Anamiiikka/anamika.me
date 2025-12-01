import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white font-sans selection:bg-white/20">
      
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-white/5 bg-[#0f0f0f]/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter">AS.</div>
          <a href="mailto:anamikasingh200205@gmail.com" className="px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-200 transition-colors">
            Contact Me
          </a>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20 space-y-32">
        
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for work
            </div>
            
            <div className="space-y-2">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Anamika <br />
                <span className="text-gray-500">Singh</span>
              </h1>
              <p className="text-xl text-gray-400 max-w-lg">
                Software Engineer & Product Designer. I build accessible, pixel-perfect, performant, and web experiences.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              {[
                { name: 'GitHub', url: '#' },
                { name: 'LinkedIn', url: '#' },
                { name: 'Twitter', url: '#' },
                { name: 'Resume', url: '#' }
              ].map((link) => (
                <a 
                  key={link.name}
                  href={link.url}
                  className="p-2 text-gray-400 hover:text-white transition-colors border border-white/10 rounded-lg hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="relative w-40 h-40 md:w-64 md:h-64 shrink-0">
            <div className="absolute inset-0 rounded-full border-2 border-white/10 rotate-6"></div>
            <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-[#0f0f0f] shadow-2xl">
              <Image 
                src="/pic.jpg" 
                alt="Profile" 
                fill 
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-gray-500">01.</span> About Me
          </h2>
          <div className="prose prose-invert max-w-none text-gray-400 text-lg leading-relaxed">
            <p>
              Hey, I&apos;m Anamika, a passionate developer dedicated to building things that solve real-world problems.
              I mainly work with <span className="text-white font-medium">React.js</span> and <span className="text-white font-medium">Next.js</span> as my frameworks of choice, 
              alongside Node.js and TypeScript.
            </p>
            <p className="mt-4">
              I am high agency, like to take extreme ownership, and get things done. 
              Currently available for internships, full-time opportunities, and freelance projects.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-gray-500">02.</span> Skills & Tools
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker'].map((skill) => (
              <div key={skill} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-2 h-2 rounded-full bg-white/20"></div>
                <span className="font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-gray-500">03.</span> Projects
          </h2>
          <div className="grid gap-6">
            {[1, 2].map((item) => (
              <div key={item} className="group relative p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold group-hover:text-blue-400 transition-colors">Project Name {item}</h3>
                    <p className="text-gray-400 max-w-xl">
                      A brief description of the project goes here. It solves a core pain point for users and gained significant traction upon launch.
                    </p>
                    <div className="flex gap-3 text-sm text-gray-500">
                      <span>Next.js</span>
                      <span>•</span>
                      <span>TypeScript</span>
                      <span>•</span>
                      <span>Tailwind</span>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <button className="px-4 py-2 text-sm font-medium bg-white text-black rounded-lg hover:bg-gray-200 transition-colors">
                      View Live
                    </button>
                    <button className="px-4 py-2 text-sm font-medium border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="space-y-8 pb-20">
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <span className="text-gray-500">04.</span> Reach Out
          </h2>
          <div className="p-8 rounded-3xl bg-linear-to-br from-blue-500/10 to-purple-500/10 border border-white/5 text-center space-y-6">
            <h3 className="text-2xl font-bold">Let&apos;s build something amazing together</h3>
            <p className="text-gray-400 max-w-lg mx-auto">
              Feel free to contact me via email for any queries, collaboration opportunities, or just to say hi!
            </p>
            <a href="mailto:anamikasingh200205@gmail.com" className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
              Say Hello
            </a>
          </div>
        </section>

      </main>

      <footer className="border-t border-white/5 py-8 text-center text-gray-500 text-sm">
        <p>© 2025 Anamika Singh. All rights reserved.</p>
      </footer>
    </div>
  );
}
