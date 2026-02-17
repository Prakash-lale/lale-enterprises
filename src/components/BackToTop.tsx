import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 400)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{
                opacity: isVisible ? 1 : 0,
                scale: isVisible ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-primary-500 text-white shadow-premium hover:bg-primary-600 hover:shadow-premium-lg active:scale-95 transition-all flex items-center justify-center"
            aria-label="Back to top"
            style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
        >
            <ArrowUp className="w-5 h-5" />
        </motion.button>
    )
}
