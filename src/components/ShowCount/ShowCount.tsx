import React from 'react';
import './ShowCount.scss';

interface ShowCountProps {
    currentPage: number;
    totalPages: number;
}

const ShowCount: React.FC<ShowCountProps> = ({ currentPage, totalPages }) => {
    return (
        <div className="show-count">
            {currentPage}/{totalPages}
        </div>
    );
};

export default ShowCount;
