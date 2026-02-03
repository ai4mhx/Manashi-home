import React from 'react';
import { Brain, Database, Activity, ShieldCheck, Users, MessageSquare, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const ResearchArea = ({ icon: Icon, title, description, color, delay }) => (
    <motion.div
        variants={fadeInUp}
        className="group relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden"
    >
        {/* Background Gradient Blob */}
        <div className={`absolute top-[-50px] right-[-50px] w-32 h-32 rounded-full blur-3xl opacity-20 transition-all duration-500 group-hover:scale-150 ${color}`} />

        <div className={`p-3 w-fit rounded-xl mb-6 bg-white shadow-sm border border-gray-100 group-hover:scale-110 transition-transform duration-300`}>
            <Icon className={`h-8 w-8 ${color.replace('bg-', 'text-')}`} />
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
            {title}
        </h3>
        <p className="text-gray-600 leading-relaxed z-10">
            {description}
        </p>
    </motion.div>
);

const Research = () => {
    const areas = [
        {
            icon: Users,
            title: "Organizational Readiness",
            description: "Assessing and improving the readiness of healthcare workers and institutions for adopting AI-based mental health tools.",
            color: "bg-blue-500",
        },
        {
            icon: Database,
            title: "Multilingual Data & NLP",
            description: "Building robust pipelines for multilingual data collection, preprocessing, and summarization across diverse linguistic contexts.",
            color: "bg-purple-500",
        },
        {
            icon: Activity,
            title: "Symptom Detection",
            description: "Advanced models for detecting mental health symptoms and behavioral signals from text, speech, and interaction data.",
            color: "bg-rose-500",
        },
        {
            icon: Brain,
            title: "Prediction & Intervention",
            description: "Predicting treatment response and automating timely interventions to support clinicians in decision-making.",
            color: "bg-amber-500",
        },
        {
            icon: ShieldCheck,
            title: "Ethics & Evaluation",
            description: "Rigorous phenotype classification and deep consideration of ethical implications, privacy, and bias in mental healthcare.",
            color: "bg-emerald-500",
        },
        {
            icon: MessageSquare,
            title: "Action & Robotics Models",
            description: "Creating interactive AI agents, dialogue systems, and embodied robotic assistants to actively support users in real-world settings.",
            color: "bg-cyan-500",
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-200/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[20%] right-[10%] w-[600px] h-[600px] bg-purple-200/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">

                {/* Hero Section */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6 text-sm font-medium text-purple-600">
                        <Microscope className="h-4 w-4" />
                        <span>Core Research Pillars</span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
                        Research <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Directions
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Bridging <span className="font-semibold text-gray-900">clinical mental health</span>, <span className="font-semibold text-gray-900">AI research</span>, and real-world workflows to create impact.
                    </motion.p>
                </motion.div>

                {/* Research Areas Grid */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
                >
                    {areas.map((area, index) => (
                        <ResearchArea key={index} {...area} />
                    ))}
                </motion.div>

                {/* Methodology Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-900/5 border border-white/60 overflow-hidden"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                        <div>
                            <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-4 border border-blue-100">
                                OUR APPROACH
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Human-Centered AI Methodology</h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    At Manashi, we believe that AI should not aim to replace clinicians but to <strong className="text-blue-600 font-bold">empower them</strong>.
                                </p>
                                <p>
                                    We collaborate closely with <strong className="text-gray-900">psychologists, psychiatrists, and counsellors</strong> to ensure our tools are clinically valid, safe, and practically useful. From <em>in-situ</em> studies to large-scale deployments, we close the loop between AI research and clinical practice.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-10 rotate-3 absolute inset-0 transform scale-95" />
                            <div className="aspect-square rounded-2xl bg-white shadow-xl border border-gray-100 flex items-center justify-center p-8 relative rotate-0 hover:rotate-1 transition-transform duration-500">
                                <div className="grid grid-cols-2 gap-4 w-full h-full opacity-80">
                                    <div className="bg-blue-50 rounded-2xl flex items-center justify-center"><Users className="h-10 w-10 text-blue-500" /></div>
                                    <div className="bg-purple-50 rounded-2xl flex items-center justify-center"><Brain className="h-10 w-10 text-purple-500" /></div>
                                    <div className="bg-emerald-50 rounded-2xl flex items-center justify-center"><ShieldCheck className="h-10 w-10 text-emerald-500" /></div>
                                    <div className="bg-amber-50 rounded-2xl flex items-center justify-center"><Activity className="h-10 w-10 text-amber-500" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Research;
