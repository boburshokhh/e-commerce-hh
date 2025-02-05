import { Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import qrCode from '../assets/images/products/Qr Code.png';
import googlePlay from '../assets/images/ICONS/png-transparent-google-play-store-logo-google-play-app-store-android-wallets-text-label-logo.png';
import appStore from '../assets/images/ICONS/AppStore.png';

const footerLinks = {
  exclusive: {
    title: "Exclusive",
    links: ["Subscribe", "Get 10% off your first order"]
  },
  support: {
    title: "Support",
    links: [
      "111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.",
      "exclusive@gmail.com",
      "+88015-88888-9999"
    ]
  },
  account: {
    title: "Account",
    links: ["My Account", "Login / Register", "Cart", "Wishlist", "Shop"]
  },
  quickLink: {
    title: "Quick Link",
    links: ["Privacy Policy", "Terms Of Use", "FAQ", "Contact"]
  }
};

const socialIcons = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" },
  { icon: Linkedin, href: "#" }
];

export function Footer() {
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6">{footerLinks.exclusive.title}</h3>
            <div className="space-y-4">
              <p className="font-medium text-lg">{footerLinks.exclusive.links[0]}</p>
              <p className="text-gray-400 mb-4">{footerLinks.exclusive.links[1]}</p>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="
                    bg-black border border-gray-700 px-4 py-3 rounded-l w-full
                    focus:outline-none focus:border-[#DB4444]
                    transition-colors duration-300
                  "
                />
                <button className="
                  bg-[#DB4444] px-6 py-3 rounded-r
                  hover:bg-red-600 transition-colors duration-300
                  flex items-center gap-2
                ">
                  <Send size={20} className="transform -rotate-45" />
                </button>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">{footerLinks.support.title}</h3>
            <ul className="space-y-4">
              {footerLinks.support.links.map((link, index) => (
                <li key={index} className="text-gray-400 hover:text-white transition-colors duration-300">
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">{footerLinks.account.title}</h3>
            <ul className="space-y-4">
              {footerLinks.account.links.map((link, index) => (
                <li 
                  key={index}
                  className="
                    text-gray-400 cursor-pointer
                    hover:text-white hover:translate-x-1
                    transition-all duration-300
                  "
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Link Section */}
          <div>
            <h3 className="text-xl font-bold mb-6">{footerLinks.quickLink.title}</h3>
            <ul className="space-y-4">
              {footerLinks.quickLink.links.map((link, index) => (
                <li 
                  key={index}
                  className="
                    text-gray-400 cursor-pointer
                    hover:text-white hover:translate-x-1
                    transition-all duration-300
                  "
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Download App Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-bold mb-4">Download App</h4>
              <p className="text-gray-400 mb-4">Save $3 with App New User Only</p>
              <div className="flex gap-6">
                <div className="
                  relative group cursor-pointer
                  hover:transform hover:scale-105
                  transition-all duration-300
                ">
                  <img src={qrCode} alt="QR Code" className="w-28 h-28" />
                  <div className="
                    absolute inset-0 bg-black/20 opacity-0
                    group-hover:opacity-100 transition-opacity duration-300
                  " />
                </div>
                <div className="space-y-4">
                  <img 
                    src={googlePlay} 
                    alt="Google Play" 
                    className="
                      w-36 h-12 object-contain cursor-pointer
                      hover:transform hover:scale-105
                      transition-all duration-300
                    " 
                  />
                  <img 
                    src={appStore} 
                    alt="App Store" 
                    className="
                      w-36 h-12 object-contain cursor-pointer
                      hover:transform hover:scale-105
                      transition-all duration-300
                    " 
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-6 justify-end items-center">
              {socialIcons.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  className="
                    text-gray-400 hover:text-white p-2
                    hover:transform hover:scale-110
                    transition-all duration-300
                  "
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>©2024 Exclusive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 