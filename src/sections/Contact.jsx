import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
    const formRef = useRef(null);
    const sectionRef = useRef(null);
    const cvRef = useRef(null);
    const hasTriggered = useRef(false);
    const [loading, setLoading] = useState(false);
    const [showHint, setShowHint] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

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

                        // Hide hint after 5.5 seconds (0.5s delay + 5s display)
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); // Show loading state

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
            );

            // Reset form and stop loading
            setForm({ name: "", email: "", message: "" });
        } catch (error) {
            console.error("EmailJS Error:", error); // Optional: show toast
        } finally {
            setLoading(false); // Always stop loading, even on error
        }
    };

    const handleCVClick = () => {
        window.open("https://drive.google.com/file/d/1DRGZrb-Je-xt_JxVRxpy2tsFL35FgGvE/view?usp=sharing", "_blank", "noopener,noreferrer");
    };

    return (
        <section id="contact" ref={sectionRef} className="flex-center section-padding">
            <div className="w-full h-full md:px-10 px-5">
                <TitleHeader
                    title="Get in Touch – Let's Connect"
                    sub="Have questions or ideas? Let's talk!"
                />
                <div className="grid-12-cols mt-16">
                    <div className="xl:col-span-5">
                        <div className="flex-center card-border rounded-xl p-10">
                            <form
                                ref={formRef}
                                onSubmit={handleSubmit}
                                className="w-full flex flex-col gap-7"
                            >
                                <div>
                                    <label htmlFor="name">Your name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder="What's your name?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                        placeholder="What's your email address?"
                                        required
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        placeholder="How can I help you?"
                                        rows="5"
                                        required
                                    />
                                </div>

                                <button type="submit">
                                    <div className="cta-button group">
                                        <div className="bg-circle" />
                                        <p className="text">
                                            {loading ? "Sending..." : "Send Message"}
                                        </p>
                                        <div className="arrow-wrapper">
                                            <img src="/images/arrow-down.svg" alt="arrow" />
                                        </div>
                                    </div>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="xl:col-span-7 min-h-96">
                        <div className="relative bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
                            {/* Drag me text overlay */}
                            {showHint && (
                                <div className="absolute top-2 left-1/2 -translate-x-1/2 pointer-events-none z-10">
                                    <div className="text-white text-sm md:text-base font-light animate-pulse">
                                        Drag me
                                    </div>
                                </div>
                            )}
                            <ContactExperience />
                        </div>
                    </div>
                </div>

                {/* CV Card - Full Width */}
                <div
                    ref={cvRef}
                    className="mt-10 cursor-pointer hover:opacity-90 transition-all"
                    onClick={handleCVClick}
                >
                    <div className="card-border rounded-xl p-6 md:p-8 flex items-center justify-center">
                        <div className="flex items-center gap-4">
                            <h2 className="text-white text-lg md:text-2xl font-semibold text-center">
                                Click here to check my CV →
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;