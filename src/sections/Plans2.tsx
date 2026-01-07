import foundationIcon from "@/assets/icons/foundation.png";
import premiumIcon from "@/assets/icons/premium.png";
import scaleIcon from "@/assets/icons/scale.png";
import customIcon from "@/assets/icons/custom.png";
import whiteCheck from "@/assets/icons/WhiteCheck.png";
import greenCheck from "@/assets/icons/GreenCheck.png";
import arrowRight from "@/assets/icons/Arrow rigth.png";

const iconMap: Record<string, string> = {
    Foundation: foundationIcon,
    Growth: premiumIcon,
    Scale: scaleIcon,
    Custom: customIcon,
};

const plans = [
    {
        name: "Foundation",
        tagline: "For Brands that are just starting out",
        price: {
            oneTime: "₹2–2.5 Lakhs",
            monthly: "+ 50K retainer",
            adSpend: "+ No fixed ad spend",
        },
        description:
            "Perfect for brands setting up WhatsApp performance for the first time.",
        features: [
            "Campaign setup & onboarding",
            "1-2 Journeys + broadcast/ month",
            "Compliance & sender setup",
            "Basic analytics dashboard",
        ],
        isPremium: false,
    },
    {
        name: "Growth",
        tagline: "For scaling campaigns across journeys",
        price: {
            oneTime: "₹Custom Setup",
            monthly: "+ 50K retainer",
            adSpend: "+ Ad spend: As needed",
        },
        description:
            "Built for brands ready to scale performance with multi-journey automation.",
        features: [
            "Advanced automations",
            "Monthly optimisation + A/B tests",
            "Playbooks & content operations",
            "Priority Support",
        ],
        isPremium: true,
    },
    {
        name: "Scale",
        tagline: "High volume campaigns with AD amplification",
        price: {
            oneTime: "₹Custom Setup",
            monthly: "+ 50K retainer",
            adSpend: "+ Ad spend: 5L+ recommended",
        },
        description:
            "Best for high-frequency, high-volume performance and experimentation.",
        features: [
            "High frequency sends & journeys",
            "Custom dashboard & reporting",
            "Ad amplification strategy",
            "Dedicated strategist",
        ],
        isPremium: false,
    },
    {
        name: "Custom",
        tagline: "Bespoke strategy crafted for your exact needs",
        price: {
            oneTime: "₹Custom Setup",
            monthly: "+ Custom monthly retainer",
            adSpend: "+ Ad spend: Custom",
        },
        description:
            "A fully tailored engagement designed around your goals, timelines and performance.",
        features: [
            "Tailored scope & deliverables",
            "Dedicated execution team",
            "Flexible billing",
            "SLA-based support",
        ],
        isPremium: false,
    },
];

interface PlanCardProps {
    name: string;
    tagline: string;
    price: {
        oneTime: string;
        monthly: string;
        adSpend: string;
    };
    description: string;
    features: string[];
    isPremium: boolean;
}

