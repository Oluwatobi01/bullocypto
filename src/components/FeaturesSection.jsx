import React from 'react';
import {motion} from 'framer-motion';
import {BarChart3, ShieldCheck, Zap} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: <BarChart3 className="w-10 h-10 text-[#A855F7]" />,
      title: "Real-Time Analytics",
      desc: "Access live market insights and analytics tools that keep you ahead of every trend.",
    },
    {
      id: 2,
      icon: <ShieldCheck className="w-10 h-10 text-[#EC4899]" />,
      title: "Secure Transactions",
      desc: "Your funds and data are protected with bank-grade encryption and multi-layer security.",
    },
    {
      id: 3,
      icon: <Zap className="w-10 h-10 text-[#F472B6]" />,
      title: "Instant Trading",
      desc: "Execute trades instantly with zero delays and experience lightning-fast order processing.",
    },
  ];

  return (
    <section id="service" className="bg-white py-24 px-6 md:px-16">
      <div className="text-center mb-12">
        <motion.h2
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{duration:0.6}}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{opacity:0, y:20}}
          animate={{opacity:1, y:0}}
          transition={{delay:0.2, duration:0.6}}
          className="text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Everything you need to trade smarter — from analytics to execution, all in one platform.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-12">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{opacity:0, y:40}}
            animate={{opacity:1, y:0}}
            transition={{delay:index * 0.2, duration:0.6}}
            className="p-8 rounded-2xl shadow-md bg-gradient-to-b from-white to-[#faf5ff] hover:shadow-lg hover:-translate-y-2 transition-all border border-gray-100"
          >
            <div className="flex justify-center mb-6">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{feature.title}</h3>
            <p className="text-gray-600 text-center">{feature.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
