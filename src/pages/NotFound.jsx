import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, AlertCircle } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFound = () => {
    return (
        <div className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="mb-8 relative"
                >
                    {/* Abstract background decorative elements */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-60 -z-10"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-purple-100 rounded-full blur-2xl opacity-60 -z-10"></div>

                    <h1 className="text-[150px] font-black text-slate-100 leading-none select-none">
                        404
                    </h1>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                        <AlertCircle className="h-24 w-24 text-blue-500 opacity-90" strokeWidth={1.5} />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                        Page not found
                    </h2>
                    <p className="text-gray-500 mb-8 text-lg">
                        Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
                    </p>

                    <Link to="/">
                        <Button variant="primary" className="!px-8 !py-3 !text-base shadow-lg shadow-blue-500/20">
                            <Home className="mr-2 h-5 w-5" />
                            Go Back Home
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
