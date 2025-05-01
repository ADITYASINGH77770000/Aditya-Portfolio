import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/Logo.png";

const navItems = ["Home", "Projects", "Technologies", "About", "Contact"];

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const progress = (scrollTop / docHeight) * 100;
            setScrollProgress(progress);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = () => {
        if (menuOpen) setMenuOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -80 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? "bg-[#0B2447]/70 backdrop-blur-md shadow-md" : "bg-transparent"
                }`}
        >
            {/* Progress Bar with Glow */}
            <div
                className="h-1 fixed top-0 left-0 z-50 bg-gradient-to-r from-[#00c6ff] to-[#2C74B3] shadow-[0_0_10px_#00c6ff] "
                style={{
                    width: `${scrollProgress}%`,
                    boxShadow: '0 0 12px #2C74B3, 0 0 24px #00c6ff'
                }}
            ></div>


            <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center relative">
                {/* Logo */}
                <motion.a
                    href="#Home"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-2"
                >
                    <img
                        src={logo}
                        alt="Logo"
                        className="h-15 w-auto filter drop-shadow-lg hover:drop-shadow-glow transition duration-300"
                    />

                </motion.a>

                {/* Desktop Nav */}
                <ul className="hidden lg:flex gap-10 items-center">
                    {navItems.map((item) => (
                        <motion.li
                            key={item}
                            whileHover={{ scale: 1.12 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative"
                        >
                            <a
                                href={`#${item}`}
                                className="text-white/90 hover:text-[#2C74B3] transition-all font-medium text-lg relative group"
                            >
                                {item}
                                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gradient-to-r from-[#00c6ff] to-[#2C74B3] group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </motion.li>
                    ))}
                </ul>

                {/* Mobile Burger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden z-50 flex flex-col justify-center items-center gap-[5px] p-2 cursor-pointer relative"
                >
                    <motion.span
                        animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="w-6 h-[2px] bg-white rounded-full"
                    />
                    <motion.span
                        animate={{ opacity: menuOpen ? 0 : 1 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="w-6 h-[2px] bg-white rounded-full"
                    />
                    <motion.span
                        animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="w-6 h-[2px] bg-white rounded-full"
                    />
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {menuOpen && (
                        <motion.ul
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-20 left-0 right-0 bg-black/90 backdrop-blur-lg flex flex-col items-center space-y-5 py-6 rounded-lg shadow-lg z-40"
                        >
                            {navItems.map((item, i) => (
                                <motion.li
                                    key={item}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <a
                                        className="text-xl text-white font-semibold hover:text-gradient4"
                                        href={`#${item}`}
                                        onClick={handleNavClick}
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
}

export default Header;
