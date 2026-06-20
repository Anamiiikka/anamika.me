import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-20">
      <div className="flex-1 space-y-6">
        <h1 className="text-5xl md:text-7xl font-serif font-medium leading-tight">
          Hi! I&apos;m{" "}
          <span className="font-cursive font-bold text-[#E2F84E] text-6xl md:text-8xl">
            Anamika
          </span>
          , <br />
          Developer, <br />
          Problem Solver
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-xl font-light">
          Crafting digital experiences that function… unlike my sleep schedule.
        </p>
      </div>

      <div className="relative w-full max-w-md md:max-w-lg aspect-square shrink-0">
        <div className="relative z-10 w-full h-full">
          <div className="relative w-full h-full rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image
              src="/bg1.png"
              alt="Anamika Singh"
              fill
              className="object-cover object-center rounded-4xl md:rounded-[3rem] shadow-2xl"
              priority
            />
            <div className="absolute inset-0 rounded-4xl md:rounded-[3rem] shadow-[inset_0_0_40px_10px_#0f0f0f] pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
