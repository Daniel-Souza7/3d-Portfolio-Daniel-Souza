import { Component } from "react";

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("3D Model Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full flex items-center justify-center p-8">
                    <div className="text-center">
                        <p className="text-white-50 text-lg mb-4">
                            Unable to load 3D content
                        </p>
                        <button
                            onClick={() => this.setState({ hasError: false })}
                            className="text-white underline hover:text-white-50"
                        >
                            Try again
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
