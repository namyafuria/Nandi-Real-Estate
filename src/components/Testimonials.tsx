import { motion } from 'motion/react';
import { Quote, Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "THE ToP 5",
      text: "New at Mumbai, but Ranjit ji helped me a lot to find the best shop for my work.",
      rating: 5
    },
    {
      name: "Akash Sharma",
      text: "Too Good Service, Provide PG in single day in my budget. Thanks, keep it up!",
      rating: 5
    },
    {
      name: "Aditya Kundale",
      text: "Nandi Real Estate provides excellent service in Malad, Goregaon, and Borivali.",
      rating: 5
    },
    {
      name: "Ashish Raaj",
      text: "Very helpful and genuine firm. I got my stay in few days.",
      rating: 5
    },
    {
      name: "Sunny Vishwakarma",
      text: "Good service and best price.",
      rating: 4
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-blue-900 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-800 opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-indigo-800 opacity-50 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1 bg-yellow-400/20 text-yellow-300 px-4 py-1.5 rounded-full mb-6 font-semibold"
          >
            <Star className="w-4 h-4 fill-yellow-300" />
            <Star className="w-4 h-4 fill-yellow-300" />
            <Star className="w-4 h-4 fill-yellow-300" />
            <Star className="w-4 h-4 fill-yellow-300" />
            <Star className="w-4 h-4 fill-yellow-300" />
            <span className="ml-2">4.5+ on Google</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-blue-100"
          >
            Real feedback from people we've helped find their perfect space in Mumbai.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-300 text-gray-300'}`} 
                  />
                ))}
              </div>
              <p className="text-blue-50 text-lg leading-relaxed mb-6 font-medium">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center text-white font-bold text-xl border-2 border-white/20">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-blue-200 text-sm">Verified Client</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
