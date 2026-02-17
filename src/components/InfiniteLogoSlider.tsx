import React from 'react';
import { motion } from 'framer-motion';
import type { Client } from '../data/clients';

interface InfiniteLogoSliderProps {
    clients: Client[];
}

const InfiniteLogoSlider: React.FC<InfiniteLogoSliderProps> = ({ clients }) => {
    // Triple the items to ensure enough width for the marquee effect and seamless looping
    const duplicatedClients = [...clients, ...clients, ...clients];

    return (
        <div className="relative w-full overflow-hidden py-10">
            <motion.div
                className="flex gap-8 md:gap-12 items-center"
                animate={{
                    x: [0, -100 * (clients.length)], // Adjust based on direct displacement
                }}
                transition={{
                    x: {
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 30, // Adjust speed as needed
                        ease: 'linear',
                    },
                }}
                style={{ width: 'fit-content' }}
            >
                {duplicatedClients.map((client, index) => (
                    <div
                        key={`${client.name}-${index}`}
                        className="flex-shrink-0 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 px-6"
                    >
                        <img
                            src={client.logo}
                            alt={client.alt}
                            className="h-14 md:h-20 w-auto object-contain"
                            loading="lazy"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default InfiniteLogoSlider;
