import { motion } from 'motion/react';
import { BedDouble, Briefcase, Home } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-white" />,
      title: "Residential Solutions",
      description: "House and apartment rentals at budget-friendly rates. Find your perfect family home or bachelor pad across prime Mumbai locations.",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-blue-600"
    },
    {
      icon: <BedDouble className="w-10 h-10 text-white" />,
      title: "PG Accommodations",
      description: "Tailored for students and working employees. Safe, clean, and well-managed PGs with quick placements, often within a single day.",
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-indigo-600"
    },
    {
      icon: <Briefcase className="w-10 h-10 text-white" />,
      title: "Commercial Properties",
      description: "Offices, shops, and commercial buildings customized for your business or work requirements in high-footfall areas.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      color: "bg-gray-800"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Comprehensive real estate solutions focused in Malad East, Goregaon, Borivali, Andheri, and across Mumbai.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/10 transition-colors"></div>
                <div className={`absolute bottom-4 left-4 w-16 h-16 ${service.color} rounded-xl flex items-center justify-center shadow-lg transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300`}>
                  {service.icon}
                </div>
              </div>
              <div className="p-8 pt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <a href="#contact" className="text-blue-600 font-bold hover:text-blue-800 flex items-center gap-2 transition-colors">
                    Enquire Now <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
