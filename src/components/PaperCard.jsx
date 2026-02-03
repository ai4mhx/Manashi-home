import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, Users, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const PaperCard = ({ paper, index }) => {
    return (
        <Link to={`/publication/${paper.id}`} className="block h-full">
            <motion.div
                variants={fadeInUp}
                className="group relative bg-white/70 backdrop-blur-lg rounded-2xl shadow-lg border border-white/50 p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col h-full overflow-hidden"
            >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative z-10 flex-grow">
                    <div className="flex justify-between items-start mb-4">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white shadow-sm text-blue-700 border border-blue-100">
                            {paper.type}
                        </span>
                        <span className="text-sm font-medium text-slate-500 flex items-center">
                            <Calendar className="h-3 w-3 mr-1.5" />
                            {paper.year}
                        </span>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-700 transition-colors duration-300 leading-tight">
                        {paper.title}
                    </h3>

                    <p className="text-gray-600 line-clamp-3 mb-6 leading-relaxed">
                        {paper.abstract}
                    </p>
                </div>

                <div className="relative z-10 mt-4 pt-4 border-t border-slate-100 text-sm text-gray-500">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center text-slate-600">
                            <Users className="h-4 w-4 mr-2 text-slate-400" />
                            <span className="truncate font-medium">{paper.authors[0]} et al.</span>
                        </div>
                        <ArrowUpRight className="h-4 w-4 text-slate-300 group-hover:text-blue-500 transition-colors" />
                    </div>
                    <div className="flex items-center mt-2 text-slate-500 text-xs">
                        <FileText className="h-3 w-3 mr-2 opacity-70" />
                        <span className="truncate uppercase tracking-wide">{paper.venue}</span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default PaperCard;
