// Modified TechDashboard.tsx
import React from "react";
import { motion } from "framer-motion";

interface SkillBlockProps {
    title: string;
    skills: string[];
}

const frontendSkills: string[] = [
    "HTML", "CSS", "JAVASCRIPT", "REACT", "NEXT JS",
    "ZUSTAND", "TAILWIND CSS", "FRAMER MOTION",
    "DOM", "UNIT TEST", "PERFORMANCE OPTIMIZE", "SSR"
];

const backendSkills: string[] = [
    "NODE", "BUN", "EXPRESS", "REST API",
    "ZOD VALIDATION", "JWT/OAUTH", "SQL", "POSTGRES",
    "PRISMA ORM", "DB MODELING", "STRIPE PAYMENTS"
];

const miscSkills: string[] = [
    "JAVASCRIPT", "TYPESCRIPT", "PYTHON", "GO",
    "REACT NATIVE", "GIT", "GITHUB", "LINUX", "WORDPRESS", "VPS", "VERCEL",
    "UX/UI DESIGN", "PRODUCT DESIGN", "FIGMA", "ADOBE XD", "WIREFRAME"
];

const sectionVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
};

const SkillBlock: React.FC<SkillBlockProps> = ({ title, skills }) => (
    <motion.div
        className="flex flex-col items-center gap-6"
        variants={sectionVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
    >
        <h2 className="text-xl font-bold text-purple-400">{title}</h2>
        <div className="flex flex-wrap justify-center gap-3 max-w-3xl">
            {skills.map((skill: string, i: number) => (
                <motion.div
                    key={i}
                    className="px-4 py-2 border border-purple-500 text-sm text-cyan-300 rounded-md bg-slate-800 hover:bg-slate-700"
                    variants={itemVariants}
                >
                    {skill}
                </motion.div>
            ))}
        </div>
    </motion.div>
);

const TechDashboard: React.FC = () => {
    return (
        <div className="min-h-screen p-10 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <motion.h1
                className="text-center text-4xl font-bold mb-16"
                initial={{ opacity: 0, y: -40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                MY <span className="text-purple-400">SKILLS</span>
            </motion.h1>

            <div className="grid gap-20 md:grid-cols-2 max-w-6xl mx-auto">
                <SkillBlock title="Frontend" skills={frontendSkills} />
                <SkillBlock title="Backend" skills={backendSkills} />
            </div>

            <div className="mt-20">
                <SkillBlock title="Miscellaneous" skills={miscSkills} />
            </div>
        </div>
    );
};

export default TechDashboard;