const PlanCard = ({
    name,
    tagline,
    price,
    description,
    features,
    isPremium,
}: PlanCardProps) => {
    const cardStyles: React.CSSProperties = {
        width: "100%",
        maxWidth: "308px",
        height: "794px",
        padding: "24px",
        borderRadius: "20px",
        position: "relative",
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        background: isPremium
            ? "linear-gradient(180deg, #54de71 0%, #36c85a 50%, #1d8c30 100%)"
            : "white",
    };

    const textColor = isPremium ? "white" : "#081b14";
    const subtextColor = isPremium ? "rgba(255,255,255,0.8)" : "#4b5563";
    const priceColor = isPremium ? "white" : "#053E2B";
    const descColor = isPremium ? "rgba(255,255,255,0.9)" : "#374151";

    return (
        <div style={cardStyles}>
            {/* Most Popular Badge */}
            {isPremium && (
                <div
                    style={{
                        position: "absolute",
                        top: "16px",
                        right: "16px",
                        backgroundColor: "#E8F5E9",
                        color: "#2E7D32",
                        fontSize: "12px",
                        fontWeight: 500,
                        padding: "6px 12px",
                        borderRadius: "20px",
                    }}
                >
                    Most Popular
                </div>
            )}

            {/* Icon */}
            <div style={{ marginBottom: "16px" }}>
                <img
                    src={iconMap[name]}
                    alt={`${name} icon`}
                    style={{ width: "40px", height: "40px", objectFit: "contain" }}
                />
            </div>

            {/* Plan Name & Tagline */}
            <div style={{ marginBottom: "8px" }}>
                <h3
                    style={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 700,
                        fontSize: "24px",
                        marginBottom: "4px",
                        color: textColor,
                    }}
                >
                    {name}
                </h3>
                <p
                    style={{
                        fontFamily: "'Sora', sans-serif",
                        fontSize: "14px",
                        lineHeight: "1.4",
                        minHeight: "40px",
                        color: subtextColor,
                    }}
                >
                    {tagline}
                </p>
            </div>

            {/* Pricing */}
            <div style={{ marginBottom: "8px" }}>
                <p
                    style={{
                        fontFamily: "'Sora', sans-serif",
                        fontWeight: 700,
                        fontSize: "24px",
                        color: priceColor,
                    }}
                >
                    {price.oneTime}
                </p>
                <p
                    style={{
                        fontFamily: "'Sora', sans-serif",
                        fontSize: "14px",
                        marginTop: "4px",
                        color: isPremium ? "rgba(255,255,255,0.8)" : "#053E2B",
                    }}
                >
                    {price.monthly}
                </p>
                <p
                    style={{
                        fontFamily: "'Sora', sans-serif",
                        fontSize: "14px",
                        color: isPremium ? "rgba(255,255,255,0.8)" : "#053E2B",
                    }}
                >
                    {price.adSpend}
                </p>
            </div>

            {/* CTA Button */}
            <div style={{ marginBottom: "20px" }}>
                <a
                    href="https://calendly.com/wa-schbang/new-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button
                        style={{
                            width: "100%",
                            padding: "12px 16px",
                            height: "48px",
                            borderRadius: "16px",
                            border: "1px solid #E7E8F1",
                            backgroundColor: "white",
                            color: "black",
                            fontWeight: 600,
                            fontSize: "16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            cursor: "pointer",
                        }}
                    >
                        <span>{isPremium ? "Book a Demo" : "Get a Quote"}</span>
                        <img
                            src={arrowRight}
                            alt="arrow"
                            style={{ width: "16px", height: "16px" }}
                        />
                    </button>
                </a>
            </div>

            {/* Divider */}
            <div
                style={{
                    height: "1px",
                    backgroundColor: isPremium ? "rgba(255,255,255,0.3)" : "#e2e8f0",
                    marginBottom: "20px",
                }}
            />

            {/* Description */}
            <p
                style={{
                    fontFamily: "'Sora', sans-serif",
                    fontSize: "16px",
                    lineHeight: "1.5",
                    marginBottom: "50px",
                    minHeight: "50px",
                    color: descColor,
                }}
            >
                {description}
            </p>

            {/* Features List */}
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
                {features.map((feature) => (
                    <li
                        key={feature}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "10px",
                            marginBottom: "30px",
                        }}
                    >
                        <img
                            src={isPremium ? whiteCheck : greenCheck}
                            alt="check"
                            style={{ width: "18px", height: "18px", flexShrink: 0 }}
                        />
                        <span
                            style={{
                                fontFamily: "'Sora', sans-serif",
                                fontSize: "16px",
                                lineHeight: "1.4",
                                color: descColor,
                            }}
                        >
                            {feature}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const PricingPlans2 = () => {
    return (
        <section
            id="pricing"
            style={{
                backgroundColor: "#053E2B",
                padding: "64px 0",
            }}
        >
            <div
                style={{
                    maxWidth: "1320px",
                    margin: "0 auto",
                    padding: "0 24px",
                }}
            >
                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: "48px" }}>
                    <h2
                        style={{
                            fontFamily: "'Sora', sans-serif",
                            fontWeight: 600,
                            color: "white",
                            fontSize: "48px",
                            lineHeight: "1.2",
                            letterSpacing: "0.01em",
                            margin: 0,
                        }}
                    >
                        Flexible plans for every stage
                    </h2>
                    <p
                        style={{
                            color: "#BBBBBB",
                            fontSize: "16px",
                            maxWidth: "768px",
                            margin: "16px auto 0",
                            lineHeight: "1.6",
                        }}
                    >
                        All packages include onboarding, brand-aligned content, compliance
                        assurance, and expert campaign management. Simple pricing. No
                        surprises.
                    </p>
                </div>

                {/* Cards Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "24px",
                        justifyItems: "center",
                    }}
                >
                    {plans.map((plan) => (
                        <PlanCard key={plan.name} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingPlans2;
