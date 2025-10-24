import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
    const sectionRef = useRef(null);
    const rydeRef = useRef(null);
    const libraryRef = useRef(null);
    const ycDirectoryRef = useRef(null);
    const project4Ref = useRef(null);
    const project5Ref = useRef(null);

    useGSAP(() => {
        // Animation for the main section
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 1.5 }
        );

        // Animations for each app showcase
        const cards = [
            rydeRef.current,
            libraryRef.current,
            ycDirectoryRef.current,
            project4Ref.current,
            project5Ref.current,
        ];

        cards.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50,
                    opacity: 0,
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8, // Reduced from 1
                    delay: 0.1 * (index + 1), // Reduced from 0.3
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    },
                }
            );
        });

        // Cleanup function
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    const handleProjectClick = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="w-full px-5 md:px-20 mb-12">
                    <div className="text-center mb-8">
                        <TitleHeader
                            title="Highlighted Projects"
                            sub="My Personal and Academic Work"/>
                    </div>
                    <p className="text-white-50 text-xl text-center">Click on the cards to visit the full project</p>
                </div>

                <div className="showcaselayout">
                    <div
                        ref={rydeRef}
                        className="first-project-wrapper cursor-pointer hover:opacity-90 transition-opacity"
                        onClick={() => handleProjectClick("https://monte-carlo-options-pricer-damp-wave-9845.fly.dev/")}
                    >
                        <div className="image-wrapper">
                            <img src="/images/project1.webp" alt="Ryde App Interface" loading="lazy" />
                        </div>
                        <div className="text-content">
                            <h2>
                                Monte Carlo Options Pricer (C++)
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                Interactive web app showcasing real-time option pricing with stochastic volatility and live Monte Carlo path visuals
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div
                            className="project cursor-pointer hover:opacity-90 transition-opacity"
                            ref={libraryRef}
                            onClick={() =>
                                handleProjectClick("https://black-scholes-lab.streamlit.app/")
                            }
                        >
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img
                                    src="/images/project21.webp"
                                    alt="Library Management Platform"
                                    loading="lazy"
                                />
                            </div>
                            <h2>Black–Scholes Pricing Lab</h2>
                        </div>

                        <div
                            className="project cursor-pointer hover:opacity-90 transition-opacity"
                            ref={ycDirectoryRef}
                            onClick={() =>
                                handleProjectClick("https://drive.google.com/file/d/1j6q8hXDWqyjqaQhiXxmSsHLdoRCe3BD7/view?usp=sharing")
                            }
                        >
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <img src="/images/project31.webp" alt="YC Directory App" loading="lazy" />
                            </div>
                            <h2>Time Series Project</h2>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div
                            className="project cursor-pointer hover:opacity-90 transition-opacity"
                            ref={project4Ref}
                            onClick={() => handleProjectClick("https://drive.google.com/file/d/1UbiTN9hZaRGxEeehgtFVmdHKpq5Z3jNc/view?usp=sharing")}
                        >
                            <div className="image-wrapper bg-[#E0F4FF]">
                                <img src="/images/project41.webp" alt="Project 4" loading="lazy" />
                            </div>
                            <h2>Risk Theory Project</h2>
                        </div>

                        <div
                            className="project cursor-pointer hover:opacity-90 transition-opacity"
                            ref={project5Ref}
                            onClick={() => handleProjectClick("https://drive.google.com/file/d/1ADEhQXvDmInCISJDcmJ5vcKVdOH_Lxwp/view?usp=sharing")}
                        >
                            <div className="image-wrapper bg-[#F0E7FF]">
                                <img src="/images/project51.webp" alt="Project 5" loading="lazy" />
                            </div>
                            <h2>Financial Series Project</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppShowcase;