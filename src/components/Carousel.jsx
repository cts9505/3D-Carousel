import React from 'react';

const Carousel = ({ scene, index }) => {
    return (
        <div className="scene" data-radius={scene.radius}>
            <h2 className="scene__title font-bold" data-speed="0.7">
                <a href={`#${scene.previewId}`}>
                    <span>{scene.title}</span>
                </a>
            </h2>
            <div className="carousel">
                {scene.carouselImages.map((img, i) => (
                    <div className="carousel__cell" key={i}>
                        <div className="card" style={{ '--img': `url("${img}")` }}>
                            <div className="card__face card__face--front"></div>
                            <div className="card__face card__face--back"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
