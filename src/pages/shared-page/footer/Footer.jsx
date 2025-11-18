import { FaFacebookF, FaYoutube, FaLinkedinIn } from "react-icons/fa";
import { SiVisa, SiMastercard, SiPaypal, SiBraintree } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 rounded-t-xl mt-10">
      <div className="max-w-7xl mx-auto px-6 py-10 sm:py-12 md:py-16">
        {/* Logo & Description */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-green-500 mb-2">Rapi-Do</h1>
          <p className="text-sm md:text-base text-gray-400">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-gray-300 text-sm md:text-base">
          {["Services", "Coverage", "About Us", "Pricing", "Blog", "Contact"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(" ", "-")}`}
              className="hover:text-green-500 transition-colors"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-6 text-xl md:text-2xl">
          <a href="#" className="hover:text-blue-500"><FaLinkedinIn /></a>
          <a href="#" className="hover:text-gray-500"><FaFacebookF /></a>
          <a href="#" className="hover:text-red-600"><FaYoutube /></a>
        </div>

        {/* Payment Icons */}
        <div className="flex justify-center gap-6 text-3xl md:text-4xl">
          <SiVisa className="hover:text-blue-600 transition-colors" />
          <SiMastercard className="hover:text-red-600 transition-colors" />
          <SiPaypal className="hover:text-blue-500 transition-colors" />
          <SiBraintree className="hover:text-purple-600 transition-colors" />
        </div>

        {/* Footer Bottom */}
        <p className="text-center text-gray-500 text-xs mt-8 sm:mt-12">
          &copy; {new Date().getFullYear()} Rapi-Do. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
