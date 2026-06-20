import Image from "next/image";
import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 mt-10 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[#E2F84E]">
          <Image src="/bg1.png" alt="Anamika" fill className="object-cover" />
        </div>
        <span className="font-cursive font-bold text-2xl text-white">Anamika Singh</span>
      </div>

      <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-gray-400">
        <a href="#" className="hover:text-[#E2F84E] transition-colors">
          Home
        </a>
        <a href="#work" className="hover:text-[#E2F84E] transition-colors">
          Projects
        </a>
        <a href="#about" className="hover:text-[#E2F84E] transition-colors">
          About me
        </a>
        <a href="#contact" className="hover:text-[#E2F84E] transition-colors">
          Contact me
        </a>
      </div>

      <div className="flex gap-4">
        <a
          href="https://www.linkedin.com/in/anamikasingh20/"
          className="w-10 h-10 bg-white/5 text-white rounded-full flex items-center justify-center hover:bg-[#E2F84E] hover:text-black transition-all hover:scale-110"
        >
          <Linkedin size={18} />
        </a>
        <a
          href="https://github.com/Anamiiikka"
          className="w-10 h-10 bg-white/5 text-white rounded-full flex items-center justify-center hover:bg-[#E2F84E] hover:text-black transition-all hover:scale-110"
        >
          <Github size={18} />
        </a>
      </div>
    </footer>
  );
}
