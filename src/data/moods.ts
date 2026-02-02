export interface Mood {
  id: string;
  name: string;
  gifUrl: string;
  description: string;
  color: string;
  bgGradient: string;
  message: string;
}

export const moods: Mood[] = [
  {
    id: 'happy',
    name: 'Happy',
    gifUrl: 'https://media.giphy.com/media/3ohzdKdb7g8N8dj6go/giphy.gif',
    description: 'Feeling joyful',
    color: 'text-yellow-500',
    bgGradient: 'from-yellow-100 to-orange-100',
    message: 'That\'s wonderful! Keep spreading that joy!'
  },
  {
    id: 'loved',
    name: 'Loved',
    gifUrl: 'https://media.giphy.com/media/xULW8MYkxAl0HjhSAg/giphy.gif',
    description: 'Feeling cherished',
    color: 'text-red-500',
    bgGradient: 'from-red-100 to-pink-100',
    message: 'You are so loved and appreciated!'
  },
  {
    id: 'calm',
    name: 'Calm',
    gifUrl: 'https://media.giphy.com/media/l3q2K5jinAlChoCLS/giphy.gif',
    description: 'Feeling peaceful',
    color: 'text-blue-500',
    bgGradient: 'from-blue-100 to-teal-100',
    message: 'Take a moment to breathe and relax.'
  },
  {
    id: 'hopeful',
    name: 'Hopeful',
    gifUrl: 'https://media.giphy.com/media/5xtDarqlsEW6F7F29Fl/giphy.gif',
    description: 'Feeling optimistic',
    color: 'text-purple-500',
    bgGradient: 'from-purple-100 to-pink-100',
    message: 'Things will get better. Believe in yourself!'
  },
  {
    id: 'strong',
    name: 'Strong',
    gifUrl: 'https://media.giphy.com/media/3o7TKSjRrsi4XeKcIw/giphy.gif',
    description: 'Feeling confident',
    color: 'text-green-500',
    bgGradient: 'from-green-100 to-emerald-100',
    message: 'You are stronger than you think!'
  },
  {
    id: 'grateful',
    name: 'Grateful',
    gifUrl: 'https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif',
    description: 'Feeling thankful',
    color: 'text-indigo-500',
    bgGradient: 'from-indigo-100 to-blue-100',
    message: 'Gratitude is the key to happiness.'
  }
];
