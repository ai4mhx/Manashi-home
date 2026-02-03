import React from 'react';
import { motion } from 'framer-motion';
import { Mail, GraduationCap, Briefcase, Stethoscope, Handshake, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';

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

const OpportunityCard = ({ icon: Icon, title, description, audience, index }) => (
    <motion.div
        variants={fadeInUp}
        className="group relative bg-white/70 backdrop-blur-lg rounded-2xl p-8 shadow-lg border border-white/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden"
    >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
            <div className="mb-6 inline-block p-3 rounded-2xl bg-white shadow-md group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-8 w-8 text-blue-600" />
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">
                {title}
            </h3>

            <div className="mb-4 inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider">
                For {audience}
            </div>

            <p className="text-gray-600 leading-relaxed group-hover:text-gray-700">
                {description}
            </p>
        </div>
    </motion.div>
);

const JoinUs = () => {
    const opportunities = [
        {
            icon: GraduationCap,
            title: "PhD & Masters Students",
            audience: "Students",
            description: "Join our lab to work on cutting-edge research in NLP, HCI, and Mental Health AI. We mentor motivated students to publish in top-tier venues."
        },
        {
            icon: Briefcase,
            title: "Research Fellows",
            audience: "Researchers",
            description: "Lead high-impact projects and mentor junior researchers. Ideal for post-graduates looking to strenghten their research portfolio."
        },
        {
            icon: Stethoscope,
            title: "Clinical Partners",
            audience: "Clinicians",
            description: "Collaborate with us to validate AI tools in real-world settings. Your expertise guides our ethical frameworks and clinical applicability."
        },
        {
            icon: Handshake,
            title: "Industry Collaborators",
            audience: "Organizations",
            description: "Partner with us to deploy scalable mental health solutions. We welcome collaboration with NGOs, hospitals, and tech companies."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-[100px] animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-purple-300/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
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
                        <Sparkles className="h-4 w-4" />
                        <span>Join Our Research Lab</span>
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
                        Shape the Future of <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            AI & Mental Health
                        </span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        We are a team of researchers, engineers, and clinicians building the next generation of empathetic AI. Find your place in our mission.
                    </motion.p>
                </motion.div>

                {/* Opportunities Grid */}
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24"
                >
                    {opportunities.map((op, index) => (
                        <OpportunityCard key={index} {...op} index={index} />
                    ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative bg-gradient-to-r from-blue-600 to-indigo-700 rounded-3xl p-12 overflow-hidden shadow-2xl text-center"
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to make an impact?
                        </h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                            Whether you're a student, researcher, or organization, we'd love to hear from you.
                            Send us your details and let's start a conversation.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <a href="mailto:contact.ai4mh@gmail.com" className="group">
                                <Button className="w-full sm:w-auto !bg-white !text-blue-700 hover:!bg-gray-50 border-none text-lg px-8 py-4 shadow-lg flex items-center justify-center gap-2">
                                    <Mail className="h-5 w-5" />
                                    Email Us
                                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </a>
                        </div>
                        <div className="mt-8">
                            <a href="https://lcs2.in/join-us" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white underline decoration-blue-400 underline-offset-4 transition-colors">
                                Visit our main lab website &rarr;
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default JoinUs;
