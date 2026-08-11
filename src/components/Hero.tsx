import { motion } from 'motion/react';
import { Building2, MapPin, PhoneCall, Star } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-br from-blue-50 via-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-800 font-medium text-sm"
            >
              <Star size={16} className="fill-blue-800" />
              <span>4.5+ Star Rating on Google Reviews</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              Your Trusted <span className="text-blue-900">Real Estate Partner</span> Across Mumbai
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0"
            >
              Best rates for residential rentals, PG accommodations, commercial offices, and shops. Specialized support for newcomers, students, and working professionals.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a 
                href="tel:09004450055"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-800 transition-colors shadow-lg hover:shadow-xl"
              >
                <PhoneCall size={20} />
                Call Now: 090044 50055
              </a>
              <a 
                href="#contact"
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-blue-900 border-2 border-blue-100 px-8 py-4 rounded-full font-bold text-lg hover:border-blue-200 hover:bg-blue-50 transition-colors"
              >
                <MapPin size={20} />
                Get Directions
              </a>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.4 }}
               className="pt-6 border-t border-gray-200 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-gray-500 font-medium"
            >
              <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-green-500"></div>
                 Available 24/7
              </div>
              <div className="flex items-center gap-2">
                 <Building2 size={16} />
                 Serving Malad, Goregaon, Borivali & Andheri
              </div>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="Modern Real Estate Property in Mumbai" 
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg inline-block">
                  <p className="font-bold text-gray-900">Need urgent housing?</p>
                  <p className="text-sm text-gray-600">We find stays often within a single day.</p>
                </div>
              </div>
            </div>
            
            {/* Decorative background elements */}
            <div className="absolute -z-10 top-10 -right-10 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
