import React from "react";

interface ScaleProps {
    svgSize?: number; // kích thước của svg
    buttonSize?: number; // kích thước của nút
    onClick: () => void; // hàm xử lý sự kiện click
}

const Minimize: React.FC<ScaleProps> = ({ svgSize = 24, buttonSize = 50, onClick }) => {
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
                strokeWidth="2" // Thay đổi stroke-width thành strokeWidth
                strokeLinecap="round" // Thay đổi stroke-linecap thành strokeLinecap
                strokeLinejoin="round" // Thay đổi stroke-linejoin thành strokeLinejoin
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrows-diagonal-minimize-2"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 10h-4v-4" />
                <path d="M20 4l-6 6" />
                <path d="M6 14h4v4" />
                <path d="M10 14l-6 6" />
            </svg>
        </div>
    );
};

export default Minimize;
