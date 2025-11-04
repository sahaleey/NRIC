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
  FiHeart,
} from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-gray-300 overflow-hidden border-t border-white/5">
      {/* NAHJ Text */}
      <div className="absolute bottom-0 left-0 right-0 text-[18vw] font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-gray-100/50 via-gray-400/30 to-gray-900/10 select-none tracking-tight leading-none text-center md:text-left flex justify-center max-md:justify-start max-sm:justify-center px-6 pointer-events-none max-sm:text-[35vw] md:text-[35vw]">
        NAHJ
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 py-12">
          {/* Column 1: Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="relative">
                <img
                  src="/images/logo.jpg"
                  alt="NRIC LOGO"
                  className="h-16 w-16 rounded-2xl border-2 border-emerald-500/20 shadow-lg"
                />
                <div className="absolute -inset-1 bg-emerald-500/10 rounded-2xl blur-sm"></div>
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-white bg-gradient-to-r from-white to-emerald-200 bg-clip-text text-transparent">
                  Nahjurrashad
                </h3>
                <p className="text-emerald-400 text-sm font-medium">
                  Islamic College
                </p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md text-sm">
              A premier institution blending traditional Islamic scholarship
              with modern education, dedicated to nurturing future leaders with
              moral excellence and academic rigor.
            </p>

            {/* Social Links */}
            <div className="flex gap-2">
              {[
                {
                  icon: FiFacebook,
                  href: "https://www.facebook.com/nricchamakkala",
                  label: "Facebook",
                  color: "hover:bg-blue-600",
                },
                {
                  icon: FiInstagram,
                  href: "https://www.instagram.com/nahjurrashad/",
                  label: "Instagram",
                  color: "hover:bg-pink-600",
                },
                {
                  icon: FiYoutube,
                  href: "https://www.youtube.com/channel/UC-Lbu2rSgvr5d92BFqXWe9w",
                  label: "YouTube",
                  color: "hover:bg-red-600",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="size-10 bg-white/5 hover:bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group border border-white/10 backdrop-blur-sm"
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="size-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"></div>
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
                  className="text-gray-400 hover:text-emerald-300 transition-all duration-300 hover:translate-x-2 transform inline-block group"
                >
                  <span className="group-hover:underline decoration-emerald-400/50">
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 3: Academics */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Academics
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full"></div>
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
                  className="text-gray-400 hover:text-amber-300 transition-all duration-300 hover:translate-x-2 transform inline-block group"
                >
                  <span className="group-hover:underline decoration-amber-400/50">
                    {link.name}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-bold text-white text-lg mb-6 relative inline-block">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <FiMapPin className="size-4 text-emerald-400 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">
                    Campus Address
                  </p>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Nahjurrashad Islamic College,
                    <br />
                    Chamakkala, Thrissur,
                    <br />
                    Kerala 680652, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <FiPhone className="size-4 text-emerald-400 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Phone</p>
                  <a
                    href="tel:+914872123456"
                    className="text-gray-400 text-sm hover:text-emerald-300 transition-colors"
                  >
                    +91 4872 123 456
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 group">
                <div className="p-2 bg-emerald-500/10 rounded-lg group-hover:bg-emerald-500/20 transition-colors">
                  <FiMail className="size-4 text-emerald-400 flex-shrink-0" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">Email</p>
                  <a
                    href="mailto:info@nahjurrashad.edu"
                    className="text-gray-400 text-sm hover:text-emerald-300 transition-colors break-all"
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
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="text-gray-500 text-sm">
                &copy; {currentYear} Nahjurrashad Islamic College. All Rights
                Reserved.
              </p>
              <div className="flex gap-4 mt-3 text-xs text-gray-500">
                {[
                  { name: "Privacy Policy", path: "/privacy" },
                  { name: "Terms of Service", path: "/terms" },
                  { name: "Sitemap", path: "/sitemap" },
                ].map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="hover:text-gray-300 transition-colors hover:underline"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span className="bg-white/5 px-3 py-1 rounded-full border border-white/10 text-xs">
                Accredited by DHIU
              </span>
            </div>

            <div className="flex items-center gap-1 text-sm text-gray-500">
              <span>Developed</span>
              <span>by</span>
              <Link
                to="https://dev-scp.vercel.app"
                className="text-gray-400 hover:text-emerald-300 font-medium transition-all hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                SCP
              </Link>
            </div>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="size-12 bg-gradient-to-br from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group shadow-lg hover:shadow-xl border border-white/10 backdrop-blur-sm"
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
