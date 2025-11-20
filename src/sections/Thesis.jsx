import TitleHeader from "../components/TitleHeader";

const Thesis = () => {
    const handleDocumentsClick = () => {
        // TODO: Replace with your thesis documents link
        window.open("https://linktr.ee/salvadorsouza", "_blank", "noopener,noreferrer");
    };

    const handleGameClick = () => {
        // TODO: Replace with your thesis game link
        window.open("https://linktr.ee/salvadorsouza", "_blank", "noopener,noreferrer");
    };

    return (
        <section
            id="thesis"
            className="flex-center md:mt-10 mt-5 section-padding xl:px-0"
        >
            <div className="w-full h-full md:px-20 px-5">
                <div className="max-w-7xl mx-auto">
                    {/* Title and Description */}
                    <TitleHeader
                        title="My Master's Thesis"
                        sub="Machine Learning for High-Dimensional Optimal Stopping in Finance"
                    />

                    <p className="text-white-50 text-base md:text-lg leading-relaxed max-w-4xl mx-auto text-center mt-6 mb-12">
                        Traditional methods fail when pricing high-dimensional derivatives.
                        My research explores ML-enhanced optimal stopping algorithms that price
                        complex financial instruments in seconds, scaling from 2 to 2000+ assets.
                    </p>

                    {/* Two Cards Grid */}
                    <div className="grid md:grid-cols-2 gap-6 mt-8">
                        {/* Thesis Documents Card */}
                        <div
                            onClick={handleDocumentsClick}
                            className="cursor-pointer card-border rounded-xl overflow-hidden hover:border-white-50 transition-all duration-300 group"
                        >
                            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
                                <img
                                    src="/images/thesis-documents.gif"
                                    alt="Thesis Documents"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                                    Thesis Documents
                                </h3>
                                <p className="text-white-50 text-sm md:text-base">
                                    Explore my research papers, methodology, and academic findings.
                                </p>
                                <div className="mt-4 text-white font-semibold inline-flex items-center gap-2">
                                    <span>View Documents</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </div>

                        {/* Thesis Game Card */}
                        <div
                            onClick={handleGameClick}
                            className="cursor-pointer card-border rounded-xl overflow-hidden hover:border-white-50 transition-all duration-300 group"
                        >
                            <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-green-900/20 to-blue-900/20">
                                <img
                                    src="/images/thesis-game.jpg"
                                    alt="Thesis Interactive Game"
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-white text-xl md:text-2xl font-bold mb-2">
                                    Interactive Game
                                </h3>
                                <p className="text-white-50 text-sm md:text-base">
                                    Try the interactive simulation demonstrating my thesis algorithms.
                                </p>
                                <div className="mt-4 text-white font-semibold inline-flex items-center gap-2">
                                    <span>Play Game</span>
                                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Thesis;