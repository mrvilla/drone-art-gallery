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
  {
    id: 'venue-atmosphere',
    title: 'Entering the Venue',
    description: 'Through the venue and the setting that holds the exhibition.',
    coverSrc: '/expo-03-Cover.jpg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Entering the Venue',
    videoSrc: '/expo-03.mp4',
    duration: '1:42'
  },
];
