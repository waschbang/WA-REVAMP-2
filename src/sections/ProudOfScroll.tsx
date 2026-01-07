import React, { useEffect, useState } from 'react';

import logo1 from '../assets/logo-1.png';
import logo2 from '../assets/logo-2.png';
import logo3 from '../assets/logo-3.png';
import logo4 from '../assets/logo-4.png';

// --- Data & Content Configuration ---

const cardsData = [
    {
        id: 1,
        color: '#faba49', // Yellow/Orange
        company: 'BeerBiceps SkillHouse',
        logoImg: logo1,
        logoScale: 'scale-[2]', // Make logo bigger
        description: "Luxury fashion label by Shubhika Sharma. We built a guided WhatsApp store that matched shoppers with products based on occasion and style",
        tagsColor: '#4e4e4e',
        tags: [
            'Reminders → 92% open rate',
            'Show up rate → 68%',
            'Enrolments triggered in chat (₹799-₹2499)'
        ],
        interfaceType: 'whatsapp',
        chat: {
            headerColor: '#00d757', // Updated Green
            headerText: 'BeerBiceps SkillHouse',
            profileBg: '#fab948', // Updated Color
            profileText: 'SKILL HOUSE',
            messages: [
                {
                    type: 'template_message',
                    content: "Hi Priya 👋,\nReady to level up your skills? Your webinar slot is confirmed for tomorrow. Want a reminder?",
                    buttons: ['Yes, Remind me', 'View Agenda'],
                    timestamp: '9:30 ✓✓'
                },
                {
                    type: 'system',
                    content: '🕒 Your Webinar starts in 10'
                }
            ]
        }
    },
    {
        id: 2,
        color: '#a471ff', // Purple
        company: "Papa Don't Preach",
        logoImg: logo2,
        description: "Luxury fashion label by Shubhika Sharma. We built a guided WhatsApp store that matched shoppers with products based on occasion and style, streamlining the bridal consultation process.",
        tagsColor: '#ebebeb',
        tags: [
            'Flow captures intent (Bridal vs Non-Bridal)',
            '81% show up rate',
            'Appointment Confirmation in Chat'
        ],
        interfaceType: 'whatsapp',
        chat: {
            headerColor: '#00d757',
            headerText: "Papa Don't Preach",
            profileBg: '#a672ff', // Updated Color
            profileText: 'PAPA DON\'T PREACH', // Simulating the logo text
            messages: [
                {
                    type: 'template_message',
                    content: "Hi Priya 👋,\nWelcome to Papaverse! Whether you're here to browse or book your bridal styling, let's begin!",
                    buttons: ['Bridal Wear', 'Occasion Wear'],
                    timestamp: '9:30 ✓✓'
                },
                {
                    type: 'system',
                    content: 'Appointment Confirmed! 🗓️'
                }
            ]
        }
    },
    {
        id: 3,
        color: '#74b9ff', // Blue
        company: 'Imagine',
        logoImg: logo3,
        description: "One of India's largest Apple Premium Partners. We ran a 7-day gamified WhatsApp campaign, turning daily trivia into in-store incentives for iPhone 17 buyers.",
        tagsColor: '#434343',
        tags: [
            '7-day gamified campaign',
            'Daily trivia with incentives',
            '83% campaign conversion',
            '800+ users completed'
        ],
        interfaceType: 'whatsapp',
        chat: {
            headerColor: '#00d757',
            headerText: 'Imagine',
            profileBg: '#ffffff', // Updated Color (White)
            profileText: 'imagine',
            profileTextColor: 'black',
            messages: [
                {
                    type: 'template_message',
                    content: "Hi Priya 👋,\nDay 1 = Your First Step to More! Let's start strong 👊\n\n👉 Q1: How many Imagine stores are across India?\n💡 It's way more than you think",
                    buttons: ['Choose the Answer'],
                    timestamp: '9:30 ✓✓'
                }
            ]
        }
    },
    {
        id: 4,
        color: '#ff652a', // Red/Orange
        company: 'CSAT - Customer Satisfaction', // Updated Header
        logoImg: logo4,
        logoScale: 'scale-125',
        description: "Internal WhatsApp-based CSAT tool capturing quick client feedback. We designed a 2-minute form that makes feedback effortless and actionable.",
        tagsColor: '#ebebeb',
        tags: [
            'Insights surfaced weekly',
            'High Visibility + No redirect',
            'Auto-captured feedback, no human follow-up'
        ],
        interfaceType: 'whatsapp',
        chat: {
            headerColor: '#075E54',
            headerText: '#Schbang',
            hideHeader: true,
            profileBg: '#ff652a',
            profileText: 'S',
            messages: [
                {
                    type: 'form_message',
                    title: 'Solutions Team Feedback',
                    question1: {
                        title: 'Team Responsiveness',
                        desc: 'How responsive is the Solutions team in address your needs?',
                        sub: 'Choose up to 1 option',
                        options: ['0', '1', '2', '3', '4', '5'],
                        selected: '4'
                    },
                    question2: {
                        title: 'Brand Management',
                        desc: 'How was the Management System?'
                    }
                }
            ]
        }
    }
];

