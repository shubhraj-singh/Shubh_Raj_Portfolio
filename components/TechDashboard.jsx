// TechDashboard.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "HTML", icon: "🌐", level: "Advanced" },
    { name: "CSS", icon: "🎨", level: "Advanced" },
    { name: "JavaScript", icon: "💛", level: "Intermediate" },
    { name: "React", icon: "⚛️", level: "Intermediate" },
    { name: "Node.js", icon: "🟢", level: "Intermediate" },
    { name: "MongoDB", icon: "🍃", level: "Intermediate" },
    { name: "Tailwind CSS", icon: "💨", level: "Advanced" },
    { name: "Git", icon: "🔧", level: "Intermediate" },
    { name: "Python", icon: "🐍", level: "Intermediate" },
];

// Container animation for grid
const container = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.15,
        },
    },
};

// Animation for each card
const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12,
        },
    },
};

const TechDashboard = () => {
    return (
        <div className="min-h-screen p-10 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Animated heading */}
            <motion.h2
                className="text-4xl font-bold mb-12 text-center"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            >
                <div className="py-20 w-full">
                <h1 className="heading">
                    Tech <span className="text-purple">I Know</span>
                </h1>
                </div>

            </motion.h2>

            {/* Skills Grid with animation */}
            <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
            >
                {skills.map((skill, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-slate-800 p-10 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300"
                        variants={item}
                        whileHover={{ y: -8, scale: 1.05, boxShadow: "0px 8px 20px rgba(0, 255, 255, 0.2)" }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <div className="text-5xl" title={skill.name} aria-label={skill.name}>
                            {skill.icon}
                        </div>
                        <div className="text-2xl font-semibold">{skill.name}</div>
                        <div
                            className={`text-sm px-3 py-1 rounded-full text-white ${skill.level === "Advanced"
                                    ? "bg-green-600"
                                    : skill.level === "Intermediate"
                                        ? "bg-yellow-600"
                                        : "bg-gray-600"
                                }`}
                        >
                            {skill.level}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechDashboard;
