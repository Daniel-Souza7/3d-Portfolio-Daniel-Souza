import { useEffect } from "react";

const Toast = ({ message, type = "success", onClose }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 4000);

        return () => clearTimeout(timer);
    }, [onClose]);

    const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";

    return (
        <div className="fixed top-5 right-5 z-50 animate-slideIn">
            <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]`}>
                <div className="flex-1">
                    <p className="font-semibold">{type === "success" ? "Success!" : "Error"}</p>
                    <p className="text-sm">{message}</p>
                </div>
                <button
                    onClick={onClose}
                    className="text-white hover:text-gray-200 text-xl font-bold"
                    aria-label="Close"
                >
                    ×
                </button>
            </div>
        </div>
    );
};

export default Toast;
