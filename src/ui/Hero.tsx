"use client";
import React, { useLayoutEffect, useRef, useCallback, useState } from 'react';
import { ArrowDown } from 'lucide-react';

// Image paths from public directory
const phone1 = '/assets/phone0.png';
const phone2 = '/assets/phone.png';
const phone3 = '/assets/phone2.png';
const phone4 = '/assets/phone3.png';
const phone5 = '/assets/phone4.png';
const phone6 = '/assets/phone5.png';
const phone7 = '/assets/phone6.png';

// --- Constants ---
const IMAGES = [
  phone1,
  phone2,
  phone3,
  phone4,
  phone5,
  phone6,
  phone7
];

// Specific colors for the boxes (Order: 1st, 2nd, 3rd, 4th)
const BOX_COLORS = [
  "#aaffb5", // Greenish
  "#c4e1ff", // Blueish
  "#ffdbea", // Pinkish
  "#fff9c4"  // Yellowish
];

// Background colors for tag containers per box (7 boxes)
const TAG_BG_COLORS = [
  '#73e081', // 1st box
  '#a6d0fc', // 2nd box
  '#ffcfe3', // 3rd box
  '#ffee52', // 4th box
  '#73e081', // 5th box
  '#a6d0fc', // 6th box
  '#ffcfe3', // 7th box
];

// Content for each of the 7 boxes (4 left, 3 right)
const BOX_CONTENT = [
  {
    title: 'AI Calling',
    body: 'Automate outbound and inbound calling with AI agents that handle sales, support and collections 24/7.',
    tags: ['Payment Recovery', 'Lead Warning']
  },
  {
    title: 'AI Chatflows',
    body: 'Design no-code chat journeys that qualify leads, answer FAQs and route chats to the right teams.',
    tags: ['Payment Recovery', 'Lead Warning']
  },
  {
    title: 'Web View Apps',
    body: 'Turn complex journeys into rich mini-apps inside WhatsApp with forms, menus and product views.',
    tags: ['Webview', 'UX']
  },
  {
    title: 'Click to WhatsApp Ads',
    body: 'Convert ad clicks directly into WhatsApp conversations with pre-filled journeys and tracking.',
    tags: ['Performance', 'Meta Ads']
  },
  {
    title: 'WhatsApp Commerce',
    body: 'Show catalogs, manage carts and collect payments without leaving WhatsApp for faster checkout.',
    tags: ['D2C', 'Commerce']
  },
  {
    title: 'Campaign & Broadcasts',
    body: 'Schedule segmented campaigns, send updates and measure engagement with rich analytics.',
    tags: ['Campaigns', 'Broadcasts']
  },
  {
    title: 'CRM & Data Automation',
    body: 'Sync events to your CRM, trigger workflows and keep customer data clean and always up to date.',
    tags: ['CRM', 'Automation']
  }
];

