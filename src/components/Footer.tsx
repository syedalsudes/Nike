import Image from "next/image";
import { Twitter, Facebook, Youtube, Instagram, MapPin } from "lucide-react";
import Link from "next/link";
import logo from "../../public/logo.svg";

export default function Footer() {
  const footerLinks = [
    { name: "Guides", url: "/helpcenter#guides" },
    { name: "Terms of Sale", url: "/helpcenter#terms-sale" },
    { name: "Terms of Use", url: "/helpcenter#terms-use" },
    { name: "Nike Privacy Policy", url: "/helpcenter#privacy" },
  ];

  const mainLinks = [
    { name: "Help", url: "/helpcenter#help" },
    { name: "About", url: "/about" },
    { name: "Contact", url: "/contact" },
    { name: "Services", url: "/services" },
    { name: "Products", url: "/products" },
  ];

  return (
    <footer className="bg-deepBlack text-primaryWhite">
      {/* Top Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-6 md:px-12 py-12">

        {/* Logo & Description */}
        <div className="flex flex-col space-y-4 max-w-sm">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="Nike Logo"
              className="h-14 w-14 md:h-20 md:w-20 lg:h-24 lg:w-24 object-contain select-none"
            />
          </Link>
          <p className="text-sm opacity-80 leading-relaxed">
            Nike delivers innovative products, experiences, and services to inspire
            every athlete in the world. Our mission is to bring inspiration and
            innovation to every athlete — and if you have a body, you are an athlete.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {mainLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="text-sm opacity-80 hover:opacity-100 hover:underline transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Get Help */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Get Help</h2>
          <ul className="space-y-2">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.url}
                  className="text-sm opacity-80 hover:opacity-100 hover:underline transition"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Accounts */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex gap-4">
            {[Twitter, Facebook, Youtube, Instagram].map((Icon, i) => (
              <div
                key={i}
                className="bg-gray500 text-deepBlack2 p-2 rounded-full hover:bg-deepBlack2 hover:text-primaryWhite cursor-pointer w-10 h-10 flex items-center justify-center transition"
              >
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 px-6 md:px-12 py-4 text-sm text-gray500">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">

          {/* Location */}
          <div className="flex items-center justify-center md:justify-start gap-2">
            <MapPin className="h-4 w-4" />
            <span>Pakistan</span>
          </div>

          {/* Copyright */}
          <p className="flex-1 text-center">
            &copy; 2025 Nike, Inc. All Rights Reserved.
            <br className="md:hidden" />
            <span className="block md:inline text-gray400 text-xs mt-1 md:mt-0">
              Designed & Developed by{" "}
              <a target="_blank" href="https://www.linkedin.com/in/syed-al-sudes-hussain-a9a163321/"><span className="font-medium text-primaryWhite hover:underline cursor-pointer">
                Syed Al-Sudes
              </span></a>
            </span>
          </p>

          {/* Footer Links */}
          <ul className="flex flex-wrap justify-center md:justify-end gap-3 md:gap-6 text-sm">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url} className="hover:underline">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </footer>
  );
}
