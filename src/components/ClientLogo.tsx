import { motion } from 'framer-motion'
import type { Client } from '../data/clients'

interface ClientLogoProps {
    client: Client
    index: number
}

export default function ClientLogo({ client, index }: ClientLogoProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="card-hover p-6 flex items-center justify-center min-h-[120px] group bg-white"
        >
            <img
                src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}${client.logo}`}
                alt={client.alt}
                className="max-w-full max-h-16 w-auto h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                loading="lazy"
            />
        </motion.div>
    )
}
