import { Truck, Headphones, ShieldCheck } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140"
  },
  {
    icon: Headphones,
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support"
  },
  {
    icon: ShieldCheck,
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days"
  }
];

export function Services() {
  return (
    <section className="py-16 bg-[#F5F5F5]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="
                flex flex-col items-center text-center
                group hover:transform hover:scale-105
                transition-all duration-300 ease-out
              "
            >
              <div className="
                w-20 h-20 rounded-full bg-black flex items-center justify-center mb-6
                group-hover:bg-[#DB4444] transition-colors duration-300
              ">
                <service.icon 
                  size={32} 
                  className="text-white transform group-hover:rotate-12 transition-transform duration-300" 
                />
              </div>
              <h3 className="
                font-bold text-xl mb-2
                group-hover:text-[#DB4444] transition-colors duration-300
              ">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 