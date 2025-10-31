import React from 'react';
import {motion} from 'framer-motion';
import rakutenLogo from '../assets/images/rakuten.png';
import mondayLogo from '../assets/images/monday.png';
import netflixLogo from '../assets/images/netflix.png';
import dropboxLogo from '../assets/images/dropbox.png';
import disneyLogo from '../assets/images/disney.png';

const ClientSection = () => {
  const clients = [
    {name:'Rakuten', logo:rakutenLogo},
    {name:'Monday', logo:mondayLogo},
    {name:'Netflix', logo:netflixLogo},
    {name:'Dropbox', logo:dropboxLogo},
    {name:'Disney', logo:disneyLogo}
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-16">
      <div className="container mx-auto">
        <motion.div
          initial={{opacity:0, y:20}}
          whileInView={{opacity:1, y:0}}
          transition={{duration:0.6}}
          viewport={{once:true}}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{opacity:0, scale:0.8}}
              whileInView={{opacity:1, scale:1}}
              transition={{delay:index * 0.1, duration:0.5}}
              viewport={{once:true}}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
            >
              <img 
                src={client.logo} 
                alt={`${client.name} logo`}
                className="h-full w-auto object-contain max-w-[120px]"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientSection;