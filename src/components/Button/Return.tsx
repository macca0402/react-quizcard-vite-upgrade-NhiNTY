import React from "react";

interface NextProps {
    svgSize?: number; // Kích thước của svg
    buttonSize?: number; // Kích thước của nút
    onClick: () => void; // Hàm xử lý sự kiện click
}

const Next: React.FC<NextProps> = ({ svgSize = 24, buttonSize = 50, onClick }) => {
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-chevron-left"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M15 6l-6 6l6 6" />
            </svg>
        </div>
    );
};

export default Next;