import React from 'react';
import { Link } from 'react-router-dom';
import './ChapterCard.css';

const Card = ({ cartData }) => {
    return (
        <Link to={cartData.link} className="chapter-card-link">
            <div className="chapter-card">
                <img
                    src={cartData.image}
                    alt={cartData.title}
                    className="chapter-card-image"
                />
                <div className="chapter-card-content">
                    <h2 className="chapter-card-title">{cartData.title}</h2>
                    <p className="chapter-card-description">
                        {cartData.description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default Card;
