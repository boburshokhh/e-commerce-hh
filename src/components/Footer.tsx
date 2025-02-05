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
      "111 Bijoy sarani, Dhaka,",
      "DH 1515, Bangladesh.",
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
  },
  downloadApp: {
    title: "Download App",
    description: "Save $3 with App New User Only"
  }
};

export function Footer() {
  return (
    <footer className="bg-black text-white font-['Poppins']">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Exclusive Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">{footerLinks.exclusive.title}</h3>
            <p>{footerLinks.exclusive.links[0]}</p>
            <p className="text-sm text-gray-400">{footerLinks.exclusive.links[1]}</p>
            <div className="flex w-full">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-black border border-gray-600 px-4 py-2 rounded-l-md outline-none w-full"
              />
              <button className="bg-[#DB4444] px-4 py-2 rounded-r-md transition-transform transform hover:scale-105">
                <Send size={18} className="transform -rotate-45" />
              </button>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{footerLinks.support.title}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.support.links.map((link, index) => (
                <li key={index}>{link}</li>
              ))}
            </ul>
          </div>

          {/* Account Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{footerLinks.account.title}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.account.links.map((link, index) => (
                <li key={index} className="hover:text-white cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </div>

          {/* Quick Link Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{footerLinks.quickLink.title}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              {footerLinks.quickLink.links.map((link, index) => (
                <li key={index} className="hover:text-white cursor-pointer transition-colors">{link}</li>
              ))}
            </ul>
          </div>

          {/* Download App Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{footerLinks.downloadApp.title}</h3>
            <p className="text-sm text-gray-400">{footerLinks.downloadApp.description}</p>
            <div className="flex items-center gap-4">
              <img src={qrCode} alt="QR Code" className="w-24 h-24" />
              <div className="flex flex-col gap-2">
                <img src={googlePlay} alt="Google Play" className="h-10 cursor-pointer transition-transform transform hover:scale-105" />
                <img src={appStore} alt="App Store" className="h-10 cursor-pointer transition-transform transform hover:scale-105" />
              </div>
            </div>
            <div className="flex gap-4 mt-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">© Copyright Rimel 2022. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
