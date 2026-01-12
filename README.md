# Drone Art Gallery

A modern, responsive web gallery showcasing aerial photography and video highlights from "The Ürban Art" exhibition at Haus der Visionäre.

## Features

- **Video Highlights**: Click any highlight card to play videos in a modal
- **Image Lightbox**: Click any gallery image to view in full-screen lightbox with navigation
- **Responsive Design**: Beautiful, modern UI that works on all devices
- **Clean Architecture**: Data-driven components with centralized data management

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Lucide React (icons)

## Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

This project is configured for Netlify deployment. The build command is `npm run build` and the publish directory is `dist`.

## Project Structure

```
src/
  ├── App.tsx           # Main application component
  ├── data/
  │   ├── gallery.ts    # Gallery images data
  │   └── highlights.ts  # Video highlights data
  └── main.tsx          # Application entry point
```

## Work in Progress

This project is actively being developed. Features and content may change.
