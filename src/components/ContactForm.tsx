import { motion } from 'framer-motion'
import { useState, type FormEvent } from 'react'
import { Send, Check, AlertCircle } from 'lucide-react'

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setStatus('idle')

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: 'f35d22e5-7ae5-4284-a619-098a94f09c9e', // Updated key linked to enterpriseslale@gmail.com
                    ...formData,
                    subject: 'New Contact Form Submission',
                    from_name: 'Lale Enterprises Contact'
                }),
            })

            const result = await response.json()
            if (result.success) {
                setStatus('success')
                setFormData({ name: '', email: '', phone: '', message: '' })
            } else {
                setStatus('error')
            }
        } catch (error) {
            setStatus('error')
        } finally {
            setIsLoading(false)
        }
    }

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Full Name *
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="Your name"
                />
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Email Address *
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                />
            </div>

            {/* Phone */}
            <div>
                <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    placeholder="+91 1234567890"
                />
            </div>

            {/* Message */}
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Message *
                </label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                />
            </div>

            {/* Status Messages */}
            {status === 'success' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800"
                >
                    <Check className="w-5 h-5" />
                    <span>Thank you! We'll get back to you soon.</span>
                </motion.div>
            )}

            {status === 'error' && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800"
                >
                    <AlertCircle className="w-5 h-5" />
                    <span>Something went wrong. Please try again.</span>
                </motion.div>
            )}

            {/* Submit Button */}
            <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
                {isLoading ? (
                    <>
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        <span>Sending...</span>
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                    </>
                )}
            </motion.button>
        </form>
    )
}
