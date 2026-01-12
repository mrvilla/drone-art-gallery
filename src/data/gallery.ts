export type GalleryImage = {
  src: string;
  alt: string;
};

// Centralized gallery images; update here to change the gallery quickly.
// NOTE: Files in Vite's `public` folder are served from the root (`/`), NOT `/public`.
// So a file at `public/DJI_0306-styled.jpg` is referenced as `/DJI_0306-styled.jpg`.
export const galleryImages: GalleryImage[] = [
  { src: '/DJI_0306-styled.jpg?auto=compress&cs=tinysrgb&w=1200', alt: 'Behind New Car View' },
  { src: '/DJI_0303-styled.jpg?auto=compress&cs=tinysrgb&w=1200', alt: 'Behind Entrance View' },
  { src: '/front-behind-corner-styled.jpg?auto=compress&cs=tinysrgb&w=1200', alt: 'Front Behind Corner View' },
  { src: '/front-side-view-styled.jpg?auto=compress&cs=tinysrgb&w=1200', alt: 'Front Side View' },
  { src: '/entrance-right-styled.jpg?auto=compress&cs=tinysrgb&w=1200', alt: 'Entrance Right View' },
  { src: '/entrance-styled.jpg?auto=compress&cs=tinysrgb&w=1200', alt: 'Entrance' },
];


