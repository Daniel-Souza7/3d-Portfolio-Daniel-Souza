import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState, useEffect, useRef } from "react";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
    const [showHint, setShowHint] = useState(false);
    const sectionRef = useRef(null);
    const hasTriggered = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    // Only trigger once when section becomes visible
                    if (entry.isIntersecting && !hasTriggered.current) {
                        hasTriggered.current = true;

                        // Show hint after 0.5 second delay
                        const showTimer = setTimeout(() => {
                            setShowHint(true);
                        }, 500);

                        // Hide hint after 4.5 seconds (0.5s delay + 4s display)
                        const hideTimer = setTimeout(() => {
                            setShowHint(false);
                        }, 5500);

                        return () => {
                            clearTimeout(showTimer);
                            clearTimeout(hideTimer);
                        };
                    }
                });
            },
            { threshold: 0.2 } // Trigger when 20% of section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    // Animate the tech cards in the skills section
    useGSAP(() => {
        gsap.fromTo(
            ".tech-card",
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.inOut",
                stagger: 0.1, // Reduced from 0.2 for better performance
                scrollTrigger: {
                    trigger: "#skills",
                    start: "top center",
                },
            }
        );

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    });

    return (
        <div id="skills" ref={sectionRef} className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Highlighted Skills"
                    sub="My Key Competences"
                />

                {/* Drag hint text */}
                {showHint && (
                    <div className="flex justify-center mt-4 mb-2">
                        <p className="text-white-50 text-sm md:text-base font-light animate-pulse">
                            Drag the icons
                        </p>
                    </div>
                )}

                <div className="tech-grid">
                    {techStackIcons.map((techStackIcon) => (
                        <div
                            key={techStackIcon.name}
                            className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
                        >
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIconCardExperience model={techStackIcon} />
                                </div>
                                <div className="padding-x w-full">
                                    <p>{techStackIcon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TechStack;