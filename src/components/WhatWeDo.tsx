import { motion } from 'motion/react';
import { Layout, Zap, Search, Code2 } from 'lucide-react';

const features = [
  {
    icon: <Layout className="w-6 h-6 text-primary" />,
    title: "Custom Design",
    description: "We craft unique, conversion-focused designs tailored specifically to your brand identity and target audience."
  },
  {
    icon: <Code2 className="w-6 h-6 text-primary" />,
    title: "Modern Development",
    description: "Built with the latest technologies like React and Tailwind CSS ensuring your site is robust and scalable."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Lightning Fast",
    description: "Optimized for speed and performance to provide the best user experience."
  }
];

export default function WhatWeDo() {
  return (
    <section className="py-20 md:py-32 relative z-10 bg-black overflow-hidden border-t border-white/5">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-[#f8f7f2] mb-6 tracking-tight">
                What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Do</span>
              </h2>
              <p className="text-[#f8f7f2]/70 text-lg md:text-xl font-light leading-relaxed mb-8">
                We specialize in helping businesses establish a powerful online presence without the massive agency price tag. 
                From the initial design concept to the final line of code, we handle the entire process to deliver a flawless digital experience.
              </p>
              <p className="text-[#f8f7f2]/70 text-lg md:text-xl font-light leading-relaxed">
                Our goal is simple: to build websites that not only look stunning but actually work to convert your visitors into paying customers.
              </p>
            </motion.div>
          </div>
          
          <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-[#222222]/50 border border-white/10 p-6 rounded-2xl hover:bg-[#222222] hover:border-white/20 transition-all duration-300 ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="w-12 h-12 rounded-full bg-black/50 flex items-center justify-center mb-4 border border-white/5">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#f8f7f2] mb-2">{feature.title}</h3>
                <p className="text-[#f8f7f2]/60 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
