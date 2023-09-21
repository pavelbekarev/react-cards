import { useState } from "react"
import './Card.css';
export function Card({front, back}) {
    const [checkCard, setCheckCard] = useState(false);
    const handleClick = () => {
        setCheckCard(!checkCard);
    }

    const className = `card ${checkCard ? 'card-check' : ''}`;

    return (
    <div>
        <div 
        className={className} 
        onClick={handleClick}
        data-back={back}
        >
            {front}
        </div>
    </div>
    );
}