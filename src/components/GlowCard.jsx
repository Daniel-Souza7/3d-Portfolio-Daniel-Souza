import { useRef, useState, useEffect } from "react";

const GlowCard = ({ card, index, children }) => {
    const cardRefs = useRef([]);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeout = useRef(null);
    const rafId = useRef(null);

    // Disable glow tracking while scrolling for better performance
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolling(true);

            // Clear previous timeout
            if (scrollTimeout.current) {
                clearTimeout(scrollTimeout.current);
            }

            // Re-enable glow after scrolling stops for 150ms
            scrollTimeout.current = setTimeout(() => {
                setIsScrolling(false);
            }, 150);
        };

        // Use passive listener for better scroll performance
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
        // Skip expensive calculations while scrolling
        if (isScrolling) return;

        // Use requestAnimationFrame for smoother updates
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
            className="card card-border rounded-xl p-10 mb-5 break-inside-avoid-column"
        >
            <div className="glow"></div>
            <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: 5 }, (_, i) => (
                    <img key={i} src="/images/star.png" alt="star" className="size-5" loading="lazy" />
                ))}
            </div>
            <div className="mb-5">
                <p className="text-white-50 text-lg">{card.review}</p>
            </div>
            {children}
        </div>
    );
};

export default GlowCard;