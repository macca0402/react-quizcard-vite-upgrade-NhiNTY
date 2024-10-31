import React from "react";

interface RecallProps {
    svgSize?: number;      // Optional prop for SVG size
    buttonSize?: number;   // Optional prop for button size
    onClick: () => void;   // Required prop for click handler
}

const Recall: React.FC<RecallProps> = ({ svgSize = 24, buttonSize = 50, onClick }) => {

    return (
        <div
            className="button-control"
            onClick={onClick}
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderBottom: "5px solid #e73d3d",
                backgroundColor: "#f5b3b2",
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
                stroke="#e73d3d"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-x"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
            </svg>
        </div>
    );
};

export default Recall;
