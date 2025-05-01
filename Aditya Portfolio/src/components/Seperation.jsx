import { motion } from "framer-motion";

function Seperation() {
    return (
        <div className="relative h-0.5">
            <motion.div 
                className="absolute w-full h-full bg-gradient-to-r from-gradient1 via-gradient3 to-gradient4"
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            />
        </div>
    );
}

export default Seperation;