// --- CSS Styles ---
const styles = `
.scroll-stack-scroller {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  -webkit-overflow-scrolling: touch;
  background-color: #ffffff; /* White background */
}

.scroll-stack-inner {
  padding: 10vh 2rem 10vh;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.scroll-stack-header {
  will-change: transform, opacity;
  z-index: 0; /* Behind the card */
  position: relative;
}

.scroll-stack-card {
  transform-origin: top center;
  will-change: transform;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.0); /* Lighter shadow for light bg */
  min-height: 88vh; /* slightly taller so the image area has more height */
  width: 100%;
  max-width: 620px; /* slightly wider so the image can appear larger */

  /* Margin top to ensure it starts below header but can scroll over it */
  margin: 0; 
  border-radius: 40px;
  box-sizing: border-box;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  position: relative;
  background: white;
  z-index: 10; /* Above the header */
}

.scroll-stack-end {
  width: 100%;
  height: 1px;
  background: transparent;
}

/* Base styles for the stack boxes */
.stack-box {
  position: absolute;
  will-change: transform, height, opacity, border-radius;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  z-index: 20; /* Ensure boxes are above the card */
}

/* Image Slideshow Styles */
.image-wipe-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  border-radius: 40px; /* Match card border radius */
  overflow: hidden;    /* Clip images to rounded corners */
}

.image-wipe-slide {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  transition: clip-path 0.8s cubic-bezier(0.65, 0, 0.35, 1);
  /* Wipe from bottom to top */
  clip-path: inset(100% 0 0 0); 
}

.image-wipe-slide.active {
  clip-path: inset(0 0 0 0); /* Fully visible */
  z-index: 2;
}

.image-wipe-slide.previous {
  clip-path: inset(0 0 0 0); /* Remain visible behind */
  z-index: 1;
}

/* Responsive styles for laptop, tablet, and mobile screens */
@media (max-width: 1200px) {
  .scroll-stack-card {
    max-width: 520px;
  }
  .stack-box {
    width: 400px;
    height: 320px;
  }
}

@media (max-width: 900px) {
  .scroll-stack-card {
    max-width: 400px;
  }
  .stack-box {
    width: 300px;
    height: 240px;
  }
}

@media (max-width: 600px) {
  .scroll-stack-card {
    max-width: 340px;
  }
  .image-wipe-container {
    display: none;
  }
  .mobile-hide-arrow {
    display: none;
  }
  .stack-box {
    position: relative !important;
    top: auto !important;
    left: auto !important;
    right: auto !important;
    transform: none !important;
    opacity: 1 !important;
    margin: 6px auto !important;
    width: 100% !important;
    max-width: 320px !important;
  }
  .desktop-boxes-only {
    display: none;
  }
  .mobile-boxes-only {
    display: block;
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
  }
}

@media (max-width: 400px) {
  .scroll-stack-card {
    max-width: 260px;
  }
}

/* Visibility helpers for desktop vs mobile box placement */
.desktop-boxes-only {
  display: block;
}

.mobile-boxes-only {
  display: none;
}
`;

// --- Image Slideshow Component ---

const CardImageSlideshow: React.FC<{ activeIndex: number }> = ({ activeIndex }) => {
  return (
    <div className="image-wipe-container">
      {IMAGES.map((src, index) => {
        let className = "image-wipe-slide";
        if (index === activeIndex) {
          className += " active";
        } else if (index === activeIndex - 1) {
          className += " previous";
        }

        if (activeIndex === 0 && index === 0) {
          className = "image-wipe-slide active";
        }

        return (
          <div
            key={src}
            className={className}
            style={{
              backgroundImage: `url(${src})`,
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'translate3d(0,0,0)',
              willChange: 'transform',
            }}
          />
        );
      })}
    </div>
  );
};

// --- Stacking Box Components ---

