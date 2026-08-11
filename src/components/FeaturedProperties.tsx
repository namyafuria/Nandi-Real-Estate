import { motion } from 'motion/react';
import { Home, MapPin, Maximize, Building } from 'lucide-react';

export default function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: "Luxury High-Rise Apartments",
      location: "Chand Terraces, Bandra West",
      type: "Residential",
      specs: "2 BHK & 3 BHK",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Premium high-rise living with stunning city views and modern amenities."
    },
    {
      id: 2,
      title: "Independent Villas",
      location: "Malad East",
      type: "Residential",
      specs: "4 BHK",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Spacious independent houses with private lawns and luxury interiors."
    },
    {
      id: 3,
      title: "Commercial Office Spaces",
      location: "Goregaon East",
      type: "Commercial",
      specs: "Fully Furnished",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Ready-to-move office setups with modern workstations and conference rooms."
    },
    {
      id: 4,
      title: "Premium Unfurnished Flats",
      location: "Borivali West",
      type: "Residential",
      specs: "1 BHK & 2 BHK",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Blank canvas apartments with glossy tiled floors and excellent ventilation."
    },
    {
      id: 5,
      title: "Modern Co-living PGs",
      location: "Andheri West",
      type: "PG Accommodation",
      specs: "Shared & Single",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comfortable and safe paying guest accommodations for students and professionals."
    },
    {
      id: 6,
      title: "Retail Shops",
      location: "Rani Sati Rd, Malad East",
      type: "Commercial",
      specs: "Ground Floor",
      image: "https://images.unsplash.com/photo-1582005450386-52ccf6a07ec1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "High-footfall commercial spaces ideal for retail and small businesses."
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            Featured Properties
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600"
          >
            Explore our curated selection of residential flats, commercial shops, independent houses, and high-rises across Mumbai.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-blue-900 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                  {property.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{property.title}</h3>
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                  <MapPin size={16} />
                  {property.location}
                </div>
                <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                  {property.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-sm font-medium text-gray-900">
                  <div className="flex items-center gap-2">
                    {property.type === 'Commercial' ? <Building size={16} className="text-blue-600" /> : <Home size={16} className="text-blue-600" />}
                    {property.specs}
                  </div>
                  <a href="#contact" className="text-blue-600 hover:text-blue-800 transition-colors">
                    Inquire
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
