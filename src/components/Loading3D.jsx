const Loading3D = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-white-50/20 rounded-full"></div>
                    <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
                </div>
                <p className="text-white-50 text-sm">Loading 3D content...</p>
            </div>
        </div>
    );
};

export default Loading3D;
