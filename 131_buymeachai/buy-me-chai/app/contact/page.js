"use client"
import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock, FaTwitter, FaLinkedin, FaGithub, FaDiscord } from 'react-icons/fa'
import { BiSupport, BiChat } from 'react-icons/bi'
import { AiOutlineSend } from 'react-icons/ai'
import { BsCheckCircleFill } from 'react-icons/bs'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'


export default function Contact() {
    const { data: session } = useSession()
    const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    category: 'general'
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

useEffect(() => {
    document.title = "Contact - Buy Me A Chai"
  }, [session, router])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        category: 'general'
      })
    }, 3000)
  }

  return (
    <>
      {/* Hero Section */}
      <div className="relative z-20 text-white p-8 pb-20 gap-16 sm:p-20 flex items-center justify-center">
        <div className="text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl mb-8 text-gray-300 leading-relaxed">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
          <div className="flex justify-center space-x-4">
            <BiChat className="text-3xl text-blue-400" />
            <FaEnvelope className="text-3xl text-pink-400" />
            <BiSupport className="text-3xl text-green-400" />
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* Contact Form and Info Section */}
      <div className="text-white container mx-auto py-16 px-6">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>
              <p className="text-gray-300">Fill out the form below and we&apos;ll get back to you within 24 hours.</p>
            </div>

            {isSubmitted ? (
              <div className="bg-green-600/20 border border-green-600 rounded-lg p-8 text-center">
                <BsCheckCircleFill className="text-5xl text-green-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                <p className="text-gray-300">Thank you for reaching out. We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="category" className="block text-sm font-medium mb-2">Category</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="business">Business Partnership</option>
                    <option value="billing">Billing & Payments</option>
                    <option value="feedback">Feedback & Suggestions</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors"
                    placeholder="Brief description of your message"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
                >
                  <AiOutlineSend className="text-lg" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm">
                <div className="bg-indigo-600 p-3 rounded-lg">
                  <FaEnvelope className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Email Us</h3>
                  <p className="text-gray-300 mb-2">Get in touch via email</p>
                  <p className="text-indigo-400">support@buymeachai.com</p>
                  <p className="text-indigo-400">business@buymeachai.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm">
                <div className="bg-green-600 p-3 rounded-lg">
                  <FaPhone className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Call Us</h3>
                  <p className="text-gray-300 mb-2">Speak directly with our team</p>
                  <p className="text-green-400">+91 9876 543 210</p>
                  <p className="text-gray-400 text-sm">Mon-Fri, 9AM-6PM IST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm">
                <div className="bg-red-600 p-3 rounded-lg">
                  <FaMapMarkerAlt className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Visit Us</h3>
                  <p className="text-gray-300 mb-2">Our headquarters</p>
                  <p className="text-gray-300">123 Tech Park, Bangalore</p>
                  <p className="text-gray-300">Karnataka, India - 560001</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 bg-gray-800/30 rounded-lg backdrop-blur-sm">
                <div className="bg-blue-600 p-3 rounded-lg">
                  <FaClock className="text-xl text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Business Hours</h3>
                  <p className="text-gray-300 mb-2">We&apos;re here to help</p>
                  <p className="text-gray-300">Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Weekend: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* FAQ Section */}
      <div className="text-white container mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-400">How does Buy Me Chai work?</h3>
            <p className="text-gray-300">Creators can set up profiles and receive support from fans through our secure platform. Supporters can contribute any amount they want.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-400">Is my payment information secure?</h3>
            <p className="text-gray-300">Yes, we use industry-standard encryption and work with trusted payment processors to ensure your information is always protected.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-400">How long does it take to receive support?</h3>
            <p className="text-gray-300">We typically respond to all inquiries within 24 hours during business days. Urgent matters are handled even faster.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-indigo-400">Can I cancel my support?</h3>
            <p className="text-gray-300">Yes, you have full control over your contributions and can modify or cancel them at any time through your account settings.</p>
          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-10"></div>

      {/* Social Media & Alternative Contact */}
      <div className="text-white container mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Connect With Us</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Follow us on social media for updates, tips, and community highlights.
        </p>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="bg-blue-600 p-4 rounded-lg hover:bg-blue-700 transition-colors duration-200">
            <FaTwitter className="text-2xl text-white" />
          </a>
          <a href="#" className="bg-blue-800 p-4 rounded-lg hover:bg-blue-900 transition-colors duration-200">
            <FaLinkedin className="text-2xl text-white" />
          </a>
          <a href="#" className="bg-gray-800 p-4 rounded-lg hover:bg-gray-900 transition-colors duration-200">
            <FaGithub className="text-2xl text-white" />
          </a>
          <a href="#" className="bg-indigo-600 p-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            <FaDiscord className="text-2xl text-white" />
          </a>
        </div>

        <div className="bg-gray-800/30 rounded-lg p-8 backdrop-blur-sm">
          <h3 className="text-2xl font-semibold mb-4">Need Immediate Help?</h3>
          <p className="text-gray-300 mb-6">
            For urgent technical issues or account problems, reach out to us directly.
          </p>
          <div className="space-x-4">
            <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold">
              Live Chat
            </button>
            <button className="border border-indigo-600 text-indigo-400 px-6 py-3 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors duration-200 font-semibold">
              Help Center
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
