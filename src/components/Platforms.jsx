import React, { useState } from 'react';
import mtLogo from '../assets/images/moving_things_logo.png';
import mtScreen from '../assets/images/moving_things_mobile_1.png';
import npLogo from '../assets/images/neighbourpaws_logo.png';

const platforms = [
    {
        id: 'tiny-global',
        tag: 'Flagship',
        name: 'TinyGlobal',
        accent: 'text-yadata-steel',
        tagColor: 'text-yadata-steel border-yadata-steel/30',
        description: 'Proprietary trade execution platform connecting commercial, logistics, and regulatory workflows.',
        tags: ['Trade Execution', 'Supply Chain', 'Compliance'],
        link: 'https://tinyglobalop.com',
        logo: null,
        image: null,
    },
    {
        id: 'moving-things',
        tag: 'Platform',
        name: 'MovingThings',
        nameNode: <><span className="text-white">Moving</span><span className="text-purple-400">Things</span></>,
        accent: 'text-purple-400',
        tagColor: 'text-purple-400 border-purple-400/30',
        description: "Connecting communities and movers across Australia. A platform built for people, not just professionals.",
        tags: ['Platform', 'Community', 'Movers'],
        link: 'https://www.movingthings.com.au/',
        logo: mtLogo,
        image: mtLogo,
    },
    {
        id: 'neighbour-paws',
        tag: 'Community',
        name: 'NeighbourPaws',
        accent: 'text-amber-400',
        tagColor: 'text-amber-400 border-amber-400/30',
        description: 'Helping communities and dog owners work together through awareness, prevention, and support.',
        tags: ['Community', 'Dogs', 'Awareness'],
        link: 'https://www.neighbourpaws.com.au/',
        logo: npLogo,
        image: npLogo,
    },
];

const PlatformRow = ({ platform, index }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={platform.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="group flex items-center gap-6 py-6 border-b border-white/5 hover:border-white/10 transition-all duration-300 cursor-pointer"
        >
            {/* Index */}
            <span className="text-[10px] font-bold text-white/20 w-5 shrink-0 font-mono">
                {String(index + 1).padStart(2, '0')}
            </span>

            {/* Thumbnail */}
            <div className="w-14 h-14 shrink-0 rounded-md overflow-hidden bg-white/5 border border-white/8 flex items-center justify-center">
                {platform.image ? (
                    <img
                        src={platform.image}
                        alt={platform.name}
                        className={`w-full h-full object-contain p-1.5 transition-all duration-500 ${hovered ? 'opacity-100' : 'opacity-50'}`}
                    />
                ) : (
                    <span className={`text-[10px] font-black uppercase tracking-widest ${platform.accent} opacity-60`}>
                        {platform.name.slice(0, 2)}
                    </span>
                )}
            </div>

            {/* Content */}
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                    <h4 className={`text-base font-bold tracking-tight text-white group-hover:${platform.accent.replace('text-', 'text-')} transition-colors`}>
                        {platform.nameNode || platform.name}
                    </h4>
                    <span className={`text-[8px] font-black uppercase tracking-[0.2em] border px-2 py-0.5 rounded-sm ${platform.tagColor} opacity-60 group-hover:opacity-100 transition-opacity`}>
                        {platform.tag}
                    </span>
                    <svg
                        className={`w-3 h-3 ${platform.accent} opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-0.5 translate-x-0 group-hover:translate-x-0.5 group-hover:-translate-y-1 shrink-0`}
                        fill="none" stroke="currentColor" strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
                <p className="text-sm text-gray-500 font-light leading-snug truncate group-hover:text-gray-400 transition-colors">
                    {platform.description}
                </p>
            </div>

            {/* Tags */}
            <div className="hidden md:flex items-center gap-2 shrink-0">
                {platform.tags.map((t) => (
                    <span key={t} className="text-[9px] font-bold uppercase tracking-widest text-white/25 group-hover:text-white/50 transition-colors">
                        {t}
                    </span>
                ))}
            </div>
        </a>
    );
};

const Platforms = ({ onNext, onBack }) => {
    return (
        <section id="platforms" className="min-h-screen py-24 bg-yadata-navy text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
                {/* Header */}
                <div className="mb-12">
                    <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-yadata-steel mb-3">Ecosystem</p>
                    <h3 className="text-4xl md:text-5xl font-black tracking-tight">
                        Platforms <span className="text-white/20">we've built.</span>
                    </h3>
                </div>

                {/* Platform list */}
                <div className="mb-16">
                    {platforms.map((platform, i) => (
                        <PlatformRow key={platform.id} platform={platform} index={i} />
                    ))}
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center border-t border-white/5 pt-10">
                    <button onClick={onBack} className="flex items-center space-x-3 text-white/30 hover:text-white transition-colors group">
                        <span className="group-hover:-translate-x-1 transition-transform">←</span>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Back</span>
                    </button>
                    <button onClick={onNext} className="flex items-center space-x-3 text-yadata-cyan hover:text-white transition-colors group">
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Next: Vision</span>
                        <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Platforms;
