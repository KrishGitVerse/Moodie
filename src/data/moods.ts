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
    gifUrl: 'https://media1.tenor.com/m/-DCDj1JBwPUAAAAd/startamilchat-sanjay-chat.gif',
    description: 'Feeling joyful',
    color: 'text-yellow-500',
    bgGradient: 'from-yellow-100 to-orange-100',
    message: 'હસ beta હસ\n\n Nai toh Kaliya Hasayega'
  },
  {
    id: 'loved',
    name: 'Angry',
    gifUrl: 'https://media1.tenor.com/m/Srnj6pMFsPoAAAAC/angry-cute.gif',
    description: 'Feeling Angry',
    color: 'text-red-500',
    bgGradient: 'from-red-100 to-pink-100',
    message: 'Nakchadi Natkhat'
  },
  {
    id: 'calm',
    name: 'Calm',
    gifUrl: 'https://media.tenor.com/X4fMk1v6TH0AAAAi/calming-comfort.gif',
    description: 'Feeling peaceful',
    color: 'text-blue-500',
    bgGradient: 'from-blue-100 to-teal-100',
    message: 'Baby Calm Down, Calm Down.'
  },
  {
    id: 'hopeful',
    name: 'Laugh',
    gifUrl: 'https://media.tenor.com/Qz4yS-HKfSEAAAAi/hehehe-lol.gif',
    description: 'Laughing out Loud',
    color: 'text-purple-500',
    bgGradient: 'from-purple-100 to-pink-100',
    message: 'બસ લ્યા! હમના હસ્તા હસ્તા આંખ માથી પાની આય જસે'
  },
  {
    id: 'strong',
    name: 'Shy',
    gifUrl: 'https://media1.tenor.com/m/u4PxY9XSwH0AAAAC/baby-shy.gif',
    description: 'Feeling Sharmilu 😳',
    color: 'text-green-500',
    bgGradient: 'from-green-100 to-emerald-100',
    message: 'જો જો જો! છોકરુ શરમાઈ ગાયુ'
  },
  {
    id: 'grateful',
    name: 'Dance',
    gifUrl: 'https://media1.tenor.com/m/4bVS-ePkQykAAAAC/claire-dancing.gif',
    description: 'Dancing on the Floor',
    color: 'text-indigo-500',
    bgGradient: 'from-indigo-100 to-blue-100',
    message: 'નાચ મેરી જાન છોડકે સારે કિન્તુ પરંતુ'
  }
];
