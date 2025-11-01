import { Link } from "react-router-dom";
import {
  FiMapPin,
  FiPhone,
  FiMail,
  FiFacebook,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiArrowUp,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-900 to-gray-900 text-gray-300 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative m-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 py-16">
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <img
                src="/images/logo.jpg"
                alt="NRIC LOGO"
                className="h-15 w-15 rounded-full"
                srcset=""
              />
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  Nahjurrashad
                </h3>
                <p className="text-emerald-300 text-sm">Islamic College</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              A premier institution blending traditional Islamic scholarship
              with modern education, dedicated to nurturing future leaders with
              moral excellence and academic rigor.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                {
                  icon: FiFacebook,
                  href: "https://www.facebook.com/nricchamakkala",
                  label: "Facebook",
                },

                {
                  icon: FiInstagram,
                  href: "https://www.instagram.com/nahjurrashad/",
                  label: "Instagram",
                },
                {
                  icon: FiYoutube,
                  href: "https://www.youtube.com/channel/UC-Lbu2rSgvr5d92BFqXWe9w",
                  label: "YouTube",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="size-10 bg-white/10 hover:bg-emerald-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="size-5 text-gray-300 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-emerald-400"></div>
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "About College", path: "/about" },
                { name: "Academics", path: "/academics" },
                { name: "Contact", path: "/contact" },
                { name: "Campus", path: "/about/campus" },
                { name: "Leadership", path: "/about/leadership" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-emerald-300 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Academics */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Academics
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-amber-400"></div>
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { name: "Department", path: "/departments" },
                { name: "DHIU Affiliation", path: "/about/accreditation" },
                { name: "Curriculum", path: "/academics/curriculum" },
                { name: "Faculty", path: "/academics/faculty" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-gray-300 hover:text-amber-300 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-8 h-0.5 bg-blue-400"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FiMapPin className="size-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Campus Address</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Nahjurrashad Islamic College,
                    <br />
                    Chamakkala, Thrissur,
                    <br />
                    Kerala 680652, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiPhone className="size-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Phone</p>
                  <a
                    href="tel:+914872123456"
                    className="text-gray-300 text-sm hover:text-emerald-300 transition-colors"
                  >
                    +91 4872 123 456
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <FiMail className="size-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">Email</p>
                  <a
                    href="mailto:info@nahjurrashad.edu"
                    className="text-gray-300 text-sm hover:text-emerald-300 transition-colors"
                  >
                    info@nahjurrashad.edu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 pb-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-center lg:text-left">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Nahjurrashad Islamic College. All Rights
                Reserved.
              </p>
              <div className="flex gap-4 mt-2 text-xs text-gray-500">
                <Link
                  to="/privacy"
                  className="hover:text-gray-300 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  to="/terms"
                  className="hover:text-gray-300 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  to="/sitemap"
                  className="hover:text-gray-300 transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-400">
              <span>Accredited by DHIU</span>
              <span>•</span>
              <span>UGC Recognized</span>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="size-12 bg-emerald-600 hover:bg-emerald-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group"
              aria-label="Scroll to top"
            >
              <FiArrowUp className="size-5 text-white group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