const StackBox: React.FC<{
  index: number;
  side: 'left' | 'right';
  contentIndex?: number;
}> = ({ index, side, contentIndex = 0 }) => {
  const isLeft = side === 'left';
  
  // Pick color based on index, same for both sides
  const backgroundColor = BOX_COLORS[index % BOX_COLORS.length];

  const content = BOX_CONTENT[contentIndex] ?? BOX_CONTENT[0];
  const tagBackground = TAG_BG_COLORS[contentIndex] ?? '#ffffff';
  
  // The final vertical position in the stack with an even tighter gap
  const topPos = 0 + (index * 90);

  // START DISTANCE: 800px DOWN (Vertical)
  const startTranslate = '800px'; 

  // ANCHOR POSITION: bring boxes very close to the image/card while keeping top alignment
  const anchorStyle = isLeft ? { right: '101%' } : { left: '101%' };

  return (
    <div
      className="stack-box"
      data-stack-box="true"
      data-index={index}
      data-side={side}
      style={{
        backgroundColor: backgroundColor,
        top: `${topPos}px`,
        ...anchorStyle,
        width: '420px', 
        height: '340px', 
        borderRadius: '30px',
        marginBottom: '10px', 

        opacity: 0,
        transform: `translateY(${startTranslate})`
      }}
    >
      {/* Header - always visible, even after stacking */}
      <div
        style={{
          position: 'absolute',
          top: '16px',
          left: '20px',
          fontSize: '22px',
          fontWeight: 700,
          color: '#111827'
        }}
      >
        {content.title}
      </div>

      {/* Body + tags wrapper - fills the middle area between header and bottom, then fades out after stacking */}
      <div
        className="stack-box-body-wrapper"
        style={{
          position: 'absolute',
          top: '100px',
          bottom: '20px',
          left: '20px',
          right: '20px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div
          style={{
            fontSize: '22px',
            fontWeight: 500,
            lineHeight: 1.8,
            color: '#333333',
            textAlign: 'left',
          }}
        >
          {content.body}
        </div>
        <div
          style={{
            display: 'flex',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          {content.tags.map((tag) => (
            <div
              key={tag}
              style={{
                padding: '10px 22px',
                borderRadius: '9999px',
                border: '1px solid rgba(15,23,42,0.15)',
                fontSize: '15px',
                fontWeight: 600,
                color: '#111827',
                backgroundColor: tagBackground,
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const BoxStack: React.FC<{ side: 'left' | 'right' }> = ({ side }) => {
  return (
    <>
      {[0, 1, 2, 3].map((i) => (
        // For the right side, skip rendering the 4th box (index 3) so there are only 3 boxes on the right.
        side === 'right' && i === 3
          ? null
          : (
            <StackBox
              key={`${side}-${i}`}
              index={i}
              side={side}
              contentIndex={side === 'left' ? i : 4 + i}
            />
          )
      ))}
    </>
  );
};

// --- ScrollStack Engine ---

interface ScrollStackItemProps {
  itemClassName?: string;
  children: React.ReactNode;
}

const ScrollStackItem: React.FC<ScrollStackItemProps> = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

interface ScrollStackProps {
  className?: string;
  children: React.ReactNode;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string;
  scaleEndPosition?: string;
  baseScale?: number;
  rotationAmount?: number;
  useWindowScroll?: boolean;
}

const ScrollStack: React.FC<ScrollStackProps> = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '15%',
  scaleEndPosition = '10%',
  baseScale = 1,
  rotationAmount = 0,
  useWindowScroll = false,
}) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const headerRef = useRef<HTMLElement | null>(null);
  const lastTransformsRef = useRef(new Map<number, any>());
  const isTickingRef = useRef(false);
  const stackCompletedRef = useRef(false);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeImageIndexRef = useRef(0);

  const mapRange = (value: number, low1: number, high1: number, low2: number, high2: number) => {
    return low2 + (high2 - low2) * (value - low1) / (high1 - low1);
  };

  const calculateProgress = useCallback((scrollTop: number, start: number, end: number) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value: string | number, containerHeight: number) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value as string);
  }, []);

  const getScrollData = useCallback(() => {
    if (useWindowScroll) {
      return {
        scrollTop: window.scrollY,
        containerHeight: window.innerHeight,
        scrollContainer: document.documentElement
      };
    } else {
      const scroller = scrollerRef.current;
      return {
        scrollTop: scroller!.scrollTop,
        containerHeight: scroller!.clientHeight,
        scrollContainer: scroller!
      };
    }
  }, [useWindowScroll]);

  const getElementOffset = useCallback(
    (element: HTMLElement) => {
      if (useWindowScroll) {
        const rect = element.getBoundingClientRect();
        return rect.top + window.scrollY;
      } else {
        return element.offsetTop;
      }
    },
    [useWindowScroll]
  );

  const updateBoxAnimations = (card: HTMLElement, pinProgress: number) => {
    const boxes = card.querySelectorAll<HTMLElement>('.stack-box');
    let completedBoxes = 0;
    const totalBoxes = boxes.length;
    
    boxes.forEach(box => {
        const index = parseInt(box.getAttribute('data-index') || '0');
        const side = box.getAttribute('data-side');
        
        const isLeft = side === 'left';
        
        // Full Left First, Then Right
        const sequenceIndex = isLeft ? index : (4 + index);
        
        const stepDelay = 0.1;
        const boxStart = sequenceIndex * stepDelay;

        const entranceDuration = 0.05;
        const shrinkDuration = 0.05;
        
        // 1. Entrance Phase
        let entranceProgress = (pinProgress - boxStart) / entranceDuration;
        entranceProgress = Math.max(0, Math.min(1, entranceProgress));

        // 2. Shrink Phase
        let shrinkProgress = (pinProgress - (boxStart + entranceDuration)) / shrinkDuration;
        shrinkProgress = Math.max(0, Math.min(1, shrinkProgress));

        if (shrinkProgress >= 1) {
            completedBoxes++;
        }

        // --- Apply Styles ---
        const startY = 800; 
        const currentY = startY * (1 - entranceProgress);
        const opacity = entranceProgress;
        
        // Height: 340px (Start) -> 80px (Even more compact when stacked on desktop)
        const currentHeight = mapRange(shrinkProgress, 0, 1, 340, 80);
        const currentRadius = mapRange(shrinkProgress, 0, 1, 30, 12);

        box.style.transform = `translate3d(0, ${currentY}px, 0)`;
        box.style.opacity = opacity.toString();
        box.style.height = `${currentHeight}px`;
        box.style.borderRadius = `${currentRadius}px`;

        // Fade out body text + tag containers as the box finishes stacking (keep header visible)
        const bodyWrapper = box.querySelector<HTMLElement>('.stack-box-body-wrapper');
        if (bodyWrapper) {
          const contentOpacity = 1 - shrinkProgress;
          bodyWrapper.style.opacity = contentOpacity.toString();
        }
    });

    // Check if all boxes are stacked
    const allBoxesStacked = completedBoxes >= totalBoxes;
    
    // Toggle scroll behavior based on stacking completion
    if (allBoxesStacked) {
        document.body.style.overflow = 'auto';
        if (scrollerRef.current) {
            scrollerRef.current.style.overflowY = 'visible';
        }
    } else {
        document.body.style.overflow = 'hidden';
        if (scrollerRef.current) {
            scrollerRef.current.style.overflowY = 'auto';
        }
    }

    const newIndex = Math.min(IMAGES.length - 1, completedBoxes);
    
    if (newIndex !== activeImageIndexRef.current) {
        activeImageIndexRef.current = newIndex;
        setActiveImageIndex(newIndex);
    }
  };

  const updateCardTransforms = useCallback(() => {
    const { scrollTop, containerHeight } = getScrollData();

    // On small screens, skip complex pinning/stacking and let everything scroll normally
    if (typeof window !== 'undefined' && window.innerWidth <= 600) {
      document.body.style.overflow = 'auto';
      if (scrollerRef.current) {
        scrollerRef.current.style.overflowY = 'auto';
      }
      return;
    }
    
    // --- 1. Header Animation (Fade & Shrink on Scroll) ---
    const header = headerRef.current;
    if (header) {
        // Disappear completely after 400px of scrolling
        const fadeDistance = 400;
        const scrollRatio = Math.min(scrollTop / fadeDistance, 1);
        
        const opacity = 1 - scrollRatio;
        const scale = 1 - (scrollRatio * 0.2); 
        // Parallax: Move down at half scroll speed so card overtakes it
        const translateY = scrollTop * 0.5; 

        if (opacity >= -0.1) { // slight buffer
            header.style.transform = `translate3d(0, ${translateY}px, 0) scale(${scale})`;
            header.style.opacity = Math.max(0, opacity).toString();
        }
    }

    // --- 2. Card Stack Animation ---
    if (!cardsRef.current.length) return;

    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const endElement = useWindowScroll
      ? (document.querySelector('.scroll-stack-end') as HTMLElement)
      : (scrollerRef.current?.querySelector('.scroll-stack-end') as HTMLElement);

    const endElementTop = endElement ? getElementOffset(endElement) : 0;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = getElementOffset(card);
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
      const pinEnd = endElementTop - containerHeight;

      let pinProgress = (scrollTop - pinStart) / (pinEnd - pinStart);
      pinProgress = Math.max(0, Math.min(1, pinProgress));

      updateBoxAnimations(card, pinProgress);

      const triggerStart = pinStart;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
      
      const targetScale = baseScale + i * itemScale;
      const scale = 1; 
      
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;
      const blur = 0;

      let translateY = 0;
      const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

      if (isPinned) {
        translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
      } else if (scrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
      }

      const newTransform = {
        translateY: translateY,
        scale: Math.round(scale * 1000) / 1000,
        rotation: Math.round(rotation * 100) / 100,
        blur: Math.round(blur * 100) / 100
      };

      const lastTransform = lastTransformsRef.current.get(i);
      
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.01 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001 ||
        Math.abs(lastTransform.rotation - newTransform.rotation) > 0.01;

      if (hasChanged) {
        const transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale}) rotate(${newTransform.rotation}deg)`;
        const filter = newTransform.blur > 0 ? `blur(${newTransform.blur}px)` : '';

        card.style.transform = transform;
        card.style.filter = filter;

        lastTransformsRef.current.set(i, newTransform);
      }
    });

    isTickingRef.current = false;
  }, [
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    baseScale,
    rotationAmount,
    useWindowScroll,
    calculateProgress,
    parsePercentage,
    getScrollData,
    getElementOffset
  ]);

  const handleScroll = useCallback(() => {
    if (!isTickingRef.current) {
      requestAnimationFrame(updateCardTransforms);
      isTickingRef.current = true;
    }
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller && !useWindowScroll) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller!.querySelectorAll('.scroll-stack-card')
    ) as HTMLElement[];

    cardsRef.current = cards;
    
    headerRef.current = useWindowScroll 
        ? document.querySelector('.scroll-stack-header') 
        : scroller!.querySelector('.scroll-stack-header');

    const transformsCache = lastTransformsRef.current;

    cards.forEach((card, i) => {
        if (i < cards.length - 1) {
            card.style.marginBottom = `${itemDistance}px`;
        }
    });

    // Set initial scroll behavior
    document.body.style.overflow = 'hidden';
    if (scroller) {
        scroller.style.overflowY = 'auto';
    }

    if (useWindowScroll) {
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
    } else {
        scroller?.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
    }

    updateCardTransforms();

    return () => {
      if (useWindowScroll) {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      } else {
        scroller?.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleScroll);
      }
      
      // Reset scroll behavior on unmount
      document.body.style.overflow = '';
      if (scroller) {
          scroller.style.overflowY = '';
      }
      
      stackCompletedRef.current = false;
      cardsRef.current = [];
      headerRef.current = null;
      transformsCache.clear();
      isTickingRef.current = false;
    };
  }, [updateCardTransforms, useWindowScroll, itemDistance, handleScroll]);

  const childrenWithProps = React.Children.map(children, child => {
    if (React.isValidElement(child)) {
      if (child.type === ScrollStackItem) {
          return React.cloneElement(child, {}, 
             React.Children.map(child.props.children, grandChild => {
                 if (React.isValidElement(grandChild)) {
                    return React.cloneElement(grandChild, { activeImageIndex } as any);
                 }
                 return grandChild;
             })
          );
      }
      return child;
    }
    return child;
  });

  return (
    <div id="scroll-stack-scroller" className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <style>{styles}</style>
      <div className="scroll-stack-inner">
        {childrenWithProps}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

// --- Main App Component ---

interface CardContentProps {
    activeImageIndex?: number;
}

const CardContent: React.FC<CardContentProps> = ({ activeImageIndex = 0 }) => {
  return (
    // 'relative' here acts as the container. 'overflow-visible' allows the stack boxes to be seen outside.
    <div className="h-full w-full relative flex flex-col justify-center items-center text-center">
        
        {/* --- 1. Background Image Wrapper --- */}
        {/* Absolute, inset-0 to fill the card completely. Z-0 to be behind everything. */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[40px]">
             <CardImageSlideshow activeIndex={activeImageIndex} />
        </div>

        {/* --- 2. Floating Elements (Stack Boxes) --- */}
        {/* These sit outside the card naturally due to absolute positioning relative to this container */}
        <div className="desktop-boxes-only">
          <BoxStack side="left" />
          <BoxStack side="right" />
        </div>

        {/* --- 3. Text Content --- */}
        {/* Absolute inset-0 so this wrapper matches the image area exactly */}
        <div className="absolute inset-0 z-30 flex flex-col items-center p-8 justify-center">


           
        </div>
    </div>
  );
};

export default function App() {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        fontFamily: '"Sora", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      
      <ScrollStack>
        {/* Header - Z-index 0, moves slower than scroll to be covered by card */}
        <div className="scroll-stack-header w-full text-center py-20 mb-10 flex flex-col items-center px-4">
          <h1 className="text-black text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            Everything You Need For our
          </h1>
          <h1 className="text-black text-4xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
            WhatsApp Marketing
          </h1>
          <div className="animate-bounce mt-4 text-slate-800 flex justify-center mobile-hide-arrow">
            <ArrowDown />
          </div>
          {/* Mobile-only stack of all 7 boxes directly under the heading */}
          <div className="mobile-boxes-only mt-4">
            <BoxStack side="left" />
            <BoxStack side="right" />
          </div>
        </div>

        <ScrollStackItem>
          <CardContent />
        </ScrollStackItem>

        <div style={{ height: '1000vh', width: '100%', pointerEvents: 'none' }} />

        <div className="text-slate-500 py-20 text-center opacity-70">
          
        </div>

      </ScrollStack>
    </div>
  );
}