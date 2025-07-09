import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";





export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <Navbar />
      <Image
        src="/imj.png"
        width={500}
        height={500}
        alt="MyApp Hero Image"
        className="rounded-2xl shadow-2xl"
      />
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">MyApp</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Build amazing web applications with Next.js and modern technologies.
            Fast, scalable, and beautifully designed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
            >
              Get Started
            </Link>
            <Link
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose MyApp?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide cutting-edge solutions with modern technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fast Performance</h3>
              <p className="text-gray-600">
                Lightning-fast load times and optimized performance for the best user experience.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Secure & Reliable</h3>
              <p className="text-gray-600">
                Built with security in mind and reliable infrastructure you can trust.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">User Friendly</h3>
              <p className="text-gray-600">
                Intuitive design and seamless user experience that your users will love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied users and transform your web experience today.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transform hover:-translate-y-1 transition-all duration-200 inline-block"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export const metadata = {
  title: "Home",
  description: "very nice home",
};
