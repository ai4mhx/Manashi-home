import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, BookOpen } from 'lucide-react';
import PaperCard from '../components/PaperCard';
import publicationsData from '../data/publications.json';

/* Animations */
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: { staggerChildren: 0.1 }
    }
};

const Publications = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedYear, setSelectedYear] = useState('All');
    const [selectedType, setSelectedType] = useState('All');

    /* ----------------------------
       FIXED FILTER OPTIONS
    -----------------------------*/

    // Stable, numeric year sorting (no "All" mixing)
    const years = useMemo(() => {
        const uniqueYears = Array.from(
            new Set(publicationsData.map(p => Number(p.year)))
        ).sort((a, b) => b - a);

        return ['All', ...uniqueYears];
    }, []);

    const types = useMemo(() => {
        return ['All', ...new Set(publicationsData.map(p => p.type))];
    }, []);

    /* ----------------------------
       FIXED FILTER LOGIC
    -----------------------------*/

    const filteredPubs = useMemo(() => {
        const term = searchTerm.toLowerCase();

        return publicationsData.filter(pub => {
            const matchesSearch =
                pub.title.toLowerCase().includes(term) ||
                pub.abstract?.toLowerCase().includes(term);

            const matchesYear =
                selectedYear === 'All' ||
                Number(pub.year) === Number(selectedYear);

            const matchesType =
                selectedType === 'All' ||
                pub.type === selectedType;

            return matchesSearch && matchesYear && matchesType;
        });
    }, [searchTerm, selectedYear, selectedType]);

    /* ----------------------------
       UI
    -----------------------------*/

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[100px]" />
                <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">

                {/* Header */}
                <motion.div
                    initial="initial"
                    animate="animate"
                    variants={staggerContainer}
                    className="text-center max-w-4xl mx-auto mb-16"
                >
                    <motion.div
                        variants={fadeInUp}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border mb-6 text-sm font-medium text-blue-600"
                    >
                        <BookOpen className="h-4 w-4" />
                        Research & Findings
                    </motion.div>

                    <motion.h1
                        variants={fadeInUp}
                        className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6"
                    >
                        Our Latest{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            <br />Publications
                        </span>
                    </motion.h1>

                    <motion.p
                        variants={fadeInUp}
                        className="text-xl text-gray-600 max-w-2xl mx-auto"
                    >
                        Explore our research in AI for Mental Health.
                    </motion.p>
                </motion.div>

                {/* Filters */} <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 p-6 mb-12 flex flex-col md:flex-row gap-6 items-center justify-between" > <div className="relative w-full md:w-96 group"> <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none"> <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" /> </div> <input type="text" placeholder="Search title or abstract..." className="block w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl bg-slate-50/50 leading-5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} /> </div> <div className="flex gap-4 w-full md:w-auto"> <div className="relative w-full md:w-40"> <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"> <Filter className="h-4 w-4 text-gray-400" /> </div> <select className="block w-full pl-10 pr-8 py-3 border border-slate-200 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer hover:bg-slate-50 transition-colors appearance-none text-gray-700 font-medium" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} > {years.map(year => (<option key={year} value={year}>{year === 'All' ? 'Year: All' : year}</option>))} </select> </div> <div className="relative w-full md:w-48"> <select className="block w-full pl-4 pr-8 py-3 border border-slate-200 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 cursor-pointer hover:bg-slate-50 transition-colors appearance-none text-gray-700 font-medium" value={selectedType} onChange={(e) => setSelectedType(e.target.value)} > {types.map(type => (<option key={type} value={type}>{type === 'All' ? 'Type: All' : type}</option>))} </select> </div> </div> </motion.div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredPubs.map((pub, index) => (
                        <PaperCard key={pub.id} paper={pub} index={index} />
                    ))}
                </motion.div>

                {/* Empty state */}
                {filteredPubs.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-gray-500 text-lg">
                            No publications found.
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedYear('All');
                                setSelectedType('All');
                            }}
                            className="mt-4 text-blue-600 hover:underline"
                        >
                            Clear filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Publications;
