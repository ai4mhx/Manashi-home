import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, MapPin, FileText, User, Quote, Play, Pause, Copy, Check, ChevronRight, Hash } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import publicationsData from '../data/publications.json';

const PublicationDetail = () => {
    const { id } = useParams();
    const [paper, setPaper] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [copied, setCopied] = useState(false);

    const audioRef = React.useRef(null);

    useEffect(() => {
        const foundPaper = publicationsData.find(p => p.id === id);
        if (foundPaper) {
            setPaper(foundPaper);
        }
    }, [id]);

    useEffect(() => {
        if (paper?.audiopath) {
            audioRef.current = new Audio(paper.audiopath);
            audioRef.current.onended = () => setIsPlaying(false);
        }
        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, [paper]);

    const toggleAudio = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    // Audio visualization bars (mock)
    const bars = [1, 0.8, 0.6, 1, 0.9, 0.4, 0.8, 1, 0.5, 0.7, 1, 0.6, 0.3, 0.9, 1, 0.8, 0.4, 0.7, 1];

    const handleCopyBibtex = () => {
        if (paper?.bibtex) {
            navigator.clipboard.writeText(paper.bibtex);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    if (!paper) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-gray-500">Loading publication...</p>
            </div>
        );
    }

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFDFD] pb-24">
            {/* Top Navigation Bar */}
            <div className="bg-white border-b border-gray-100 sticky top-0 z-30 bg-opacity-80 backdrop-blur-md">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center text-sm text-gray-500">
                    <Link to="/" className="hover:text-blue-600 transition-colors">Home</Link>
                    <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                    <Link to="/publications" className="hover:text-blue-600 transition-colors">Publications</Link>
                    <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
                    <span className="text-gray-900 font-medium truncate max-w-[200px] sm:max-w-md">{paper.title}</span>
                </div>
            </div>

            <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Header Section */}
                    <header className="mb-12 border-b border-gray-100 pb-12">
                        <motion.div variants={itemVariants} className="space-y-6">
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-100 uppercase tracking-wide">
                                    {paper.type || 'Publication'}
                                </span>
                                {paper.year && (
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-100 text-gray-600 border border-gray-200">
                                        {paper.year}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight max-w-4xl">
                                    {paper.title}
                                </h1>
                                {paper.pdfLink && (
                                    <a href={paper.pdfLink} target="_blank" rel="noopener noreferrer" className="flex-shrink-0">
                                        <Button className="w-full lg:w-auto !bg-blue-600 !text-white hover:!bg-blue-700 shadow-xl shadow-blue-500/20 h-14 px-8 text-base font-bold whitespace-nowrap">
                                            Read Full Paper <FileText className="ml-2 h-5 w-5" />
                                        </Button>
                                    </a>
                                )}
                            </div>

                            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-600 text-sm md:text-base">
                                <div className="flex items-center">
                                    <User className="h-4 w-4 mr-2 text-blue-500" />
                                    <span className="font-medium text-gray-900">{(paper.authors || []).join(', ')}</span>
                                </div>
                                {paper.venue && (
                                    <div className="flex items-center">
                                        <MapPin className="h-4 w-4 mr-2 text-purple-500" />
                                        <span>{paper.venue}</span>
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    </header>

                    <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12">
                        {/* Right Content (Sidebar elements) - First on Mobile, Right Column on Desktop */}
                        <div className={`order-1 lg:order-2 lg:col-span-4 space-y-8 ${!paper.audiopath ? 'lg:flex lg:flex-col lg:justify-center' : ''}`}>
                            {/* audio Player Card */}

                            {/* TLDR Card */}
                            {paper.tldr && (
                                <motion.div variants={itemVariants} className="bg-yellow-50/50 p-6 rounded-2xl border border-yellow-100/50 relative h-fit">
                                    <Quote className="h-8 w-8 text-yellow-400 mb-4" />
                                    <h4 className="text-sm font-bold text-yellow-700 uppercase tracking-wider mb-2">TL;DR</h4>
                                    <p className="text-gray-800 font-medium leading-relaxed">
                                        {paper.tldr}
                                    </p>
                                </motion.div>
                            )}

                            {paper.audiopath && (
                                <motion.div variants={itemVariants} className="bg-slate-900 rounded-2xl p-6 text-white shadow-xl shadow-slate-900/10 overflow-hidden relative">
                                    <div className="relative z-10">
                                        <div className="flex items-center justify-between mb-6">
                                            <h4 className="text-md font-bold text-white flex items-center">
                                                <div className="mr-2 relative flex h-2 w-2">
                                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                                                </div>
                                                Audio Overview
                                            </h4>
                                            <span className="bg-white/10 px-2 py-0.5 rounded text-[10px] text-white/70">AI</span>
                                        </div>

                                        <div className="flex items-center gap-4">
                                            <button
                                                onClick={toggleAudio}
                                                className="w-12 h-12 flex-shrink-0 flex items-center justify-center rounded-full bg-white text-slate-900 hover:bg-gray-100 transition-all shadow-lg active:scale-95"
                                            >
                                                {isPlaying ? <Pause className="h-5 w-5 fill-current" /> : <Play className="h-5 w-5 ml-1 fill-current" />}
                                            </button>

                                            <div className="flex-1 h-8 flex items-end gap-1 overflow-hidden">
                                                {bars.map((height, i) => (
                                                    <motion.div
                                                        key={i}
                                                        animate={isPlaying ? {
                                                            height: [4, height * 16, 8],
                                                            opacity: [0.6, 1, 0.6]
                                                        } : {
                                                            height: 4,
                                                            opacity: 0.3
                                                        }}
                                                        transition={{
                                                            duration: 0.8,
                                                            repeat: Infinity,
                                                            repeatType: "reverse",
                                                            delay: i * 0.05,
                                                            ease: "easeInOut"
                                                        }}
                                                        className="flex-1 bg-white rounded-t-sm"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-400 mt-4 text-center">Listen to a quick summary</p>
                                    </div>
                                </motion.div>
                            )}
                        </div>

                        {/* Main Content (Abstract) - Second on Mobile, Left Column on Desktop */}
                        <div className="order-2 lg:order-1 lg:col-span-8 space-y-12">
                            <motion.section variants={itemVariants}>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    Abstract
                                </h3>
                                <p className="text-lg text-gray-600 leading-relaxed text-justify font-serif">
                                    {paper.abstract}
                                </p>
                            </motion.section>
                        </div>
                    </div>

                    {/* Full Width Bottom Sections */}
                    <div className="mt-12 space-y-12">
                        {/* Tags */}
                        {paper.tags && paper.tags.length > 0 && (
                            <motion.section variants={itemVariants}>
                                <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Keywords</h4>
                                <div className="flex flex-wrap gap-2">
                                    {paper.tags.map(tag => (
                                        <span key={tag} className="px-3 py-1.5 rounded-lg text-sm font-medium bg-white text-slate-600 border border-gray-200 shadow-sm flex items-center hover:bg-gray-50 transition-colors">
                                            <Hash className="h-3 w-3 mr-1 text-slate-400" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.section>
                        )}

                        {/* BibTeX */}
                        {paper.bibtex && (
                            <motion.section variants={itemVariants} className="pt-8 border-t border-gray-100">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-sm font-bold text-gray-900">BibTeX Citation</h4>
                                    <button
                                        onClick={handleCopyBibtex}
                                        className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center transition-colors hover:bg-blue-50 px-3 py-1 rounded-md"
                                    >
                                        {copied ? (
                                            <><Check className="h-4 w-4 mr-2" /> Copied</>
                                        ) : (
                                            <><Copy className="h-4 w-4 mr-2" /> Copy</>
                                        )}
                                    </button>
                                </div>
                                <div className="relative group">
                                    <pre className="bg-slate-50 text-slate-600 p-6 rounded-xl text-xs overflow-x-auto font-mono custom-scrollbar border border-gray-200">
                                        {paper.bibtex}
                                    </pre>
                                </div>
                            </motion.section>
                        )}
                    </div>
                </motion.div>
            </main>
        </div>
    );
};

export default PublicationDetail;
