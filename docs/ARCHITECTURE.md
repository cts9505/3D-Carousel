# Architecture & Implementation Details

This document outlines the technical architecture of the On-Scroll 3D Carousel React application.

## Component Structure

The application is structured around a main `App` component that manages the global state and GSAP animations.

### `App.jsx`
*   **Role**: Entry point and Animation Controller.
*   **Responsibilities**:
    *   Initializes GSAP plugins (ScrollTrigger, ScrollSmoother, etc.).
    *   Manages the loading state (preloading images).
    *   Contains the core animation logic (`createScrollAnimation`, `activatePreviewFromCarousel`, etc.) ported from the original vanilla JS.
    *   Renders the `Header`, `Carousel` list, and `Preview` list.

### `Header.jsx`
*   **Role**: Static UI Overlay.
*   **Responsibilities**:
    *   Displays the site title, navigation links, and sponsor information.
    *   Uses a CSS Grid layout to position elements in the four corners of the viewport.

### `Carousel.jsx`
*   **Role**: 3D Scene Container.
*   **Responsibilities**:
    *   Renders a single "scene" containing a 3D carousel.
    *   Maps over `carouselImages` to create the 3D cards.
    *   Accepts `data-radius` to control the size of the carousel.

### `Preview.jsx`
*   **Role**: Detail View.
*   **Responsibilities**:
    *   Renders the grid of images shown when a carousel title is clicked.
    *   Initially hidden and animated into view by GSAP.

## GSAP Integration

Integrating GSAP with React requires careful management of the component lifecycle to avoid memory leaks and double-initialization (especially with React Strict Mode).

*   **Initialization**: GSAP logic is initialized inside a `useEffect` hook in `App.jsx`.
*   **Cleanup**: The `useEffect` cleanup function kills all ScrollTrigger instances and the ScrollSmoother instance when the component unmounts.
*   **Selectors**: We use standard DOM query selectors (e.g., `.carousel`, `.scene`) scoped within the component logic, mimicking the original implementation for fidelity. In a pure React approach, `useRef` would be preferred for every element, but given the complexity of the ported animation logic, scoped selectors are a pragmatic choice here.

## Styling

*   **Tailwind CSS**: Used for utility classes and global layout.
*   **Custom CSS**: Complex 3D transforms and specific animation keyframes are maintained in `index.css` to ensure pixel-perfect replication of the original design.

## Data Management

*   **`data.js`**: Contains the static data for scenes, images, and titles. This separates content from presentation.