// --- Sub-Components ---

const WhatsAppInterface = ({ data, profileImg }) => {
    return (
        <div className="w-full h-full flex flex-col bg-white rounded-tl-[26px]">
            {/* WhatsApp Header - Hide if requested */}
            {!data.hideHeader && (
                <div className="p-3 flex items-center gap-3 text-white h-16 shrink-0 rounded-tl-[26px]" style={{ backgroundColor: data.headerColor }}>
                    <div
                        className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-[10px] text-center leading-none overflow-hidden shrink-0"
                        style={{ backgroundColor: data.profileBg || '#ffffff' }}
                    >
                        {/* Use real logo image if available, otherwise text */}
                        <img src={profileImg} alt="" className="w-full h-full object-contain p-1" />
                    </div>
                    <div>
                        <h4 className="font-bold text-sm leading-tight">{data.headerText}</h4>
                    </div>
                </div>
            )}

            {/* Body */}
            <div
                className={`flex-1 flex flex-col justify-between relative ${data.hideHeader ? 'bg-white p-0' : 'bg-[#efeae2] p-4 bg-opacity-50'}`}
                style={!data.hideHeader ? { backgroundImage: 'radial-gradient(#ddd 1px, transparent 1px)', backgroundSize: '20px 20px' } : {}}
            >
                <div className="flex flex-col gap-4">
                    {data.messages.map((msg, idx) => {
                        // Shake template messages for interaction
                        const animationClass = msg.type === 'template_message' ? 'animate-shake-periodic' : '';

                        // Skip system messages in this loop
                        if (msg.type === 'system') return null;

                        return (
                            <div key={idx} className={`animate-fade-in-up w-full ${data.hideHeader ? 'h-full' : ''}`} style={{ animationDelay: `${idx * 0.5}s` }}>

                                {msg.type === 'text' && (
                                    <div className={`bg-white p-3 rounded-tr-lg rounded-tl-lg rounded-br-lg shadow-sm text-sm text-gray-800 relative max-w-[90%] -ml-3 ${animationClass}`}>
                                        <p className="whitespace-pre-line">{msg.content}</p>
                                        <span className="text-[10px] text-gray-400 absolute bottom-1 right-2">9:30 ✓✓</span>
                                    </div>
                                )}

                                {msg.type === 'buttons' && (
                                    <div className={`flex flex-col gap-2 mt-1 w-[80%] ${animationClass}`}>
                                        {msg.options.map((opt, i) => (
                                            <button key={i} className="bg-white text-[#00a884] font-semibold text-sm py-2 px-4 rounded-lg shadow-sm hover:bg-gray-50 transition-colors text-center">
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                )}

                                {msg.type === 'template_message' && (
                                    <div className={`w-[110%] rounded-tl-lg rounded-tr-lg rounded-br-lg shadow-xl bg-[#fcf5eb] overflow-hidden relative -ml-12 z-50 border border-t-[0.5px] border-l-[0.5px] border-white/50 ${animationClass}`}>
                                        <div className="p-4 text-sm text-[#1a1a1a]">
                                            <p className="whitespace-pre-line leading-relaxed mb-2">{msg.content}</p>
                                        </div>
                                        <div className="flex flex-col border-t border-black/5">
                                            {msg.buttons.map((btn, i) => (
                                                <button key={i} className={`w-full text-center py-3 text-[#00d757] font-semibold text-sm hover:bg-black/5 transition-colors relative ${i > 0 ? 'border-t border-black/5' : ''}`}>
                                                    {btn}
                                                </button>
                                            ))}
                                        </div>
                                        <div className="absolute bottom-2 right-3 text-[10px] text-gray-400">
                                            {msg.timestamp}
                                        </div>
                                    </div>
                                )}

                                {msg.type === 'form_message' && (
                                    <div className={`w-full bg-white rounded-lg overflow-hidden ${animationClass} ${data.hideHeader ? 'h-full border-t-[20px] border-[#00d757]' : 'shadow-sm'}`}>
                                        {/* If hiding header, we simulate the top bar of the form itself directly */}
                                        {!data.hideHeader && <div className="h-2 bg-[#00C853] w-full"></div>}

                                        <div className="p-6 flex flex-col gap-4">
                                            <h3 className="font-bold text-lg text-black leading-tight border-b border-gray-100 pb-3">
                                                {msg.title}
                                            </h3>

                                            {/* Q1 */}
                                            <div className="flex flex-col gap-2">
                                                <h4 className="font-bold text-sm text-black">{msg.question1.title}</h4>
                                                <p className="text-gray-500 text-sm leading-snug">{msg.question1.desc}</p>
                                                <p className="text-gray-400 text-xs">{msg.question1.sub}</p>

                                                {/* Rating Circles */}
                                                <div className="flex gap-2 mt-2">
                                                    {msg.question1.options.map((opt) => (
                                                        <div
                                                            key={opt}
                                                            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2
                                              ${opt === msg.question1.selected
                                                                    ? 'bg-[#00C853] text-white border-[#00C853]'
                                                                    : 'bg-white text-gray-800 border-gray-300'
                                                                }`}
                                                        >
                                                            {opt}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Q2 Snippet */}
                                            <div className="flex flex-col gap-1 mt-10">
                                                <h4 className="font-bold text-sm text-black">{msg.question2.title}</h4>
                                                <p className="text-gray-500 text-xs">{msg.question2.desc}</p>
                                            </div>

                                            {/* Continue Button */}
                                            <button className="w-auto self-start bg-[#00C853] text-black font-semibold px-12 py-2.5 rounded-full shadow-md text-sm mt-2">
                                                Continue
                                            </button>
                                        </div>

                                    </div>
                                )}

                            </div>
                        );
                    })}
                </div>

                {/* System messages - pushed to bottom */}
                {data.messages.some(msg => msg.type === 'system') && (
                    <div className="flex flex-col gap-2 -mb-4">
                        {data.messages.map((msg, idx) => {
                            if (msg.type !== 'system') return null;
                            const showClock = msg.content.includes('Webinar');
                            return (
                                <div key={idx} className="flex justify-start pl-4">
                                    <div className="bg-[#fcf5eb] text-[#1a1a1a] text-base px-8 py-3 rounded-t-xl shadow-sm flex items-center gap-2 border border-black/5">
                                        {showClock && <span className="text-xl">🕒</span>}
                                        <span className="font-medium">{msg.content.replace('🕒 ', '')}</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

const Card = ({ card, index, total }) => {
    // Tighter stacking to ensure they look "stacked on each other"
    const topOffset = 150 + (index * 15);
    const isFirst = index === 0;

    return (
        <div
            className="sticky mx-auto rounded-[40px] shadow-negative overflow-visible transition-all duration-500 ease-out flex flex-col justify-center"
            style={{
                backgroundColor: card.color,
                top: `${topOffset}px`,
                maxWidth: '1390px',
                height: '540px',
                width: '100%',
                marginBottom: index === 3 ? '0px' : '40px',
                zIndex: index + 10
            }}
        >
            <div className="container mx-auto px-8 md:px-16 h-full flex flex-col md:flex-row items-center justify-between relative">

                {/* Left Column: Content */}
                <div className="flex-1 text-left space-y-6 z-10 max-w-xl py-8">
                    {/* Header Group: Title + Logo - Standard Vertical Layout */}
                    <div className="flex flex-col gap-4">
                        {/* Logo Container - Always on top for all cards */}
                        <div className="h-20 w-32 flex items-center justify-start mb-2">
                            <img
                                src={card.logoImg}
                                alt={`${card.company} logo`}
                                className={`h-16 w-auto object-contain transition-transform ${card.logoScale || ''}`}
                            />
                        </div>

                        {/* Company Title */}
                        <h2 className={`text-2xl md:text-3xl font-bold leading-tight ${isFirst ? 'text-[#1a1a1a]' : 'text-white'}`}>
                            {card.company}
                        </h2>

                        <p className={`text-lg md:text-xl leading-relaxed font-normal line-clamp-3 ${isFirst ? 'text-[#4e4e4e]' : 'text-white'}`}>
                            {card.description}
                        </p>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-3">
                        {card.tags.map((tag, i) => (
                            <span
                                key={i}
                                className="bg-white/30 backdrop-blur-sm border border-white/40 px-4 py-2 rounded-full text-sm font-semibold"
                                style={{ color: card.tagsColor }}
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right Column: Mobile Interface Mockup */}
                <div className="hidden md:flex absolute bottom-0 right-0 z-20 items-end overflow-visible">
                    <div className={`w-[380px] h-[450px] bg-white rounded-tl-[30px] rounded-tr-none border-l-4 border-t-4 border-b-0 border-r-0 border-white shadow-2xl ${index === 3 ? 'overflow-hidden' : 'overflow-visible'}`}>
                        <WhatsAppInterface data={card.chat} profileImg={card.logoImg} />
                    </div>
                </div>

                {/* Mobile View */}
                <div className="md:hidden w-full flex justify-center mt-6 overflow-visible">
                    <div className={`w-full max-w-[380px] h-[450px] bg-white rounded-[30px] shadow-xl border-4 border-white ${index === 3 ? 'overflow-hidden' : 'overflow-visible'}`}>
                        <WhatsAppInterface data={card.chat} profileImg={card.logoImg} />
                    </div>
                </div>

            </div>
        </div>
    );
};

// --- Main Component ---

export default function ProudOfScroll() {
    return (
        <div className="font-sora relative bg-gray-50 min-h-screen pb-0">

            {/* Inject Styles */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap');
        
        .font-sora {
          font-family: 'Sora', sans-serif;
        }

        /* Periodic Shake Animation */
        @keyframes shake-periodic {
          0%, 85% { transform: translateX(0); }
          86% { transform: translateX(-2px); }
          88% { transform: translateX(2px); }
          90% { transform: translateX(-2px); }
          92% { transform: translateX(2px); }
          94% { transform: translateX(0); }
          100% { transform: translateX(0); }
        }

        .animate-shake-periodic {
          animation: shake-periodic 3s infinite ease-in-out;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>

            {/* Header Section */}
            <div
                className="pt-20 pb-10 text-center bg-gray-50"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    Work we are <span className="text-black">Proud Of</span>
                </h1>
            </div>

            {/* Cards Container */}
            <div className="relative w-full px-4 mt-24 flex flex-col items-center">
                {cardsData.map((card, index) => (
                    <Card
                        key={card.id}
                        card={card}
                        index={index}
                        total={cardsData.length}
                    />
                ))}
            </div>

            {/* Footer spacer */}
            <div className="h-[40vh] w-full bg-gradient-to-b from-gray-50 to-[#f0ffe9]"></div>

        </div>
    );
}