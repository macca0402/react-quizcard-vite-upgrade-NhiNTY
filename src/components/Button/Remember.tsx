import React from "react";

interface RememberProps {
    svgSize?: number;      // Optional prop for SVG size
    buttonSize?: number;   // Optional prop for button size
    onClick: () => void;   // Required prop for click handler
}

const Remember: React.FC<RememberProps> = ({ svgSize = 24, buttonSize = 50, onClick }) => {
    return (
        <div
            className="button-control"
            onClick={onClick}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "5px solid #0e22e9",
                backgroundColor: "#babefd",
                width: `${buttonSize}px`,
                height: `${buttonSize}px`,
                borderRadius: "15px",
                cursor: "pointer",
            }}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width={svgSize}
                height={svgSize}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0e22e9"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-check"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l5 5l10 -10" />
            </svg>
        </div>
    );
};

export default Remember;
