// TechDashboard.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = [
    { name: "HTML", icon: "html.svg", level: "Advanced" },
    { name: "CSS", icon: "css.svg", level: "Advanced" },
    { name: "JavaScript", icon: "javascript.svg", level: "Intermediate" },
    { name: "React", icon: "react.svg", level: "Intermediate" },
    { name: "Node.js", icon: "node-js.svg", level: "Intermediate" },
    { name: "MongoDB", icon: "mongodb.svg", level: "Intermediate" },
    { name: "Tailwind CSS", icon: "tail.svg", level: "Advanced" },
    { name: "Git", icon: "git.svg", level: "Intermediate" },
    { name: "Python", icon: "python.svg", level: "Intermediate" },
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
        <div className="min-h-screen p-10 text-white bg-gradient-to-br via-slate-800 to-slate-900">
            {/* Animated heading */}
            <motion.div
                className="py-20 w-full"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            >
                <h1 className="heading text-4xl font-bold text-center">
                    Tech <span className="text-purple">I Know</span>
                </h1>
            </motion.div>

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
                        className=" p-10 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-300"
                        variants={item}
                        whileHover={{
                            y: -8,
                            scale: 1.05,
                            boxShadow: "0px 8px 20px rgba(0, 255, 255, 0.2)"
                        }}
                        whileTap={{ scale: 0.97 }}
                    >
                        <img
                            src={skill.icon}
                            alt={skill.name}
                            className="w-10 h-10"
                            title={skill.name}
                        />

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
