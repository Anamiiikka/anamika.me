import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
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
            <a
              href="mailto:anamikasingh200205@gmail.com"
              className="text-gray-400 hover:text-[#E2F84E] transition-colors block underline decoration-gray-600 underline-offset-4 hover:decoration-[#E2F84E]"
            >
              anamikasingh200205@gmail.com
            </a>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-start gap-4">
          <Linkedin className="text-gray-400 mt-1" size={24} />
          <div>
            <p className="font-medium text-white text-lg">
              Connect with me on Linkedin
            </p>
            <a
              href="https://www.linkedin.com/in/anamikasingh20/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E2F84E] transition-colors block underline decoration-gray-600 underline-offset-4 hover:decoration-[#E2F84E]"
            >
              linkedin.com/in/anamikasingh20/
            </a>
          </div>
        </div>

        {/* GitHub */}
        <div className="flex items-start gap-4">
          <Github className="text-gray-400 mt-1" size={24} />
          <div>
            <p className="font-medium text-white text-lg">
              Connect with me on Github
            </p>
            <a
              href="https://github.com/Anamiiikka"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#E2F84E] transition-colors block underline decoration-gray-600 underline-offset-4 hover:decoration-[#E2F84E]"
            >
              github.com/Anamiiikka
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
