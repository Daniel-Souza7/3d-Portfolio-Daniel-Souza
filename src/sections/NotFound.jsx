const NotFound = () => {
    const handleGoHome = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <section className="flex-center section-padding min-h-screen">
            <div className="flex flex-col items-center justify-center text-center px-5">
                <h1 className="text-white text-9xl md:text-[12rem] font-bold mb-4">
                    404
                </h1>
                <h2 className="text-white text-3xl md:text-5xl font-semibold mb-6">
                    Page Not Found
                </h2>
                <p className="text-white-50 text-lg md:text-xl mb-8 max-w-md">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <button
                    onClick={handleGoHome}
                    className="cta-button group"
                >
                    <div className="bg-circle" />
                    <p className="text">Go Home</p>
                    <div className="arrow-wrapper">
                        <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                </button>
            </div>
        </section>
    );
};

export default NotFound;
