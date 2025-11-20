# On-Scroll 3D Carousel (React Version)

A pixel-perfect React port of the [Codrops On-Scroll 3D Carousel](https://tympanus.net/codrops/2024/05/28/on-scroll-3d-carousel-with-gsap/). This project features a stunning 3D carousel animation driven by scroll, implemented using React, Tailwind CSS, and GSAP.

![Preview](https://tympanus.net/codrops/wp-content/uploads/2025/05/scroll3dcarousel_featured_final-1536x1152.jpg)

## Features

*   **Scroll-Driven Animation**: Smooth 3D rotation and translation of carousel items based on scroll position.
*   **3D Carousel**: CSS 3D transforms used to create a realistic carousel effect.
*   **Page Transitions**: Seamless transitions between the carousel view and a detailed grid preview.
*   **Responsive Design**: Adapted for various screen sizes.
*   **Modern Tech Stack**: Built with React, Vite, and Tailwind CSS.

## Tech Stack

*   **Framework**: React 19
*   **Build Tool**: Vite 5
*   **Styling**: Tailwind CSS 3
*   **Animation**: GSAP (GreenSock Animation Platform)
    *   ScrollTrigger
    *   ScrollSmoother
    *   Flip (logic adapted)
    *   SplitText

## Installation

1.  Clone the repository (if applicable) or navigate to the project directory:
    ```bash
    cd react-version
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Build for production:
    ```bash
    npm run build
    ```

## Project Structure

*   `src/components`: React components (Header, Carousel, Preview).
*   `src/gsap`: (Note: GSAP plugins are loaded via script tags in `index.html` for compatibility).
*   `src/index.css`: Global styles and Tailwind directives.
*   `public/assets`: Images and static assets.

## Credits

*   Original Concept & Code: [Codrops](https://tympanus.net/codrops/)
*   Images: Generated with [Midjourney](https://midjourney.com)

## License

[MIT](LICENSE)
