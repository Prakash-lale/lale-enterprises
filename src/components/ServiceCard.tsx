import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import type { Service } from '../data/services'

interface ServiceCardProps {
    service: Service
    index: number
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
    // Dynamically get the icon component
    const IconComponent = Icons[service.icon as keyof typeof Icons] as any

    return (
        <motion.a
            href={`/services/${service.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8, boxShadow: '0 12px 40px -8px rgba(43, 125, 189, 0.25)' }}
            className="card-hover p-6 group flex flex-col h-full"
        >
            {/* Icon */}
            <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {IconComponent && <IconComponent className="w-7 h-7 text-white" />}
            </div>

            {/* Title */}
            <h3 className="text-xl font-heading font-bold mb-2 text-gray-900 group-hover:text-primary-500 transition-colors">
                {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">{service.description}</p>

            {/* Features List */}
            <ul className="space-y-2">
                {service.details.slice(0, 3).map((detail, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-500">
                        <svg
                            className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                            />
                        </svg>
                        <span className="line-clamp-1">{detail}</span>
                    </li>
                ))}
            </ul>

            {/* Learn More */}
            <div className="mt-4 flex items-center text-primary-500 font-medium group-hover:gap-2 transition-all">
                <span>Learn more</span>
                <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    className="inline-block"
                >
                    →
                </motion.span>
            </div>
        </motion.a>
    )
}
