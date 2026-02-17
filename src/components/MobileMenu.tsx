import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface MobileMenuProps {
    currentPath: string
    base: string
}

import { navItems } from '../data/navigation'

export default function MobileMenu({ currentPath, base }: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false)

    // Close menu on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setIsOpen(false)
        }
        document.addEventListener('keydown', handleEscape)
        return () => document.removeEventListener('keydown', handleEscape)
    }, [])

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    return (
        <>
            {/* Hamburger Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-gray-700 hover:text-primary-500 transition-colors"
                aria-label="Toggle menu"
            >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.nav
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 30, stiffness: 300 }}
                        className="fixed top-0 right-0 bottom-0 w-[85%] sm:w-80 bg-white shadow-2xl z-[9999] lg:hidden flex flex-col isolate"
                        style={{ backgroundColor: '#ffffff' }}
                    >
                        {/* Close Button Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
                            <span className="text-xl font-heading font-black text-primary-600">MENU</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="p-2 text-gray-700 hover:text-primary-500 transition-colors bg-gray-50 rounded-full"
                                aria-label="Close menu"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex-1 overflow-y-auto py-8 bg-white">
                            {navItems && navItems.length > 0 ? (
                                navItems.map((item, index) => (
                                    <motion.a
                                        key={item.path}
                                        href={item.path === '/' ? base : `${base.replace(/\/$/, '')}${item.path}`}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + index * 0.05 }}
                                        className={`block px-8 py-4 text-xl font-heading font-bold transition-all border-l-4 ${currentPath === (base.replace(/\/$/, '') + item.path).replace(/\/+/g, '/')
                                            ? 'text-primary-600 bg-primary-50 border-primary-500'
                                            : 'text-gray-900 hover:text-primary-500 hover:bg-gray-50 border-transparent'
                                            }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))
                            ) : (
                                <p className="px-8 text-gray-400">Loading menu...</p>
                            )}
                        </div>

                        {/* Contact Button Footer */}
                        <div className="p-8 border-t border-gray-100 bg-gray-50/80">
                            <p className="text-sm text-gray-500 mb-6 font-medium">Ready for engineering excellence?</p>
                            <a
                                href={`${base.replace(/\/$/, '')}/contact`}
                                className="btn-primary w-full text-center py-4 text-lg shadow-lg"
                                onClick={() => setIsOpen(false)}
                            >
                                Get in Touch
                            </a>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </>
    )
}
