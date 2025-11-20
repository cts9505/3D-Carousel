import React from 'react';

const Preview = ({ scene }) => {
    return (
        <div className="preview" id={scene.previewId}>
            <header className="preview__header">
                <h2 className="preview__title"><span>{scene.title}</span></h2>
                <button className="preview__close">Close ×</button>
            </header>
            <div className="grid">
                {scene.previewImages.map((item, i) => (
                    <figure aria-labelledby={`caption${scene.id}-${i}`} className="grid__item" role="img" key={i}>
                        <div className="grid__item-image" style={{ backgroundImage: `url(${item.src})` }}></div>
                        <figcaption className="grid__item-caption" id={`caption${scene.id}-${i}`}>
                            <h3 className="font-bold">{item.title}</h3>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </div>
    );
};

export default Preview;
