import { motion } from 'motion/react';
import { Card, CardContent } from './ui/card';
import { ShaderAnimation } from './ui/shader-lines';
import { 
  Banknote, 
  Ban, 
  RefreshCw, 
  ShieldCheck, 
  Handshake, 
  TrendingDown, 
  Zap, 
  Rocket 
} from 'lucide-react';

const usps = [
  {
    icon: <Banknote className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
    title: "Low Rates",
    description: "Premium quality websites without the premium price tag."
  },
  {
    icon: <Ban className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
    title: "No Advance Payment",
    description: "We start working immediately. Pay only when you're satisfied."
  },
  {
    icon: <RefreshCw className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
    title: "1 Free Change",
    description: "Get one major revision for free within your first year."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
    title: "1-Year Guarantee",
    description: "Free rebuild if your website crashes or gets deleted."
  },
  {
    icon: <Handshake className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
    title: "Pay After Meeting",
    description: "We discuss, we build, we meet, then you pay."
  },
  {
    icon: <TrendingDown className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
    title: "Better Pricing",
    description: "More affordable than traditional agencies and freelancers."
  },
  {
    icon: <Zap className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
    title: "Fast Delivery",
    description: "Get your business online in just 2 days. Guaranteed."
  },
  {
    icon: <Rocket className="h-6 w-6 md:h-8 md:w-8 text-primary" />,
    title: "Flawless & Efficient",
    description: "Optimized for speed, performance, and high conversion rates."
  }
];

export default function USP() {
  return (
    <section id="usp" className="py-20 md:py-32 relative z-10 bg-background overflow-hidden">
      <ShaderAnimation />
      <div className="container px-4 md:px-6 mx-auto relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 md:mb-6 tracking-tight">Why Choose <span className="text-primary">GRID WORK</span></h2>
          <p className="text-foreground/80 max-w-2xl mx-auto text-lg md:text-xl font-light px-4">
            We eliminate the risk of hiring a freelancer. No upfront costs, guaranteed delivery, and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="group bg-black/40 border-white/10 hover:border-primary/50 hover:bg-black/60 transition-all duration-500 h-full backdrop-blur-md relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <CardContent className="p-6 md:p-8 flex flex-col items-start text-left relative z-10 h-full">
                  <div className="mb-4 md:mb-6 p-3 md:p-4 rounded-2xl bg-white/10 group-hover:bg-primary/30 group-hover:scale-110 transition-all duration-500">
                    {usp.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3 group-hover:text-primary transition-colors duration-300">{usp.title}</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-base">{usp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
