import { motion } from 'motion/react';
import { CheckCircle2, Clock, Map, Users } from 'lucide-react';

export default function About() {
  const reasons = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
      title: "Genuine & Transparent",
      description: "Fair pricing with absolutely no hidden surprises or last-minute charges."
    },
    {
      icon: <Clock className="w-8 h-8 text-blue-600" />,
      title: "Fast Turnaround",
      description: "Quick property finalization. We often find and place you in PGs and stays within a single day."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Personalized Guidance",
      description: "Dedicated local support. Ranjit Ji and our team specialize in helping newcomers settle into Mumbai comfortably."
    },
    {
      icon: <Map className="w-8 h-8 text-blue-600" />,
      title: "24/7 Availability",
      description: "We are always open to assist you with urgent relocation needs, day or night."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            About Nandi Real Estate
          </motion.h2>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-lg text-gray-600 space-y-4"
          >
            <p>
              With our roots firmly planted in Malad East (Shah Arcade 2), we have grown to offer extensive coverage across Mumbai's most vibrant neighborhoods, including Malad, Goregaon, Borivali, and Andheri.
            </p>
            <p>
              We understand that finding the right space in a bustling city like Mumbai can be overwhelming. That's why we don't just show properties; we provide end-to-end relocation support designed around your specific needs.
            </p>
          </motion.div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  {reason.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{reason.title}</h4>
                <p className="text-gray-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
