import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, ArrowRight, Layers, Sparkles, Box } from 'lucide-react';
import Button from '../components/ui/Button';
import toolsData from '../data/tools.json';

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

const ToolCard = ({ tool, index }) => {
    return (
        <motion.div
            variants={fadeInUp}
            className="group relative bg-white/70 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative h-64 overflow-hidden bg-slate-100 shrink-0">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                <img
                    src={tool.image}
                    alt={tool.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 z-20 flex gap-2 flex-wrap">
                    {tool.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 text-xs font-semibold bg-white/20 backdrop-blur-md text-white rounded-md border border-white/30">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="p-8 flex flex-col flex-grow relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                    {tool.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {tool.description}
                </p>

                <div className="mb-8">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3 flex items-center">
                        <Layers className="h-3 w-3 mr-1" /> Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {tool.techStack?.map(tech => (
                            <span key={tech} className="px-3 py-1 bg-white/50 text-slate-600 rounded-full text-xs font-medium border border-slate-200 shadow-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="flex gap-3 mt-auto">
                    {(() => {
                        const validLinks = [
                            tool.link && { type: 'link', url: tool.link, label: 'Launch Tool', icon: ArrowRight, primary: true },
                            tool.codeLink && { type: 'code', url: tool.codeLink, label: 'View Code', icon: Github },
                            tool.modelLink && { type: 'model', url: tool.modelLink, label: 'Access Model', icon: Box }
                        ].filter(Boolean);

                        return validLinks.map((linkData, i) => (
                            <a
                                key={linkData.type}
                                href={linkData.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${validLinks.length === 1 ? 'flex-1' : 'flex-1'} group/link`}
                            >
                                <Button
                                    className="w-full justify-center !bg-slate-900 !text-white hover:!bg-blue-700 border-none shadow-md hover:shadow-lg transition-all"
                                    variant="default"
                                >
                                    {linkData.label}
                                    <linkData.icon className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                        ));
                    })()}
                </div>
            </div>
        </motion.div>
    );
};

const Tools = () => {
    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">

                {/* Header Section */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    className="text-center max-w-4xl mx-auto mb-20"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-gray-100 mb-6 text-sm font-medium text-blue-600">
                        <Code className="h-4 w-4" />
                        <span>Open Source Research</span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
                        AI Systems & <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Tools
                        </span>
                    </motion.h1>
                    <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
                        We translate our research into deployment-ready systems. Explore our suite of open-source tools and platforms built for mental healthcare.
                    </motion.p>
                </motion.div>

                {/* Tools Grid */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
                >
                    {toolsData.map((tool, index) => (
                        <ToolCard key={tool.id} tool={tool} index={index} />
                    ))}
                </motion.div>

                {/* Developers CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-12 overflow-hidden shadow-2xl text-center"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    {/* Decorative glow */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>

                    <div className="relative z-10">
                        <div className="inline-flex p-3 rounded-full bg-white/10 backdrop-blur-sm mb-6 text-blue-300">
                            <Github className="h-8 w-8" />
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Developers & Researchers
                        </h2>
                        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                            Most of our models and datasets are open-sourced on HuggingFace and GitHub. We believe in collaborative science.
                        </p>

                        <div className="flex justify-center">
                            <a href="https://github.com/LCS2-IIITD" target="_blank" rel="noopener noreferrer">
                                <Button className="!bg-white !text-slate-900 hover:!bg-blue-50 border-none text-lg px-8 py-4 shadow-lg">
                                    Visit our GitHub Organization
                                </Button>
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Tools;
