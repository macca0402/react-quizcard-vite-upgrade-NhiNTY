// YourComponent.tsx
import React from 'react';
import "./Progress.scss"

interface ProgressStudyProps {
    totalRecall: number | string;
    totalRemember: number | string;
    styleProgress ?: React.CSSProperties;
}

const ProgressStudy: React.FC<ProgressStudyProps> = ({ totalRecall, totalRemember,styleProgress }) => {
    return (
        <div className="wrapper" style={styleProgress}>
            <div className="box recall">
                {totalRecall}
            </div>
            <div className="box remember">
                {totalRemember}
            </div>
        </div>
    );
};

export default ProgressStudy;
