import { FaStar } from 'react-icons/fa';

interface StarMarkProps {
    initialMarked?: boolean;
    size?: number;
    action?: () => void;
}

const StarMark: React.FC<StarMarkProps> = ({ initialMarked = false, size = 18, action }) => {

    return (
        <FaStar
            size={size}
            color={initialMarked ? "gold" : "gray"}
            style={{ cursor: 'pointer' }}
            onClick={action}
        />
    );
};

export default StarMark;
