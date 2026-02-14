# Camp Moses Website

A modern, responsive website for Camp Moses, a Christian retreat center located in Tapaz, Capiz, Philippines.

## About Camp Moses

Camp Moses is a family camp and retreat center dedicated to facilitating life-changing experiences where people can encounter God, strengthen family bonds, and find renewal in the beauty of His creation. Nestled in the heart of Tapaz, Capiz, we provide a sacred space for worship, fellowship, and spiritual growth.

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Theme**: Next Themes (dark/light mode support)
- **Analytics**: Vercel Analytics

## Project Structure

```
camp-moses-website/
├── app/                    # Next.js app directory
│   ├── donate/            # Donation page
│   ├── gallery/           # Gallery pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable UI components
│   ├── ui/               # Radix UI components
│   └── ...               # Custom components
├── content/              # Content data (JSON files)
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── board/           # Board member photos
│   ├── events/          # Event photos and videos
│   ├── kubos/           # Accommodation photos
│   └── logo/            # Logo assets
└── styles/              # Additional styles
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm, pnpm, or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd camp-moses-website
```

2. Install dependencies:
```bash
npm install
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code quality

## Content Management

The website uses a JSON-based content management system. Content files are located in the `content/` directory:

- `home.json` - Homepage content including hero, mission, vision, and impact sections
- `donate.json` - Donation page content
- `contact.json` - Contact information
- `navigation.json` - Site navigation structure
- `timeline.json` - Camp history and timeline
- `directors.json` - Board members information
- `gallery.json` - Photo gallery content
- `kubos.json` - Accommodation information

To modify content, edit the corresponding JSON files in the `content/` directory.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Theme**: Automatic theme switching support
- **Image Gallery**: Photo and video galleries for events and accommodations
- **Interactive Timeline**: Historical timeline of Camp Moses
- **Donation System**: Integrated donation functionality
- **Newsletter Signup**: Community engagement features
- **SEO Optimized**: Meta tags and structured data
- **Performance**: Optimized with Next.js features

## Newsletter Signup (MailerLite)

The newsletter signup uses a server-side Next.js API route at `app/api/subscribe/route.ts` to keep the MailerLite API key secure.

### Local Development to Test Newsletter

Create a `.env.local` file with:

```bash
MAILERLITE_API_KEY=your_api_key_here
MAILERLITE_GROUP_ID=your_group_id_here
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Deployment

The website is designed to be deployed on Vercel, but can be deployed to any platform supporting Next.js applications.

### Vercel Deployment

1. Connect your repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
3. Deploy

## License

This project is private and proprietary.

## Author

**Francis Victa** - Project Developer

---

*Camp Moses - Discover Nature, Rediscover Your Soul*
