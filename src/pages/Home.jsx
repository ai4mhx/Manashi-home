import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../components/ui/Button';
import PaperCard from '../components/PaperCard';
import publicationsData from '../data/publications.json';

// Import local assets
import workflowImg from '../assets/workflow.png';
import wellbeingImg from '../assets/wellbeing.png';
import ethicsImg from '../assets/ethics.png';

const Hero = () => (
    <div className="relative bg-slate-900 overflow-hidden isolate min-h-screen flex items-center justify-center">
        {/* Deep Dark Animated Background */}
        <div className="absolute inset-0 -z-20 bg-[#0B1120]">
            {/* Gradient Mesh Layers */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] bg-blue-900/30 rounded-full blur-[100px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, 50, 0]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/20 rounded-full blur-[120px]"
            />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        {/* Subtle Grid Pattern Overlay */}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        <div className="relative max-w-5xl mx-auto px-6 flex flex-col items-center text-center z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-semibold text-blue-200 ring-1 ring-inset ring-blue-400/30 bg-blue-500/10 mb-8 backdrop-blur-md"
            >
                AI for Mental Healthcare Experts
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="text-6xl font-black tracking-tight text-white sm:text-7xl lg:text-9xl mb-8 drop-shadow-2xl leading-[1.1]"
            >
                Manashi
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="text-2xl sm:text-3xl text-slate-300 max-w-4xl font-light leading-relaxed mb-12"
            >
                Bridging <span className="text-white font-medium border-b border-blue-500/50 pb-1">mental healthcare</span> and <span className="text-white font-medium border-b border-purple-500/50 pb-1">AI research</span> to support <br /> the healers of tomorrow.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
            >
                <Link to="/research" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Explore Research
                    </button>
                </Link>
                <Link to="/tools" className="w-full sm:w-auto">
                    <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white transition-all backdrop-blur-sm">
                        View Tools & Systems
                    </button>
                </Link>
            </motion.div>
        </div>
    </div>
);

const VisionSection = () => (
    <div className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-24"
            >
                <h2 className="text-accent font-bold tracking-wide uppercase text-sm mb-3">The Mission</h2>
                <h3 className="text-4xl leading-tight font-extrabold text-primary sm:text-5xl">
                    Why We Focus on Healthcare Workers
                </h3>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                {[
                    { img: workflowImg, title: "Workflow Efficiency", desc: "Automating administrative burdens to let clinicians focus on what matters: patient care." },
                    { img: wellbeingImg, title: "Wellbeing & Burnout", desc: "Monitoring and supporting the mental health of the healers themselves using proactive AI." },
                    { img: ethicsImg, title: "Ethics & Safety", desc: "Deploying responsible AI that rigorously adheres to clinical safety standards and privacy." }
                ].map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.2, duration: 0.7 }}
                        className="flex flex-col items-center text-center group"
                    >
                        <div className="relative mb-8 transition-transform duration-500 group-hover:-translate-y-2">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <img src={item.img} alt={item.title} className="w-48 h-48 object-contain drop-shadow-xl relative z-10" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary mb-4">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed max-w-xs">{item.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    </div>
);

const RecentPubs = () => {
    const recent = publicationsData.slice(0, 3);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <div className="py-16 md:py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-4">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-accent font-bold tracking-wide uppercase text-xs md:text-sm mb-2 md:mb-3">Our Work</h2>
                        <h3 className="text-3xl md:text-4xl font-extrabold text-primary">Recent Publications</h3>
                    </motion.div>
                    <Link to="/publications" className="hidden sm:block">
                        <Button variant="outline" className="group bg-white border-slate-200 hover:border-accent hover:text-accent transition-colors">
                            View All Publications <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
                >
                    {recent.map((pub) => (
                        <motion.div key={pub.id} variants={itemVariants} className="h-full">
                            <PaperCard paper={pub} />
                        </motion.div>
                    ))}
                </motion.div>

                <div className="mt-10 text-center sm:hidden">
                    <Link to="/publications" className="block w-full">
                        <Button variant="outline" className="w-full justify-center bg-white border-slate-200 text-slate-700 font-medium py-3 hover:bg-slate-50 transition-colors shadow-sm">
                            View All Publications <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

// Import partner logos
import aiimsbhatLogo from '../assets/aiimsbhat.png';
import aiimsdelLogo from '../assets/aiimsdel.png';
import aiimskalLogo from '../assets/aiimskal.svg';
import nimhansLogo from '../assets/nimhans.png';
import ashokaLogo from '../assets/ashoka.png';
import jipmerLogo from '../assets/jipmer.png';
import tmcLogo from '../assets/tmc.png';




const Partners = () => (
    <div className="py-24 bg-white overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center mb-16">
            <p className="text-lg font-medium text-slate-400 uppercase tracking-widest">Trusted by leading institutions</p>
        </div>

        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {[
                { name: "AIIMS Delhi", logo: aiimsdelLogo },
                { name: "AIIMS Bhatinda", logo: aiimsbhatLogo },
                { name: "AIIMS Kalaburagi", logo: aiimskalLogo },
                { name: "TMC", logo: tmcLogo },
                { name: "ASHOKA University", logo: ashokaLogo },
                { name: "JIPMER", logo: jipmerLogo },
                { name: "NIMHANS", logo: nimhansLogo },
            ].map((partner) => (
                <img
                    key={partner.name}
                    src={partner.logo}
                    alt={partner.name}
                    className="h-12 md:h-16 w-auto object-contain opacity-60 hover:opacity-100 grayscale hover:grayscale-0 transition-all duration-300"
                />
            ))}
        </div>
    </div>
);

const CTA = () => (
    <div className="bg-[#0B1120] py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-blue-600/20 rounded-[100%] blur-[120px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
                Ready to shape the future of mental healthcare?
            </h2>
            <p className="text-xl text-blue-200/80 mb-12 max-w-2xl mx-auto leading-relaxed">
                Whether you are a researcher, clinician, or student, lead the change with Manashi.
            </p>
            <Link to="/join-us">
                <button className="px-10 py-5 bg-white text-slate-900 rounded-full font-bold text-xl hover:bg-blue-50 transition-all transform hover:scale-105 shadow-2xl">
                    Join Manashi Today
                </button>
            </Link>
        </div>
    </div>
);

const Home = () => {
    return (
        <>
            <Hero />
            <VisionSection />
            <RecentPubs />
            <Partners />
            <CTA />
        </>
    );
};

export default Home;
