# You Are Amazing 💖

A multi-page, uplifting web app designed to bring comfort and joy during difficult times.

## Features

- **Home Page**: Welcome page with inspirational quotes and virtual hug button
- **Positive Affirmations**: Page with cards to reveal uplifting messages (شایرانہ شاعری)
- **Feel-Good Photos**: Gallery of cute photos (Kwity Memories) with fullscreen view
- **Instagram Reels**: Watch and enjoy reels with a playlist sidebar to jump to any video
- **Breathing Exercise**: Interactive guided breathing exercise to help with anxiety
- **Mood Selector**: Express your feelings with cute kid gifs and receive personalized messages
- **Virtual Hugs**: Click for hugs with multiple funny animations and hearts
- **Navigation**: Easy sidebar navigation for mobile and desktop
- **Beautiful Animations**: Multiple transition effects and smooth animations throughout

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

## Page Structure

- `/` - Home page with quotes and hug button
- `/affirmations` - Affirmations page (शायराना شایری)
- `/photos` - Photo gallery (Kwity Memories)
- `/reels` - Instagram reels with playlist
- `/breathing` - Breathing exercise
- `/moods` - Mood selector with cute kid gifs

## Customization

### Adding More Quotes
Edit `src/components/QuoteSection.tsx` and add quotes to the `quotes` array.

### Adding More Affirmations
Edit `src/data/affirmations.ts` and add new affirmation objects with messages and gradients.

### Adding More Photos
Edit `src/data/photos.ts` and add new photo objects with image URLs, alt text, and titles.

### Customizing Instagram Reels
Edit `src/pages/ReelsPage.tsx` and add/modify the `reels` array with your Instagram URLs.

### Customizing Moods
Edit `src/data/moods.ts` to add new moods, change descriptions, customize messages and colors, or update the GIF URLs.

### Changing Button Animations
The hug button uses randomized animations: wiggle, spin-bounce, flip, and shake. Edit `src/components/HugButton.tsx` to customize.

### Changing Colors
The app uses warm, calming colors (pink, orange, yellow, teal). You can customize these in the component files or update the Tailwind config.

---

Made with love 💖
