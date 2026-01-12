export type Highlight = {
  id: string;
  title: string;
  description: string;
  coverSrc: string;
  alt: string;
  videoSrc: string;
  duration: string;
};

export const highlights: Highlight[] = [
  // {
  //   id: 'opening-day',
  //   title: 'Opening Day Flyover',
  //   description: 'The venue from above, guests arriving, setup in motion',
  //   coverSrc: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   alt: 'Opening Day Flyover',
  //   videoSrc: '/expo-02.mp4',
  //   duration: '0:38'
  // },
  {
    id: 'artist-installations',
    title: 'Artist Installations',
    description: 'Immersive close-ups and movement around individual works',
    coverSrc: '/expo-02-Cover.jpg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Artist Installations',
    videoSrc: '/expo-02.mp4',
    duration: '2:13'
  },
  // {
  //   id: 'evening-atmosphere',
  //   title: 'Evening Atmosphere',
  //   description: 'Lights, water reflections, and music from Haus der Visionäre',
  //   coverSrc: 'https://images.pexels.com/photos/2306203/pexels-photo-2306203.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   alt: 'Evening Atmosphere',
  //   videoSrc: '/expo-02.mp4',
  //   duration: '0:38'
  // },
];
