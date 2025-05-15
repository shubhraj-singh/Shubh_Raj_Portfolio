import React from "react";
import { motion } from "framer-motion";

const tags = [
    { label: "Designer", icon: "🎨" },
    { label: "Developer", icon: "💻" },
    { label: "Illustrator", icon: "🖌️" },
    { label: "Animator", icon: "🎥" },
    { label: "30+ Demos", icon: "🧩" },
    { label: "Trending", icon: "📈" },
    { label: "Consultant", icon: "🧠" },
    { label: "CV", icon: "📄" },
    { label: "Card", icon: "💳" },
    { label: "Service", icon: "🛠️" },
    { label: "Appointment", icon: "📅" },
    { label: "Blogger", icon: "📝" },
];

const FloatingTags = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 bg-gray-900 p-10 min-h-screen">
            {tags.map((tag, idx) => (
                <motion.div
                    key={idx}
                    className="px-4 py-2 rounded-lg bg-slate-800 text-blue-400 shadow-md flex items-center gap-2 cursor-pointer"
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random(),
                    }}
                >
                    <span>{tag.icon}</span>
                    <span className="text-sm font-medium">{tag.label}</span>
                </motion.div>
            ))}
        </div>
    );
};

export default FloatingTags;