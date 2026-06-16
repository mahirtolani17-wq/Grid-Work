import { Button } from './ui/button';
import { Phone, MessageCircle } from 'lucide-react';
import { ShaderAnimation } from './ui/shader-animation';
import { ContainerScroll } from './ui/container-scroll-animation';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black pt-24 sm:pt-32">
      <ShaderAnimation />
      
      <div className="relative z-10 w-full">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center justify-center mb-10">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#f8f7f2]/[0.03] border border-[#f8f7f2]/[0.08] text-[#f8f7f2]/80 text-xs sm:text-sm font-medium mb-6 sm:mb-8 backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.2)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Accepting new projects
              </div>
              
              <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-[#f8f7f2] mb-4 sm:mb-8 leading-[1.1] px-2">
                Get Your Business <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 drop-shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                  Online in 2 Days
                </span>
              </h1>
              
              <p className="text-sm sm:text-lg md:text-xl text-[#f8f7f2]/70 mb-6 sm:mb-12 max-w-2xl mx-auto font-light leading-relaxed px-4">
                Affordable, fast, and reliable websites for businesses. 
                We build digital experiences that convert visitors into customers.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full px-4 sm:px-0">
                <Button 
                  size="lg" 
                  className="h-12 sm:h-14 px-4 sm:px-6 text-sm sm:text-base w-full sm:w-auto bg-[#f8f7f2] text-[#000000] hover:bg-[#f8f7f2]/90 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(248,247,242,0.15)]"
                  onClick={() => window.location.href = 'tel:+919773499223'}
                >
                  <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Call to Enquire
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="h-12 sm:h-14 px-4 sm:px-6 text-sm sm:text-base w-full sm:w-auto border-[#f8f7f2]/20 hover:bg-[#f8f7f2]/10 text-[#f8f7f2] hover:scale-105 transition-all duration-300 bg-black/20 backdrop-blur-md"
                  onClick={() => window.open('https://wa.me/919773499223', '_blank')}
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Chat for quotation
                </Button>
              </div>
            </div>
          }
        >
          <img
            src="https://i.ibb.co/pr4Q8JL0/grid2.png"
            alt="hero"
            className="mx-auto rounded-2xl object-cover h-full w-full object-center"
            draggable={false}
            referrerPolicy="no-referrer"
          />
        </ContainerScroll>
      </div>

      {/* Gradient overlay for bottom transition */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
    </section>
  );
}
