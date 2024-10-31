import React from "react";

interface PreviousProps {
    svgSize?: number;      // Optional prop for SVG size
    buttonSize?: number;   // Optional prop for button size
    onClick: () => void;   // Required prop for click handler
}

const Previous: React.FC<PreviousProps> = ({ svgSize = 24, buttonSize = 50, onClick }) => {
    return (
        <div
            className="button-control"
            onClick={onClick}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "5px solid #e0e0fe",
                backgroundColor: "white",
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
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-player-track-prev"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M21 5v14l-8 -7z" />
                <path d="M10 5v14l-8 -7z" />
            </svg>
        </div>
    );
};

export default Previous;
