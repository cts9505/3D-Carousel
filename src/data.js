export const scenes = [
    {
        id: 'scene-1',
        title: 'Haute Couture Nights — Paris',
        previewId: 'preview-1',
        carouselImages: ['/assets/img1.webp', '/assets/img2.webp', '/assets/img3.webp', '/assets/img4.webp'],
        previewImages: Array.from({ length: 12 }, (_, i) => ({
            src: `/assets/img${i + 1}.webp`,
            title: ['Kai Vega', 'Riven Juno', 'Lex Orion', 'Ash Kairos', 'Juno Sol', 'Soren Nyx', 'Quinn Axon', 'Zara Voss', 'Hale B.', 'Gundra Wex', 'Extra One', 'Extra Two'][i]
        })),
        radius: 500 // Default
    },
    {
        id: 'scene-2',
        title: 'Vogue Evolution — New York City',
        previewId: 'preview-2',
        carouselImages: ['/assets/img13.webp', '/assets/img14.webp', '/assets/img15.webp', '/assets/img16.webp'],
        previewImages: Array.from({ length: 12 }, (_, i) => ({
            src: `/assets/img${i + 13}.webp`,
            title: ['Arlo Quinn', 'Vera Kline', 'Juno Vale', 'Ember Dash', 'Rylee Voss', 'Harlow Nova', 'Blake Lune', 'Zephyr Kade', 'Indigo Rae', 'Kairo Jett', 'Extra One', 'Extra Two'][i]
        })),
        radius: 500
    },
    {
        id: 'scene-3',
        title: 'Glamour in the Desert — Dubai',
        previewId: 'preview-3',
        carouselImages: ['/assets/img25.webp', '/assets/img26.webp', '/assets/img27.webp', '/assets/img28.webp'],
        previewImages: Array.from({ length: 12 }, (_, i) => ({
            src: `/assets/img${i + 25}.webp`,
            title: ['Luca Raine', 'Rory Vale', 'Sable Zev', 'Ellis Nova', 'Wren Asher', 'Zane Sky', 'Rowan Juno', 'Fenix Blade', 'Alix Storm', 'Nova Ray', 'Extra One', 'Extra Two'][i]
        })),
        radius: 500
    },
    {
        id: 'scene-4',
        title: 'Chic Couture Runway — Milan',
        previewId: 'preview-4',
        carouselImages: ['/assets/img37.webp', '/assets/img38.webp', '/assets/img39.webp', '/assets/img40.webp'],
        previewImages: Array.from({ length: 12 }, (_, i) => ({
            src: `/assets/img${i + 37}.webp`,
            title: ['Aeris Flint', 'Jett Voss', 'Caius Storm', 'Mira Celeste', 'Liam Ashford', 'Vega Dawn', 'Orion Phoenix', 'Rex Solara', 'Elara Finch', 'Zoe Star', 'Extra One', 'Extra Two'][i]
        })),
        radius: 500
    },
    {
        id: 'scene-5',
        title: 'Style Showcase — London',
        previewId: 'preview-5',
        carouselImages: ['/assets/img49.webp', '/assets/img50.webp', '/assets/img51.webp', '/assets/img52.webp', '/assets/img53.webp', '/assets/img54.webp'],
        previewImages: Array.from({ length: 12 }, (_, i) => ({
            src: `/assets/img${i + 49}.webp`,
            title: ['Rylan Ash', 'Lyra Wren', 'Axel Orion', 'Nova Sky', 'Kael Dray', 'Vesper Quill', 'Lira Wilder', 'Indigo Raye', 'Juno Storm', 'Ollie Lune', 'Extra One', 'Extra Two'][i]
        })),
        radius: 650
    },
    {
        id: 'scene-6',
        title: 'Future Fashion Forward — Tokyo',
        previewId: 'preview-6',
        carouselImages: ['/assets/img61.webp', '/assets/img62.webp', '/assets/img63.webp', '/assets/img64.webp'],
        previewImages: Array.from({ length: 12 }, (_, i) => ({
            src: `/assets/img${i + 61}.webp`,
            title: ['Corin Blaize', 'Tess Kade', 'Juno Hale', 'Coral Vale', 'Ari Lennox', 'Ronan Aster', 'Arius Quill', 'Rex Ember', 'Vega Ashford', 'Finn Fenix', 'Extra One', 'Extra Two'][i]
        })),
        radius: 500
    }
];
