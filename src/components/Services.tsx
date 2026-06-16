import { motion } from 'motion/react';
import { Code, Smartphone, PenTool } from 'lucide-react';

const services = [
  {
    icon: <Code className="w-6 h-6 text-primary" />,
    title: "Web Development",
    description: "Custom, high-performance websites built with modern tech stacks like React and Next.js."
  },
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Responsive Design",
    description: "Flawless experiences across all devices, from mobile phones to large desktop screens."
  },
  {
    icon: <PenTool className="w-6 h-6 text-primary" />,
    title: "UI/UX Design",
    description: "Beautiful, intuitive interfaces that guide users towards conversion and engagement."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32 relative z-10 bg-transparent overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 tracking-tight">Our <span className="text-primary">Services</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl font-light px-4">
            Everything you need to establish a powerful online presence and grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col gap-4 md:gap-6 p-6 md:p-8 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 hover:border-primary/30 hover:bg-black/60 hover:shadow-lg transition-all duration-500"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/10 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-base md:text-lg">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
