import { useRef, useState, useEffect } from "react";

const GlowCard2 = ({ card, index, children }) => {
    const cardRefs = useRef([]);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeout = useRef(null);
    const rafId = useRef(null);

    // Disable glow effect while scrolling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);

            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            scrollTimeout.current = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }
            if (rafId.current) {
                cancelAnimationFrame(rafId.current);
            }
        };
    }, []);

    const handleMouseMove = (index) => (e) => {
        // Skip if scrolling
        if (isScrolling) return;

        // Use requestAnimationFrame for smooth updates
        if (rafId.current) {
            cancelAnimationFrame(rafId.current);
        }

        rafId.current = requestAnimationFrame(() => {
            const card = cardRefs.current[index];
            if (!card) return;

            const rect = card.getBoundingClientRect();
            const mouseX = e.clientX - rect.left - rect.width / 2;
            const mouseY = e.clientY - rect.top - rect.height / 2;

            let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
            angle = (angle + 360) % 360;

            card.style.setProperty("--start", angle + 60);
        });
    };

    return (
        <div
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseMove={handleMouseMove(index)}
            className="card card-border timeline-card rounded-xl p-6"
        >
            <div className="glow"></div>
            {children}
        </div>
    );
};

export default GlowCard2;