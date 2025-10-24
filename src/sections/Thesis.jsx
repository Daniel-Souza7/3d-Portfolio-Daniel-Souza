const Thesis = () => {
    const handleThesisClick = () => {
        window.open("https://linktr.ee/salvadorsouza", "_blank", "noopener,noreferrer");
    };

    return (
        <section
            id="thesis"
            className="flex-center md:mt-10 mt-5 section-padding xl:px-0"
        >
            <div className="w-full h-full md:px-20 px-5">
                <div
                    onClick={handleThesisClick}
                    className="cursor-pointer hover:opacity-90 transition-opacity max-w-7xl mx-auto"
                >
                    {/* STATIC CARD - No animations */}
                    <div className="card-border rounded-xl p-6">
                        <div className="flex flex-col md:flex-row items-center gap-8 p-4">
                            {/* Icon/Image Side */}
                            <div className="flex-shrink-0 relative">
                                <div className="size-24 md:size-32 flex items-center justify-center">
                                    <img
                                        src="/images/thesis-icon.webp"
                                        alt="Thesis"
                                        className="w-[150%] h-[150%] object-contain"
                                        loading="lazy"
                                    />
                                </div>
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 text-center md:text-left">
                                <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
                                    My Master's Thesis
                                </h2>
                                <p className="text-white-50 text-sm md:text-base italic mb-4">
                                    "Machine Learning Approaches to High-Dimensional Optimal Stopping for Complex Products in Quantitative Finance"
                                </p>
                                <p className="text-white-50 text-lg md:text-xl leading-relaxed inline">
                                    Traditional methods fail when pricing high-dimensional derivatives, taking hours or becoming computationally impossible. Discover how ML-enhanced optimal stopping algorithms price complex financial instruments in seconds, scaling effortlessly from 2 to 2000 underlying assets without sacrificing accuracy.{" "}
                                    <span className="text-white font-semibold inline-flex items-center gap-1">
                                        <span>
                                            Check my progress →
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Thesis;