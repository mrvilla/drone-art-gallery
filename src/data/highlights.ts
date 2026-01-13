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
  {
    id: 'opening-day',
    title: '25 Artists. Haus der Visionäre.',
    description: 'A lateral movement showcasing the works of twenty-five artists at Haus der Visionäre.',
    coverSrc: '/expo-01-Cover.jpg?auto=compress&cs=tinysrgb&w=800',
    alt: '25 Artists. Haus der Visionäre.',
    videoSrc: '/expo-01.mp4',
    duration: '1:45'
  },
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
