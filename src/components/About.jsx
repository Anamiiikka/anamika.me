import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20"
    >
      {/* Image */}
      <div className="relative w-full max-w-md shrink-0 h-[380px] md:h-[520px] order-2 md:order-1">
        <div className="relative w-full h-full rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
          <Image src="/about.jpg" alt="About Anamika" fill className="object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 space-y-8 order-1 md:order-2">
        <h2 className="text-4xl md:text-5xl font-serif font-medium text-[#4FD1C5] leading-tight">
          Meet the mind behind <br /> the magic!
        </h2>
        <div className="space-y-6 text-lg text-gray-300 font-light leading-relaxed">
          <p>
            Hi, I&apos;m Anamika, the human behind the pixels, prototypes, and
            occasionally questionable sleep schedule. I love taking wild ideas
            and shaping them into products that work beautifully (even when I
            don&apos;t). I&apos;m obsessed with intuitive design, clean
            architecture, and solving problems in ways that make people go,
            &quot;Oh wow, that&apos;s actually nice.&quot; Whether it&apos;s
            front-end finesse or full-stack engineering, I&apos;m always creating
            something new, learning something cooler, and building a little bit
            of magic along the way.
          </p>
          <p className="text-[#4FD1C5] flex items-start gap-3 font-medium">
            <span className="text-2xl">👩‍💻</span>
            <span>
              Currently engineering delightful digital products with a spark of
              intelligence.
            </span>
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="#work"
            className="px-8 py-3 bg-[#E2F84E] text-black font-bold rounded-full hover:scale-105 transition-transform"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#E2F84E] text-[#E2F84E] font-bold rounded-full hover:bg-[#E2F84E]/10 hover:scale-105 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
