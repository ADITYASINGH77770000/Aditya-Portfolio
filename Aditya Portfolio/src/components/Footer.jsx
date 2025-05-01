import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiHuggingface } from "react-icons/si"; // 💡 Import Hugging Face Icon
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-[#0B2447] via-[#19376D] to-[#0B2447] text-white py-12 overflow-hidden">
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />

            <div className="relative z-10 max-w-7xl mx-auto px-6">
                {/* Social Icons */}
                <div className="flex justify-center gap-8 mb-10">
                    {[{
                        icon: FaGithub,
                        href: "https://github.com/ADITYASINGH77770000"
                    }, {
                        icon: FaInstagram,
                        href: "https://www.instagram.com/thakuraditya00007/"
                    }, {
                        icon: SiHuggingface,  // 🆕 Hugging Face logo here instead of Twitter
                        href: "https://huggingface.co/Aditya7777"
                    }, {
                        icon: FaLinkedin,
                        href: "https://www.linkedin.com/in/aditya-singh-7210b2267/"
                    }].map(({ icon: Icon, href }, i) => (
                        <motion.a
                            key={i}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.3, rotate: 5 }}
                            className="text-3xl md:text-4xl text-[#2C74B3] hover:text-[#00c6ff] transition-all duration-300"
                        >
                            <Icon />
                        </motion.a>
                    ))}
                </div>

                {/* Navigation Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-8">
                    {["Home", "About", "Projects", "Technologies"].map((item, i) => (
                        <motion.a
                            key={i}
                            href={`#${item}`}
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="text-white/90 text-lg font-medium hover:text-[#00c6ff] transition duration-300"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-[#2C74B3] to-transparent mb-6" />

                {/* Copyright */}
                <p className="text-center text-sm text-white/70">
                    © {new Date().getFullYear()} <span className="font-bold text-[#00c6ff]">Aditya Singh</span>. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
