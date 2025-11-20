import React from 'react';

const Header = () => {
    return (
        <header className="frame">
            <h1 className="frame__title">On-Scroll 3D Carousel</h1>
            <nav className="frame__links">
                <a className="line" href="https://tympanus.net/codrops/?p=93330">Article</a>
                <a className="line" href="https://github.com/codrops/3DCarousel/">Code</a>
                <a className="line" href="https://tympanus.net/codrops/demos/">All demos</a>
            </nav>
            <nav className="frame__tags">
                <a className="line" href="https://tympanus.net/codrops/demos/?tag=3d">#3d</a>
                <a className="line" href="https://tympanus.net/codrops/demos/?tag=carousel">#carousel</a>
                <a className="line" href="https://tympanus.net/codrops/demos/?tag=page-transition">#page-transition</a>
            </nav>
            <div id="cdawrap" className="frame__sponsor">
                <a href="https://tympanus.net/codrops/2024/05/28/on-scroll-3d-carousel-with-gsap/">Focus on your clients, leave hosting config to Cloudways. <b>Get 50% OFF for 3 months + 50 Free Migrations.</b></a>
            </div>
        </header>
    );
};

export default Header;
