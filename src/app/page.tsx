"use client";

import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold">BARA & SONS LOGISTICS</div>
              <div className="text-sm">
                <div> (555) 123-4567</div>
                <div> dispatch@barasonslogistics.com</div>
              </div>
            </div>
            <div className="hidden md:flex space-x-4">
              <a href="#" className="hover:text-blue-200">Facebook</a>
              <a href="#" className="hover:text-blue-200">Twitter</a>
              <a href="#" className="hover:text-blue-200">LinkedIn</a>
              <a href="#" className="hover:text-blue-200">Instagram</a>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-blue-800 text-white sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl font-bold">BARA & SONS LOGISTICS</div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-blue-200">Home</a>
              <a href="#about" className="hover:text-blue-200">About Us</a>
              <a href="#why-choose" className="hover:text-blue-200">Why Choose Us</a>
              <a href="#services" className="hover:text-blue-200">Services</a>
              <a href="#jobs" className="hover:text-blue-200">Jobs</a>
              <a href="#contact" className="hover:text-blue-200">Contact Us</a>
            </div>
            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              
            </button>
          </div>
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2">
              <a href="#home" className="block hover:text-blue-200">Home</a>
              <a href="#about" className="block hover:text-blue-200">About Us</a>
              <a href="#why-choose" className="block hover:text-blue-200">Why Choose Us</a>
              <a href="#services" className="block hover:text-blue-200">Services</a>
              <a href="#jobs" className="block hover:text-blue-200">Jobs</a>
              <a href="#contact" className="block hover:text-blue-200">Contact Us</a>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Welcome To<br />
            <span className="text-yellow-400">Bara & Sons Logistics</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8">North America's leading transport and logistics company</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg">
              Contact Us Now
            </button>
            <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-3 px-8 rounded-lg text-lg">
              Request A Callback
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Truckload</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Less than Truckload</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Expedited Services</h3>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-bold mb-2">Temperature Controlled</h3>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">About our company</h2>
            <h3 className="text-3xl font-bold text-blue-900 mb-8">Just Like You, We Strive to Be the Best in the Industry</h3>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-center mb-8">
                <div className="text-6xl font-bold text-blue-900 mb-2">25</div>
                <div className="text-2xl font-bold text-blue-900">years</div>
                <div className="text-lg text-gray-600">experience</div>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                For over two decades, Bara & Sons Logistics has been a leader in providing transportation and logistics services. We work with passionate, efficient drivers to deliver top-level professional services and reliability to our customers 24/7.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Bara & Sons Logistics is North America's leading transport and logistics company that goes the extra mile to help clients keep promises. We focus on providing superior transportation services while putting our customers and drivers first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg">
                  Request A Callback
                </button>
                <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg">
                  We are Hiring Drivers
                </button>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
              <div className="text-gray-500 text-xl">Company Image Placeholder</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose Bara & Sons Logistics</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-4">Be the Best In Industry</h3>
              <p className="text-lg">
                At Bara & Sons Logistics, we know how hard you work to rise above your competition. We work hard to exceed your expectations, no matter your transportation needs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-4">Cost-Effective Transportation</h3>
              <p className="text-lg">
                When you hire Bara & Sons Logistics, we work hard to deliver the results you want at affordable prices. Our team will find top-level, cost-effective transportation solutions.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-4">Every Wish Into Account</h3>
              <p className="text-lg">
                We tailor our operations to empower our drivers and elevate our customers to achieve more. Your success is our priority.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Services We Offer</h2>
            <p className="text-xl text-gray-600">Comprehensive transportation solutions for all your logistics needs</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-4">Truckload</h3>
              <p className="text-gray-700">
                Bara & Sons Logistics is one of North America's leading trucking companies serving clients throughout the US and Canada. We provide on-time deliveries with personalized programs, unmatched safety practices, and satellite tracking.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-4">Less than Truckload</h3>
              <p className="text-gray-700">
                No matter the size of your business or industry, contact Bara & Sons Logistics for all your LTL freight shipping. We offer dependable transportation to safely transport your products even when you can't fill a truck.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-4">Expedited Services</h3>
              <p className="text-gray-700">
                Whenever you want to move your freight, during the day or at night, trust Bara & Sons Logistics to be there. We focus on providing top-level services and speed using cutting-edge technology.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-4">Temperature Controlled Hauling</h3>
              <p className="text-gray-700">
                Specialized temperature-controlled transportation for sensitive goods. Our refrigerated trucks maintain precise temperature control throughout your shipment's journey.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-4">Long Distance Hauling</h3>
              <p className="text-gray-700">
                Whether you need long distance hauling to any location in Canada or across the US states, contact Bara & Sons Logistics. We offer a wide range of long distance transportation services.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-2xl font-bold mb-4">Dry Van Transportation</h3>
              <p className="text-gray-700">
                Are you searching for affordable transportation for high-volume, heavy products? We provide convenient and affordable dry van transportation solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section id="jobs" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Trucking Jobs</h2>
            <p className="text-xl text-gray-600">Join our team of professional drivers</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">We are Hiring Drivers</h3>
              <p className="text-lg text-gray-700 mb-6">
                At Bara & Sons Logistics, we believe in investing in our team. We provide competitive remuneration and flexible benefit packages so we can hire and retain the best employees in the trucking industry.
              </p>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Driver Requirements:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Valid Class AZ license</li>
                  <li>Hold border crossing documents</li>
                  <li>At least 23 years old</li>
                  <li>Two years of experience</li>
                </ul>
              </div>
              
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">Available Driver Jobs:</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Owner Operators</li>
                  <li>Company Drivers</li>
                  <li>New Driver Training Program</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-6">Apply Now</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input 
                  type="tel" 
                  placeholder="Phone Number" 
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Select Position</option>
                  <option>Owner Operator</option>
                  <option>Company Driver</option>
                  <option>New Driver Training</option>
                </select>
                <textarea 
                  placeholder="Tell us about your experience..." 
                  rows={4}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button 
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl">We'd love to hear from you</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-4"></span>
                    <span className="text-lg">(555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4"></span>
                    <span className="text-lg">dispatch@barasonslogistics.com</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-4"></span>
                    <span className="text-lg">123 Logistics Way, Toronto, ON M1M 1M1</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4">Request a Callback</h3>
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  />
                  <textarea 
                    placeholder="How can we help you?" 
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
                  ></textarea>
                  <button 
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg"
                  >
                    Request Callback
                  </button>
                </form>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 text-black">
              <h3 className="text-2xl font-bold mb-6">Our Promise to You</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4"></span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Cost-Effective</h4>
                    <p>Competitive pricing without compromising on quality service.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4"></span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Be the Best In Industry</h4>
                    <p>We strive for excellence in every delivery and service we provide.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-2xl mr-4"></span>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Every Wish Into Account</h4>
                    <p>We listen to your needs and tailor our services accordingly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Bara & Sons Logistics</h3>
              <p className="text-gray-400">
                North America's leading transport and logistics company providing reliable, cost-effective transportation solutions.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Truckload</li>
                <li>Less than Truckload</li>
                <li>Expedited Services</li>
                <li>Temperature Controlled</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Why Choose Us</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div> (555) 123-4567</div>
                <div> dispatch@barasonslogistics.com</div>
                <div> 123 Logistics Way, Toronto, ON</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Bara & Sons Logistics. All Rights Reserved.</p>
            <div className="mt-4 space-x-4">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
