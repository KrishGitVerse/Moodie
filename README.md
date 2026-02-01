# You Are Amazing 💖

A gentle, uplifting web app designed to bring comfort and joy during difficult times.

## Features

- **Positive Affirmations**: Click on cards to reveal uplifting messages
- **Inspirational Quotes**: Rotating quotes that change automatically every 8 seconds
- **Feel-Good Photos**: Gallery of cute photos (puppies, kittens, nature) with fullscreen view
- **Breathing Exercise**: An interactive guided breathing exercise to help with anxiety
- **Virtual Hugs**: Click the hug button to receive virtual hugs with animated hearts
- **Mood Selector**: Express your feelings with cute panda emojis and receive personalized messages
- **Beautiful Animations**: Smooth, calming animations throughout the app

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd <your-repo-name>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` folder.

## Deploying to GitHub Pages

1. Install the gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add these scripts to your `package.json`:
```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

3. Add the homepage field to `package.json`:
```json
"homepage": "https://<your-username>.github.io/<your-repo-name>"
```

4. Deploy:
```bash
npm run deploy
```

## Other Deployment Options

### Vercel
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy

### Netlify
1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Add new site from Git
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy

### Netlify Drop (Easiest - No Git Required)
1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop your `dist` folder
4. Done!

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Customization

### Adding More Quotes
Edit `src/components/QuoteSection.tsx` and add quotes to the `quotes` array.

### Adding More Affirmations
Edit `src/data/affirmations.ts` and add new affirmation objects with messages and gradients.

### Adding More Photos
Edit `src/data/photos.ts` and add new photo objects with image URLs, alt text, and titles.

### Customizing Moods
Edit `src/data/moods.ts` to add new moods, change descriptions, or customize messages and colors.

### Changing Colors
The app uses warm, calming colors (pink, orange, yellow, teal). You can customize these in the component files or update the Tailwind config.

---

Made with love 💖
