import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

interface Project {
    id: string;
    title: string;
    category: string;
    serviceId: string;
    client: string;
    location: string;
    description: string;
    challenge: string;
    solution: string;
    result: string;
    image: string;
    tags: string[];
}

interface Category {
    id: string;
    name: string;
}

interface ProjectGridProps {
    projects: Project[];
    categories: Category[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ projects, categories }) => {
    const [activeCategoryId, setActiveCategoryId] = useState('All');

    const filteredProjects = useMemo(() => {
        if (activeCategoryId === 'All') return projects;
        return projects.filter(project => project.serviceId === activeCategoryId);
    }, [activeCategoryId, projects]);

    return (
        <div className="w-full">
            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mb-12 md:mb-16 px-4">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategoryId(category.id)}
                        className={`px-5 py-2 md:px-6 md:py-2 rounded-full text-xs md:text-sm font-bold border-2 transition-all duration-300 active:scale-95 whitespace-nowrap ${activeCategoryId === category.id
                                ? 'bg-primary-500 border-primary-500 text-white shadow-lg'
                                : 'bg-white border-gray-100 text-gray-400 hover:border-primary-200 hover:text-primary-500'
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <motion.div
                layout
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                <AnimatePresence mode='popLayout'>
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="h-full"
                        >
                            <ProjectCard project={project} index={index} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>

            {filteredProjects.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-20"
                >
                    <p className="text-gray-400 text-lg italic">No projects found in this category.</p>
                </motion.div>
            )}
        </div>
    );
};

export default ProjectGrid;
