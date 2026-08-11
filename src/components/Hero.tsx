import { motion } from 'motion/react';
import { Building2, MapPin, PhoneCall, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-32 flex items-center justify-center min-h-[85vh] md:min-h-[90vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="Mumbai Real Estate" 
          className="object-cover w-full h-full"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80";
          }}
        />
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 md:mt-0">
        <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/20 text-blue-100 font-medium text-xs md:text-sm border border-blue-400/30 backdrop-blur-sm"
          >
            <Star size={14} className="fill-blue-400 text-blue-400" />
            <span>4.5+ Star Rating on Google Reviews</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-lg"
          >
            Your Trusted <span className="text-blue-400">Real Estate Partner</span> Across Mumbai
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-sm sm:text-base md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow"
          >
            Best rates for residential rentals, PG accommodations, commercial offices, and shops. Specialized support for newcomers, students, and professionals.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center pt-2 md:pt-6"
          >
            <a 
              href="tel:09004450055"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg hover:bg-blue-500 transition-colors shadow-lg hover:shadow-xl"
            >
              <PhoneCall size={18} />
              Call Now: 090044 50055
            </a>
            <a 
              href="#contact"
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 text-white border border-white/30 md:border-2 backdrop-blur-sm px-6 py-3.5 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-lg hover:border-white/50 hover:bg-white/20 transition-colors"
            >
              <MapPin size={18} />
              Get Directions
            </a>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.4 }}
             className="pt-6 md:pt-10 flex flex-col sm:flex-row items-center gap-3 md:gap-6 justify-center text-xs md:text-sm text-gray-300 font-medium"
          >
            <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm">
               <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
               Available 24/7
            </div>
            <div className="flex items-center gap-2 bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-sm text-center">
               <Building2 size={14} className="md:w-4 md:h-4 flex-shrink-0" />
               Serving Malad, Goregaon, Borivali & Andheri
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
