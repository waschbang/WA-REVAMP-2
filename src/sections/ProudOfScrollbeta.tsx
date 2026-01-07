import scrollcard1 from '../assets/scrollcard1.png';
import scrollcard2 from '../assets/scrollcard2.png';
import scrollcard3 from '../assets/scrollcard3.png';
import scrollcard4 from '../assets/scrollcard4.png';

// Mobile-specific images
import MobCard1 from '../assets/MobCard1.png';
import MobCard2 from '../assets/MobCard2.png';
import MobCard3 from '../assets/MobCard3.png';
import MobCard4 from '../assets/MobCard4.png';

const cards = [
    { id: 1, src: scrollcard1, mobileSrc: MobCard1, alt: 'BeerBiceps SkillHouse', color: '#faba49' },
    { id: 2, src: scrollcard2, mobileSrc: MobCard2, alt: 'Papa Don\'t Preach', color: '#a471ff' },
    { id: 3, src: scrollcard3, mobileSrc: MobCard3, alt: 'Imagine', color: '#74b9ff' },
    { id: 4, src: scrollcard4, mobileSrc: MobCard4, alt: 'CSAT - Customer Satisfaction', color: '#ff652a' },
];

export default function ProudOfScrollbeta() {
    return (
        <section id="work" className="font-sora relative bg-white pb-0">
            {/* Header */}
            <div className="pt-8 md:pt-32 pb-6 text-center bg-white">
                <h1 className="section-header">
                    Work we are<br className="md:hidden" /> Proud Of
                </h1>
            </div>

            {/* Stacking Cards Container */}
            <div className="relative w-full px-4 mt-6 flex flex-col items-center">
                {cards.map((card, index) => {
                    const topOffset = 150 + index * 20;
                    const isFirst = index === 0;

                    return (
                        <div
                            key={card.id}
                            className={`sticky mx-auto rounded-[40px] overflow-hidden transition-all duration-500 ease-out ${isFirst ? 'first-card' : ''}`}
                            style={{
                                top: `${topOffset}px`,
                                maxWidth: isFirst ? '1300px' : '1300px',
                                width: isFirst ? '100%' : '100%',
                                height: isFirst ? 'auto' : 'auto',
                                marginBottom: '100px',
                                zIndex: index + 10,
                            }}
                        >
                            {/* Desktop image - hidden on mobile */}
                            <img
                                src={card.src}
                                alt={card.alt}
                                className="hidden md:block h-auto object-cover rounded-[40px] mx-auto"
                                style={{ width: '1200px', maxWidth: '100%', height: '500px', objectFit: 'cover' }}
                            />
                            {/* Mobile image - hidden on desktop */}
                            <img
                                src={card.mobileSrc}
                                alt={card.alt}
                                className="block md:hidden w-[90%] mx-auto h-auto object-cover rounded-[40px]"
                            />
                        </div>
                    );
                })}

                {/* Spacer inside container - allows last card to stick properly */}
                <div className="h-0 w-full"></div>
            </div>

            {/* Footer spacer - extra scroll space after cards stack before next section */}
            <div className="h-0 w-full"></div>
        </section>
    );
}
