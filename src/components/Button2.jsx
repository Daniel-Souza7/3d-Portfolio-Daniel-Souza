/**
 * A reusable button component for general actions (no auto-scroll).
 * Accepts an onClick handler to perform custom actions.
 */

const Button2 = ({ text, className, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`${className ?? ""} cta-wrapper`}
        >
            <div className="cta-button group">
                <div className="bg-circle" />
                <p className="text">{text}</p>
                <div className="arrow-wrapper">
                    <img src="/images/arrow-down.svg" alt="arrow" />
                </div>
            </div>
        </button>
    );
};

export default Button2;