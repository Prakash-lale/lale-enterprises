import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, MapPin, Building2, Target, CheckCircle2 } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    category: string; // This will now represent the Service Category for the tag
    serviceId?: string;
    client: string;
    location: string;
    description: string;
    challenge: string;
    solution: string;
    result: string;
    image: string;
    tags: string[];
}

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-500 border border-gray-100 h-full flex flex-col"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Image Section */}
            <div className="relative aspect-video overflow-hidden">
                <img
                    src={`${import.meta.env.BASE_URL.replace(/\/$/, '')}${project.image}`}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-primary-500 text-white text-xs font-bold rounded-full uppercase tracking-wider shadow-lg">
                        {project.category}
                    </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-lg font-heading font-bold text-white mb-1 line-clamp-1 group-hover:line-clamp-none transition-all duration-300">
                        {project.title}
                    </h3>
                    <div className="flex items-center text-white/80 text-xs">
                        <MapPin className="w-3 h-3 mr-1" />
                        {project.location}
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-6 flex-grow flex flex-col">
                <div className="flex items-center text-sm text-gray-500 mb-4">
                    <Building2 className="w-4 h-4 mr-2 text-primary-500" />
                    <span className="font-medium text-gray-700">{project.client}</span>
                </div>

                <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
                    {project.description}
                </p>

                {/* Challenge/Solution/Result Grid */}
                <div className="space-y-4 mt-auto">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-red-50 flex items-center justify-center text-red-500">
                            <Target className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Challenge</p>
                            <p className="text-xs text-gray-600 line-clamp-2">{project.challenge}</p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500">
                            <CheckCircle2 className="w-4 h-4" />
                        </div>
                        <div>
                            <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Solution</p>
                            <p className="text-xs text-gray-600 line-clamp-2">{project.solution}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-[10px] font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded-md uppercase">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
